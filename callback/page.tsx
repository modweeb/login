'use client'
import { useLogto } from '@logto/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CallbackPage() {
  const { handleSignInCallback } = useLogto()
  const router = useRouter()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        await handleSignInCallback(window.location.href)
        router.push('/dashboard')
      } catch (error) {
        console.error(error)
        router.push('/')
      }
    }
    
    handleCallback()
  }, [handleSignInCallback, router])

  return <div>جاري المعالجة...</div>
}
