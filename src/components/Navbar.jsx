import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import './Navbar.css'

const navLinks = [
  { label: 'Home',         href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Education',    href: '#education' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section on scroll
  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close mobile nav on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        role="banner"
      >
        <div className="navbar__inner container">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar__logo"
            onClick={e => handleLinkClick(e, '#hero')}
            aria-label="Saurav Shah — go to home"
          >
            <span className="navbar__logo-text">SAURAV SHAH</span>
          </a>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={e => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="navbar__actions">
            <a
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__icon-btn"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolioConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__icon-btn"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <button
              className="navbar__icon-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile hamburger */}
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="mobile-nav__links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav__link ${activeSection === link.href.slice(1) ? 'mobile-nav__link--active' : ''}`}
                  onClick={e => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mobile-nav__social">
              <a href={portfolioConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={portfolioConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
