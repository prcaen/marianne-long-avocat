import React from 'react'
import Hero from './components/Hero'
import ExpertiseGrid from './components/ExpertiseGrid'
import ApproachSection from './components/ApproachSection'
import TestimonialsCarousel from './components/TestimonialsCarousel'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExpertiseGrid />
      <ApproachSection />
      <TestimonialsCarousel />
    </div>
  )
}

export default App

