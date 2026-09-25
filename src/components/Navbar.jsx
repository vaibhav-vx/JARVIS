import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Don't show navbar on landing page (/)
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
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/home" style={styles.logoLink}>
          <div style={styles.logoIcon}>
            <Zap size={18} color="#00F0FF" />
          </div>
          <span style={styles.logoText}>J.A.R.V.I.S.</span>
          <span style={styles.logoTag}>HACKATHON</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...styles.navItem,
                  color: isActive ? '#00F0FF' : '#9CA3AF',
                  borderBottom: isActive ? '2px solid #00F0FF' : '2px solid transparent',
                  textShadow: isActive ? '0 0 10px rgba(0,240,255,0.5)' : 'none',
                }}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Register CTA */}
        <div style={styles.ctaWrap}>
          <Link to="/register">
            <motion.button
              style={styles.registerBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [ INITIALIZE REGISTRATION ]
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            style={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} color="#00F0FF" /> : <Menu size={24} color="#00F0FF" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
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
                  color: location.pathname === link.path ? '#00F0FF' : '#D1D5DB',
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

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(5, 5, 5, 0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
  },
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0.75rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '1px solid #00F0FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 240, 255, 0.1)',
    boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
  },
  logoText: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 800,
    fontSize: '1.2rem',
    color: '#00F0FF',
    letterSpacing: '0.1em',
  },
  logoTag: {
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 700,
    fontSize: '0.75rem',
    color: '#E62429',
    letterSpacing: '0.15em',
    padding: '2px 6px',
    border: '1px solid #E62429',
    borderRadius: '2px',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    '@media (max-width: 992px)': {
      display: 'none',
    },
  },
  navItem: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.68rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textDecoration: 'none',
    padding: '0.4rem 0',
    transition: 'all 0.2s ease',
  },
  ctaWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  registerBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.7rem',
    fontWeight: 700,
    color: '#E62429',
    background: 'rgba(230, 36, 41, 0.1)',
    border: '1px solid #E62429',
    padding: '0.5rem 1.2rem',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '0.08em',
    boxShadow: '0 0 12px rgba(230, 36, 41, 0.2)',
  },
  mobileToggle: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
  },
  mobileMenu: {
    background: '#0a0a0f',
    borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
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
    fontWeight: 700,
    color: '#E62429',
    textDecoration: 'none',
    marginTop: '0.5rem',
    padding: '0.6rem',
    textAlign: 'center',
    border: '1px solid #E62429',
    background: 'rgba(230, 36, 41, 0.15)',
  },
}
