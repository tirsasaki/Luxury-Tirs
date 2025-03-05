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
  grid-template-columns: 1fr 1fr;
  gap: 60px;
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
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.8;
  margin-bottom: 2rem;
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
    font-size: 2.5rem;
    color: ${props => props.theme.colors.red};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.7;
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid ${props => props.theme.colors.red};
    opacity: 0.1;
    border-radius: 20px;
  }
`

const Image = styled(motion.div)`
  width: 100%;
  height: 500px;
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.red}22,
    ${props => props.theme.colors.darkBlue}22
  );
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1)
    );
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
  padding: 25px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  h4 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: ${props => props.theme.colors.white};
  }

  p {
    font-size: 0.95rem;
    line-height: 1.7;
    opacity: 0.7;
  }
`

export default function About() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const brandingPoints = [
    {
      title: "Innovative Design",
      description: "Merging cutting-edge aesthetics with functional excellence to create unique digital experiences that stand out."
    },
    {
      title: "Strategic Vision",
      description: "Crafting compelling brand narratives that resonate with your audience and drive meaningful engagement."
    },
    {
      title: "Digital Excellence",
      description: "Leveraging advanced technologies to build powerful, future-proof digital solutions."
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
              Elevating Digital <span>Presence</span>
            </Title>

            <Description>
              At <Highlight>Luxury Tirs</Highlight>, we believe in transforming digital visions into extraordinary realities. Our mission is to craft distinctive digital experiences that capture attention, drive engagement, and create lasting impact in the digital landscape.
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
            <Image style={{ y }} />
          </ImageWrapper>
        </Grid>
      </Container>
    </AboutSection>
  )
}

