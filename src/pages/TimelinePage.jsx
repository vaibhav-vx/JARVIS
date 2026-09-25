import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle2 } from 'lucide-react'

export default function TimelinePage() {
  const events = [
    { phase: 'PHASE 01', date: 'SEPT 2026', title: 'REGISTRATION INITIALIZATION', desc: 'Team Leaders submit leader & teammate details.' },
    { phase: 'PHASE 02', date: 'OCT 10, 2026', title: 'TEAM VERIFICATION & SHORTLIST', desc: 'Confirmation emails & Discord credentials issued.' },
    { phase: 'PHASE 03', date: 'OCT 16, 09:00 AM', title: 'MISSION LAUNCH & PS RELEASE', desc: 'Opening ceremony at SLRTCE & hacking begins.' },
    { phase: 'PHASE 04', date: 'OCT 17, 09:00 AM', title: 'CODE FREEZE & REPO SUBMISSION', desc: 'Final GitHub commits locked in.' },
    { phase: 'PHASE 05', date: 'OCT 17, 03:00 PM', title: 'PRESENTATIONS & FINALE CEREMONY', desc: 'Live pitch presentations & Stark Grants awarded.' },
  ]

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={styles.badge}>MISSION SCHEDULE &bull; OCT 16–17, 2026</div>
          <h1 style={styles.title}>FLIGHT-PATH TIMELINE</h1>
          <p style={styles.subtitle}>Shree L. R. Tiwari College Of Engineering &bull; 48-Hour Hackathon Sequence</p>

          <div style={styles.timelineList}>
            {events.map((ev, i) => (
              <div key={i} style={styles.timelineItem}>
                <div style={styles.timeBadge}>{ev.date}</div>
                <div style={styles.itemCard}>
                  <span style={styles.phaseLabel}>{ev.phase}</span>
                  <h3 style={styles.itemTitle}>{ev.title}</h3>
                  <p style={styles.itemDesc}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const styles = {
  root: { background: '#050505', color: '#FFF', minHeight: '100vh', padding: '4rem 1.5rem' },
  container: { maxWidth: '900px', margin: '0 auto' },
  badge: { fontFamily: "'Orbitron', sans-serif", fontSize: '0.75rem', color: '#00F0FF', letterSpacing: '0.2em' },
  title: { fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', fontWeight: 900, color: '#00F0FF', margin: 0 },
  subtitle: { fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#9CA3AF', marginTop: '0.5rem', marginBottom: '3rem' },
  timelineList: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  timelineItem: { display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' },
  timeBadge: { fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#E62429', border: '1px solid #E62429', padding: '0.5rem 1rem', borderRadius: '4px', minWidth: '140px', textAlign: 'center' },
  itemCard: { flex: 1, background: 'rgba(10, 15, 25, 0.75)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '8px', padding: '1.25rem 1.5rem' },
  phaseLabel: { fontFamily: "'Orbitron', sans-serif", fontSize: '0.62rem', color: '#00F0FF' },
  itemTitle: { fontFamily: "'Orbitron', sans-serif", fontSize: '1.1rem', color: '#FFF', margin: '0.2rem 0' },
  itemDesc: { fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#9CA3AF', margin: 0 },
}
