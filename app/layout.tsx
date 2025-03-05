import { Montserrat } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import { ThemeProvider } from "@/providers/ThemeProvider"
import "./globals.css"
import type { Metadata } from "next"
import BackToTop from "@/components/BackToTop"
import Navbar from "@/components/Navbar"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Luxury Tirs | Luxury Timepieces",
  description: "Discover exceptional luxury timepieces with innovative design and premium craftsmanship",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Navbar />
            {children}
            <BackToTop />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}