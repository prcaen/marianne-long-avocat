import React from 'react'
import { motion } from 'framer-motion'

const ApproachSection: React.FC = () => {
  const differentiatingPoints = [
    {
      title: 'Vision 360°',
      description: 'Expérience unique côté client ET prestataire pour une compréhension globale des enjeux',
      icon: '👁️',
    },
    {
      title: 'Approche Pragmatique',
      description: 'Solutions juridiques adaptées aux réalités opérationnelles des projets IT',
      icon: '⚡',
    },
    {
      title: 'Accompagnement Stratégique',
      description: 'Au-delà du juridique : conseil stratégique pour optimiser vos projets',
      icon: '🎯',
    },
    {
      title: 'Accessibilité',
      description: 'Avocat moderne et accessible, sans barrière de communication',
      icon: '🤝',
    },
  ]

  return (
    <section className="py-20 px-4 bg-dark text-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              L'avocate qui comprend{' '}
              <span className="text-primary">les deux côtés</span>
            </h2>
            <p className="text-lg leading-relaxed text-light/90">
              Unique dans son positionnement, je combine une expertise juridique approfondie 
              avec une compréhension opérationnelle rare. Mon parcours chez Avanade m'a permis 
              de comprendre les enjeux des prestataires, complétant ainsi ma vision client.
            </p>
            <p className="text-lg leading-relaxed text-light/90">
              Cette double perspective me permet de proposer des solutions juridiques 
              pragmatiques et négociables, qui servent réellement vos objectifs business.
            </p>
          </motion.div>

          {/* Right Column - Differentiating Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {differentiatingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-light/10 backdrop-blur-sm rounded-xl p-6 border border-light/20 hover:bg-light/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{point.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-light mb-2">{point.title}</h3>
                    <p className="text-light/80">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-light/90 mb-6">
            Découvrez comment cette approche différenciante peut servir vos projets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discutons de votre projet
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApproachSection

