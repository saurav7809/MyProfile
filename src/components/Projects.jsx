import { motion } from 'framer-motion'
import { Github, ExternalLink, Folder } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, stagger } from '../utils/animations'
import './Projects.css'

const colorSchemes = {
  purple: {
    glow:   'rgba(139, 92, 246, 0.15)',
    border: 'rgba(139, 92, 246, 0.3)',
    tag:    'rgba(139, 92, 246, 0.15)',
    tagText:'#a78bfa',
    tagBorder: 'rgba(139,92,246,0.25)',
  },
  blue: {
    glow:   'rgba(59, 130, 246, 0.15)',
    border: 'rgba(59, 130, 246, 0.3)',
    tag:    'rgba(59, 130, 246, 0.15)',
    tagText:'#60a5fa',
    tagBorder: 'rgba(59,130,246,0.25)',
  },
  cyan: {
    glow:   'rgba(34, 211, 238, 0.12)',
    border: 'rgba(34, 211, 238, 0.25)',
    tag:    'rgba(34, 211, 238, 0.1)',
    tagText:'#22d3ee',
    tagBorder: 'rgba(34,211,238,0.2)',
  },
}

function ProjectCard({ project }) {
  const scheme = colorSchemes[project.color] || colorSchemes.purple

  return (
    <motion.article
      className="project-card card"
      variants={fadeUp}
      style={{ '--card-glow': scheme.glow, '--card-border-active': scheme.border }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Visual header */}
      <div
        className="project-card__visual"
        style={{
          background: `linear-gradient(135deg, ${scheme.glow} 0%, rgba(6,11,20,0.6) 100%)`,
          borderBottom: `1px solid ${scheme.border}`,
        }}
        aria-hidden="true"
      >
        <div className="project-card__visual-icon">
          <Folder size={32} color={scheme.tagText} />
        </div>
        {/* Decorative dots */}
        <div className="project-card__dots">
          <span style={{ background: '#ef4444' }} />
          <span style={{ background: '#f59e0b' }} />
          <span style={{ background: '#22c55e' }} />
        </div>
      </div>

      {/* Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Tech tags */}
        <div className="project-card__tags">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="project-card__tag"
              style={{
                background: scheme.tag,
                borderColor: scheme.tagBorder,
                color: scheme.tagText,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div className="project-card__footer">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm project-card__btn"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github size={14} aria-hidden="true" />
            GitHub
          </a>
        ) : (
          <span className="project-card__soon">Repo coming soon</span>
        )}
        {project.liveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm project-card__btn"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={14} aria-hidden="true" />
            Live Demo
          </a>
        ) : (
          <span className="project-card__soon">Demo coming soon</span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { ref: headerRef, controls: headerControls } = useScrollReveal()
  const { ref: gridRef, controls: gridControls } = useScrollReveal(0.1)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerControls}
        >
          <span className="section-tag">
            <span aria-hidden="true">🚀</span> Portfolio
          </span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">
            A selection of projects that showcase my problem-solving approach and technical abilities.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="projects__grid"
          variants={stagger}
          initial="hidden"
          animate={gridControls}
        >
          {portfolioConfig.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
