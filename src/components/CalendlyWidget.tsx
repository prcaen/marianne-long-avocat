import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CalendlyWidgetProps {
  onClose: () => void
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ onClose }) => {
  // Replace 'YOUR_CALENDLY_USERNAME' with actual Calendly username/event
  const calendlyUrl = 'https://calendly.com/YOUR_CALENDLY_USERNAME'

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
          className="bg-light rounded-2xl shadow-2xl max-w-4xl w-full h-[90vh] relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 text-dark hover:text-primary transition-colors shadow-lg"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="h-full w-full">
            <iframe
              src={calendlyUrl}
              className="w-full h-full border-0"
              title="Calendly Scheduling"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CalendlyWidget

