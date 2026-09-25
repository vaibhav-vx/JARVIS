import { motion } from 'framer-motion'
import { ShieldAlert, CheckCircle, FileText } from 'lucide-react'

export default function RulesPage() {
  const rules = [
    { num: '01', title: 'TEAM SIZE REQUIREMENT', desc: 'Teams must consist of 3 to 5 members. Individual participation is not allowed.' },
    { num: '02', title: 'ORIGINAL CODE POLICY', desc: 'All code and assets must be written during the 48-hour event window. Pre-built templates are strictly prohibited.' },
    { num: '03', title: 'GITHUB COMMIT LOGS', desc: 'Repositories must be hosted publicly on GitHub with commit history logged throughout the event.' },
    { num: '04', title: 'CODE OF CONDUCT', desc: 'Maintain academic integrity, mutual respect, and sportsmanship at Shree L. R. Tiwari College Of Engineering.' },
  ]

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={styles.badge}>PROTOCOL GUIDELINES &bull; HACKATHON RULES</div>
          <h1 style={styles.title}>RULES & GUIDELINES</h1>
          <p style={styles.subtitle}>Shree L. R. Tiwari College Of Engineering &bull; Official Protocol Regulations</p>

          <div style={styles.grid}>
            {rules.map((r, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.num}>{r.num}</div>
                <h3 style={styles.cardTitle}>{r.title}</h3>
                <p style={styles.cardDesc}>{r.desc}</p>
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
  container: { maxWidth: '1000px', margin: '0 auto' },
  badge: { fontFamily: "'Orbitron', sans-serif", fontSize: '0.75rem', color: '#E62429', letterSpacing: '0.2em' },
  title: { fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', fontWeight: 900, color: '#00F0FF', margin: 0 },
  subtitle: { fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#9CA3AF', marginTop: '0.5rem', marginBottom: '3rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' },
  card: { background: 'rgba(10, 15, 25, 0.75)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '8px', padding: '1.75rem' },
  num: { fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', fontWeight: 900, color: '#E62429', marginBottom: '0.5rem' },
  cardTitle: { fontFamily: "'Orbitron', sans-serif", fontSize: '1rem', color: '#00F0FF', margin: 0 },
  cardDesc: { fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#9CA3AF', marginTop: '0.5rem', lineHeight: '1.5' },
}
