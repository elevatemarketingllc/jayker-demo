import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { config } from '../config'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.6], ['0%', '15%'])

  const { hero } = config

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: '640px' }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[130%]"
        style={{ y: bgY, top: '-15%' }}
      >
        <img
          src={hero.backgroundImage}
          alt="Jayker Nursery aerial view"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Overlay Layer 1 — bottom-to-top gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, #0C1A10 0%, rgba(12,26,16,0.65) 40%, rgba(12,26,16,0.2) 100%)',
        }}
      />
      {/* Overlay Layer 2 — side gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(12,26,16,0.75) 0%, rgba(12,26,16,0.2) 60%, rgba(12,26,16,0.4) 100%)',
        }}
      />
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-7xl"
        style={{ opacity: textOpacity, y: textY }}
      >
        {/* Animated accent rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left h-px w-16 mb-6"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            fontFamily: 'DM Sans, sans-serif',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Main headline */}
        <div style={{ overflow: 'hidden', paddingTop: '0.3em', paddingBottom: '0.3em', marginBottom: '0' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              fontWeight: 400,
              color: 'var(--color-text-light)',
              letterSpacing: '-0.01em',
            }}
          >
            {hero.heading1}
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', paddingBottom: '0.2em', marginBottom: '0.5rem' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display italic"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              fontWeight: 300,
              color: 'var(--color-accent)',
              letterSpacing: '-0.01em',
            }}
          >
            {hero.heading2}
          </motion.h1>
        </div>
        {hero.heading3 && (
        <div style={{ overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '2rem' }}>
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display"
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 300,
              color: 'rgba(244,239,230,0.7)',
              fontStyle: 'italic',
              letterSpacing: '0.02em',
            }}
          >
            {hero.heading3}
          </motion.p>
        </div>
        )}

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 max-w-xl"
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--color-text-muted)',
          }}
        >
          {hero.subhead}
        </motion.p>

        {/* Professionals Only badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center mb-8 self-start"
        >
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              padding: '4px 12px',
              border: '1px solid rgba(196,137,46,0.4)',
              borderRadius: '4px',
            }}
          >
            {hero.badge}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#apply"
            className="px-6 py-3.5 font-medium text-sm tracking-wide transition-all duration-200 text-center"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: '#0C1A10',
              borderRadius: '6px',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-accent-light)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
          >
            {hero.ctaPrimary}
          </a>
          <a
            href={`tel:${config.business.phone}`}
            className="px-6 py-3.5 text-sm tracking-wide transition-all duration-200 text-center"
            style={{
              color: 'var(--color-text-light)',
              border: '1px solid rgba(244,239,230,0.25)',
              borderRadius: '6px',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(244,239,230,0.6)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(244,239,230,0.25)'}
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(244,239,230,0.4)',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 origin-top"
          style={{ backgroundColor: 'rgba(196,137,46,0.5)' }}
        />
      </motion.div>
    </section>
  )
}
