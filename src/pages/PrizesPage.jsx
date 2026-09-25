import { motion } from 'framer-motion'
import { Award, Zap, ShieldCheck, Video, Flame } from 'lucide-react'

export default function PrizesPage() {
  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.badge}>REWARDS & RECOGNITION &bull; STARK GRANTS</div>
          <h1 style={styles.title}>STARK GRANTS & PRIZES</h1>
          <p style={styles.subtitle}>
            Shree L. R. Tiwari College Of Engineering &bull; Cash Prizes, Trophies & Track Badges
          </p>

          {/* Dedicated Prize Video Container */}
          <div style={styles.prizeVideoFrame}>
            <div style={styles.prizeVideoHeader}>
              <Video size={16} color="#FFD700" />
              <span>STARK GRANTS EXCLUSIVE REVEAL VIDEO</span>
            </div>
            <div style={styles.prizeVideoPlaceholder}>
              <Flame size={40} color="#FFD700" />
              <div style={styles.placeholderText}>
                [ PRIZE ANNOUNCEMENT VIDEO READY FOR DEPLOYMENT ]
              </div>
            </div>
          </div>

          {/* 3-Tier Podium Grid */}
          <div style={styles.podiumGrid}>
            {/* 2nd Place: Silver */}
            <div style={{ ...styles.podiumCard, borderColor: '#C0C0C0' }}>
              <div style={styles.rankBadge}>🥈 2ND PLACE</div>
              <h3 style={{ ...styles.grantTitle, color: '#C0C0C0' }}>SILVER STARK GRANT</h3>
              <div style={styles.prizeAmount}>₹ [TBD] CASH</div>
              <p style={styles.grantDesc}>
                Official Silver Trophy + Certificate of Excellence + Cloud Credits Package.
              </p>
            </div>

            {/* 1st Place: Gold */}
            <div style={{ ...styles.podiumCard, ...styles.goldCard }}>
              <div style={styles.rankBadgeGold}>🥇 1ST PLACE WINNER</div>
              <h3 style={styles.goldTitle}>GOLD STARK GRANT</h3>
              <div style={styles.goldAmount}>₹ [TBD] CASH</div>
              <p style={styles.grantDesc}>
                Grand Winner Trophy + Internship Opportunities + Stark Industries Champion Badges.
              </p>
            </div>

            {/* 3rd Place: Bronze */}
            <div style={{ ...styles.podiumCard, borderColor: '#CD7F32' }}>
              <div style={styles.rankBadge}>🥉 3RD PLACE</div>
              <h3 style={{ ...styles.grantTitle, color: '#CD7F32' }}>BRONZE STARK GRANT</h3>
              <div style={styles.prizeAmount}>₹ [TBD] CASH</div>
              <p style={styles.grantDesc}>
                Official Bronze Trophy + Certificate + Hardware Swag Kits.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const styles = {
  root: {
    background: '#050505',
    color: '#FFFFFF',
    minHeight: '100vh',
    padding: '4rem 1.5rem',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  badge: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.75rem',
    color: '#FFD700',
    letterSpacing: '0.2em',
    marginBottom: '0.5rem',
  },
  title: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
    fontWeight: 900,
    color: '#00F0FF',
    letterSpacing: '0.1em',
    margin: 0,
    textShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
  },
  subtitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',
    color: '#9CA3AF',
    marginTop: '0.5rem',
    marginBottom: '2.5rem',
  },

  /* Video Frame */
  prizeVideoFrame: {
    background: 'rgba(10, 15, 25, 0.9)',
    border: '1px solid rgba(255, 215, 0, 0.4)',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '3rem',
    boxShadow: '0 0 30px rgba(255, 215, 0, 0.15)',
  },
  prizeVideoHeader: {
    padding: '0.75rem 1.25rem',
    background: 'rgba(15, 12, 5, 0.95)',
    borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.7rem',
    color: '#FFD700',
  },
  prizeVideoPlaceholder: {
    height: '220px',
    background: '#030508',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  placeholderText: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.85rem',
    color: '#FFD700',
    letterSpacing: '0.1em',
  },

  /* Podium */
  podiumGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    alignItems: 'center',
  },
  podiumCard: {
    background: 'rgba(10, 15, 25, 0.75)',
    border: '1px solid',
    borderRadius: '10px',
    padding: '2rem',
    textAlign: 'center',
  },
  goldCard: {
    borderColor: '#FFD700',
    background: 'rgba(255, 215, 0, 0.08)',
    boxShadow: '0 0 40px rgba(255, 215, 0, 0.2)',
    transform: 'scale(1.05)',
  },
  rankBadge: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 800,
    color: '#9CA3AF',
    marginBottom: '0.75rem',
  },
  rankBadgeGold: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 900,
    color: '#FFD700',
    marginBottom: '0.75rem',
  },
  grantTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.2rem',
    margin: 0,
  },
  goldTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.4rem',
    color: '#FFD700',
    margin: 0,
  },
  prizeAmount: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#FFFFFF',
    marginTop: '0.5rem',
  },
  goldAmount: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.8rem',
    fontWeight: 900,
    color: '#FFD700',
    marginTop: '0.5rem',
  },
  grantDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    color: '#D1D5DB',
    marginTop: '1rem',
    lineHeight: '1.5',
  },
}
