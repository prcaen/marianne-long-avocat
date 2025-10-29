import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jean Dupont',
    role: 'Directeur IT',
    company: 'TechCorp',
    content: 'Marianne a su comprendre nos enjeux techniques et proposer des solutions juridiques adaptées. Son approche pragmatique a fait la différence.',
  },
  {
    id: 2,
    name: 'Sophie Martin',
    role: 'CEO',
    company: 'DataStartup',
    content: 'Excellent accompagnement sur notre conformité RGPD. Marianne a su allier expertise juridique et compréhension de notre business.',
  },
  {
    id: 3,
    name: 'Pierre Bernard',
    role: 'Directeur Juridique',
    company: 'BigTech',
    content: 'Sa double vision client/prestataire est unique. Elle a négocié nos contrats IT avec une compréhension rare des deux parties.',
  },
  {
    id: 4,
    name: 'Marie Leclerc',
    role: 'CFO',
    company: 'FinanceTech',
    content: 'Accompagnement remarquable sur notre due diligence. Marianne est rigoureuse, réactive et toujours orientée solution.',
  },
]

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-light">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Témoignages
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Ce que disent mes clients
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <div className="text-center max-w-3xl mx-auto">
                  {/* Quote Icon */}
                  <div className="text-6xl text-primary/30 mb-6">"</div>

                  {/* Testimonial Content */}
                  <p className="text-xl md:text-2xl text-dark/80 mb-8 leading-relaxed italic">
                    {testimonials[currentIndex].content}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                      {testimonials[currentIndex].name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-dark text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-neutral">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-dark hover:text-primary"
            aria-label="Témoignage précédent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-dark hover:text-primary"
            aria-label="Témoignage suivant"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-neutral/30 hover:bg-neutral/50'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel

