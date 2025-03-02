"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
  background-color: ${(props) => (props.scrolled ? "rgba(0, 0, 0, 0.9)" : "transparent")};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
`

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
  
  span {
    color: ${(props) => props.theme.colors.white};
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.a)`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.red};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.darkGray};
  z-index: 200;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MobileLink = styled(motion.a)`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <Logo initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          LUXURY<span>TIRS</span>
        </Logo>

        <NavLinks>
          {["Home", "About", "Features", "Testimonials", "Contact"].map((link, index) => (
            <NavLink
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton onClick={toggleMobileMenu}>☰</MobileMenuButton>
      </NavContainer>

      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20 }}
        >
          <CloseButton onClick={toggleMobileMenu}>✕</CloseButton>
          {["Home", "About", "Features", "Testimonials", "Contact"].map((link, index) => (
            <MobileLink
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={toggleMobileMenu}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link}
            </MobileLink>
          ))}
        </MobileMenu>
      )}
    </>
  )
}

