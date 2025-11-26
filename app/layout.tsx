import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Riftbound Counter",
  description: "Counter for RiftBound Scoring",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/rbicon.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/rbicon.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/rbicon.jpg",
        type: "image/jpg",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
