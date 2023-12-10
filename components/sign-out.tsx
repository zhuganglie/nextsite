"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="text-stone-900 hover:text-stone-700 transition-all"
      onClick={() => signOut()}
    >
      Goddammit, sign me out!
    </button>
  );
}