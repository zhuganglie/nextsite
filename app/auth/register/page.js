'use client'
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Register() {
  const [email, setEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // Implement your registration logic here
    // For example, you can call an API to create a new user
    // After successful registration, you can sign in the user
    signIn("email", { email });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}