import { motion } from 'framer-motion'
import { config } from '../config'

export default function Certifications() {
  const { certifications } = config

  return (
    <section id="certifications" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: heading + body */}
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
              {certifications.eyebrow}
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
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--color-primary-dark)',
              }}
            >
              {certifications.heading}
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
              }}
            >
              {certifications.body}
            </motion.p>
          </div>

          {/* Right: cert cards */}
          <div className="flex flex-col gap-4">
            {certifications.items.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-5 p-5 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '3px',
                  border: '1px solid rgba(28,74,42,0.15)',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(196,137,46,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(28,74,42,0.15)'}
              >
                {/* Org badge */}
                <div
                  className="flex-shrink-0 flex items-center justify-center w-12 h-12"
                  style={{
                    backgroundColor: 'rgba(196,137,46,0.1)',
                    border: '1px solid rgba(196,137,46,0.25)',
                    borderRadius: '2px',
                  }}
                >
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.05em' }}
                  >
                    {cert.org}
                  </span>
                </div>
                <div>
                  <h4
                    className="font-display mb-1"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'var(--color-text-light)',
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
