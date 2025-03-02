import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@autospace/ui/src/app/globals.css'
import { ApolloProvider } from '@autospace/network/src/config/apollo'
import { SessionProvider } from '@autospace/ui/src/components/molecules/SessionProvider'
import { Header } from '@autospace/ui/src/components/organisms/Header'
import { Container } from '@autospace/ui/src/components/atoms/Container'
import { MenuItem } from '@autospace/util/types'
import { ToastContainer } from '@autospace/ui/src/components/molecules/Toast'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Autospace',
  description: 'Search for parking slots here',
}

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/search' },
  { label: 'Bookings', href: '/bookings' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ApolloProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Header menuItems={MENUITEMS} />
            <Container>{children}</Container>
            <ToastContainer />
          </body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  )
}
