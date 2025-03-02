"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const AboutSection = styled.section`
  background-color: ${(props) => props.theme.colors.black};
  position: relative;
  overflow: hidden;
`

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const AboutContent = styled.div`
  position: relative;
  z-index: 2;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.red};
  }
`

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
`

const AboutImage = styled(motion.div)`
  position: relative;
  height: 500px;
  
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid ${(props) => props.theme.colors.militaryGreen};
    z-index: 1;
  }
  
  img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
`

const HighlightText = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-weight: 600;
`

const AccentShape = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  opacity: 0.1;
  border-radius: 50%;
  z-index: 1;
  filter: blur(60px);
`

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <AboutSection id="about" ref={ref}>
      <AccentShape
        style={{ top: "20%", right: "10%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <AccentShape
        style={{ bottom: "10%", left: "5%" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <AboutContainer>
        <AboutContent>
          <SectionTitle
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            About Luxury Tirs
          </SectionTitle>

          <AboutText
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Luxury Tirs is a <HighlightText>personal brand</HighlightText> focused on innovation and 
            futuristic design. We combine cutting-edge technology with stunning aesthetics to create 
            unforgettable experiences.
          </AboutText>

          <AboutText
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            With expertise in <HighlightText>digital design</HighlightText>,{" "}
            <HighlightText>branding strategy</HighlightText>, and <HighlightText>web development</HighlightText>,
            we help our clients stand out in the competitive digital world. Our vision is to create 
            strong and memorable identities that reflect your values and aspirations.
          </AboutText>

          <AboutText
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We believe that powerful personal branding is a blend of{" "}
            <HighlightText>authenticity</HighlightText> and <HighlightText>innovation</HighlightText>. 
            With Luxury Tirs, you'll discover a digital identity that truly reflects your essence.
          </AboutText>
        </AboutContent>

        <AboutImage
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <img src="images/alexander-andrews-anUOLC3zMD4-unsplash.jpg?height=500&width=400" alt="Luxury Tirs" />
        </AboutImage>
      </AboutContainer>
    </AboutSection>
  )
}

