import { motion } from 'framer-motion'
import { Trophy, Star, Code2, Cpu, PlusCircle } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, stagger } from '../utils/animations'
import './Achievements.css'

const iconMap = { Trophy, Star, Code2, Cpu }

export default function Achievements() {
  const { ref: headerRef, controls: headerControls } = useScrollReveal()
  const { ref: gridRef, controls: gridControls } = useScrollReveal(0.1)
  const hasAchievements = portfolioConfig.achievements && portfolioConfig.achievements.length > 0

  return (
    <section id="achievements" className="section achievements">
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
            <span aria-hidden="true">⭐</span> Recognition
          </span>
          <h2 className="section-title">Achievements &amp; <span>Highlights</span></h2>
          <p className="section-subtitle">
            Competitions, hackathons, and other milestones along my journey.
          </p>
        </motion.div>

        {hasAchievements ? (
          <motion.div
            ref={gridRef}
            className="achievements__grid"
            variants={stagger}
            initial="hidden"
            animate={gridControls}
          >
            {portfolioConfig.achievements.map((item, i) => {
              const Icon = iconMap[item.icon] || Trophy
              return (
                <motion.article
                  key={i}
                  className="achievement-card card"
                  variants={fadeUp}
                  aria-label={item.title}
                >
                  <div className="achievement-card__icon" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <div className="achievement-card__content">
                    <h3 className="achievement-card__title">{item.title}</h3>
                    {item.description && (
                      <p className="achievement-card__desc">{item.description}</p>
                    )}
                    {item.date && (
                      <span className="achievement-card__date">{item.date}</span>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            ref={gridRef}
            variants={fadeUp}
            initial="hidden"
            animate={gridControls}
          >
            <div className="achievements__empty card">
              <div className="achievements__empty-inner">
                <PlusCircle size={48} className="achievements__empty-icon" aria-hidden="true" />
                <h3>Achievements Coming Soon</h3>
                <p>
                  Hackathons, coding competitions, and academic milestones will be showcased here.
                  Add entries to <code>src/data/portfolio.js</code> in the{' '}
                  <code>achievements</code> array.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
