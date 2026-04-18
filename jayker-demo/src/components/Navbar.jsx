import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '../config'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Who We Serve', href: '#who-we-serve' },
    { label: 'Our Story', href: '#about' },
    { label: 'The Grounds', href: '#gallery' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Apply', href: '#apply' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(12,26,16,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(196,137,46,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={config.images.logo}
              alt={config.business.name}
              className="h-20 w-auto"
              style={{ filter: 'brightness(1.1)', mixBlendMode: 'screen' }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.slice(0, -1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide transition-all duration-200"
                style={{
                  color: '#ffffff',
                  textShadow: '0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.target.style.color = '#ffffff'}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${config.business.phone}`}
              className="text-sm tracking-wide transition-all duration-200"
              style={{
                color: '#ffffff',
                textShadow: '0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.target.style.color = '#ffffff'}
            >
              {config.business.phone}
            </a>
            <a
              href="#apply"
              className="px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#0C1A10',
                borderRadius: '6px',
              }}
              onMouseEnter={e => e.target.style.backgroundColor = 'var(--color-accent-light)'}
              onMouseLeave={e => e.target.style.backgroundColor = 'var(--color-accent)'}
            >
              Apply for Account
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-px"
              style={{ backgroundColor: 'var(--color-text-light)' }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-px"
              style={{ backgroundColor: 'var(--color-text-light)' }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-px"
              style={{ backgroundColor: 'var(--color-text-light)' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-0 right-0 z-40 flex flex-col px-6 py-6 gap-4"
            style={{
              backgroundColor: 'rgba(12,26,16,0.98)',
              borderBottom: '1px solid rgba(196,137,46,0.15)',
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base py-2 border-b transition-colors duration-200"
                style={{
                  color: 'var(--color-text-light)',
                  borderColor: 'rgba(28,74,42,0.3)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${config.business.phone}`}
              className="text-base py-2 font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              {config.business.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
