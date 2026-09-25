import { motion } from 'framer-motion'
import { Cpu, Shield, Globe, Zap, Flame, Lock } from 'lucide-react'

export default function ProtocolsPage() {
  const tracks = [
    {
      id: 'JARVIS',
      title: 'J.A.R.V.I.S. PROTOCOL',
      domain: 'GENERATIVE AI & AUTONOMOUS AGENTS',
      icon: Cpu,
      color: '#00F0FF',
      desc: 'Build next-gen LLM applications, autonomous neural agents, computer vision pipelines, or multimodal AI assistants.',
      challenges: ['Autonomous Task Execution', 'RAG over Complex Datasets', 'Voice & Multimodal Agents'],
    },
    {
      id: 'FRIDAY',
      title: 'F.R.I.D.A.Y. PROTOCOL',
      domain: 'WEB3, FULL-STACK & MOBILE INNOVATIONS',
      icon: Globe,
      color: '#E62429',
      desc: 'Craft ultra-fast web platforms, cross-platform mobile apps, or decentralized Web3 systems that deliver seamless UX.',
      challenges: ['Real-time Cloud Platforms', 'DeFi & Smart Contract Interfaces', 'High-Scale Mobile Apps'],
    },
    {
      id: 'EDITH',
      title: 'E.D.I.T.H. PROTOCOL',
      domain: 'CYBERSECURITY & ZERO-TRUST DEFENSE',
      icon: Shield,
      color: '#3B82F6',
      desc: 'Engineer threat detection matrixes, zero-trust auth headers, cryptographic validation, or automated pen-testing tools.',
      challenges: ['Zero-Trust Access Control', 'AI Threat Intelligence', 'Cryptographic Proof Systems'],
    },
    {
      id: 'HOMER',
      title: 'H.O.M.E.R. PROTOCOL',
      domain: 'IOT, ROBOTICS & EMBEDDED HARDWARE',
      icon: Zap,
      color: '#F59E0B',
      desc: 'Develop smart edge hardware, robotics telemetry, IoT sensor nets, or embedded systems that bridge physical and digital worlds.',
      challenges: ['Edge AI Hardware', 'Drone & Robotics Telemetry', 'Smart Campus Automation'],
    },
  ]

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.badge}>HACKATHON TRACKS &bull; STARK PROTOCOLS</div>
          <h1 style={styles.title}>THE 4 AI PROTOCOLS</h1>
          <p style={styles.subtitle}>
            Select your team domain for the JARVIS Hackathon at Shree L. R. Tiwari College Of Engineering
          </p>

          {/* ── PROBLEM STATEMENTS ANNOUNCEMENT FRAME (AURA VIDEO) ── */}
          <div style={styles.psVideoBanner}>
            <div style={styles.psHeader}>
              <Flame size={20} color="#E62429" />
              <span style={styles.psTitle}>PROBLEM STATEMENTS RELEASE &bull; AURA PROTOCOL</span>
            </div>

            <div style={styles.psVideoWrap}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={styles.psVideo}
                poster="/posters/aura-poster.jpg"
              >
                <source src="/videos/aura-scene.mp4" type="video/mp4" />
              </video>
              <div style={styles.psOverlay}>
                <div style={styles.psContent}>
                  <div style={styles.lockBadge}>
                    <Lock size={16} color="#00F0FF" />
                    <span>PROBLEM STATEMENTS LOCK IN PROGRESS</span>
                  </div>
                  <h3 style={styles.psHeading}>CLASSIFIED PROBLEM STATEMENTS RELEASE</h3>
                  <p style={styles.psText}>
                    Problem Statements for all 4 protocols will drop live on **October 16, 2026, 09:00 AM** at the hackathon opening ceremony!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── 4 PROTOCOL CARDS GRID ── */}
          <div style={styles.cardsGrid}>
            {tracks.map((track) => {
              const IconComp = track.icon
              return (
                <div
                  key={track.id}
                  style={{ ...styles.card, borderColor: `${track.color}40` }}
                >
                  <div style={styles.cardTop}>
                    <div
                      style={{
                        ...styles.iconWrap,
                        border: `1px solid ${track.color}`,
                        background: `${track.color}15`,
                      }}
                    >
                      <IconComp size={24} color={track.color} />
                    </div>
                    <span style={{ ...styles.cardBadge, color: track.color, borderColor: track.color }}>
                      {track.id}
                    </span>
                  </div>

                  <h3 style={{ ...styles.cardTitle, color: track.color }}>
                    {track.title}
                  </h3>
                  <div style={styles.cardDomain}>{track.domain}</div>
                  <p style={styles.cardDesc}>{track.desc}</p>

                  <div style={styles.challengeSection}>
                    <div style={styles.challengeTitle}>KEY FOCUS AREAS:</div>
                    {track.challenges.map((item, idx) => (
                      <div key={idx} style={styles.challengeTag}>
                        &rsaquo; {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
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
    color: '#00F0FF',
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

  /* PS Video Banner */
  psVideoBanner: {
    background: 'rgba(10, 15, 25, 0.9)',
    border: '1px solid rgba(230, 36, 41, 0.4)',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '3.5rem',
    boxShadow: '0 0 30px rgba(230, 36, 41, 0.2)',
  },
  psHeader: {
    background: 'rgba(15, 8, 8, 0.95)',
    padding: '0.75rem 1.25rem',
    borderBottom: '1px solid rgba(230, 36, 41, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  psTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 800,
    color: '#E62429',
    letterSpacing: '0.15em',
  },
  psVideoWrap: {
    position: 'relative',
    height: '240px',
    overflow: 'hidden',
  },
  psVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  psOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(5,5,5,0.95) 30%, rgba(5,5,5,0.6) 100%)',
    display: 'flex',
    alignItems: 'center',
    padding: '2rem',
  },
  psContent: {
    maxWidth: '550px',
  },
  lockBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.65rem',
    color: '#00F0FF',
    background: 'rgba(0,240,255,0.1)',
    border: '1px solid #00F0FF',
    padding: '3px 8px',
    borderRadius: '4px',
    marginBottom: '0.75rem',
  },
  psHeading: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.3rem',
    color: '#FFFFFF',
    margin: 0,
    letterSpacing: '0.08em',
  },
  psText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.88rem',
    color: '#D1D5DB',
    marginTop: '0.5rem',
    lineHeight: '1.5',
  },

  /* Cards Grid */
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: 'rgba(10, 15, 25, 0.75)',
    border: '1px solid',
    borderRadius: '8px',
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    backdropFilter: 'blur(10px)',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBadge: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.65rem',
    fontWeight: 800,
    border: '1px solid',
    padding: '2px 8px',
    borderRadius: '4px',
  },
  cardTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 800,
    margin: 0,
    letterSpacing: '0.08em',
  },
  cardDomain: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#9CA3AF',
    letterSpacing: '0.1em',
  },
  cardDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    color: '#D1D5DB',
    lineHeight: '1.5',
    margin: 0,
  },
  challengeSection: {
    marginTop: 'auto',
    paddingTop: '0.75rem',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  challengeTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.62rem',
    color: '#6B7280',
    letterSpacing: '0.1em',
    marginBottom: '0.4rem',
  },
  challengeTag: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.78rem',
    color: '#9CA3AF',
    marginBottom: '0.2rem',
  },
}
