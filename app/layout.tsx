import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Umutoniwase Doreen - Frontend Developer & UI/UX Designer",
  description:
    "Portfolio of Umutoniwase Doreen, showcasing expertise in Frontend Development and UI/UX Design with focus on accessible, elegant, and user-centered experiences.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
