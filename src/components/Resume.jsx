import { motion } from 'framer-motion'
import { Download, Mail, FileText, Sparkles } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, stagger } from '../utils/animations'
import './Resume.css'

export default function Resume() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <motion.div
          ref={ref}
          className="resume__card card"
          variants={stagger}
          initial="hidden"
          animate={controls}
        >
          {/* Background glow */}
          <div className="resume__glow" aria-hidden="true" />

          <motion.div className="resume__icon" variants={fadeUp} aria-hidden="true">
            <FileText size={40} />
          </motion.div>

          <motion.div className="resume__text" variants={fadeUp}>
            <p className="resume__eyebrow">
              <Sparkles size={14} aria-hidden="true" />
              Let's Work Together
            </p>
            <h2 className="resume__title">
              Interested in Working <span className="resume__title-accent">Together?</span>
            </h2>
            <p className="resume__desc">
              I'm open to internship opportunities and collaborative projects in software engineering,
              AI/ML development, and full-stack development. Feel free to reach out or download my
              resume to know more about my background.
            </p>
          </motion.div>

          <motion.div className="resume__actions" variants={fadeUp}>
            <a
              href={portfolioConfig.resumeUrl}
              download
              className="btn btn-primary resume__btn"
              id="resume-download-btn"
              aria-label="Download Saurav Shah's resume as PDF"
            >
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn btn-secondary resume__btn"
              id="resume-contact-btn"
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
          </motion.div>

          <motion.p className="resume__note" variants={fadeUp}>
            📄 Place your resume at <code>/public/resume.pdf</code>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
