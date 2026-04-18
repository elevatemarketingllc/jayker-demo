import { motion } from 'framer-motion'
import { config } from '../config'

export default function TrustBar() {
  const { trustBar } = config

  return (
    <section style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
          {trustBar.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-1"
            >
              <span
                className="font-display"
                style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                }}
              >
                {item.value}
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
