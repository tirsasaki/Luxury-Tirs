"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    black: "#000000",
    red: "#FF0000",
    darkBlue: "#00008B",
    militaryGreen: "#4B5320",
    white: "#FFFFFF",
    darkGray: "#121212",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

