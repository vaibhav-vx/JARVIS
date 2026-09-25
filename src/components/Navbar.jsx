import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

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
      <div style={styles.container}>
        {/* Brand */}
        <Link to="/home" style={styles.brandLink}>
          <Shield size={22} color="#f9fafb" />
          <div style={styles.brandTextWrap}>
            <span style={styles.brandTitle}>J.A.R.V.I.S.</span>
            <span style={styles.brandTag}>STARK TECH</span>
          </div>
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
                  color: isActive ? '#f9fafb' : '#9ca3af',
                  borderBottom: isActive ? '2px solid #4b5563' : '2px solid transparent',
                  background: isActive ? '#1f2937' : 'transparent',
                }}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Primary CTA — Titanium Gunmetal Button */}
        <div style={styles.ctaWrap}>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <motion.button
              style={styles.registerBtn}
              whileHover={{ backgroundColor: '#363e4e', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              [ INITIALIZE REGISTRATION ]
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            style={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} color="#f9fafb" /> : <Menu size={26} color="#f9fafb" />}
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
                  color: location.pathname === link.path ? '#f9fafb' : '#9ca3af',
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
    background: 'rgba(17, 24, 39, 0.95)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid #374151',
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
    gap: '0.6rem',
    textDecoration: 'none',
  },
  brandTextWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  brandTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 900,
    fontSize: '1.25rem',
    color: '#f9fafb',
    letterSpacing: '0.12em',
    lineHeight: 1,
  },
  brandTag: {
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 700,
    fontSize: '0.65rem',
    color: '#9ca3af',
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
    color: '#f9fafb',
    background: 'linear-gradient(135deg, #181b22 0%, #2b313e 100%)',
    border: '1px solid #4b5563',
    padding: '0.65rem 1.3rem',
    borderRadius: '6px',
    cursor: 'pointer',
    letterSpacing: '0.1em',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.2s ease',
  },
  mobileToggle: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
  },
  mobileMenu: {
    background: '#111827',
    borderBottom: '1px solid #374151',
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
    color: '#f9fafb',
    background: 'linear-gradient(135deg, #181b22 0%, #2b313e 100%)',
    border: '1px solid #4b5563',
    textDecoration: 'none',
    marginTop: '0.5rem',
    padding: '0.75rem',
    textAlign: 'center',
    borderRadius: '6px',
  },
}
