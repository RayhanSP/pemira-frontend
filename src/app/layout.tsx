import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/modules/common/components/Navbar'
import { Toaster } from 'react-hot-toast'
import { GlobalProvider } from '@/modules/common/components/GlobalProvider'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Pemira CS UI',
  description: 'Pemilihan Raya Fasilkom UI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <GlobalProvider>
          <Navbar />
          {children}
          <Toaster />
        </GlobalProvider>
      </body>
    </html>
  )
}
