import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Send, CheckCircle2, X } from 'lucide-react'

export default function SponsorsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    tier: 'Gold Sponsor',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setModalOpen(false)
    }, 2500)
  }

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={styles.badge}>PARTNERSHIPS & COLLABORATION &bull; STARK INDUSTRIES COALITION</div>
          <h1 style={styles.title}>SPONSORS & PARTNERS</h1>
          <p style={styles.subtitle}>
            Shree L. R. Tiwari College Of Engineering &bull; Accelerating Technological Innovation
          </p>

          {/* Become a Sponsor CTA Banner */}
          <div style={styles.ctaBanner}>
            <div>
              <h3 style={styles.bannerTitle}>PARTNER WITH JARVIS HACKATHON</h3>
              <p style={styles.bannerText}>
                Connect your brand with 500+ top student developers, engineers, and AI innovators.
              </p>
            </div>
            <button onClick={() => setModalOpen(true)} style={styles.applyBtn}>
              [ APPLY TO BECOME A SPONSOR ]
            </button>
          </div>

          {/* Title Sponsors */}
          <div style={styles.tierSection}>
            <h3 style={styles.tierTitle}>[ TITLE SPONSORS ]</h3>
            <div style={styles.sponsorGrid}>
              <div style={styles.sponsorCard}>
                <Building2 size={36} color="#00F0FF" />
                <h4 style={styles.sponsorName}>STARK INDUSTRIES</h4>
                <span style={styles.tierBadge}>TITLE PARTNER</span>
              </div>
            </div>
          </div>

          {/* Gold & Silver Sponsors Grid */}
          <div style={styles.tierSection}>
            <h3 style={styles.tierTitle}>[ COALITION PARTNERS ]</h3>
            <div style={styles.sponsorGrid}>
              <div style={styles.sponsorCard}>
                <Building2 size={32} color="#FFD700" />
                <h4 style={styles.sponsorName}>V.I.S.I.O.N. LABS</h4>
                <span style={styles.tierBadge}>GOLD SPONSOR</span>
              </div>
              <div style={styles.sponsorCard}>
                <Building2 size={32} color="#C0C0C0" />
                <h4 style={styles.sponsorName}>NEURAL CORE TECH</h4>
                <span style={styles.tierBadge}>SILVER SPONSOR</span>
              </div>
              <div style={styles.sponsorCard}>
                <Building2 size={32} color="#00F0FF" />
                <h4 style={styles.sponsorName}>SLRTCE INCUBATION</h4>
                <span style={styles.tierBadge}>ACADEMIC PARTNER</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Apply to Become a Sponsor Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={styles.modalBox}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div style={styles.modalHeader}>
                <h3>APPLY TO BECOME A SPONSOR</h3>
                <button onClick={() => setModalOpen(false)} style={styles.closeBtn}>
                  <X size={20} color="#9CA3AF" />
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <label>COMPANY / ORGANIZATION NAME</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Stark Tech Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label>CONTACT PERSON</label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label>WORK EMAIL</label>
                      <input
                        required
                        type="email"
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={styles.input}
                      />
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label>PREFERRED SPONSORSHIP TIER</label>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                      style={styles.select}
                    >
                      <option value="Title Sponsor">Title Sponsor (Lead Branding)</option>
                      <option value="Gold Sponsor">Gold Sponsor (Track Sponsor)</option>
                      <option value="Silver Sponsor">Silver Sponsor (Swag / Credits)</option>
                      <option value="Community Partner">Community / Media Partner</option>
                    </select>
                  </div>

                  <button type="submit" style={styles.submitBtn}>
                    [ SUBMIT SPONSORSHIP APPLICATION ]
                  </button>
                </form>
              ) : (
                <div style={styles.successState}>
                  <CheckCircle2 size={48} color="#10B981" />
                  <h4>APPLICATION RECEIVED!</h4>
                  <p>Our Technical Coordinator (Mr. Manthan Joshi) will reach out to your team shortly.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

  /* Banner */
  ctaBanner: {
    background: 'rgba(10, 15, 25, 0.9)',
    border: '1px solid rgba(0, 240, 255, 0.3)',
    borderRadius: '10px',
    padding: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    marginBottom: '3.5rem',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)',
  },
  bannerTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1.2rem',
    color: '#00F0FF',
    margin: 0,
  },
  bannerText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    color: '#D1D5DB',
    marginTop: '0.4rem',
    margin: 0,
  },
  applyBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#050505',
    background: '#00F0FF',
    border: 'none',
    padding: '0.9rem 1.8rem',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '0.1em',
    boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
  },

  /* Tier Sections */
  tierSection: {
    marginBottom: '3rem',
  },
  tierTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.85rem',
    color: '#E62429',
    letterSpacing: '0.15em',
    marginBottom: '1.25rem',
  },
  sponsorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
  sponsorCard: {
    background: 'rgba(10, 15, 25, 0.75)',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    borderRadius: '8px',
    padding: '2rem 1.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  sponsorName: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '1rem',
    color: '#FFFFFF',
    margin: 0,
  },
  tierBadge: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.62rem',
    color: '#00F0FF',
    border: '1px solid rgba(0, 240, 255, 0.3)',
    padding: '2px 8px',
    borderRadius: '3px',
  },

  /* Modal */
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 1000,
    background: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  modalBox: {
    width: '100%',
    maxWidth: '520px',
    background: '#080c14',
    border: '1px solid #00F0FF',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 0 40px rgba(0, 240, 255, 0.3)',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
    paddingBottom: '1rem',
    marginBottom: '1.5rem',
    fontFamily: "'Orbitron', sans-serif",
    color: '#00F0FF',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.65rem',
    color: '#9CA3AF',
  },
  input: {
    background: 'rgba(15, 20, 30, 0.8)',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    borderRadius: '4px',
    padding: '0.65rem 0.85rem',
    color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    outline: 'none',
  },
  select: {
    background: '#0a0d14',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    borderRadius: '4px',
    padding: '0.65rem 0.85rem',
    color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    outline: 'none',
  },
  submitBtn: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#E62429',
    background: 'rgba(230, 36, 41, 0.15)',
    border: '1px solid #E62429',
    padding: '0.85rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
  successState: {
    textAlign: 'center',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
}
