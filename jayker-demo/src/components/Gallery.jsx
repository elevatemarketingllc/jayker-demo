import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '../config'

export default function Gallery() {
  const { gallery } = config
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
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
            {gallery.eyebrow}
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
            {gallery.heading}
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(img)}
              className={`group relative overflow-hidden ${i === 0 ? 'col-span-2 md:col-span-2' : ''}`}
              style={{ borderRadius: '3px', aspectRatio: i === 0 ? '16/9' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(12,26,16,0.85) 0%, transparent 60%)' }}
              >
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {img.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(12,26,16,0.95)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={selected.src}
              alt={selected.caption}
              className="max-w-full max-h-[85vh] object-contain"
              style={{ borderRadius: '3px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
