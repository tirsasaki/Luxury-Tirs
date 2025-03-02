"use client"

import styled from "styled-components"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Watch, Clock, Diamond, Shield, Award, Star } from "lucide-react" // Changed Certificate to Star

const FeaturesSection = styled.section`
  background-color: ${(props) => props.theme.colors.darkGray};
  position: relative;
  overflow: hidden;
`

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
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
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.red};
  }
`

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background-color: ${(props) => props.theme.colors.red};
    transition: height 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    
    &:before {
      height: 100%;
    }
  }
`

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.red};
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.white};
`

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
`

const AccentShape = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.color};
  opacity: 0.05;
  z-index: 1;
`

const features = [
  {
    icon: <Watch size={28} />,
    title: "Premium Craftsmanship",
    description:
      "Expertly crafted timepieces with meticulous attention to detail and superior quality materials.",
  },
  {
    icon: <Clock size={28} />,
    title: "Swiss Movement",
    description: "Precision-engineered Swiss movements ensuring accurate and reliable timekeeping.",
  },
  {
    icon: <Diamond size={28} />,
    title: "Luxury Materials",
    description:
      "Premium materials including surgical-grade stainless steel, sapphire crystal, and genuine leather.",
  },
  {
    icon: <Shield size={28} />,
    title: "Limited Editions",
    description: "Exclusive limited-edition collections featuring unique designs and rare complications.",
  },
  {
    icon: <Award size={28} />,
    title: "Heritage Design",
    description: "Timeless designs that blend traditional watchmaking with contemporary aesthetics.",
  },
  {
    icon: <Star size={28} />, // Changed from Certificate to Star
    title: "Warranty Service",
    description:
      "Comprehensive warranty coverage and professional maintenance services for lasting performance.",
  },
]

const Features: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <FeaturesSection id="features" ref={ref}>
      <AccentShape
        color="#00008B"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          top: "-200px",
          right: "-200px",
          filter: "blur(100px)",
        }}
      />

      <AccentShape
        color="#4B5320"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          bottom: "-150px",
          left: "-150px",
          filter: "blur(80px)",
        }}
      />

      <FeaturesContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Our Collection Features
          </SectionTitle>

          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the exceptional qualities that make our timepieces truly remarkable
          </SectionSubtitle>
        </SectionHeader>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index} variants={itemVariants}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </motion.div>
      </FeaturesContainer>
    </FeaturesSection>
  )
}

export default Features

