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

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`

const GitHubButton = styled(CTAButton)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }
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

        <ButtonContainer>
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
          
          <GitHubButton
            href="https://github.com/tirsasaki/Luxury-Tirs"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </GitHubButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  )
}

