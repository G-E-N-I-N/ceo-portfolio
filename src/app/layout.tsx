
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"

import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ui/ScrollProgress"

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-code",
})

export const metadata: Metadata = {
  title: "l0rd_9h057 // Développeur de Solutions Logicielles",
  description: "Portfolio de Christian Roussel Voukeng, freelance spécialisé en développement de solutions logicielles modernes.",
  keywords: ["développeur", "freelance", "React", "Node.js", "Django", "Flask", "Python", "portfolio", "web", "mobile"],
  authors: [{ name: "l0rd_9h057" }],
  openGraph: {
    title: 'l0rd_9h057 - Développeur de Solutions Logicielles',
    description: 'Portfolio professionnel - Développeur Full-Stack & Mobile',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${firaCode.variable} font-mono bg-[var(--terminal-bg)] text-[var(--terminal-text)] antialiased min-h-screen`}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      >
        <Header />
        <ScrollProgress />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
