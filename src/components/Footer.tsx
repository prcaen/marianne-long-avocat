import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Legal mentions */}
          <div className="text-light/80 text-sm">
            <p className="mb-2">© {currentYear} Marianne Long - Avocat IT / Data / IA / Cybersécurité</p>
            <Link
              to="/mentions-legales"
              className="hover:text-primary transition-colors duration-300 underline"
            >
              Mentions légales
            </Link>
          </div>

          {/* Right side - LinkedIn */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/mariannelong/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-light/80 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn - Marianne Long"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

