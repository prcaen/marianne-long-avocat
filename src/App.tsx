import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import ExpertiseGrid from './components/ExpertiseGrid'
import ApproachSection from './components/ApproachSection'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import Footer from './components/Footer'
import LegalMentions from './components/LegalMentions'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ExpertiseGrid />
      <ApproachSection />
      <TestimonialsCarousel />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

