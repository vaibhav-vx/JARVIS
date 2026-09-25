import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Zap, Cpu, Flame, Crosshair } from 'lucide-react'

const SUITS = [
  {
    id: 'MARK-I',
    name: 'MARK I',
    nickname: 'THE CAVE PROTOTYPE',
    year: '2008 (Iron Man)',
    alloy: 'Crude Cast Iron-Copper Alloy',
    power: 'Miniaturized Arc Reactor Mk1 (3 GJ/s)',
    weapons: 'Dual Flame Throwers, Crude Rocket Launcher',
    lore: "Built in a cave with a box of scraps. Represents the raw, unyielding spirit of foundational engineering.",
    domain: 'FOUNDATIONAL SOFTWARE & PROTOTYPING',
    accent: '#D97706',
  },
  {
    id: 'MARK-III',
    name: 'MARK III',
    nickname: 'THE GOLD & RED ICON',
    year: '2008 (Iron Man)',
    alloy: 'Gold-Titanium Alloy',
    power: 'Arc Reactor Mk2 (Aviation Altitude Calibrated)',
    weapons: 'Repulsors, Unibeam, Micro-Munitions, Flare System',
    lore: "The iconic armor that solved high-altitude icing. Defined the Stark aesthetic and integrated JARVIS fully.",
    domain: 'CORE ARCHITECTURE & SYSTEMS',
    accent: '#E62429',
  },
  {
    id: 'MARK-XLV',
    name: 'MARK XLV',
    nickname: 'THE SOKOVIA DESTROYER',
    year: '2015 (Avengers: Age of Ultron)',
    alloy: 'Chromium-Titanium Matrix',
    power: 'Hexagonal Core Arc Reactor (Overcharge Ready)',
    weapons: 'Enhanced Repulsor Cannons, F.R.I.D.A.Y. Battle UI',
    lore: "Designed for heavy assault against Ultron Sentries. First armor powered by F.R.I.D.A.Y.'s combat matrix.",
    domain: 'CYBERSECURITY & HEAVY DEFENSE',
    accent: '#3B82F6',
  },
  {
    id: 'MARK-LXXXV',
    name: 'MARK LXXXV',
    nickname: 'THE NANOTECH MASTERPIECE',
    year: '2019 (Avengers: Endgame)',
    alloy: 'Smart Nanotech Liquid Metal Matrix',
    power: 'Nano Arc Core (Infinity Energy Shielding)',
    weapons: 'Nano Lightning Refocusor, Energy Blade, Infinity Gauntlet Matrix',
    lore: "The final, ultimate armor worn by Tony Stark. Formed of fluid nanites with unmatched adaptive intelligence.",
    domain: 'ADVANCED AI & FUTURE INNOVATION',
    accent: '#00F0FF',
  },
]

export default function ArmorVaultPage() {
  const [activeSuit, setActiveSuit] = useState(SUITS[3]) // Default Mark LXXXV

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.badge}>STARK INDUSTRIES &bull; HALL OF ARMOR</div>
          <h1 style={styles.title}>STARK ARMOR VAULT</h1>
          <p style={styles.subtitle}>
            Explore Iron Man suits and their connection to JARVIS Hackathon domains
          </p>

          {/* Suit Tabs Selector */}
          <div style={styles.tabBar}>
            {SUITS.map((suit) => {
              const isActive = activeSuit.id === suit.id
              return (
                <button
                  key={suit.id}
                  onClick={() => setActiveSuit(suit)}
                  style={{
                    ...styles.tabBtn,
                    borderColor: isActive ? suit.accent : 'rgba(255,255,255,0.1)',
                    color: isActive ? suit.accent : '#9CA3AF',
                    background: isActive ? `${suit.accent}15` : 'rgba(10,15,25,0.6)',
                  }}
                >
                  {suit.name}
                </button>
              )
            })}
          </div>

          {/* Active Suit Detail Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSuit.id}
              style={{ ...styles.vaultDisplay, borderColor: `${activeSuit.accent}40` }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <div style={styles.vaultHeader}>
                <div>
                  <span style={{ ...styles.suitCode, color: activeSuit.accent }}>
                    {activeSuit.id} &bull; {activeSuit.year}
                  </span>
                  <h2 style={{ ...styles.suitName, color: activeSuit.accent }}>
                    {activeSuit.name} — {activeSuit.nickname}
                  </h2>
                </div>
                <div style={{ ...styles.domainTag, borderColor: activeSuit.accent, color: activeSuit.accent }}>
                  {activeSuit.domain}
                </div>
              </div>

              {/* Spec Grid */}
              <div style={styles.specGrid}>
                <div style={styles.specBox}>
                  <div style={styles.specLabel}>
                    <Shield size={16} color={activeSuit.accent} />
                    <span>ARMOR ALLOY MATRIX</span>
                  </div>
                  <div style={styles.specVal}>{activeSuit.alloy}</div>
                </div>

                <div style={styles.specBox}>
                  <div style={styles.specLabel}>
                    <Zap size={16} color={activeSuit.accent} />
                    <span>ARC REACTOR POWER OUTPUT</span>
                  </div>
                  <div style={styles.specVal}>{activeSuit.power}</div>
                </div>

                <div style={styles.specBox}>
                  <div style={styles.specLabel}>
                    <Crosshair size={16} color={activeSuit.accent} />
                    <span>WEAPONS MATRIX</span>
                  </div>
                  <div style={styles.specVal}>{activeSuit.weapons}</div>
                </div>

                <div style={styles.specBox}>
                  <div style={styles.specLabel}>
                    <Cpu size={16} color={activeSuit.accent} />
                    <span>MCU LORE & HISTORY</span>
                  </div>
                  <div style={styles.specVal}>{activeSuit.lore}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
  tabBar: {
    display: 'flex',
    gap: '0.75rem',
    overflowX: 'auto',
    marginBottom: '2rem',
    paddingBottom: '0.5rem',
  },
  tabBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 800,
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    border: '1px solid',
    cursor: 'pointer',
    letterSpacing: '0.1em',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
  vaultDisplay: {
    background: 'rgba(10, 15, 25, 0.85)',
    border: '1px solid',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 0 40px rgba(0, 240, 255, 0.15)',
    backdropFilter: 'blur(12px)',
  },
  vaultHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    marginBottom: '1.5rem',
  },
  suitCode: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
  },
  suitName: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.4rem',
    fontWeight: 900,
    margin: '0.2rem 0 0 0',
    letterSpacing: '0.08em',
  },
  domainTag: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.68rem',
    fontWeight: 800,
    border: '1px solid',
    padding: '4px 10px',
    borderRadius: '4px',
    letterSpacing: '0.1em',
  },
  specGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  specBox: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '8px',
    padding: '1.25rem',
  },
  specLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.65rem',
    color: '#9CA3AF',
    letterSpacing: '0.1em',
    marginBottom: '0.5rem',
  },
  specVal: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    color: '#FFFFFF',
    lineHeight: '1.5',
  },
}
