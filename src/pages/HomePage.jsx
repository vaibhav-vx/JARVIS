import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Zap, Cpu, Award, Calendar, Eye } from 'lucide-react'

export default function HomePage() {
  /* Countdown Timer Logic for Oct 16, 2026 */
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('October 16, 2026 09:00:00 IST').getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const diff = Math.max(0, targetDate - now)

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div style={styles.root}>
      {/* ── HERO CONSOLE ───────────────────────── */}
      <section style={styles.heroSection}>
        {/* Arc Reactor Graphic */}
        <div style={styles.reactorWrap}>
          <div style={styles.reactorRingOuter} />
          <div style={styles.reactorRingInner} />
          <div style={styles.reactorCore} />
        </div>

        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={styles.collegeBadge}>
            SHREE L. R. TIWARI COLLEGE OF ENGINEERING
          </div>

          <h1 style={styles.heroTitle}>J.A.R.V.I.S.</h1>
          <h2 style={styles.heroSubtitle}>HACKATHON &bull; PROTOCOL 4.0</h2>

          <p style={styles.heroTagline}>
            Activating Intelligence. Assembling Innovators.
          </p>

          {/* Countdown Clock */}
          <div style={styles.countdownContainer}>
            <div style={styles.countdownTitle}>[ T-MINUS TO MISSION LAUNCH ]</div>
            <div style={styles.timerGrid}>
              <div style={styles.timerBox}>
                <span style={styles.timerValue}>{String(timeLeft.days).padStart(2, '0')}</span>
                <span style={styles.timerLabel}>DAYS</span>
              </div>
              <span style={styles.timerColon}>:</span>
              <div style={styles.timerBox}>
                <span style={styles.timerValue}>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span style={styles.timerLabel}>HOURS</span>
              </div>
              <span style={styles.timerColon}>:</span>
              <div style={styles.timerBox}>
                <span style={styles.timerValue}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span style={styles.timerLabel}>MINS</span>
              </div>
              <span style={styles.timerColon}>:</span>
              <div style={styles.timerBox}>
                <span style={styles.timerValue}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span style={styles.timerLabel}>SECS</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={styles.heroBtnGroup}>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <motion.button
                style={styles.primaryBtn}
                whileHover={{ backgroundColor: '#1d4ed8', scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                [ INITIALIZE REGISTRATION ]
              </motion.button>
            </Link>

            <Link to="/protocols" style={{ textDecoration: 'none' }}>
              <motion.button
                style={styles.secondaryBtn}
                whileHover={{ backgroundColor: '#374151', scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                [ DISCOVER PROTOCOLS ]
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── TELEMETRY STATS BAR ───────────────────── */}
      <section style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>48:00:00</div>
            <div style={styles.statLabel}>NON-STOP HACKATHON</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>3 – 5</div>
            <div style={styles.statLabel}>MEMBERS PER TEAM</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>4 AI PROTOCOLS</div>
            <div style={styles.statLabel}>SPECIALIZED TRACKS</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statNumber, color: '#f9fafb' }}>STARK GRANTS</div>
            <div style={styles.statLabel}>CASH & REWARDS POOL</div>
          </div>
        </div>
      </section>

      {/* ── CENTRAL COMMAND HUB CARDS ─────────────── */}
      <section style={styles.hubSection}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>[ STARK COMMAND HUBS ]</h3>
          <p style={styles.sectionSub}>Access specialized modules and event protocols</p>
        </div>

        <div style={styles.hubGridCards}>
          {/* Card 1: About */}
          <Link to="/about" style={styles.hubCard}>
            <Shield size={28} color="#2563eb" />
            <h4 style={styles.hubCardTitle}>THE STARK INITIATIVE</h4>
            <p style={styles.hubCardDesc}>
              Classified mission briefing & Iron Man video transmission.
            </p>
            <div style={styles.hubCardLink}>EXPLORE ABOUT &rsaquo;</div>
          </Link>

          {/* Card 2: Protocols */}
          <Link to="/protocols" style={styles.hubCard}>
            <Cpu size={28} color="#2563eb" />
            <h4 style={styles.hubCardTitle}>AI PROTOCOLS</h4>
            <p style={styles.hubCardDesc}>
              4 Specialized tracks: J.A.R.V.I.S., F.R.I.D.A.Y., E.D.I.T.H., H.O.M.E.R.
            </p>
            <div style={styles.hubCardLink}>VIEW PROTOCOLS &rsaquo;</div>
          </Link>

          {/* Card 3: V.I.S.I.O.N. AR */}
          <Link to="/vision" style={styles.hubCard}>
            <Eye size={28} color="#2563eb" />
            <h4 style={styles.hubCardTitle}>V.I.S.I.O.N. (AR)</h4>
            <p style={styles.hubCardDesc}>
              WebAR Tech Treasure Hunt on campus using phone camera.
            </p>
            <div style={styles.hubCardLink}>LAUNCH AR SCANNER &rsaquo;</div>
          </Link>

          {/* Card 4: Armor Vault */}
          <Link to="/armor-vault" style={styles.hubCard}>
            <Zap size={28} color="#2563eb" />
            <h4 style={styles.hubCardTitle}>STARK ARMOR VAULT</h4>
            <p style={styles.hubCardDesc}>
              Interactive 3D Iron Man Suit Specs (Mark I to Mark LXXXV).
            </p>
            <div style={styles.hubCardLink}>ENTER VAULT &rsaquo;</div>
          </Link>

          {/* Card 5: Prizes */}
          <Link to="/prizes" style={styles.hubCard}>
            <Award size={28} color="#2563eb" />
            <h4 style={styles.hubCardTitle}>STARK GRANTS</h4>
            <p style={styles.hubCardDesc}>
              Gold, Silver, Bronze podium prizes & special track awards.
            </p>
            <div style={styles.hubCardLink}>VIEW GRANTS &rsaquo;</div>
          </Link>

          {/* Card 6: Timeline */}
          <Link to="/timeline" style={styles.hubCard}>
            <Calendar size={28} color="#2563eb" />
            <h4 style={styles.hubCardTitle}>MISSION SCHEDULE</h4>
            <p style={styles.hubCardDesc}>
              Flight path timeline for October 16–17, 2026.
            </p>
            <div style={styles.hubCardLink}>VIEW TIMELINE &rsaquo;</div>
          </Link>
        </div>
      </section>
    </div>
  )
}

const styles = {
  root: {
    position: 'relative',
    color: '#f9fafb',
    minHeight: '100vh',
    overflowX: 'hidden',
  },

  /* Hero Section */
  heroSection: {
    position: 'relative',
    zIndex: 1,
    padding: '5rem 1.5rem 4rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  reactorWrap: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '320px',
    height: '320px',
    pointerEvents: 'none',
    opacity: 0.35,
  },
  reactorRingOuter: {
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    border: `2px dashed #2563eb`,
    animation: 'spin 30s linear infinite',
  },
  reactorRingInner: {
    position: 'absolute',
    inset: '20%',
    borderRadius: '50%',
    border: `1.5px solid #1d4ed8`,
    animation: 'reactor-pulse 3s ease-in-out infinite',
  },
  reactorCore: {
    position: 'absolute',
    inset: '40%',
    borderRadius: '50%',
    background: '#2563eb',
    boxShadow: `0 0 50px #2563eb`,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '900px',
  },
  collegeBadge: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
    fontWeight: 700,
    color: '#2563eb',
    letterSpacing: '0.2em',
    marginBottom: '0.75rem',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 'clamp(3.5rem, 10vw, 7rem)',
    fontWeight: 900,
    color: '#f9fafb',
    letterSpacing: '0.15em',
    lineHeight: 1,
    margin: 0,
  },
  heroSubtitle: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: 'clamp(1.2rem, 4vw, 2.2rem)',
    fontWeight: 700,
    color: '#2563eb',
    letterSpacing: '0.3em',
    marginTop: '0.5rem',
    textTransform: 'uppercase',
  },
  heroTagline: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
    color: '#9ca3af',
    marginTop: '0.75rem',
  },

  /* Countdown */
  countdownContainer: {
    marginTop: '2.5rem',
    background: 'linear-gradient(135deg, #000000 0%, #030303 14%, #08080a 28%, #0d0d10 42%, #131316 57%, #17171a 71%, #1e1e22 85%, #242428 100%)',
    border: '1px solid #374151',
    borderRadius: '10px',
    padding: '1.5rem 2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    display: 'inline-block',
  },
  countdownTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.7rem',
    color: '#2563eb',
    letterSpacing: '0.2em',
    marginBottom: '1rem',
  },
  timerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  timerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timerValue: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 'clamp(1.8rem, 5vw, 3rem)',
    fontWeight: 800,
    color: '#f9fafb',
    lineHeight: 1,
  },
  timerLabel: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.6rem',
    color: '#9ca3af',
    marginTop: '0.3rem',
    letterSpacing: '0.1em',
  },
  timerColon: {
    fontSize: '2rem',
    color: '#2563eb',
    fontWeight: 700,
    marginBottom: '1rem',
  },

  /* CTAs */
  heroBtnGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.25rem',
    marginTop: '2.5rem',
  },
  primaryBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 800,
    color: '#f9fafb',
    background: '#2563eb',
    border: '1px solid #374151',
    padding: '1rem 2.2rem',
    borderRadius: '6px',
    cursor: 'pointer',
    letterSpacing: '0.12em',
    transition: 'all 0.2s ease',
  },
  secondaryBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#f9fafb',
    background: '#1f2937',
    border: '1px solid #374151',
    padding: '1rem 2.2rem',
    borderRadius: '6px',
    cursor: 'pointer',
    letterSpacing: '0.12em',
    transition: 'all 0.2s ease',
  },

  /* Stats Section */
  statsSection: {
    position: 'relative',
    zIndex: 1,
    borderTop: `1px solid #374151`,
    borderBottom: `1px solid #374151`,
    background: '#1f2937',
    padding: '2rem 1.5rem',
  },
  statsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    textAlign: 'center',
  },
  statCard: {
    padding: '1rem',
  },
  statNumber: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#2563eb',
    letterSpacing: '0.05em',
  },
  statLabel: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#9ca3af',
    letterSpacing: '0.1em',
    marginTop: '0.25rem',
  },

  /* Hub Cards Section */
  hubSection: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '5rem 1.5rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.6rem',
    fontWeight: 800,
    color: '#f9fafb',
    letterSpacing: '0.15em',
    margin: 0,
  },
  sectionSub: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    color: '#9ca3af',
    marginTop: '0.5rem',
  },
  hubGridCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.75rem',
  },
  hubCard: {
    background: 'linear-gradient(135deg, #000000 0%, #030303 14%, #08080a 28%, #0d0d10 42%, #131316 57%, #17171a 71%, #1e1e22 85%, #242428 100%)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    padding: '2rem 1.5rem',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    transition: 'all 0.3s ease',
  },
  hubCardTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#f9fafb',
    margin: 0,
    letterSpacing: '0.08em',
  },
  hubCardDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    color: '#9ca3af',
    lineHeight: '1.5',
    margin: 0,
  },
  hubCardLink: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#2563eb',
    letterSpacing: '0.1em',
    marginTop: 'auto',
  },
}
