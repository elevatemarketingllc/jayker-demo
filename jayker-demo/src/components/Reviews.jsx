import { motion } from 'framer-motion'
import { config } from '../config'

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < rating ? 'var(--color-accent)' : 'rgba(196,137,46,0.2)'}>
          <path d="M7 0l1.8 4.9H14l-4 3.1 1.5 4.9L7 10.1l-4.5 2.8L4 7.9 0 4.9h5.2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { reviews, business } = config

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
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
              What Pros Say
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
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: 'var(--color-text-light)',
              }}
            >
              Trusted by Idaho's Best
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span
              className="font-display"
              style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--color-accent)', lineHeight: 1 }}
            >
              {business.avgRating}
            </span>
            <div>
              <StarRating rating={Math.round(business.avgRating)} />
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                {business.reviewCount} Google Reviews
              </p>
            </div>
          </motion.div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between p-7"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(28,74,42,0.2)',
                borderRadius: '3px',
              }}
            >
              {/* Big quote mark */}
              <div>
                <div
                  className="font-display mb-4 leading-none select-none"
                  style={{ fontSize: '4rem', color: 'rgba(196,137,46,0.2)', lineHeight: 0.8 }}
                >
                  "
                </div>
                <StarRating rating={review.rating} />
                <p
                  className="mt-4"
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    color: 'var(--color-text-muted)',
                    fontStyle: 'italic',
                  }}
                >
                  {review.text}
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-1 h-8 flex-shrink-0" style={{ backgroundColor: 'rgba(196,137,46,0.5)' }} />
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-light)' }}>
                    {review.author}
                  </p>
                  {review.title && (
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                      {review.title}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
