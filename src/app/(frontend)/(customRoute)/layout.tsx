'use client'
import React, { ReactNode } from 'react'
import Resources from '../(mainRoute)/resources/page'
import '../globals.css'
import Navbar from '../components/Navbar'

interface CustomLayoutProps {
  children: ReactNode
}

export default function CustomLayout({ children }: CustomLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
