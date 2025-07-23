import { LogtoProviderWrapper } from '@/providers/logto-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LogtoProviderWrapper>
          {children}
        </LogtoProviderWrapper>
      </body>
    </html>
  )
}
