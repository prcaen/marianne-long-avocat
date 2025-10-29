import React from 'react'
import { motion } from 'framer-motion'

interface TimelineItem {
  company: string
  duration: string
  role: string
  description: string
  highlights?: string[]
}

const timeline: TimelineItem[] = [
  {
    company: 'Bensoussan-Lexing',
    duration: '1 an',
    role: 'Avocat',
    description: 'Début de carrière dans un cabinet prestigieux spécialisé en droit numérique',
  },
  {
    company: 'Racine',
    duration: '3 ans',
    role: 'Avocat - Construction département IT/Data',
    description: 'Construction et développement du département IT/Data du cabinet',
    highlights: [
      'Mise en place de la structure départementale',
      'Développement de l\'expertise en contrats IT complexes',
    ],
  },
  {
    company: 'Aramis',
    duration: 'Renforcement négociation',
    role: 'Avocat',
    description: 'Renforcement des compétences en négociation de contrats complexes',
  },
  {
    company: 'Avanade',
    duration: '2 ans',
    role: 'Juriste - Vision client',
    description: 'Expérience unique côté prestataire, comprenant les enjeux clients',
    highlights: [
      'Vision opérationnelle des projets IT',
      'Compréhension des contraintes prestataires',
      'Négociation de contrats majeurs',
    ],
  },
]

const ProfessionalTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Parcours <span className="text-primary">Premium</span>
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Un parcours d'excellence dans les plus prestigieux cabinets et entreprises
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-light transform md:-translate-x-1/2 z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-light rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="text-primary font-semibold text-sm mb-1">
                          {item.duration}
                        </span>
                        <h3 className="text-2xl font-bold text-dark mb-2">{item.company}</h3>
                        <p className="text-accent font-medium mb-3">{item.role}</p>
                        <p className="text-neutral mb-3">{item.description}</p>
                        {item.highlights && (
                          <ul
                            className={`list-disc space-y-1 text-sm text-dark/70 ${
                              isEven ? 'md:text-right md:list-inside' : 'md:text-left'
                            }`}
                          >
                            {item.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-dark mb-8">Formations</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-light rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-primary mb-2">
                Master 2 Droit Numérique
              </h4>
              <p className="text-neutral">Université Paris II Panthéon-Assas</p>
            </div>
            <div className="bg-light rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-primary mb-2">
                Double Diplôme Droit International
              </h4>
              <p className="text-neutral">Maastricht University</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalTimeline

