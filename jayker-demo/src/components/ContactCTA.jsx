import { motion } from 'framer-motion'
import { config } from '../config'

export default function ContactCTA() {
  const { cta, business } = config

  return (
    <section id="apply" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1rem',
              }}
            >
              {cta.eyebrow}
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-px w-12 mb-5"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mb-5"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--color-primary-dark)',
              }}
            >
              {cta.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#3A5045',
                marginBottom: '2rem',
              }}
            >
              {cta.body}
            </motion.p>

            {/* Steps */}
            <div className="flex flex-col gap-4 mb-8">
              {cta.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold mt-0.5"
                    style={{
                      backgroundColor: 'rgba(196,137,46,0.15)',
                      color: 'var(--color-accent)',
                      border: '1px solid rgba(196,137,46,0.3)',
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#3A5045' }}>
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                fontSize: '0.8rem',
                lineHeight: 1.6,
                color: '#6A8070',
                padding: '12px 16px',
                borderLeft: '2px solid rgba(28,74,42,0.3)',
                backgroundColor: 'rgba(28,74,42,0.05)',
              }}
            >
              {cta.note}
            </motion.p>
          </div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="p-8"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: '3px',
                border: '1px solid rgba(28,74,42,0.2)',
              }}
            >
              <h3
                className="font-display mb-6"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: 'var(--color-text-light)',
                }}
              >
                Get in Touch
              </h3>

              {/* Contact lines */}
              <div className="flex flex-col gap-5 mb-8">
                {[
                  { label: 'Phone', value: business.phone, href: `tel:${business.phone}` },
                  { label: 'Email', value: business.email, href: `mailto:${business.email}` },
                  { label: 'Address', value: `${business.address}, ${business.city}`, href: '#' },
                  { label: 'Hours', value: business.hours, href: null },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span
                      style={{
                        fontSize: '0.6rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {item.label}
                    </span>
                    {item.href && item.href !== '#' ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--color-text-light)',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                        onMouseLeave={e => e.target.style.color = 'var(--color-text-light)'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <a
                  href={cta.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 text-sm font-medium tracking-wide transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#0C1A10',
                    borderRadius: '2px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-accent-light)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
                >
                  {cta.ctaPrimary}
                </a>
                <a
                  href={`tel:${business.phone}`}
                  className="block w-full text-center py-3.5 text-sm tracking-wide transition-all duration-200"
                  style={{
                    color: 'var(--color-text-light)',
                    border: '1px solid rgba(244,239,230,0.2)',
                    borderRadius: '2px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(244,239,230,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(244,239,230,0.2)'}
                >
                  {cta.ctaSecondary}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
