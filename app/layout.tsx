import React from "react"
import type { Metadata } from "next"

import { LanguageProvider } from "@/components/language-provider"
import { assetPath } from "@/lib/marketing-config"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://vesti.rth3.xyz"),
  title: "Vesti — Local-first AI conversation memory",
  description:
    "Capture AI conversations across browsers, desktop apps, and terminals. Search, analyze, and reuse them locally.",
  icons: {
    icon: assetPath("/logo.svg"),
    shortcut: assetPath("/logo.svg"),
    apple: assetPath("/logo.svg"),
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
