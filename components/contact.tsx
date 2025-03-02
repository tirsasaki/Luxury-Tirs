"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const ContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.darkGray};
  position: relative;
  overflow: hidden;
`

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const SectionHeader = styled.div`
  margin-bottom: 60px;
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

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 500px;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
`

const ContactInfo = styled.div``

const ContactForm = styled(motion.form)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 8px;
`

const FormGroup = styled.div`
  margin-bottom: 25px;
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.8;
`

const FormInput = styled(motion.input)`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.red};
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const FormTextarea = styled(motion.textarea)`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.red};
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 30px;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #cc0000;
  }
`

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`

const ContactInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: ${(props) => props.theme.colors.red};
`

const ContactInfoContent = styled.div``

const ContactInfoTitle = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 5px;
`

const ContactInfoText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
`

const AccentShape = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.color};
  opacity: 0.05;
  z-index: 1;
`

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! Your message has been sent.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <ContactSection id="contact" ref={ref}>
      <AccentShape
        color="#00008B"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          bottom: "-150px",
          right: "-150px",
          filter: "blur(80px)",
        }}
      />

      <ContactContainer>
        <ContactInfo>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </SectionTitle>

            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Interested in working together? Contact us for consultation or inquiries.
            </SectionSubtitle>
          </SectionHeader>

          <ContactInfoItem
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactInfoIcon>
              <Mail size={24} />
            </ContactInfoIcon>

            <ContactInfoContent>
              <ContactInfoTitle>Email</ContactInfoTitle>
              <ContactInfoText>info@luxurytirs.com</ContactInfoText>
            </ContactInfoContent>
          </ContactInfoItem>

          <ContactInfoItem
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactInfoIcon>
              <Phone size={24} />
            </ContactInfoIcon>

            <ContactInfoContent>
              <ContactInfoTitle>Phone</ContactInfoTitle>
              <ContactInfoText>+62 123 4567 890</ContactInfoText>
            </ContactInfoContent>
          </ContactInfoItem>

          <ContactInfoItem
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContactInfoIcon>
              <MapPin size={24} />
            </ContactInfoIcon>

            <ContactInfoContent>
              <ContactInfoTitle>Location</ContactInfoTitle>
              <ContactInfoText>Jakarta, Indonesia</ContactInfoText>
            </ContactInfoContent>
          </ContactInfoItem>
        </ContactInfo>

        <ContactForm
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.01 }}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.01 }}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Message</FormLabel>
            <FormTextarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.01 }}
            />
          </FormGroup>

          <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message <Send size={18} />
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  )
}

