import { motion } from 'framer-motion'
import { config } from '../config'

export default function About() {
  const { about } = config

  return (
    <section id="about" className="py-28 md:py-40" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text column */}
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
              {about.eyebrow}
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
              {about.heading}
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
                marginBottom: '1.25rem',
              }}
            >
              {about.body}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#3A5045',
                marginBottom: '2rem',
              }}
            >
              {about.secondaryBody}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div className="w-1 h-8" style={{ backgroundColor: 'var(--color-accent)' }} />
              <p
                className="font-display italic"
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-accent)',
                  fontWeight: 400,
                }}
              >
                — {config.business.founderName}, Est. {config.business.founded}
              </p>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Dot grid decoration */}
            <div
              className="absolute -top-8 -left-8 w-32 h-32 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`,
                backgroundSize: '16px 16px',
                opacity: 0.2,
              }}
            />

            {/* Main image */}
            <div className="relative">
              <img
                src={about.image}
                alt="Jayker community — landscape professionals event"
                className="w-full object-cover"
                style={{ borderRadius: '3px', aspectRatio: '4/3' }}
              />

              {/* Corner accent */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 pointer-events-none"
                style={{ border: '1px solid rgba(196,137,46,0.4)', borderRadius: '2px' }}
              />

              {/* Floating Est. badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -left-6 flex flex-col items-center justify-center w-24 h-24"
                style={{
                  backgroundColor: 'var(--color-primary-dark)',
                  borderRadius: '2px',
                  border: '1px solid rgba(196,137,46,0.35)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                  }}
                >
                  {about.establishedLabel.split(' ')[0]}
                </span>
                <span
                  className="font-display"
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    color: 'var(--color-text-light)',
                    lineHeight: 1.1,
                  }}
                >
                  {about.established}
                </span>
                <span
                  style={{
                    fontSize: '0.55rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  Eagle, ID
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
