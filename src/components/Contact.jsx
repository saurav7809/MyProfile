import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react'
import { portfolioConfig } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, fadeLeft, fadeRight, stagger } from '../utils/animations'
import './Contact.css'

export default function Contact() {
  const { ref: headerRef, controls: headerControls } = useScrollReveal()
  const { ref: leftRef, controls: leftControls } = useScrollReveal()
  const { ref: rightRef, controls: rightControls } = useScrollReveal()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [touched, setTouched] = useState({})

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleBlur = e => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // mailto-based implementation
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    const mailtoLink = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`

    try {
      window.location.href = mailtoLink
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const isValid = form.name.trim() && form.email.includes('@') && form.message.trim().length >= 10

  return (
    <section id="contact" className="section contact">
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
            <span aria-hidden="true">✉️</span> Get In Touch
          </span>
          <h2 className="section-title">Contact <span>Me</span></h2>
          <p className="section-subtitle">
            Have an opportunity or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left: Info */}
          <motion.div
            ref={leftRef}
            className="contact__info"
            variants={fadeLeft}
            initial="hidden"
            animate={leftControls}
          >
            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-text">
              I'm actively looking for internships and collaborative opportunities in software
              engineering, AI/ML, and full-stack development. Whether you have a role to discuss
              or a project idea, feel free to reach out.
            </p>

            <div className="contact__links">
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="contact__link"
                aria-label="Send email"
                id="contact-email-link"
              >
                <div className="contact__link-icon" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div className="contact__link-text">
                  <span className="contact__link-label">Email</span>
                  <span className="contact__link-value">{portfolioConfig.email}</span>
                </div>
              </a>

              <a
                href={portfolioConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="GitHub profile"
                id="contact-github-link"
              >
                <div className="contact__link-icon" aria-hidden="true">
                  <Github size={20} />
                </div>
                <div className="contact__link-text">
                  <span className="contact__link-label">GitHub</span>
                  <span className="contact__link-value">github.com/your-username</span>
                </div>
              </a>

              <a
                href={portfolioConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
                aria-label="LinkedIn profile"
                id="contact-linkedin-link"
              >
                <div className="contact__link-icon" aria-hidden="true">
                  <Linkedin size={20} />
                </div>
                <div className="contact__link-text">
                  <span className="contact__link-label">LinkedIn</span>
                  <span className="contact__link-value">linkedin.com/in/your-profile</span>
                </div>
              </a>

              <div className="contact__link contact__link--static">
                <div className="contact__link-icon" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div className="contact__link-text">
                  <span className="contact__link-label">Location</span>
                  <span className="contact__link-value">{portfolioConfig.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            ref={rightRef}
            className="contact__form-wrapper card"
            variants={fadeRight}
            initial="hidden"
            animate={rightControls}
          >
            {status === 'success' ? (
              <div className="contact__success" role="alert">
                <CheckCircle size={48} aria-hidden="true" />
                <h3>Message Prepared!</h3>
                <p>Your default email client has opened with the message pre-filled. Send it from there!</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setStatus(null)}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <h3 className="contact__form-title">Send a Message</h3>

                {status === 'error' && (
                  <div className="contact__error" role="alert">
                    <AlertCircle size={16} aria-hidden="true" />
                    Something went wrong. Please try emailing directly.
                  </div>
                )}

                {/* Name */}
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">
                    Your Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`contact__input ${touched.name && !form.name.trim() ? 'contact__input--error' : ''}`}
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-describedby={touched.name && !form.name.trim() ? 'name-error' : undefined}
                  />
                  {touched.name && !form.name.trim() && (
                    <span id="name-error" className="contact__field-error" role="alert">
                      Name is required
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`contact__input ${touched.email && !form.email.includes('@') ? 'contact__input--error' : ''}`}
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-describedby={touched.email && !form.email.includes('@') ? 'email-error' : undefined}
                  />
                  {touched.email && !form.email.includes('@') && (
                    <span id="email-error" className="contact__field-error" role="alert">
                      A valid email is required
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`contact__input contact__textarea ${touched.message && form.message.trim().length < 10 ? 'contact__input--error' : ''}`}
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                  />
                  {touched.message && form.message.trim().length < 10 && (
                    <span className="contact__field-error" role="alert">
                      Please write at least 10 characters
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  id="contact-submit-btn"
                  disabled={!isValid}
                  aria-disabled={!isValid}
                >
                  <Send size={16} aria-hidden="true" />
                  Send Message
                </button>

                <p className="contact__form-note">
                  This will open your email client with the message pre-filled.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
