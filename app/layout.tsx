import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crypto Newsletter Hub - AI-Powered Crypto Intelligence",
  description:
    "The world's first AI-powered cryptocurrency newsletter with intelligent news filtering and automated insights",
  generator: "v0.dev",
  openGraph: {
    title: "Crypto Newsletter Hub - AI-Powered Crypto Intelligence",
    description: "The world's first AI-powered cryptocurrency newsletter with intelligent news filtering and automated insights",
    url: "https://cryptonewsai.site",
    siteName: "Crypto Newsletter Hub",
    images: [
      {
        url: "https://cryptonewsai.site/placeholder-logo.png",
        width: 800,
        height: 600,
        alt: "Crypto Newsletter Hub Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Newsletter Hub - AI-Powered Crypto Intelligence",
    description: "The world's first AI-powered cryptocurrency newsletter with intelligent news filtering and automated insights",
    images: ["https://cryptonewsai.site/placeholder-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/placeholder-logo.png",
    shortcut: "/placeholder-logo.svg",
    apple: "/placeholder-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
