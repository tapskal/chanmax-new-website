import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Chanmax',
  description: 'Digital Solutions for Modern Businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}