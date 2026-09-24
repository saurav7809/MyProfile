import { motion } from 'framer-motion'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, stagger, staggerFast } from '../utils/animations'
import './Skills.css'

// Category accent colors
const categoryColors = {
  'Programming':      { bg: 'rgba(139,92,246,0.1)',  border: 'rgba(139,92,246,0.25)',  text: '#a78bfa' },
  'Frontend':         { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.25)',  text: '#60a5fa' },
  'Backend':          { bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.25)',   text: '#4ade80' },
  'Databases':        { bg: 'rgba(251,146,60,0.1)',  border: 'rgba(251,146,60,0.25)',  text: '#fb923c' },
  'AI / ML':          { bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)', text: '#f472b6' },
  'Tools & DevOps':   { bg: 'rgba(34,211,238,0.1)',  border: 'rgba(34,211,238,0.25)',  text: '#22d3ee' },
  'CS Fundamentals':  { bg: 'rgba(250,204,21,0.1)',  border: 'rgba(250,204,21,0.25)',  text: '#facc15' },
}

function SkillPill({ name, color }) {
  return (
    <motion.span
      className="skill-pill"
      style={{
        background: color.bg,
        border: `1px solid ${color.border}`,
        color: color.text,
      }}
      variants={fadeUp}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {name}
    </motion.span>
  )
}

function SkillCategory({ category, items }) {
  const color = categoryColors[category] || categoryColors['CS Fundamentals']
  const { ref, controls } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      className="skill-category card"
      variants={stagger}
      initial="hidden"
      animate={controls}
    >
      <div
        className="skill-category__header"
        style={{ borderBottomColor: color.border }}
      >
        <span
          className="skill-category__dot"
          style={{ background: color.text, boxShadow: `0 0 8px ${color.text}` }}
          aria-hidden="true"
        />
        <h3 className="skill-category__name" style={{ color: color.text }}>
          {category}
        </h3>
        <span className="skill-category__count" style={{ color: color.text, background: color.bg }}>
          {items.length}
        </span>
      </div>
      <motion.div className="skill-category__pills" variants={staggerFast}>
        {items.map(skill => (
          <SkillPill key={skill} name={skill} color={color} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref: headerRef, controls: headerControls } = useScrollReveal()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerControls}
        >
          <span className="section-tag">
            <span aria-hidden="true">⚡</span> Technical Expertise
          </span>
          <h2 className="section-title">Skills &amp; <span>Technologies</span></h2>
          <p className="section-subtitle">
            A curated set of technologies I work with — from programming languages to AI frameworks.
          </p>
        </motion.div>

        <div className="skills__grid">
          {portfolioConfig.skills.map(({ category, items }) => (
            <SkillCategory key={category} category={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  )
}
