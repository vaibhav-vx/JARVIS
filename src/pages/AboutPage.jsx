import { motion } from 'framer-motion'
import { Shield, Radio, Terminal, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.badge}>CLASSIFIED TRANSMISSION &bull; STARK INITIATIVE</div>
          <h1 style={styles.title}>THE STARK INITIATIVE</h1>
          <p style={styles.subtitle}>
            Shree L. R. Tiwari College Of Engineering presents JARVIS Hackathon Protocol 4.0
          </p>

          {/* Split Layout: Video Frame Left, Mission Copy Right */}
          <div style={styles.grid}>
            {/* Left Column: Video Transmission Frame */}
            <div style={styles.videoCard}>
              <div style={styles.videoHeader}>
                <div style={styles.videoHeaderLeft}>
                  <Radio size={16} color="#00F0FF" className="animate-pulse" />
                  <span style={styles.videoHeaderText}>LIVE TRANSMISSION [ SOURCE: STARK ARCHIVES ]</span>
                </div>
                <div style={styles.signalBadge}>ENCRYPTED 1080P</div>
              </div>

              <div style={styles.videoWrapper}>
                <video
                  autoPlay
                  muted
                  controls
                  playsInline
                  style={styles.video}
                  poster="/posters/start-poster.jpg"
                >
                  <source src="/videos/iron-man-scene.mp4" type="video/mp4" />
                </video>
              </div>

              <div style={styles.videoFooter}>
                <span>SCENE: "I AM IRON MAN" &bull; ARCHIVE REF #003412</span>
                <span style={{ color: '#00F0FF' }}>STATUS: VERIFIED</span>
              </div>
            </div>

            {/* Right Column: Mission Briefing */}
            <div style={styles.briefingCard}>
              <h3 style={styles.briefingTitle}>
                <Terminal size={20} color="#00F0FF" />
                <span>MISSION BRIEFING</span>
              </h3>

              <p style={styles.paragraph}>
                At **Shree L. R. Tiwari College Of Engineering**, the JARVIS Hackathon was forged to bring together student developers, AI researchers, and engineers to build solutions that redefine technological boundaries.
              </p>

              <p style={styles.paragraph}>
                Just as Tony Stark built JARVIS to automate his suit telemetry and assist humanity, our hackathon challenges participants to build autonomous, secure, and revolutionary software over **48 continuous hours**.
              </p>

              <div style={styles.highlightsGrid}>
                <div style={styles.highlightBox}>
                  <Shield size={20} color="#E62429" />
                  <div>
                    <h4 style={styles.boxTitle}>48-HOUR SPRINT</h4>
                    <p style={styles.boxDesc}>Non-stop building & mentoring</p>
                  </div>
                </div>

                <div style={styles.highlightBox}>
                  <Award size={20} color="#FFD700" />
                  <div>
                    <h4 style={styles.boxTitle}>STARK GRANTS</h4>
                    <p style={styles.boxDesc}>Cash prizes & track trophies</p>
                  </div>
                </div>
              </div>
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
    maxWidth: '1200px',
    margin: '0 auto',
  },
  badge: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.75rem',
    color: '#E62429',
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
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '2.5rem',
  },

  /* Video Card */
  videoCard: {
    background: 'rgba(10, 15, 25, 0.85)',
    border: '1px solid rgba(0, 240, 255, 0.3)',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)',
  },
  videoHeader: {
    background: 'rgba(5, 8, 15, 0.95)',
    padding: '0.75rem 1rem',
    borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  videoHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  videoHeaderText: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.65rem',
    color: '#00F0FF',
    letterSpacing: '0.1em',
  },
  signalBadge: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.6rem',
    color: '#10B981',
    border: '1px solid #10B981',
    padding: '2px 6px',
    borderRadius: '2px',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
    background: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  scanLines: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
    backgroundSize: '100% 4px',
    pointerEvents: 'none',
  },
  videoFooter: {
    padding: '0.75rem 1rem',
    background: 'rgba(5, 8, 15, 0.95)',
    borderTop: '1px solid rgba(0, 240, 255, 0.2)',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.68rem',
    color: '#9CA3AF',
    display: 'flex',
    justifyContent: 'space-between',
  },

  /* Briefing Card */
  briefingCard: {
    background: 'rgba(10, 15, 25, 0.75)',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    borderRadius: '8px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  briefingTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.2rem',
    color: '#00F0FF',
    margin: 0,
  },
  paragraph: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    color: '#D1D5DB',
    lineHeight: '1.7',
    margin: 0,
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginTop: '1rem',
  },
  highlightBox: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '6px',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  boxTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.75rem',
    color: '#FFFFFF',
    margin: 0,
  },
  boxDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.72rem',
    color: '#9CA3AF',
    margin: 0,
  },
}
