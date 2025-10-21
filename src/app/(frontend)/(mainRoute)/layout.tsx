import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Hero from '../components/Hero'

export const metadata: Metadata = {
  title: 'Clinton James',
  description: 'Software Engineer | Web3 Engineer ',
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="md:overflow-hidden">
        <div className="flex flex-col md:flex-row md:h-screen md:overflow-hidden lg:overflow-hidden pb-20 md:p-0  ">
          <Hero />
          <div className="md:w-[50%] overflow-hidden md:overflow-scroll pb-5">{children}</div>
        </div>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e27dd799-42c5-48bd-8cbc-04965aa9595f"
        ></script>
      </body>
    </html>
  )
}
