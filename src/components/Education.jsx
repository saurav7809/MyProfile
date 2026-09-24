import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, fadeLeft, stagger } from '../utils/animations'
import './Education.css'

export default function Education() {
  const { ref: headerRef, controls: headerControls } = useScrollReveal()
  const { ref: cardRef, controls: cardControls } = useScrollReveal()

  return (
    <section id="education" className="section education">
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
            <span aria-hidden="true">🎓</span> Academic Background
          </span>
          <h2 className="section-title">My <span>Education</span></h2>
          <p className="section-subtitle">
            Building a strong foundation in Computer Science and Engineering.
          </p>
        </motion.div>

        {/* Education cards */}
        <motion.div
          ref={cardRef}
          className="education__list"
          variants={stagger}
          initial="hidden"
          animate={cardControls}
        >
          {portfolioConfig.education.map((edu, i) => (
            <motion.div key={i} className="education__card card" variants={fadeUp}>
              {/* Left accent bar */}
              <div className="education__accent" aria-hidden="true" />

              <div className="education__content">
                {/* Header row */}
                <div className="education__header">
                  <div className="education__icon" aria-hidden="true">
                    <GraduationCap size={24} />
                  </div>
                  <div className="education__title-block">
                    <h3 className="education__degree">{edu.degree}</h3>
                    <p className="education__institution">{edu.institution}</p>
                  </div>
                  {edu.cgpa && (
                    <div className="education__cgpa">
                      <span className="education__cgpa-value">{edu.cgpa}</span>
                      <span className="education__cgpa-label">CGPA</span>
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="education__meta">
                  <span className="education__meta-item">
                    <Calendar size={14} aria-hidden="true" />
                    {edu.duration}
                  </span>
                  <span className="education__meta-item">
                    <MapPin size={14} aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>

                {/* CGPA placeholder if not set */}
                {!edu.cgpa && (
                  <p className="education__cgpa-placeholder">
                    CGPA will be added when available.
                  </p>
                )}

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="education__coursework">
                    <div className="education__coursework-header">
                      <BookOpen size={14} aria-hidden="true" />
                      <span>Relevant Coursework</span>
                    </div>
                    <div className="education__coursework-tags">
                      {edu.coursework.map(course => (
                        <span key={course} className="tech-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="education__achievements">
                    {edu.achievements.map((item, j) => (
                      <li key={j} className="education__achievement-item">
                        <span aria-hidden="true">•</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
