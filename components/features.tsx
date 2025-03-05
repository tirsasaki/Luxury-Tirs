"use client"

import styled from "styled-components"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Rocket, Globe, Cpu, Zap } from "lucide-react"

const FeaturesSection = styled.section`
  background-color: ${(props) => props.theme.colors.darkGray};
  padding: 100px 0;
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 2;
`

const GlowingTitle = styled(motion.h2)`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
  
  span {
    background: linear-gradient(135deg, ${(props) => props.theme.colors.red}, ${(props) => props.theme.colors.darkBlue});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 40px 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const IconWrapper = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.red}22, ${(props) => props.theme.colors.darkBlue}22);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  isolation: isolate;

  svg {
    color: ${(props) => props.theme.colors.red};
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.red}, ${(props) => props.theme.colors.darkBlue});
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover:before {
    opacity: 0.2;
  }
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 15px;
`

const FeatureDescription = styled.p`
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  line-height: 1.6;
`

const GradientOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
`

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <Rocket size={28} />,
      title: "Digital Elevation",
      description: "Transform your digital presence with cutting-edge solutions that elevate your brand above the competition."
    },
    {
      icon: <Code size={28} />,
      title: "Modern Technology",
      description: "Leverage the latest technologies and frameworks to build scalable and future-proof digital experiences."
    },
    {
      icon: <Palette size={28} />,
      title: "Creative Design",
      description: "Create stunning visual experiences that capture attention and leave lasting impressions."
    },
    {
      icon: <Globe size={28} />,
      title: "Global Reach",
      description: "Expand your digital footprint with solutions that resonate with audiences worldwide."
    },
    {
      icon: <Cpu size={28} />,
      title: "Smart Solutions",
      description: "Implement intelligent features and automations that streamline your digital operations."
    },
    {
      icon: <Zap size={28} />,
      title: "Performance First",
      description: "Optimize every aspect of your digital presence for maximum speed and efficiency."
    }
  ]

  const iconAnimations = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 2,
          ease: "linear"
        }
      }
    }
  }

  return (
    <FeaturesSection ref={ref} id="features">
      <GradientOrb
        style={{
          background: `radial-gradient(circle, ${(props) => props.theme.colors.red}22 0%, transparent 70%)`,
          top: "0",
          right: "0",
          width: "500px",
          height: "500px",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <Container>
        <Header>
          <GlowingTitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Elevate Your <span>Digital Presence</span>
          </GlowingTitle>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover innovative solutions that transform your digital landscape and drive exceptional results
          </Subtitle>
        </Header>

        <Grid
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper
                initial="initial"
                whileHover="hover"
                variants={iconAnimations}
              >
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  )
}

