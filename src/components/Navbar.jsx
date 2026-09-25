import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield, Award } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  if (location.pathname === '/') return null

  const navLinks = [
    { name: 'HUB', path: '/home' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROTOCOLS', path: '/protocols' },
    { name: 'ARMOR VAULT', path: '/armor-vault' },
    { name: 'V.I.S.I.O.N. (AR)', path: '/vision' },
    { name: 'PRIZES', path: '/prizes' },
    { name: 'TIMELINE', path: '/timeline' },
    { name: 'SPONSORS', path: '/sponsors' },
    { name: 'RULES', path: '/rules' },
    { name: 'FAQ', path: '/faq' },
  ]

  return (
    <header style={styles.header}>
      <div style={styles.topBarGlow} />

      <div style={styles.container}>
        {/* Stark Industries Emblem & Title */}
        <Link to="/home" style={styles.brandLink}>
          <div style={styles.reactorBadge}>
            <div style={styles.reactorInner} />
          </div>
          <div style={styles.brandTextWrap}>
            <span style={styles.brandTitle}>J.A.R.V.I.S.</span>
            <span style={styles.brandTag}>STARK TECH</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...styles.navItem,
                  color: isActive ? '#FFD700' : '#E2E8F0',
                  borderBottom: isActive ? '2px solid #E62429' : '2px solid transparent',
                  background: isActive ? 'rgba(230, 36, 41, 0.12)' : 'transparent',
                }}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Primary CTA */}
        <div style={styles.ctaWrap}>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <motion.button
              style={styles.registerBtn}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(230, 36, 41, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              [ INITIALIZE REGISTRATION ]
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            style={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} color="#E62429" /> : <Menu size={26} color="#E62429" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            style={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  ...styles.mobileNavItem,
                  color: location.pathname === link.path ? '#FFD700' : '#E2E8F0',
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              style={styles.mobileRegisterBtn}
            >
              [ REGISTER TEAM ]
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const RED = '#E62429'
const GOLD = '#FFD700'
const BG = '#08080A'

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(8, 8, 10, 0.92)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(230, 36, 41, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.8)',
  },
  topBarGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, transparent, ${RED}, ${GOLD}, ${RED}, transparent)`,
  },
  container: {
    maxWidth: '1350px',
    margin: '0 auto',
    padding: '0.8rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
  },
  reactorBadge: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    border: `2px solid ${RED}`,
    background: 'rgba(230, 36, 41, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 0 12px ${RED}`,
  },
  reactorInner: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: GOLD,
    boxShadow: `0 0 10px ${GOLD}`,
  },
  brandTextWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  brandTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 900,
    fontSize: '1.25rem',
    color: '#FFFFFF',
    letterSpacing: '0.12em',
    lineHeight: 1,
  },
  brandTag: {
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 700,
    fontSize: '0.65rem',
    color: RED,
    letterSpacing: '0.2em',
    marginTop: '2px',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  navItem: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.66rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textDecoration: 'none',
    padding: '0.45rem 0.75rem',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
  },
  ctaWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  registerBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#FFFFFF',
    background: `linear-gradient(135deg, ${RED} 0%, #991B1B 100%)`,
    border: `1px solid ${GOLD}`,
    padding: '0.6rem 1.3rem',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '0.1em',
    boxShadow: `0 0 15px ${RED}50`,
    transition: 'all 0.25s ease',
  },
  mobileToggle: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
  },
  mobileMenu: {
    background: '#0a0a0e',
    borderBottom: `1px solid ${RED}`,
    padding: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  mobileNavItem: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.8rem',
    textDecoration: 'none',
    letterSpacing: '0.1em',
    padding: '0.4rem 0',
  },
  mobileRegisterBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 800,
    color: '#FFFFFF',
    background: RED,
    textDecoration: 'none',
    marginTop: '0.5rem',
    padding: '0.75rem',
    textAlign: 'center',
    borderRadius: '4px',
  },
}
