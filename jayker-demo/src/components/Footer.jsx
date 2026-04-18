import { motion } from 'framer-motion'
import { config } from '../config'

export default function Footer() {
  const { business, images } = config

  return (
    <footer style={{ backgroundColor: 'var(--color-bg-dark)', borderTop: '1px solid rgba(196,137,46,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Brand column */}
          <div>
            <img
              src={images.logo}
              alt={business.name}
              className="h-10 w-auto mb-4"
              style={{ filter: 'brightness(1.1)', mixBlendMode: 'screen' }}
            />
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'var(--color-text-muted)',
                maxWidth: '20rem',
              }}
            >
              Idaho's most trusted re-wholesale nursery. Serving landscape professionals, municipalities, and developers across the Treasure Valley since 1978.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <span
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                }}
              >
                Wholesale Only — Licensed Professionals
              </span>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1.25rem',
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: business.phone, href: `tel:${business.phone}` },
                { label: business.email, href: `mailto:${business.email}` },
                { label: `${business.address}, ${business.city}`, href: null },
                { label: business.hours, href: null },
              ].map((item, i) => (
                item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--color-text-light)'}
                    onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    key={i}
                    style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}
                  >
                    {item.label}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Service area column */}
          <div>
            <p
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '1.25rem',
              }}
            >
              Service Area
            </p>
            <div className="flex flex-wrap gap-2">
              {business.serviceArea.map((city) => (
                <span
                  key={city}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                    padding: '3px 10px',
                    border: '1px solid rgba(28,74,42,0.3)',
                    borderRadius: '1px',
                  }}
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '1rem',
                }}
              >
                Quick Links
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Who We Serve', href: '#who-we-serve' },
                  { label: 'Our Story', href: '#about' },
                  { label: 'Certifications', href: '#certifications' },
                  { label: 'Apply for Account', href: '#apply' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--color-text-light)'}
                    onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(28,74,42,0.2)' }}
        >
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(122,152,130,0.5)' }}>
            Website by{' '}
            <a
              href="https://elevatemarketingidaho.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(196,137,46,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.target.style.color = 'rgba(196,137,46,0.6)'}
            >
              Elevate Marketing LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
