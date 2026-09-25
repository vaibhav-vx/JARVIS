'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Cpu, Volume2, VolumeX, Mic, MicOff } from 'lucide-react'

interface Message {
  sender: 'ai' | 'user'
  text: string
  timestamp: string
}

export default function JarvisChatbot() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Greetings. I am J.A.R.V.I.S. — Just A Rather Very Intelligent System. I am loaded with complete intel on JARVIS Hackathon 4.0 at SLRTCE, team registrations, tracks, prizes, and Stark technology. How may I assist you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (pathname === '/') return null

  // JARVIS Text-To-Speech Output Synthesis
  const speakText = (text: string) => {
    if (!voiceEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return

    window.speechSynthesis.cancel() // Stop any previous speech
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1.0
    utterance.pitch = 0.95

    const voices = window.speechSynthesis.getVoices()
    const britishVoice = voices.find((v) => v.name.includes('UK English Male') || v.name.includes('Daniel') || v.name.includes('Google UK English Male') || v.lang.startsWith('en'))
    if (britishVoice) utterance.voice = britishVoice

    window.speechSynthesis.speak(utterance)
  }

  // JARVIS Speech-to-Text Microphone Input Handler
  const toggleListening = () => {
    if (typeof window === 'undefined') return

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.')
      return
    }

    if (isListening) {
      setIsListening(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInput(transcript)
      setIsListening(false)
    }

    recognition.start()
  }

  // Core Intelligence Engine & Knowledge Base Query Processing
  const processQuery = (userQuery: string): string => {
    const q = userQuery.toLowerCase()

    if (q.includes('hackathon') || q.includes('date') || q.includes('when') || q.includes('venue') || q.includes('where')) {
      return 'JARVIS Hackathon 4.0 takes place on October 16–17, 2026, hosted live at Shree L. R. Tiwari College Of Engineering (SLRTCE), Kanakia Park, Mira Road East, Thane, Maharashtra 401107. It is a 24-hour hybrid hackathon!'
    }

    if (q.includes('register') || q.includes('team') || q.includes('fee') || q.includes('form')) {
      return 'Teams must contain 2 to 4 members. Registration collects leader email, phone number, college, branch, and student roll number, along with member email, phone number, year of study (FE/SE/TE/BE), and branch. Access the REGISTER tab to submit your team!'
    }

    if (q.includes('track') || q.includes('problem') || q.includes('domain') || q.includes('challenge')) {
      return 'We feature 4 key tracks: 1. AI & Intelligent Agents, 2. Open Innovation & Web3, 3. Smart Campus & IoT Hardware, and 4. Healthcare & Sustainability Tech. Official Problem Statements will be released on Day 1 at 09:00 AM!'
    }

    if (q.includes('prize') || q.includes('reward') || q.includes('cash') || q.includes('winner')) {
      return 'Prizes include 1st Place Champions, 2nd Place First Runner-Up, 3rd Place Second Runner-Up, plus Special Category Awards for Best All-Girls Team, Best Hardware Hack, and Best Freshers Team!'
    }

    if (q.includes('vaibhav') || q.includes('manthan') || q.includes('head') || q.includes('coordinator') || q.includes('council')) {
      return 'JARVIS Hackathon 4.0 is led by Technical Head Vaibhav Dubey and Technical Coordinator Mr. Manthan Joshi, organized by the SLRTCE Student Council.'
    }

    if (q.includes('rules') || q.includes('conduct') || q.includes('eligibility') || q.includes('plagiarism')) {
      return 'Teams of 2 to 4 enrolled college students are eligible. All code and hardware prototypes must be built during the 24-hour hackathon. Plagiarism results in immediate disqualification. Judging evaluates Innovation (25%), Complexity (25%), UI/UX (25%), and Impact (25%).'
    }

    if (q.includes('ar') || q.includes('hunt') || q.includes('vision') || q.includes('poster')) {
      return 'The Campus AR Treasure Hunt allows participants to scan physical target posters placed across SLRTCE auditorium and labs using their phone camera to unlock secret bonus points and track codes!'
    }

    if (q.includes('suit') || q.includes('mark') || q.includes('armor') || q.includes('iron man')) {
      return 'Tony Stark engineered 85 suit iterations — from Mark I built in a cave to Mark LXXXV Nanotech Bleeding Edge with Vibranium weave and Arc Fusion core.'
    }

    if (q.includes('reactor') || q.includes('arc') || q.includes('power')) {
      return 'The Arc Reactor was miniaturized by Tony Stark in Afghanistan outputting over 3 Gigajoules/second. It evolved from palladium rings to synthesized new element Badassium and high-density Nanotech cores.'
    }

    return `I have analyzed your query regarding "${userQuery}". For complete guidelines, schedule, track details, and team registration, please navigate using the header tabs. How else may I assist you?`
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userText = input.trim()
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const updated = [...messages, { sender: 'user' as const, text: userText, timestamp: now }]
    setMessages(updated)
    setInput('')

    setTimeout(() => {
      const reply = processQuery(userText)
      const aiMsg = { sender: 'ai' as const, text: reply, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      setMessages((prev) => [...prev, aiMsg])
      speakText(reply)
    }, 400)
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[999] flex items-center gap-2.5 bg-gradient-to-r from-[#181b22] to-[#2b313e] hover:from-[#212630] hover:to-[#363e4e] border border-gray-600 text-white px-5 py-3 rounded-full shadow-2xl transition-all cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot className="w-5 h-5 text-white" />
        <span className="font-mono text-xs font-bold tracking-wider">J.A.R.V.I.S. AI</span>
      </motion.button>

      {/* Chatbot Modal Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[min(430px,calc(100vw-32px))] h-[580px] z-[1000] backdrop-blur-2xl bg-black/95 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gray-950 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="font-mono text-xs font-bold text-white tracking-wider">
                    J.A.R.V.I.S. AI CORE
                  </div>
                  <div className="text-[11px] text-gray-400 font-sans">
                    SLRTCE Hackathon Assistant & Knowledge Base
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className="p-1.5 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-all"
                  title={voiceEnabled ? 'Mute Speech' : 'Enable Speech'}
                >
                  {voiceEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 font-sans">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#181b22] to-[#2b313e] border border-gray-700 text-white'
                        : 'bg-gray-900 border border-gray-800 text-gray-200'
                    }`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="font-mono text-[10px] font-bold text-emerald-400 mb-1">
                        [J.A.R.V.I.S. AI]
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div className="text-[9px] text-gray-500 mt-1 text-right font-mono">{msg.timestamp}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-gray-950 border-t border-gray-800 flex gap-2">
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2.5 rounded-lg border transition-all ${
                  isListening ? 'bg-red-950 border-red-500 text-red-400 animate-pulse' : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white'
                }`}
                title="Voice Search"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isListening ? 'Listening...' : 'Ask J.A.R.V.I.S. about hackathon, tracks, rules...'}
                className="flex-1 bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white outline-none font-sans"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-[#181b22] to-[#2b313e] hover:from-[#212630] hover:to-[#363e4e] border border-gray-600 rounded-lg px-3.5 py-2 text-white flex items-center justify-center cursor-pointer transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
