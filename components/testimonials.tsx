"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TestimonialsSection = styled.section`
  background-color: ${(props) => props.theme.colors.black};
  position: relative;
  overflow: hidden;
`

const TestimonialsContainer = styled.div`
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

const TestimonialsSlider = styled.div`
  position: relative;
  padding: 0 60px;
  
  @media (max-width: 768px) {
    padding: 0 40px;
  }
`

const TestimonialCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 8px;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`

const QuoteIcon = styled.div`
  position: absolute;
  top: -20px;
  left: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
`

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.white};
  font-style: italic;
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const AuthorInfo = styled.div``

const AuthorName = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 5px;
`

const AuthorPosition = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
`

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
`

const SliderButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.red};
  }
`

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`

const SliderDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? props.theme.colors.red : "rgba(255, 255, 255, 0.2)")};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.active ? props.theme.colors.red : "rgba(255, 255, 255, 0.4)")};
  }
`

const testimonials = [
  {
    text: "Luxury Tirs has helped me build a strong and consistent brand identity. Their futuristic approach truly makes me stand out in my industry.",
    name: "Sarah Johnson",
    position: "CEO, TechVision",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    text: "Working with Luxury Tirs has been an extraordinary experience. They not only understood my vision but elevated it to a completely new level with their stunning futuristic designs.",
    name: "Michael Chen",
    position: "Creative Director, Innovate Studios",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    text: "I'm thoroughly impressed with the professionalism and creativity of the Luxury Tirs team. They successfully created a brand identity that truly reflects my values and aspirations.",
    name: "Amanda Rodriguez",
    position: "Founder, NextGen Solutions",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  return (
    <TestimonialsSection id="testimonials" ref={ref}>
      <TestimonialsContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Client Testimonials
          </SectionTitle>

          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What our clients say about our luxury timepiece collection
          </SectionSubtitle>
        </SectionHeader>

        <TestimonialsSlider>
          <TestimonialCard
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <QuoteIcon>
              <Quote size={24} />
            </QuoteIcon>

            <TestimonialText>{testimonials[currentTestimonial].text}</TestimonialText>

            <TestimonialAuthor>
              <AuthorImage>
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                />
              </AuthorImage>

              <AuthorInfo>
                <AuthorName>{testimonials[currentTestimonial].name}</AuthorName>
                <AuthorPosition>{testimonials[currentTestimonial].position}</AuthorPosition>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>

          <SliderControls>
            <SliderButton onClick={prevTestimonial}>
              <ChevronLeft size={24} />
            </SliderButton>

            <SliderButton onClick={nextTestimonial}>
              <ChevronRight size={24} />
            </SliderButton>
          </SliderControls>

          <SliderDots>
            {testimonials.map((_, index) => (
              <SliderDot key={index} active={index === currentTestimonial} onClick={() => goToTestimonial(index)} />
            ))}
          </SliderDots>
        </TestimonialsSlider>
      </TestimonialsContainer>
    </TestimonialsSection>
  )
}

