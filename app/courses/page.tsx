import Link from 'next/link'
import { getServerSession } from 'next-auth'
import React from 'react'
import NextAuthSessionProvider from "@/app/providers/sessionProvider"
import ButtonArea from '@/components/button'


const Courses = async () => {
  const session = await getServerSession()

  return (
    <article className="flex min-h-screen flex-col items-center">
      <h2>Courses</h2>
      {session?.user ? (
        <>
        {/* <div>Log in: {session?.user.name}</div> */}
         <NextAuthSessionProvider>
       <div>
        Here is the list of lessons.
       </div>
       <ButtonArea />
          </NextAuthSessionProvider> 
        </>
      ) : (
        <Link href="/login" className="underline underline-offset-2 m-8">Please click to log in</Link>
      )}
    </article>
  )
}

export default Courses
