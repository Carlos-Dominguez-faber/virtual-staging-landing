import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://virtualstaging.pro'
const siteName = 'Virtual Staging Pro'
const siteDescription = 'Transform empty rooms into stunning, fully-furnished spaces in seconds with AI-powered virtual staging. Increase buyer interest by 73% and sell properties faster.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - AI-Powered Virtual Staging for Real Estate`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'virtual staging',
    'AI staging',
    'real estate staging',
    'home staging',
    'property staging',
    'real estate photography',
    'interior design AI',
    'empty room staging',
    'virtual home staging',
    'staging software',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - AI-Powered Virtual Staging for Real Estate`,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Virtual Staging Pro - Transform Empty Rooms with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - AI-Powered Virtual Staging`,
    description: siteDescription,
    images: ['/og-image.png'],
    creator: '@virtualstaging',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
