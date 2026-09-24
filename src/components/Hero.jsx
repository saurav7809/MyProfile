import { motion } from 'framer-motion'
import { Github, Linkedin, ChevronDown, Download, ArrowRight } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { fadeUp, fadeLeft, fadeRight, stagger } from '../utils/animations'
import './Hero.css'

export default function Hero() {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Decorative background elements */}
      <div className="hero__bg-glow" aria-hidden="true" />
      <div className="hero__grid-overlay" aria-hidden="true" />
      <div className="orb orb-purple hero__orb-1" aria-hidden="true" />
      <div className="orb orb-blue hero__orb-2" aria-hidden="true" />

      <div className="container hero__inner">
        {/* ── Left: Text content ── */}
        <motion.div
          className="hero__content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          {/* Greeting */}
          <motion.p className="hero__greeting" variants={fadeUp}>
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 className="hero__name" variants={fadeUp}>
            SAURAV
            <br />
            <span className="hero__name-gradient">SHAH</span>
          </motion.h1>

          {/* Role */}
          <motion.p className="hero__role" variants={fadeUp}>
            <span className="hero__role-highlight">Software Engineer</span>
            <span className="hero__role-sep" aria-hidden="true"> | </span>
            <span className="hero__role-highlight">AI Developer</span>
          </motion.p>

          {/* Description */}
          <motion.p className="hero__description" variants={fadeUp}>
            {portfolioConfig.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero__actions" variants={fadeUp}>
            <a
              href="#projects"
              className="btn btn-primary hero__btn"
              onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              id="hero-view-projects-btn"
            >
              View My Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={portfolioConfig.resumeUrl}
              className="btn btn-secondary hero__btn"
              download
              id="hero-download-resume-btn"
              aria-label="Download Resume PDF"
            >
              Download Resume
              <Download size={16} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div className="hero__social" variants={fadeUp}>
            <a
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Visit GitHub profile"
              id="hero-github-link"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Visit LinkedIn profile"
              id="hero-linkedin-link"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Profile image area ── */}
        <motion.div
          className="hero__image-wrapper"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {/* Glow rings */}
          <div className="hero__glow-ring hero__glow-ring-1" aria-hidden="true" />
          <div className="hero__glow-ring hero__glow-ring-2" aria-hidden="true" />

          {/* Profile image container */}
          <div className="hero__avatar-container">
            <img
              src={portfolioConfig.profileImage}
              alt="Saurav Shah – Computer Science Student"
              className="hero__avatar-img"
              onError={e => {
                // Show initials fallback if image not found
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            {/* Fallback initials */}
            <div className="hero__avatar-fallback" aria-label="SS initials placeholder">
              <span>SS</span>
              <p className="hero__avatar-hint">Add photo at<br />/public/profile.jpg</p>
            </div>
          </div>

          {/* Floating card */}
          <motion.div
            className="hero__float-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Student status card"
          >
            <span className="hero__float-card-dot" aria-hidden="true" />
            <div>
              <p className="hero__float-card-title">Computer Science Student</p>
              <p className="hero__float-card-sub">BMS Institute of Technology</p>
            </div>
          </motion.div>

          {/* Tech badge */}
          <motion.div
            className="hero__tech-badge"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            aria-hidden="true"
          >
            <span>{'< AI / ML />'}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-btn"
        onClick={handleScrollDown}
        aria-label="Scroll to About section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  )
}
