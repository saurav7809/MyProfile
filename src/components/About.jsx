import { motion } from 'framer-motion'
import { Brain, Layers, Server, Code2 } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, fadeLeft, fadeRight, stagger } from '../utils/animations'
import './About.css'

const iconMap = { Brain, Layers, Server, Code2 }

export default function About() {
  const { ref: leftRef, controls: leftControls } = useScrollReveal()
  const { ref: rightRef, controls: rightControls } = useScrollReveal()
  const { ref: cardsRef, controls: cardsControls } = useScrollReveal()

  return (
    <section id="about" className="section about">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          ref={leftRef}
          variants={fadeUp}
          initial="hidden"
          animate={leftControls}
        >
          <span className="section-tag">
            <span aria-hidden="true">👋</span> Get to Know Me
          </span>
          <h2 className="section-title">About <span>Me</span></h2>
          <p className="section-subtitle">
            A passionate Computer Science student building the future one line of code at a time.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="about__grid">
          {/* Left: Bio */}
          <motion.div
            className="about__bio"
            ref={leftRef}
            variants={fadeLeft}
            initial="hidden"
            animate={leftControls}
          >
            {portfolioConfig.about.bio.map((para, i) => (
              <p key={i} className="about__bio-para">{para}</p>
            ))}

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-value">2027</span>
                <span className="about__stat-label">Expected Graduation</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value">B.Tech</span>
                <span className="about__stat-label">Degree Program</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value">CSE</span>
                <span className="about__stat-label">Specialization</span>
              </div>
            </div>
          </motion.div>

          {/* Right: What I Do cards */}
          <motion.div
            className="about__cards"
            ref={cardsRef}
            variants={stagger}
            initial="hidden"
            animate={cardsControls}
          >
            <h3 className="about__cards-title">What I Do</h3>
            <div className="about__cards-grid">
              {portfolioConfig.about.whatIDo.map((item, i) => {
                const Icon = iconMap[item.icon] || Code2
                return (
                  <motion.div key={i} className="about__card card" variants={fadeUp}>
                    <div className="about__card-icon" aria-hidden="true">
                      <Icon size={22} />
                    </div>
                    <h4 className="about__card-title">{item.title}</h4>
                    <p className="about__card-desc">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
