import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, User, Users, CheckCircle2, Plus, Trash2 } from 'lucide-react'

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [teamName, setTeamName] = useState('')
  const [leader, setLeader] = useState({
    name: '',
    rollNo: '',
    div: '',
    branch: '',
    year: '',
    email: '',
    phone: '',
  })

  // 3 required teammates + up to 2 optional
  const [teammates, setTeammates] = useState([
    { name: '', rollNo: '', div: '', branch: '', year: '' },
    { name: '', rollNo: '', div: '', branch: '', year: '' },
    { name: '', rollNo: '', div: '', branch: '', year: '' },
  ])

  const addOptionalTeammate = () => {
    if (teammates.length < 5) {
      setTeammates([...teammates, { name: '', rollNo: '', div: '', branch: '', year: '' }])
    }
  }

  const removeTeammate = (idx) => {
    if (teammates.length > 3) {
      setTeammates(teammates.filter((_, i) => i !== idx))
    }
  }

  const handleTeammateChange = (idx, field, value) => {
    const updated = [...teammates]
    updated[idx][field] = value
    setTeammates(updated)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={styles.badge}>STARK INITIATIVE &bull; TEAM REGISTRATION PORTAL</div>
          <h1 style={styles.title}>INITIALIZE REGISTRATION</h1>
          <p style={styles.subtitle}>
            Shree L. R. Tiwari College Of Engineering &bull; Register your 3–5 member team
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={styles.formCard}>
              {/* Team Name */}
              <div style={styles.sectionTitle}>
                <Shield size={18} color="#00F0FF" />
                <span>TEAM IDENTIFICATION</span>
              </div>
              <div style={styles.formGroup}>
                <label>TEAM NAME</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Arc Reactors"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  style={styles.input}
                />
              </div>

              {/* Team Leader */}
              <div style={styles.sectionTitle}>
                <User size={18} color="#E62429" />
                <span>TEAM LEADER DETAILS (PRIMARY CONTACT)</span>
              </div>

              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label>LEADER FULL NAME</label>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={leader.name}
                    onChange={(e) => setLeader({ ...leader, name: e.target.value })}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>ROLL NO.</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 10245"
                    value={leader.rollNo}
                    onChange={(e) => setLeader({ ...leader, rollNo: e.target.value })}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>DIVISION</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. A"
                    value={leader.div}
                    onChange={(e) => setLeader({ ...leader, div: e.target.value })}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>BRANCH</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Computer Engineering"
                    value={leader.branch}
                    onChange={(e) => setLeader({ ...leader, branch: e.target.value })}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>YEAR</label>
                  <select
                    value={leader.year}
                    onChange={(e) => setLeader({ ...leader, year: e.target.value })}
                    style={styles.select}
                  >
                    <option value="">Select Year</option>
                    <option value="FE">First Year (FE)</option>
                    <option value="SE">Second Year (SE)</option>
                    <option value="TE">Third Year (TE)</option>
                    <option value="BE">Final Year (BE)</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label>WHATSAPP / PHONE NO.</label>
                  <input
                    required
                    type="tel"
                    placeholder="Mobile Number"
                    value={leader.phone}
                    onChange={(e) => setLeader({ ...leader, phone: e.target.value })}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* Teammates Section */}
              <div style={styles.sectionTitle}>
                <Users size={18} color="#00F0FF" />
                <span>TEAMMATES DETAILS ({teammates.length} MEMBERS)</span>
              </div>

              {teammates.map((tm, idx) => (
                <div key={idx} style={styles.teammateBox}>
                  <div style={styles.tmHeader}>
                    <span>TEAMMATE #{idx + 1} {idx < 3 ? '(REQUIRED)' : '(OPTIONAL)'}</span>
                    {idx >= 3 && (
                      <button type="button" onClick={() => removeTeammate(idx)} style={styles.removeBtn}>
                        <Trash2 size={14} color="#E62429" />
                      </button>
                    )}
                  </div>
                  <div style={styles.formGrid}>
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={tm.name}
                      onChange={(e) => handleTeammateChange(idx, 'name', e.target.value)}
                      style={styles.input}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Roll No"
                      value={tm.rollNo}
                      onChange={(e) => handleTeammateChange(idx, 'rollNo', e.target.value)}
                      style={styles.input}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Div"
                      value={tm.div}
                      onChange={(e) => handleTeammateChange(idx, 'div', e.target.value)}
                      style={styles.input}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Branch"
                      value={tm.branch}
                      onChange={(e) => handleTeammateChange(idx, 'branch', e.target.value)}
                      style={styles.input}
                    />
                  </div>
                </div>
              ))}

              {teammates.length < 5 && (
                <button type="button" onClick={addOptionalTeammate} style={styles.addBtn}>
                  <Plus size={16} color="#00F0FF" />
                  <span>ADD OPTIONAL TEAMMATE #{teammates.length + 1}</span>
                </button>
              )}

              <button type="submit" style={styles.submitBtn}>
                [ SUBMIT REGISTRATION PROTOCOL ]
              </button>
            </form>
          ) : (
            <div style={styles.successBox}>
              <CheckCircle2 size={64} color="#10B981" />
              <h2>TEAM REGISTRATION COMPLETE!</h2>
              <p>Team **{teamName}** is registered for the JARVIS Hackathon at Shree L. R. Tiwari College Of Engineering!</p>
            </div>
          )}
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
  formCard: { background: 'rgba(10, 15, 25, 0.85)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  sectionTitle: { display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', color: '#00F0FF', borderBottom: '1px solid rgba(0, 240, 255, 0.2)', paddingBottom: '0.5rem' },
  formGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '0.35rem', fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem', color: '#9CA3AF' },
  input: { background: 'rgba(15, 20, 30, 0.8)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '4px', padding: '0.65rem 0.85rem', color: '#FFF', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', outline: 'none' },
  select: { background: '#0a0d14', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '4px', padding: '0.65rem 0.85rem', color: '#FFF', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', outline: 'none' },
  teammateBox: { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  tmHeader: { display: 'flex', justifyContent: 'space-between', fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', color: '#00F0FF' },
  removeBtn: { background: 'transparent', border: 'none', cursor: 'pointer' },
  addBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: "'Orbitron', sans-serif", fontSize: '0.75rem', color: '#00F0FF', background: 'rgba(0, 240, 255, 0.08)', border: '1px dashed #00F0FF', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer' },
  submitBtn: { fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', fontWeight: 800, color: '#050505', background: '#00F0FF', border: 'none', padding: '1rem', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' },
  successBox: { textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
}
