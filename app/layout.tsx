import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as ToasterHot } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'E-Commerce Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ModalProvider />
          {children}
          <Toaster />
          <ToasterHot />
        </body>
      </html>
    </ClerkProvider>
  )
}
