"use client"

import styled from "styled-components"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Palette, Globe, Trophy } from "lucide-react"

const AboutSection = styled.section`
  min-height: 100vh;
  background: ${props => props.theme.colors.black};
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const ContentWrapper = styled(motion.div)`
  color: ${props => props.theme.colors.white};
`

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  
  span {
    color: ${props => props.theme.colors.red};
  }
`

const Description = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  max-width: 580px;

  @media (max-width: 968px) {
    font-size: 0.95rem;
    margin-left: auto;
    margin-right: auto;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 968px) {
    justify-content: center;
  }
`

const StatBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 2rem;
    color: ${props => props.theme.colors.red};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    opacity: 0.7;
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    border: 2px solid ${props => props.theme.colors.red};
    opacity: 0.1;
    border-radius: 15px;
  }
`

const IllustrationContainer = styled(motion.div)`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    height: 300px;
  }

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.1));
  }
`

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
`

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  
  svg {
    color: ${props => props.theme.colors.red};
  }
  
  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`

const Highlight = styled.span`
  color: ${props => props.theme.colors.red};
  font-weight: 700;
`

const SubHeading = styled(motion.h3)`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${props => props.theme.colors.red};
  margin-bottom: 1rem;
  opacity: 0.9;
`

const BrandingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const BrandingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  h4 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.white};
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    opacity: 0.7;
  }
`

export default function About() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const brandingPoints = [
    {
      title: "Design Innovation",
      description: "Creating unique digital experiences that leave lasting impressions."
    },
    {
      title: "Brand Strategy",
      description: "Building compelling narratives that connect with your audience."
    },
    {
      title: "Digital Solutions",
      description: "Implementing cutting-edge technology for future-ready platforms."
    }
  ]

  return (
    <AboutSection id="about">
      <Container>
        <Grid>
          <ContentWrapper
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SubHeading
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </SubHeading>
            
            <Title>
              Elevating <span>Digital Presence</span>
            </Title>

            <Description>
              At <Highlight>Luxury Tirs</Highlight>, we transform digital visions into extraordinary realities. Our passion lies in crafting distinctive experiences that capture attention and drive meaningful engagement.
            </Description>

            <BrandingGrid>
              {brandingPoints.map((point, index) => (
                <BrandingCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </BrandingCard>
              ))}
            </BrandingGrid>

            <FeatureList>
              {[
                { icon: <Code size={24} />, text: "Modern Development" },
                { icon: <Palette size={24} />, text: "Premium Design" },
                { icon: <Globe size={24} />, text: "Global Standards" },
                { icon: <Trophy size={24} />, text: "Award-Winning Work" }
              ].map((feature, index) => (
                <FeatureItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.icon}
                  <p>{feature.text}</p>
                </FeatureItem>
              ))}
            </FeatureList>

            <StatsGrid>
              {[
                { number: "100%", text: "Client Satisfaction" },
                { number: "50+", text: "Premium Projects" },
                { number: "24/7", text: "Support Service" },
                { number: "10+", text: "Industry Awards" }
              ].map((stat, index) => (
                <StatBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.text}</p>
                </StatBox>
              ))}
            </StatsGrid>
          </ContentWrapper>

          <ImageWrapper
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <IllustrationContainer>
              <motion.svg
                viewBox="0 0 400 400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Background Circle */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="rgba(255,0,0,0.1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Digital Elements */}
                <motion.path
                  d="M100,200 L300,200 M200,100 L200,300"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Ascending Steps */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.rect
                    key={i}
                    x={140 + i * 40}
                    y={250 - i * 30}
                    width="30"
                    height={30 + i * 30}
                    fill={`rgba(255,0,0,${0.1 + i * 0.1})`}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                  />
                ))}

                {/* Floating Icons */}
                <motion.g
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <circle cx="150" cy="150" r="15" fill="rgba(255,0,0,0.3)" />
                  <circle cx="250" cy="150" r="10" fill="rgba(0,0,139,0.3)" />
                  <rect x="190" y="130" width="20" height="20" fill="rgba(255,255,255,0.2)" transform="rotate(45 200 140)" />
                </motion.g>

                {/* Rising Arrow */}
                <motion.path
                  d="M200,220 L200,140 L170,170 M200,140 L230,170"
                  stroke="rgba(255,0,0,0.5)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.svg>
            </IllustrationContainer>
          </ImageWrapper>
        </Grid>
      </Container>
    </AboutSection>
  )
}

