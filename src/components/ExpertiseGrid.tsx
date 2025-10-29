import React from 'react'
import { motion } from 'framer-motion'

interface Expertise {
  title: string
  description: string
  icon: string
}

const expertiseAreas: Expertise[] = [
  {
    title: 'RGPD & Cybersécurité',
    description: 'Conformité, transferts internationaux, contrôles CNIL',
    icon: '🔒',
  },
  {
    title: 'Contrats IT Complexes',
    description: 'Négociation et rédaction de contrats IT sur mesure',
    icon: '📋',
  },
  {
    title: 'Due Diligence M&A/TSA',
    description: 'Audit juridique et accompagnement dans les opérations de fusion-acquisition',
    icon: '📊',
  },
  {
    title: 'IA Act',
    description: 'Accompagnement sur la réglementation européenne sur l\'intelligence artificielle',
    icon: '🤖',
  },
  {
    title: 'DORA',
    description: 'Conformité au règlement européen sur la résilience opérationnelle numérique',
    icon: '🛡️',
  },
  {
    title: 'Stratégie Data',
    description: 'Optimisation de la gestion et de la valorisation des données',
    icon: '💾',
  },
]

const ExpertiseGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-light">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Domaines d'<span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Expertise approfondie dans tous les domaines du droit numérique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((expertise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {expertise.title}
                </h3>
                <p className="text-neutral leading-relaxed">{expertise.description}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseGrid

