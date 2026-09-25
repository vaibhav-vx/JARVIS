import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Camera, ShieldCheck, Lock, Sparkles, AlertCircle } from 'lucide-react'

export default function VisionPage() {
  const [cameraActive, setCameraActive] = useState(false)

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.badge}>PROJECT V.I.S.I.O.N. &bull; WEBAR TECH TREASURE HUNT</div>
          <h1 style={styles.title}>V.I.S.I.O.N. AR SCANNER</h1>
          <p style={styles.subtitle}>
            Visual Intelligent System Image Tracking & Observation Network &bull; Shree L. R. Tiwari College Of Engineering
          </p>

          {/* AR Scanner HUD Box */}
          <div style={styles.scannerBox}>
            <div style={styles.scannerHeader}>
              <div style={styles.scannerHeaderLeft}>
                <Eye size={18} color="#E62429" />
                <span>V.I.S.I.O.N. CAMERA SENSOR [ TARGET IMAGE TRACKING ]</span>
              </div>
              <div style={styles.securityTag}>
                <ShieldCheck size={14} color="#10B981" />
                <span>HASH SECURED</span>
              </div>
            </div>

            <div style={styles.viewfinder}>
              {!cameraActive ? (
                <div style={styles.placeholderState}>
                  <Camera size={48} color="#00F0FF" />
                  <h3 style={styles.placeholderTitle}>ACTIVATE V.I.S.I.O.N. SENSOR</h3>
                  <p style={styles.placeholderText}>
                    Point your device camera at physical **Stark AR Target Posters** across campus to trigger 3D holograms & decrypt riddles.
                  </p>
                  <button
                    onClick={() => setCameraActive(true)}
                    style={styles.activateBtn}
                  >
                    [ INITIALIZE CAMERA SENSOR ]
                  </button>
                </div>
              ) : (
                <div style={styles.activeState}>
                  <div style={styles.hudOverlayGrid} />
                  <div style={styles.targetFrame}>
                    <div style={{ ...styles.corner, top: 0, left: 0, borderWidth: '3px 0 0 3px' }} />
                    <div style={{ ...styles.corner, top: 0, right: 0, borderWidth: '3px 3px 0 0' }} />
                    <div style={{ ...styles.corner, bottom: 0, left: 0, borderWidth: '0 0 3px 3px' }} />
                    <div style={{ ...styles.corner, bottom: 0, right: 0, borderWidth: '0 3px 3px 0' }} />
                    <div style={styles.scanningLine} />
                  </div>
                  <div style={styles.statusText}>
                    [ V.I.S.I.O.N. LIVE CAMERA ACTIVE &bull; SCANNING FOR STARK TARGET MARKER... ]
                  </div>
                  <button
                    onClick={() => setCameraActive(false)}
                    style={styles.deactivateBtn}
                  >
                    CLOSE SENSOR
                  </button>
                </div>
              )}
            </div>

            <div style={styles.scannerFooter}>
              <span>ENCRYPTION: SHA-256 HASH CHECK ACTIVE</span>
              <span style={{ color: '#E62429' }}>PURE IMAGE AR (NO QR CODES)</span>
            </div>
          </div>

          {/* Treasure Hunt Instructions */}
          <div style={styles.rulesGrid}>
            <div style={styles.ruleCard}>
              <div style={styles.ruleNum}>01</div>
              <h4>EXPLORE CAMPUS</h4>
              <p>Locate physical Stark Target Posters placed around campus buildings.</p>
            </div>
            <div style={styles.ruleCard}>
              <div style={styles.ruleNum}>02</div>
              <h4>SCAN AR TARGET</h4>
              <p>Point V.I.S.I.O.N. camera at the target poster to trigger 3D AR holograms.</p>
            </div>
            <div style={styles.ruleCard}>
              <div style={styles.ruleNum}>03</div>
              <h4>SOLVE & WIN</h4>
              <p>Decrypt the classified riddle and log your checkpoint on the leaderboard!</p>
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
    maxWidth: '1000px',
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
    marginBottom: '2.5rem',
  },

  /* Scanner Box */
  scannerBox: {
    background: 'rgba(10, 15, 25, 0.9)',
    border: '1px solid rgba(0, 240, 255, 0.3)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 0 35px rgba(0, 240, 255, 0.15)',
    marginBottom: '3rem',
  },
  scannerHeader: {
    padding: '0.85rem 1.25rem',
    background: 'rgba(5, 8, 15, 0.95)',
    borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scannerHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.72rem',
    color: '#E62429',
    letterSpacing: '0.1em',
  },
  securityTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.62rem',
    color: '#10B981',
  },
  viewfinder: {
    position: 'relative',
    height: '380px',
    background: '#030508',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderState: {
    textAlign: 'center',
    padding: '2rem',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  placeholderTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.2rem',
    color: '#00F0FF',
    margin: 0,
  },
  placeholderText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    color: '#9CA3AF',
    lineHeight: '1.5',
    margin: 0,
  },
  activateBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#050505',
    background: '#00F0FF',
    border: 'none',
    padding: '0.85rem 1.8rem',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '0.1em',
    marginTop: '0.5rem',
    boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
  },
  activeState: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#0a0d14',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hudOverlayGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
  },
  targetFrame: {
    position: 'relative',
    width: '240px',
    height: '240px',
    border: '1px dashed rgba(0, 240, 255, 0.4)',
  },
  corner: {
    position: 'absolute',
    width: '24px',
    height: '24px',
    borderColor: '#00F0FF',
    borderStyle: 'solid',
  },
  scanningLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: '#00F0FF',
    boxShadow: '0 0 10px #00F0FF',
    animation: 'scan-line 2.5s ease-in-out infinite alternate',
  },
  statusText: {
    position: 'absolute',
    bottom: 20,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#00F0FF',
  },
  deactivateBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.65rem',
    color: '#E62429',
    background: 'rgba(230, 36, 41, 0.15)',
    border: '1px solid #E62429',
    padding: '4px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  scannerFooter: {
    padding: '0.75rem 1.25rem',
    background: 'rgba(5, 8, 15, 0.95)',
    borderTop: '1px solid rgba(0, 240, 255, 0.2)',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.68rem',
    color: '#9CA3AF',
    display: 'flex',
    justifyContent: 'space-between',
  },

  /* Instructions */
  rulesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  ruleCard: {
    background: 'rgba(10, 15, 25, 0.75)',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    borderRadius: '8px',
    padding: '1.5rem',
  },
  ruleNum: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.2rem',
    fontWeight: 900,
    color: '#00F0FF',
    marginBottom: '0.4rem',
  },
}
