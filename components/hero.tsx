"use client"

import { useEffect, useRef } from "react"
import styled from "styled-components"
import { motion, useScroll, useTransform } from "framer-motion"

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.black};
  overflow: hidden;
  perspective: 1000px;
  
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

const GeometricBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: ${props => props.theme.colors.black};
  z-index: 0;
`

const GeometricPattern = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      217deg,
      rgba(255,0,0,.08),
      rgba(255,0,0,0) 70%
    ),
    linear-gradient(
      127deg,
      rgba(0,0,139,.08),
      rgba(0,0,139,0) 70%
    ),
    linear-gradient(
      336deg,
      rgba(0,0,0,.08),
      rgba(0,0,0,0) 70%
    );
`

const GeometricElement = styled(motion.div)<{ size: number; type: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);

  ${props => props.type === 'cube' && `
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(45deg);
    &::before, &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(255, 255, 255, 0.1);
    }
    &::before {
      transform: translateZ(${props.size}px);
    }
    &::after {
      transform: translateY(${props.size}px) rotateX(90deg);
    }
  `}

  ${props => props.type === 'circle' && `
    border-radius: 50%;
  `}

  ${props => props.type === 'triangle' && `
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  `}
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const GlowingTitle = styled(motion.h1)`
  font-size: 6rem;
  font-weight: 800;
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.white} 0%,
    ${props => props.theme.colors.red} 50%,
    ${props => props.theme.colors.white} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 3s linear infinite;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
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

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 25px;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`

const BaseButton = styled(motion.a)`
  position: relative;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 200px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.15);

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s ease;
  }

  &:hover:after {
    left: 100%;
  }
`

const GetStartedButton = styled(BaseButton)`
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.red} 0%,
    ${props => props.theme.colors.darkBlue} 100%
  );
  color: ${props => props.theme.colors.white};
  border: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 0, 0, 0.3);
  }
`

const GitHubButton = styled(BaseButton)`
  background: transparent;
  color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.white};
  backdrop-filter: blur(5px);

  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(360deg);
  }
`

const GeometricShape = styled(motion.div)<{ shape: 'circle' | 'triangle' | 'square' }>`
  position: absolute;
  opacity: 0.1;
  border: 2px solid ${props => props.theme.colors.red};
  z-index: 1;

  ${props => props.shape === 'circle' && `
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `}

  ${props => props.shape === 'triangle' && `
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 70px solid ${props.theme.colors.white};
    background: transparent;
    border-top: none;
  `}

  ${props => props.shape === 'square' && `
    width: 60px;
    height: 60px;
    transform: rotate(45deg);
  `}

  @media (max-width: 768px) {
    ${props => props.shape === 'circle' && `
      width: 50px;
      height: 50px;
    `}

    ${props => props.shape === 'triangle' && `
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 45px solid ${props.theme.colors.white};
    `}

    ${props => props.shape === 'square' && `
      width: 40px;
      height: 40px;
    `}
  }
`

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.8])
  const rotate = useTransform(scrollY, [0, 500], [0, 5])

  const geometricElements = Array.from({ length: 15 }).map((_, i) => ({
    type: ['cube', 'circle', 'triangle'][i % 3],
    size: Math.random() * 100 + 50,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100
    },
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2
  }));

  return (
    <HeroSection id="home">
      <GeometricBackground>
        <GeometricPattern
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {geometricElements.map((element, index) => (
          <GeometricElement
            key={index}
            size={element.size}
            type={element.type}
            style={{
              left: `${element.position.x}%`,
              top: `${element.position.y}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
              delay: element.delay
            }}
          />
        ))}
      </GeometricBackground>

      <HeroContent
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <GlowingTitle>
          Luxury<span>Tirs</span>
        </GlowingTitle>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: "1.5rem",
            color: "white",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            lineHeight: 1.6
          }}
        >
          Redefining the future of personal branding with innovative solutions
        </motion.p>

        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <GetStartedButton
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </GetStartedButton>

          <GitHubButton
            href="https://github.com/tirsasaki/Luxury-Tirs"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </GitHubButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  )
}

