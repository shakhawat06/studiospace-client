import { Geist_Mono, Inter, Oxanium } from "next/font/google"

import "./globals.css"
import { Providers } from "@/components/theme-provider"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ToastContainer } from "react-toastify"
import { Navbar } from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { Navmenu } from "@/components/shared/Navmenu"

const oxaniumHeading = Oxanium({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        oxaniumHeading.variable
      )}
    >
      <body>
        <Providers>
          <Navbar />
          {/* <Navmenu /> */}
          <div className="">{children}</div>
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  )
}
