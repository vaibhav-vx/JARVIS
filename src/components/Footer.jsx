import { Link } from 'react-router-dom'
import { Zap, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left Column */}
        <div style={styles.col}>
          <div style={styles.brandHeader}>
            <Zap size={20} color="#2563eb" />
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <Globe size={16} color="#2563eb" />
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
        <p style={{ color: '#2563eb' }}>STARK INDUSTRIES PROTOCOL 4.0</p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#111827',
    borderTop: '1px solid #374151',
    paddingTop: '3rem',
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
    color: '#f9fafb',
    letterSpacing: '0.1em',
  },
  collegeName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#f9fafb',
  },
  tagline: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: '0.85rem',
    color: '#9ca3af',
    letterSpacing: '0.05em',
  },
  eventDates: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.72rem',
    color: '#2563eb',
    background: '#1f2937',
    border: '1px solid #374151',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    marginTop: '0.5rem',
    width: 'fit-content',
  },
  sectionHeader: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.8rem',
    color: '#2563eb',
    letterSpacing: '0.15em',
    marginBottom: '0.25rem',
  },
  creditCard: {
    background: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '6px',
    padding: '0.6rem 1rem',
  },
  creditRole: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.62rem',
    color: '#9ca3af',
    letterSpacing: '0.1em',
  },
  creditName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#f9fafb',
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
    color: '#f9fafb',
    textDecoration: 'none',
    background: '#1f2937',
    border: '1px solid #374151',
    padding: '0.5rem 0.8rem',
    borderRadius: '6px',
  },
  quickNav: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  navLink: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.68rem',
    color: '#9ca3af',
    textDecoration: 'none',
  },
  bottomBar: {
    borderTop: '1px solid #374151',
    padding: '1.25rem 1.5rem',
    textAlign: 'center',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#6b7280',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
}
