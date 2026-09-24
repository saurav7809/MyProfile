import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Left: brand + copyright */}
        <div className="footer__brand">
          <p className="footer__name">SAURAV SHAH</p>
          <p className="footer__copy">
            &copy; {currentYear} Saurav Shah. All rights reserved.
          </p>
          <p className="footer__built">
            Built with{' '}
            <span className="footer__heart" aria-label="love">
              <Heart size={12} fill="currentColor" />
            </span>{' '}
            using React &amp; Vite
          </p>
        </div>

        {/* Center: quick links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#hero" onClick={e => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) }}>Home</a>
          <a href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>About</a>
          <a href="#skills" onClick={e => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }}>Skills</a>
          <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>Projects</a>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</a>
        </nav>

        {/* Right: social + back to top */}
        <div className="footer__actions">
          <div className="footer__social">
            <a
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolioConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <button
            className="footer__scroll-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
