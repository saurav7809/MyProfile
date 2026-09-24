import { motion } from 'framer-motion'
import { Award, ExternalLink, PlusCircle, Calendar } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, stagger } from '../utils/animations'
import './Certifications.css'

export default function Certifications() {
  const { ref: headerRef, controls: headerControls } = useScrollReveal()
  const { ref: gridRef, controls: gridControls } = useScrollReveal(0.1)
  const hasCerts = portfolioConfig.certifications && portfolioConfig.certifications.length > 0

  return (
    <section id="certifications" className="section certifications">
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
            <span aria-hidden="true">🏆</span> Credentials
          </span>
          <h2 className="section-title">Certifications &amp; <span>Credentials</span></h2>
          <p className="section-subtitle">
            Professional certifications and credentials that validate my skills and knowledge.
          </p>
        </motion.div>

        {hasCerts ? (
          <motion.div
            ref={gridRef}
            className="certs__grid"
            variants={stagger}
            initial="hidden"
            animate={gridControls}
          >
            {portfolioConfig.certifications.map((cert, i) => (
              <motion.article
                key={i}
                className="cert-card card"
                variants={fadeUp}
                aria-label={`Certificate: ${cert.name}`}
              >
                <div className="cert-card__icon" aria-hidden="true">
                  <Award size={28} />
                </div>
                <div className="cert-card__content">
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <p className="cert-card__org">{cert.organization}</p>
                  {cert.date && (
                    <div className="cert-card__date">
                      <Calendar size={13} aria-hidden="true" /> {cert.date}
                    </div>
                  )}
                  {cert.credentialId && (
                    <p className="cert-card__id">ID: {cert.credentialId}</p>
                  )}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card__link btn btn-secondary btn-sm"
                    aria-label={`View ${cert.name} certificate`}
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    View
                  </a>
                )}
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            ref={gridRef}
            variants={fadeUp}
            initial="hidden"
            animate={gridControls}
          >
            <div className="certifications__empty card">
              <div className="certifications__empty-inner">
                <PlusCircle size={48} className="certifications__empty-icon" aria-hidden="true" />
                <h3>Certifications Coming Soon</h3>
                <p>
                  Add your certifications to{' '}
                  <code>src/data/portfolio.js</code>{' '}
                  in the <code>certifications</code> array.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
