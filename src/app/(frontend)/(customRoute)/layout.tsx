import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '../components/Navbar'
import { UnderConstructionProvider } from '../components/UnderConstruction'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  TWITTER_HANDLE,
  OG_IMAGE_URL,
} from '../lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: 'Clinton James - Growth & GTM Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: '/clinton.png',
    apple: '/clinton.png',
  },
}

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
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e27dd799-42c5-48bd-8cbc-04965aa9595f"
        ></script>
      </body>
    </html>
  )
}
