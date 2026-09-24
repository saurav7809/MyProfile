import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight, PlusCircle } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, stagger } from '../utils/animations'
import './Experience.css'

export default function Experience() {
  const { ref: headerRef, controls: headerControls } = useScrollReveal()
  const { ref: listRef, controls: listControls } = useScrollReveal(0.1)
  const hasExperience = portfolioConfig.experience && portfolioConfig.experience.length > 0

  return (
    <section id="experience" className="section experience">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerControls}
        >
          <span className="section-tag">
            <span aria-hidden="true">💼</span> Work History
          </span>
          <h2 className="section-title">Experience &amp; <span>Internships</span></h2>
          <p className="section-subtitle">
            Professional experience, internships, and industry projects.
          </p>
        </motion.div>

        {hasExperience ? (
          <motion.div
            ref={listRef}
            className="experience__timeline"
            variants={stagger}
            initial="hidden"
            animate={listControls}
          >
            {portfolioConfig.experience.map((exp, i) => (
              <motion.article
                key={i}
                className="exp-card card"
                variants={fadeUp}
                aria-label={`${exp.role} at ${exp.company}`}
              >
                <div className="exp-card__accent" aria-hidden="true" />
                <div className="exp-card__content">
                  {/* Header */}
                  <div className="exp-card__header">
                    <div className="exp-card__icon" aria-hidden="true">
                      <Briefcase size={20} />
                    </div>
                    <div className="exp-card__title-block">
                      <h3 className="exp-card__role">{exp.role}</h3>
                      <p className="exp-card__company">{exp.company}</p>
                    </div>
                    <span className="exp-card__type">{exp.type}</span>
                  </div>

                  {/* Meta */}
                  <div className="exp-card__meta">
                    <span className="exp-card__meta-item">
                      <Calendar size={13} aria-hidden="true" /> {exp.duration}
                    </span>
                    {exp.location && (
                      <span className="exp-card__meta-item">
                        <MapPin size={13} aria-hidden="true" /> {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="exp-card__responsibilities">
                      {exp.responsibilities.map((item, j) => (
                        <li key={j} className="exp-card__responsibility">
                          <ChevronRight size={14} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech used */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="exp-card__tech">
                      {exp.technologies.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            ref={listRef}
            variants={fadeUp}
            initial="hidden"
            animate={listControls}
          >
            <div className="experience__empty card">
              <div className="experience__empty-inner">
                <PlusCircle size={48} className="experience__empty-icon" aria-hidden="true" />
                <h3>Experience Coming Soon</h3>
                <p>
                  I'm actively seeking internship opportunities in software engineering, AI/ML,
                  and full-stack development. Add your experience entries to{' '}
                  <code>src/data/portfolio.js</code>.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
