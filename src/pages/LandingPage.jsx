import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

/* ─────────────────────────────────────────────────────────
   LANDING PAGE — Clean Start Scene Intro
   - Plays starting video scene full-screen
   - Skip button on top right corner
   - No text or elements overlaid on top of the video
   - When video ends or skip clicked → moves to homepage (/home)
   ───────────────────────────────────────────────────────── */

export default function LandingPage() {
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const [transitioning, setTransitioning] = useState(false)

  const handleTransition = () => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => navigate('/home'), 500)
  }

  return (
    <div style={styles.root}>
      {/* ── Fullscreen Video ────────────────────── */}
      <AnimatePresence>
        {!transitioning && (
          <motion.div
            style={styles.videoWrap}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={handleTransition}
              onError={handleTransition}
              style={styles.video}
            >
              <source src="/videos/jarvis-start.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Skip Button Top-Right Corner ──────── */}
      <AnimatePresence>
        {!transitioning && (
          <motion.button
            style={styles.skipBtn}
            onClick={handleTransition}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 240, 255, 0.25)' }}
            whileTap={{ scale: 0.95 }}
          >
            SKIP &nbsp;›
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

const ARC = '#00F0FF'
const BG = '#050505'

const styles = {
  root: {
    position: 'fixed',
    inset: 0,
    background: BG,
    overflow: 'hidden',
  },
  videoWrap: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  skipBtn: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 50,
    fontFamily: "'Orbitron', 'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#ffffff',
    background: 'rgba(5, 5, 5, 0.65)',
    border: `1px solid ${ARC}80`,
    borderRadius: '4px',
    padding: '0.5rem 1.25rem',
    cursor: 'pointer',
    letterSpacing: '0.15em',
    backdropFilter: 'blur(8px)',
    boxShadow: `0 0 15px ${ARC}30`,
    transition: 'all 0.2s ease',
  },
}
