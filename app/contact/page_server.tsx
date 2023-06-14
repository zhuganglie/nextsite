import { authOptions } from "../options";
import React from 'react';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Contact() {
  const session = await getServerSession(authOptions);

  if(!session){
    redirect("api/auth/signin")
  }

  return (
      <main>
        <h2>Contact</h2>
       
      </main>
  );
};


