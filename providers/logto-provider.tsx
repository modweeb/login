'use client'
import { LogtoProvider, LogtoConfig } from '@logto/react'
import { useRouter } from 'next/navigation'

export const LogtoConfig: LogtoConfig = {
  endpoint: process.env.NEXT_PUBLIC_LOGTO_ENDPOINT!,
  appId: process.env.NEXT_PUBLIC_LOGTO_APP_ID!,
}

export function LogtoProviderWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  
  return (
    <LogtoProvider 
      config={LogtoConfig}
      onSignIn={() => router.push('/dashboard')}
      onSignOut={() => router.push('/')}
    >
      {children}
    </LogtoProvider>
  )
}
