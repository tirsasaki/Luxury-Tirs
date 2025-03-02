"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.black};
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 0, 139, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: 1;
  }
`

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 1;
  opacity: 0.3;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 4px;
  
  span {
    color: ${(props) => props.theme.colors.red};
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 15px 40px;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover:before {
    left: 100%;
  }
`

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px solid ${(props) => props.color};
  opacity: 0.2;
  z-index: 1;
`

export default function Hero() {
  return (
    <HeroSection id="home">
      <GridOverlay />

      <FloatingShape
        color="#FF0000"
        initial={{ x: -100, y: -100, rotate: 0 }}
        animate={{
          x: [-100, 50, -100],
          y: [-100, 50, -100],
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ top: "20%", left: "10%" }}
      />

      <FloatingShape
        color="#00008B"
        initial={{ x: 100, y: 100, rotate: 0 }}
        animate={{
          x: [100, -50, 100],
          y: [100, -50, 100],
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ bottom: "20%", right: "10%", borderRadius: "50%" }}
      />

      <HeroContent>
        <HeroTitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          LUXURY<span>TIRS</span>
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Redefining the future of personal branding with innovative solutions
        </HeroSubtitle>

        <CTAButton
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Call Me
        </CTAButton>
      </HeroContent>
    </HeroSection>
  )
}

