"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      // Implement your registration logic here
      // For example, you can call an API to create a new user
      // After successful registration, you can sign in the user
      signIn("email", { email, password });
    } else {
      signIn("email", { email, password });
    }
  };

  const handleRegister = () => {
    setIsRegister(true);
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const storeUserData = async (data) => {
    const response = await fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session?.user?.id,
        data,
      }),
    });

    if (!response.ok) {
      console.error("Failed to store user data");
    }
  };

  return (
    
    <div>
      {session ? (
        <div>
          <p>Signed in as {session.user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
          <input
            type="text"
            placeholder="Enter user data"
            onChange={(e) => storeUserData(e.target.value)}
          />
        </div>
        
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>{isRegister ? "Register" : "Sign In"}</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          {isRegister && (
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          )}
          <button type="submit">{isRegister ? "Register" : "Sign In"}</button>
          {!isRegister && (
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          )}
        </form>
      )}
     
    </div>

  );
}