import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactFormProps {
  onClose: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitted(false)
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-light rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-dark hover:text-primary transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">Message envoyé !</h3>
              <p className="text-neutral">Je vous répondrai dans les plus brefs délais.</p>
            </motion.div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-dark mb-6">Contactez-moi</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-neutral/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-neutral/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-neutral/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-neutral/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactForm

