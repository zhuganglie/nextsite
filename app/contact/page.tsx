"use client"

import { useSession, signIn, signOut } from "next-auth/react";

export default function Contact(){
    const { data: session } = useSession()

    if (session){
        return(
           <>
          
            <h2>Contact</h2>
            <button onClick={() => signOut()} className="border rounded border-slate-900 min-w-max p-1.5">Sign out</button>
           </>
        )
    } else {
        return(
            <>
            <p className="font-bold">You're not allowed to view this page!</p>
            <button onClick={() => signIn()} className="border rounded border-slate-900 min-w-max p-1.5">Sign in</button>
            </>
        )
    }
  
}