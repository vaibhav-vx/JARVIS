import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'

export default function FaqPage() {
  const faqs = [
    { q: 'Is there any registration fee for JARVIS Hackathon?', a: 'No! Registration is 100% free for all students at Shree L. R. Tiwari College Of Engineering and participating colleges.' },
    { q: 'Who is eligible to participate?', a: 'All undergraduate and diploma engineering students with teams of 3 to 5 members can register.' },
    { q: 'What is Project V.I.S.I.O.N.?', a: 'Project V.I.S.I.O.N. is our WebAR Tech Treasure Hunt! Scan physical Stark Target Posters across campus using your phone camera to unlock 3D holograms and solve riddles.' },
    { q: 'How do we register our team?', a: 'The Team Leader goes to the Register page, fills in their details (Name, Roll No, Branch, Year) and adds 3 required teammates (+ up to 2 optional teammates).' },
  ]

  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={styles.badge}>QUERY THE DATABASE &bull; FREQUENTLY ASKED QUESTIONS</div>
          <h1 style={styles.title}>FAQ DATABASE</h1>
          <p style={styles.subtitle}>Shree L. R. Tiwari College Of Engineering &bull; Everything you need to know</p>

          <div style={styles.faqList}>
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <div key={idx} style={styles.faqCard}>
                  <button onClick={() => setOpenIdx(isOpen ? -1 : idx)} style={styles.qBtn}>
                    <span>{faq.q}</span>
                    <ChevronDown size={18} color="#00F0FF" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={styles.answer}>
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
  root: { background: '#050505', color: '#FFF', minHeight: '100vh', padding: '4rem 1.5rem' },
  container: { maxWidth: '900px', margin: '0 auto' },
  badge: { fontFamily: "'Orbitron', sans-serif", fontSize: '0.75rem', color: '#00F0FF', letterSpacing: '0.2em' },
  title: { fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', fontWeight: 900, color: '#00F0FF', margin: 0 },
  subtitle: { fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#9CA3AF', marginTop: '0.5rem', marginBottom: '3rem' },
  faqList: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  faqCard: { background: 'rgba(10, 15, 25, 0.75)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '8px', overflow: 'hidden' },
  qBtn: { width: '100%', padding: '1.25rem 1.5rem', background: 'transparent', border: 'none', color: '#FFF', fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left' },
  answer: { padding: '0 1.5rem 1.25rem 1.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#D1D5DB', lineHeight: '1.6' },
}
