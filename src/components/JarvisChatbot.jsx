import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Cpu, Volume2, Sparkles, ShieldAlert } from 'lucide-react'

/* ─────────────────────────────────────────────────────────
   AI PERSONAS MATRIX
   ───────────────────────────────────────────────────────── */
const AI_PERSONAS = {
  JARVIS: {
    id: 'JARVIS',
    name: 'J.A.R.V.I.S.',
    title: 'Primary Tactical Assistant',
    accentColor: '#00F0FF',
    voice: 'British Gentleman AI',
    greeting: "At your service, boss. I am J.A.R.V.I.S. How may I assist your mission at Shree L. R. Tiwari College Of Engineering?",
  },
  FRIDAY: {
    id: 'FRIDAY',
    name: 'F.R.I.D.A.Y.',
    title: 'Combat & Tactical AI',
    accentColor: '#E62429',
    voice: 'Irish Combat Assistant',
    greeting: "F.R.I.D.A.Y. online! All tactical systems green for the JARVIS Hackathon. What's our next play?",
  },
  EDITH: {
    id: 'EDITH',
    name: 'E.D.I.T.H.',
    title: 'Global Security Network',
    accentColor: '#3B82F6',
    voice: 'Tactical Glasses AI',
    greeting: "Even Dead I'm The Hero. E.D.I.T.H. security protocol engaged. Ready to verify rules and challenge statements.",
  },
  KAREN: {
    id: 'KAREN',
    name: 'K.A.R.E.N.',
    title: 'Suit Lady Analytics AI',
    accentColor: '#10B981',
    voice: 'Analytical Suit Lady',
    greeting: "Hello there! K.A.R.E.N. here. Need help selecting your team track or analyzing suit specifications?",
  },
  VERONICA: {
    id: 'VERONICA',
    name: 'V.E.R.O.N.I.C.A.',
    title: 'Heavy Defense & Orbital Pod',
    accentColor: '#F59E0B',
    voice: 'Heavy Ordnance AI',
    greeting: "V.E.R.O.N.I.C.A. satellite pod locked in orbit. Hulkbuster protocols standby. Ready to handle heavy technical queries.",
  },
}

/* ─────────────────────────────────────────────────────────
   KNOWLEDGE BASE (HACKATHON + MCU IRON MAN LORE)
   ───────────────────────────────────────────────────────── */
const KNOWLEDGE_RESPONSES = [
  {
    keywords: ['date', 'when', 'time', 'schedule'],
    answer: "The JARVIS Hackathon takes place on October 16–17, 2026. It is a 48-hour non-stop hacking protocol!",
  },
  {
    keywords: ['college', 'venue', 'where', 'location', 'tiwari'],
    answer: "The hackathon is hosted live at Shree L. R. Tiwari College Of Engineering! Address: Kanakia Park, Mira Road, Mumbai.",
  },
  {
    keywords: ['team', 'members', 'size'],
    answer: "Teams must contain 3 to 5 members. Team leaders can register their team via the [ INITIALIZE REGISTRATION ] portal.",
  },
  {
    keywords: ['track', 'domain', 'protocol', 'ai', 'web', 'cyber', 'iot'],
    answer: "We have 4 AI Protocols: (1) J.A.R.V.I.S. (Generative AI), (2) F.R.I.D.A.Y. (Web & Mobile Apps), (3) E.D.I.T.H. (Cybersecurity & Defense), (4) H.O.M.E.R. (IoT & Hardware).",
  },
  {
    keywords: ['ar', 'vision', 'treasure', 'game', 'hunt'],
    answer: "Project V.I.S.I.O.N. is our WebAR Tech Treasure Hunt! Point your phone camera at physical Stark Target Posters around campus to trigger 3D Iron Man HUDs and solve encrypted riddles.",
  },
  {
    keywords: ['head', 'coordinator', 'vaibhav', 'manthan'],
    answer: "The Technical Head of JARVIS is Vaibhav, and the Technical Coordinator is Mr. Manthan Joshi of Shree L. R. Tiwari College Of Engineering.",
  },
  {
    keywords: ['mark', 'suit', 'armor', 'lxxxv', 'xlv', 'iron man'],
    answer: "Tony Stark built 85 Iron Man suits! Mark I was built in a cave with scraps. Mark III is the classic red/gold titanium armor. Mark XLV was the Sokovia armor. Mark LXXXV is the ultimate nanotech endgame suit!",
  },
  {
    keywords: ['reactor', 'arc', 'power'],
    answer: "The Arc Reactor was created by Howard Stark and miniaturized by Tony Stark in Afghanistan to keep shrapnel out of his heart and power the Mark I suit. It outputs over 3 Gigajoules/second!",
  },
]

export default function JarvisChatbot() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [activeAI, setActiveAI] = useState(AI_PERSONAS.JARVIS)
  const [messages, setMessages] = useState([
    { sender: 'ai', text: AI_PERSONAS.JARVIS.greeting, time: 'NOW' },
  ])
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  // Switch AI Persona
  const handleSwitchAI = (personaKey) => {
    const selected = AI_PERSONAS[personaKey]
    setActiveAI(selected)
    setMessages((prev) => [
      ...prev,
      {
        sender: 'ai',
        text: `[ AI VOICE SWITCHED TO ${selected.name} ] — ${selected.greeting}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ])
  }

  // Handle Send Message
  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userText = input.trim()
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    setMessages((prev) => [...prev, { sender: 'user', text: userText, time: timeStr }])
    setInput('')

    // Generate AI response based on knowledge base
    setTimeout(() => {
      const lower = userText.toLowerCase()
      let foundAnswer = null

      for (const item of KNOWLEDGE_RESPONSES) {
        if (item.keywords.some((kw) => lower.includes(kw))) {
          foundAnswer = item.answer
          break
        }
      }

      if (!foundAnswer) {
        foundAnswer = `[ ${activeAI.name} ANALYZING ]: "${userText}" is logged into the Stark database. For full hackathon guidelines, check our /protocols or /faq sections, or ask about dates, tracks, or registration!`
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: foundAnswer, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ])
    }, 600)
  }

  // Hide Chatbot on Landing Page (/)
  if (location.pathname === '/') return null

  return (
    <>
      {/* Floating Toggle Button */}
      {!open && (
        <motion.button
          style={{ ...styles.toggleBtn, borderColor: activeAI.accentColor }}
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Bot size={24} color={activeAI.accentColor} />
          <span style={{ ...styles.toggleBadge, background: activeAI.accentColor }}>
            {activeAI.name}
          </span>
        </motion.button>
      )}

      {/* Chat Window Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            style={styles.chatWindow}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
          >
            {/* Header */}
            <div style={{ ...styles.header, borderBottomColor: activeAI.accentColor }}>
              <div style={styles.headerTitleWrap}>
                <div style={{ ...styles.statusDot, background: activeAI.accentColor }} />
                <div>
                  <h3 style={{ ...styles.headerName, color: activeAI.accentColor }}>
                    {activeAI.name}
                  </h3>
                  <p style={styles.headerTitle}>{activeAI.title}</p>
                </div>
              </div>

              <button style={styles.closeBtn} onClick={() => setOpen(false)}>
                <X size={18} color="#9CA3AF" />
              </button>
            </div>

            {/* AI Persona Switcher Bar */}
            <div style={styles.personaBar}>
              <span style={styles.personaLabel}>VOICE:</span>
              {Object.keys(AI_PERSONAS).map((key) => {
                const persona = AI_PERSONAS[key]
                const isActive = activeAI.id === key
                return (
                  <button
                    key={key}
                    onClick={() => handleSwitchAI(key)}
                    style={{
                      ...styles.personaChip,
                      borderColor: isActive ? persona.accentColor : 'rgba(255,255,255,0.1)',
                      color: isActive ? persona.accentColor : '#9CA3AF',
                      background: isActive ? `${persona.accentColor}15` : 'transparent',
                    }}
                  >
                    {persona.name}
                  </button>
                )
              })}
            </div>

            {/* Messages Area */}
            <div style={styles.messagesArea}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.msgRow,
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      ...styles.msgBubble,
                      ...(msg.sender === 'user'
                        ? styles.userBubble
                        : {
                            background: 'rgba(15, 25, 40, 0.85)',
                            border: `1px solid ${activeAI.accentColor}40`,
                            color: '#E5E7EB',
                          }),
                    }}
                  >
                    {msg.sender === 'ai' && (
                      <div style={{ ...styles.msgAiLabel, color: activeAI.accentColor }}>
                        {activeAI.name} &bull; {msg.time}
                      </div>
                    )}
                    <div style={styles.msgText}>{msg.text}</div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} style={styles.inputForm}>
              <input
                type="text"
                placeholder={`Ask ${activeAI.name} about hackathon, rules, or Iron Man suits...`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={styles.inputField}
              />
              <button
                type="submit"
                style={{ ...styles.sendBtn, background: activeAI.accentColor }}
              >
                <Send size={16} color="#050505" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const styles = {
  toggleBtn: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 999,
    width: 60,
    height: 60,
    borderRadius: '50%',
    background: '#0a0d14',
    border: '2px solid #00F0FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
  },
  toggleBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.55rem',
    fontWeight: 800,
    color: '#050505',
    padding: '2px 6px',
    borderRadius: '10px',
  },
  chatWindow: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 1000,
    width: 'min(380px, calc(100vw - 32px))',
    height: '520px',
    background: '#080c14',
    border: '1px solid rgba(0, 240, 255, 0.3)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.25)',
    overflow: 'hidden',
  },
  header: {
    padding: '0.85rem 1rem',
    background: 'rgba(5, 8, 15, 0.95)',
    borderBottom: '1px solid #00F0FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitleWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    boxShadow: '0 0 8px currentColor',
  },
  headerName: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.95rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    margin: 0,
  },
  headerTitle: {
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: '0.7rem',
    color: '#9CA3AF',
    margin: 0,
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  personaBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    padding: '0.4rem 0.75rem',
    background: 'rgba(0,0,0,0.4)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    overflowX: 'auto',
  },
  personaLabel: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.55rem',
    color: '#6B7280',
    marginRight: '2px',
  },
  personaChip: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.58rem',
    fontWeight: 700,
    padding: '2px 6px',
    borderRadius: '3px',
    border: '1px solid',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  messagesArea: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  msgRow: {
    display: 'flex',
  },
  msgBubble: {
    maxWidth: '85%',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    fontSize: '0.8rem',
    lineHeight: '1.4',
    fontFamily: "'Inter', sans-serif",
  },
  userBubble: {
    background: 'rgba(230, 36, 41, 0.2)',
    border: '1px solid #E62429',
    color: '#FFFFFF',
    borderBottomRightRadius: '2px',
  },
  msgAiLabel: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '0.58rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  msgText: {
    fontSize: '0.8rem',
  },
  inputForm: {
    display: 'flex',
    gap: '0.5rem',
    padding: '0.75rem',
    background: 'rgba(5, 8, 15, 0.95)',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  inputField: {
    flex: 1,
    background: 'rgba(15, 20, 30, 0.8)',
    border: '1px solid rgba(0, 240, 255, 0.2)',
    borderRadius: '4px',
    padding: '0.5rem 0.75rem',
    color: '#FFFFFF',
    fontSize: '0.78rem',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
  },
  sendBtn: {
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem 0.8rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
