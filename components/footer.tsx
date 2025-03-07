"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const FooterSection = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  padding: 60px 20px 30px;
  position: relative;
  overflow: hidden;
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`

const FooterColumn = styled.div``

const FooterLogo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
  
  span {
    color: ${(props) => props.theme.colors.red};
  }
`

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  margin-bottom: 20px;
  max-width: 300px;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.red};
    transform: translateY(-5px);
  }
`

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.red};
  }
`

const FooterLinks = styled.ul`
  list-style: none;
`

const FooterLink = styled.li`
  margin-bottom: 10px;
  
  a {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.white};
    opacity: 0.7;
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.colors.red};
      padding-left: 5px;
    }
  }
`

const Copyright = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  display: flex;
  align-items: center;
  gap: 4px;
  
  svg {
    color: ${props => props.theme.colors.red};
    margin: 0 4px;
    animation: pulse 1.5s ease infinite;
  }

  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.red};
    }
  }
`

const FooterButton = styled(motion.a)`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #cc0000;
  }
`

const DevelopedBy = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.white};
  opacity: 0.8;
  font-size: 0.9rem;
  margin-top: 2rem;
  
  svg {
    color: ${props => props.theme.colors.red};
    display: inline-block;
    margin: 0 4px;
    animation: pulse 1.5s ease infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`

export default function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterTop>
          <FooterColumn>
            <FooterLogo 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              LUXURY<span>TIRS</span>
            </FooterLogo>

            <FooterText>
              Redefining the future of personal branding with innovative solutions and futuristic designs.
            </FooterText>

            <SocialLinks>
              <SocialLink href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Facebook size={18} />
              </SocialLink>
              <SocialLink href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Twitter size={18} />
              </SocialLink>
              <SocialLink href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Linkedin size={18} />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#home">Home</a>
              </FooterLink>
              <FooterLink>
                <a href="#about">About</a>
              </FooterLink>
              <FooterLink>
                <a href="#features">Services</a>
              </FooterLink>
              <FooterLink>
                <a href="#testimonials">Testimonials</a>
              </FooterLink>
              <FooterLink>
                <a href="#contact">Contact</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#features">Web Development</a>
              </FooterLink>
              <FooterLink>
                <a href="#features">Brand Design</a>
              </FooterLink>
              <FooterLink>
                <a href="#features">Digital Marketing</a>
              </FooterLink>
              <FooterLink>
                <a href="#features">UX Design</a>
              </FooterLink>
              <FooterLink>
                <a href="#features">Content Creation</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="mailto:info@luxurytirs.com">info@luxurytirs.com</a>
              </FooterLink>
              <FooterLink>
                <a href="tel:+6212345678">+62 123 4567 890</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Jakarta, Indonesia</a>
              </FooterLink>
            </FooterLinks>

            <FooterButton href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get In Touch
            </FooterButton>
          </FooterColumn>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            &copy; {new Date().getFullYear()} Luxury Tirs. Developed with 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            by <a href="https://tirsasaki.web.id" target="_blank" rel="noopener noreferrer">Tirsasaki</a>
          </Copyright>

          <div>
            <a href="#" style={{ fontSize: "0.9rem", color: "white", opacity: 0.7, marginRight: "20px" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ fontSize: "0.9rem", color: "white", opacity: 0.7 }}>
              Terms of Service
            </a>
          </div>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  )
}

