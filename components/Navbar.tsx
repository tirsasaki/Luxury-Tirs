"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  z-index: 100;
  background: ${props => props.theme.colors.black}dd;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &.scrolled {
    padding: 0.8rem 2rem;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  
  span {
    color: ${props => props.theme.colors.red};
  }
`

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.a)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.red};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.black};
  padding: 2rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <Nav className={isScrolled ? 'scrolled' : ''}>
      <NavContainer>
        <Logo href="#home">
          LUXURY<span>TIRS</span>
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink 
              key={item.href} 
              href={item.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween" }}
            >
              {navItems.map((item) => (
                <NavLink 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </NavLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  )
}
