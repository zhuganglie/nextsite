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
    <div className="w-full flex justify-evenly mt-5">
      <button >{user?.email} Page</button>
      <button
        className="border-red-500 text-red-500"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  )
}

export default ButtonArea
