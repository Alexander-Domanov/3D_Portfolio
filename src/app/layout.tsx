import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Header'
import React from 'react'

// const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Navbar/>
      <body>{children}</body>
    </html>
  )
}