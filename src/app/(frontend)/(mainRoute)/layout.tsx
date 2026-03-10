import React from 'react'
import type { Metadata } from 'next'
import '../globals.css'
import Hero from '../components/Hero'
import ClientProvider from '../components/ClientProvider'
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
  keywords: [
    'Growth Engineer',
    'GTM Engineer',
    'SaaS Growth',
    'Lead Generation',
    'Product-Led Growth',
    'Sales Automation',
    'CRO',
    'SEO Automation',
    'AEO',
    'Custom Integrations',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Clinton James - Growth & GTM Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: '/clinton.png',
    apple: '/clinton.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="md:overflow-hidden">
        <ClientProvider>
          <div className="flex flex-col md:flex-row md:h-screen md:overflow-hidden lg:overflow-hidden pb-20 md:p-0  ">
            <Hero />
            <div className="md:w-[58%] overflow-visible md:overflow-scroll pb-5">{children}</div>
          </div>
        </ClientProvider>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e27dd799-42c5-48bd-8cbc-04965aa9595f"
        ></script>
      </body>
    </html>
  )
}
