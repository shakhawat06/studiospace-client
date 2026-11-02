import LoginForm from '@/components/auth/Login'
import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-background px-4 py-10">
      <LoginForm />
    </main>
  )
}

export default page
