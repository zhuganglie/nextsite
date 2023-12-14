'use client'

import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

export const ButtonArea = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const user = session?.user

  const handleSignOut = () => {
    signOut()
    router.push('/login')
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly gap-2 mt-5">
      <button className=""><span className="font-bold">Account:</span> {user?.email}</button>
      <button
        className="text-gray-900 underline underline-offset-2 "
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  )
}

export default ButtonArea
