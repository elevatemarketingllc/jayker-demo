import { motion } from 'framer-motion'
import { config } from '../config'

export default function WhoWeServe() {
  const { whoWeServe } = config

  return (
    <section id="who-we-serve" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
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
            {whoWeServe.eyebrow}
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
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--color-text-light)',
            }}
          >
            {whoWeServe.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--color-text-muted)',
              maxWidth: '36rem',
            }}
          >
            {whoWeServe.body}
          </motion.p>
        </div>

        {/* Customer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid rgba(28,74,42,0.2)', borderRadius: '4px', overflow: 'hidden' }}>
          {whoWeServe.customers.map((customer, i) => (
            <motion.div
              key={customer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 transition-colors duration-300"
              style={{ backgroundColor: 'var(--color-surface)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-surface-alt)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-surface)'}
            >
              <div className="text-3xl mb-4">{customer.icon}</div>
              <h3
                className="font-display mb-3"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: 'var(--color-text-light)',
                }}
              >
                {customer.title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text-muted)',
                }}
              >
                {customer.description}
              </p>
              <div
                className="mt-5 h-px w-8 group-hover:w-14 transition-all duration-300 origin-left"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
