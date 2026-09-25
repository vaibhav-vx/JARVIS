import { Link } from 'react-router-dom'
import { Zap, Globe, Code, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.topGlow} />

      <div style={styles.container}>
        {/* Left Column: College & Event */}
        <div style={styles.col}>
          <div style={styles.brandHeader}>
            <Zap size={20} color="#00F0FF" />
            <span style={styles.brandTitle}>J.A.R.V.I.S. HACKATHON</span>
          </div>
          <p style={styles.collegeName}>
            Shree L. R. Tiwari College Of Engineering
          </p>
          <p style={styles.tagline}>
            Activating Intelligence. Assembling Innovators.
          </p>
          <div style={styles.eventDates}>
            OCTOBER 16–17, 2026 &nbsp;|&nbsp; 48:00:00 HACKATHON
          </div>
        </div>

        {/* Center Column: Leadership Credits */}
        <div style={styles.col}>
          <h4 style={styles.sectionHeader}>COMMAND STRUCTURE</h4>
          <div style={styles.creditCard}>
            <div style={styles.creditRole}>TECHNICAL HEAD</div>
            <div style={styles.creditName}>Vaibhav</div>
          </div>
          <div style={styles.creditCard}>
            <div style={styles.creditRole}>TECHNICAL COORDINATOR</div>
            <div style={styles.creditName}>Mr. Manthan Joshi</div>
          </div>
        </div>

        {/* Right Column: Links & Social */}
        <div style={styles.col}>
          <h4 style={styles.sectionHeader}>COMMUNICATION CHANNELS</h4>
          <div style={styles.socialLinks}>
            <a
              href="https://www.instagram.com/slrtce_official/"
              target="_blank"
              rel="noreferrer"
              style={styles.socialBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram (@slrtce_official)</span>
            </a>
            <a
              href="https://slrtce.in/"
              target="_blank"
              rel="noreferrer"
              style={styles.socialBtn}
            >
              <Globe size={16} color="#00F0FF" />
              <span>Official Website (slrtce.in)</span>
            </a>
          </div>

          <div style={styles.quickNav}>
            <Link to="/home" style={styles.navLink}>Hub</Link>
            <Link to="/protocols" style={styles.navLink}>Protocols</Link>
            <Link to="/vision" style={styles.navLink}>V.I.S.I.O.N. AR</Link>
            <Link to="/register" style={styles.navLink}>Register</Link>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p>© 2026 JARVIS Hackathon — Shree L. R. Tiwari College Of Engineering. All Rights Reserved.</p>
        <p style={{ color: '#00F0FF' }}>STARK INDUSTRIES PROTOCOL 4.0</p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    position: 'relative',
    background: '#040407',
    borderTop: '1px solid rgba(0, 240, 255, 0.2)',
    paddingTop: '3rem',
    overflow: 'hidden',
  },
  topGlow: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #00F0FF, transparent)',
    boxShadow: '0 0 15px #00F0FF',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem 3rem 1.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2.5rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  brandHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  brandTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 800,
    color: '#00F0FF',
    letterSpacing: '0.1em',
  },
  collegeName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#FFFFFF',
  },
  tagline: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: '0.85rem',
    color: '#9CA3AF',
    letterSpacing: '0.05em',
  },
  eventDates: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.72rem',
    color: '#00F0FF',
    background: 'rgba(0, 240, 255, 0.05)',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    marginTop: '0.5rem',
    width: 'fit-content',
  },
  sectionHeader: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.8rem',
    color: '#E62429',
    letterSpacing: '0.15em',
    marginBottom: '0.25rem',
  },
  creditCard: {
    background: 'rgba(15, 20, 30, 0.6)',
    border: '1px solid rgba(0, 240, 255, 0.15)',
    borderRadius: '4px',
    padding: '0.6rem 1rem',
  },
  creditRole: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.62rem',
    color: '#00F0FF',
    letterSpacing: '0.1em',
  },
  creditName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginTop: '0.1rem',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  socialBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8rem',
    color: '#D1D5DB',
    textDecoration: 'none',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '0.5rem 0.8rem',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
  },
  quickNav: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  navLink: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.68rem',
    color: '#9CA3AF',
    textDecoration: 'none',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255,255,255,0.05)',
    padding: '1.25rem 1.5rem',
    textAlign: 'center',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#6B7280',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
}
