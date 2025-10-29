import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LegalMentions: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-light to-primary/10 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-dark hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            <span>Retour</span>
          </button>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
              Mentions <span className="text-primary">Légales</span>
            </h1>

            <div className="space-y-8 text-dark/80 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">Éditrice et Directrice de la publication</h2>
                <p className="text-lg">
                  <strong>Marianne Long</strong>
                </p>
                <p className="mt-2">
                  Avocat IT / Data / IA / Cybersécurité
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">Hébergeur</h2>
                <p className="text-lg">
                  <strong>GitHub, Inc.</strong>
                </p>
                <p className="mt-2">
                  88 Colin P Kelly Jr St<br />
                  San Francisco, CA 94107<br />
                  États-Unis
                </p>
                <p className="mt-4">
                  Site web : <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://github.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">Contact</h2>
                <p className="text-lg">
                  Pour toute question concernant ce site, vous pouvez me contacter à l'adresse suivante :
                </p>
                <p className="mt-2">
                  Email : <a 
                    href="mailto:mrnne.long@gmail.com"
                    className="text-primary hover:underline"
                  >
                    mrnne.long@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LegalMentions

