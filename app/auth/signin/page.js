'use client'
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        signIn("email", { email: e.target.email.value });
      }}>
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}