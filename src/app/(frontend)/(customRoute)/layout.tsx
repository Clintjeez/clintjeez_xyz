'use client'
import React, { ReactNode } from 'react'

import '../globals.css'
import Navbar from '../components/Navbar'
import { UnderConstructionProvider } from '../components/UnderConstruction'

interface CustomLayoutProps {
  children: ReactNode
}

export default function CustomLayout({ children }: CustomLayoutProps) {
  return (
    <html lang="en">
      <body>
        <UnderConstructionProvider>
          <Navbar />
          <main>{children}</main>
        </UnderConstructionProvider>
      </body>
    </html>
  )
}
