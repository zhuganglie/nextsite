"use client"

import { useSession, signIn, signOut } from "next-auth/react";

export default function Lessons(){
    const { data: session } = useSession()

    if (session){
        return(
           <>
          
            <h2>Lessons</h2>
            <button onClick={() => signOut()} className="border rounded bg-slate-900 text-white min-w-max p-2.5">Sign out</button>
           </>
        )
    } else {
        return(
            <>
            <p className="font-bold">You are not allowed to view this page!</p>
            <button onClick={() => signIn()} className="border rounded bg-slate-900 text-white min-w-max p-2.5">Sign in</button>
            </>
        )
    }
  
}