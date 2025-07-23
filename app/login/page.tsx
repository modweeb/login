'use client'
import { useLogto } from '@logto/react'
import { Button } from '@/components/ui/button' // سيتم إضافته لاحقاً

export default function LoginPage() {
  const { signIn } = useLogto()
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">تسجيل الدخول</h1>
      <Button
        onClick={() => signIn(window.location.origin + '/callback')}
        className="px-6 py-3 text-lg"
      >
        تسجيل الدخول
      </Button>
    </div>
  )
}
