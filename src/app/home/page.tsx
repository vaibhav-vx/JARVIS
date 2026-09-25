'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Award, Layers, Clock, Users, Compass, LucideIcon } from 'lucide-react'

interface ModuleItem {
  title: string
  subtitle: string
  desc: string
  path: string
  icon: LucideIcon
}

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-10-16T09:00:00+05:30').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const modules: ModuleItem[] = [
    {
      title: 'ABOUT JARVIS 4.0',
      subtitle: 'EVENT OVERVIEW & MISSION',
      desc: 'Discover SLRTCE flagship 24-hour hybrid hackathon uniting engineers, developers, and visionaries.',
      path: '/about',
      icon: Compass,
    },
    {
      title: 'HACKATHON TRACKS',
      subtitle: 'PROBLEM STATEMENT DOMAINS',
      desc: 'Explore the 4 official problem domains: AI & Agents, Web3 & Cloud, IoT Hardware, and Sustainability.',
      path: '/tracks',
      icon: Layers,
    },
    {
      title: 'VISION & AR HUNT',
      subtitle: 'CAMPUS INNOVATION MATRIX',
      desc: 'Learn about our long-term technical vision and participate in the interactive campus AR treasure hunt.',
      path: '/vision',
      icon: Users,
    },
    {
      title: 'PRIZES & REWARDS',
      subtitle: 'PRIZE POOL & RECOGNITION',
      desc: 'Compete for podium cash prizes and category awards including Best All-Girls Team and Best Hardware Hack.',
      path: '/prizes',
      icon: Award,
    },
    {
      title: 'SCHEDULE & TIMELINE',
      subtitle: '24-HOUR EVENT ITINERARY',
      desc: 'View keynotes, hacking sprints, mentoring sessions, submission deadlines, and final presentations.',
      path: '/schedule',
      icon: Clock,
    },
    {
      title: 'SPONSORS & PARTNERS',
      subtitle: 'INDUSTRY COLLABORATORS',
      desc: 'Connect with industry sponsors providing mentorship, API access, cloud credits, and recruitment opportunities.',
      path: '/sponsors',
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Header Banner */}
        <div className="text-center mb-12">
          <div className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
            SHREE L. R. TIWARI COLLEGE OF ENGINEERING
          </div>
          <h1 className="font-mono font-black text-3xl sm:text-6xl text-white tracking-tight my-2">
            JARVIS HACKATHON 4.0
          </h1>
          <p className="text-base text-gray-400 font-sans max-w-2xl mx-auto">
            Flagship 24-Hour Hybrid Hackathon &bull; October 16–17, 2026 &bull; Mumbai, India
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 font-mono text-xs text-white bg-gray-800/80 border border-gray-700 px-4 py-2.5 rounded-lg shadow">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>OCTOBER 16–17, 2026</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-white bg-gray-800/80 border border-gray-700 px-4 py-2.5 rounded-lg shadow">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>SLRTCE CAMPUS, MIRA ROAD</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-white bg-gray-800/80 border border-gray-700 px-4 py-2.5 rounded-lg shadow">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>24 HOURS CONTINUOUS HACKING</span>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-2xl p-8 text-center mb-16 shadow-2xl">
          <div className="font-mono text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">
            T-MINUS UNTIL HACKATHON LAUNCH:
          </div>
          <div className="flex justify-center items-center gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="font-mono font-black text-2xl sm:text-5xl text-white">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 tracking-wider mt-1">DAYS</div>
            </div>
            <div className="font-mono text-2xl sm:text-4xl text-gray-600">:</div>
            <div className="flex flex-col items-center">
              <div className="font-mono font-black text-2xl sm:text-5xl text-white">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 tracking-wider mt-1">HOURS</div>
            </div>
            <div className="font-mono text-2xl sm:text-4xl text-gray-600">:</div>
            <div className="flex flex-col items-center">
              <div className="font-mono font-black text-2xl sm:text-5xl text-white">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 tracking-wider mt-1">MINUTES</div>
            </div>
            <div className="font-mono text-2xl sm:text-4xl text-gray-600">:</div>
            <div className="flex flex-col items-center">
              <div className="font-mono font-black text-2xl sm:text-5xl text-white">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 tracking-wider mt-1">SECONDS</div>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/register" className="no-underline">
              <button className="font-mono font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-[#181b22] to-[#2b313e] hover:from-[#212630] hover:to-[#363e4e] border border-gray-600 px-8 py-3.5 rounded-lg shadow-xl transition-all tracking-widest">
                REGISTER YOUR TEAM NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-8">
          <div className="font-mono text-xs text-gray-400 tracking-widest uppercase">EXPLORE EVENT PORTALS</div>
          <h2 className="font-mono font-black text-2xl sm:text-3xl text-white">HACKATHON MODULES</h2>
        </div>

        {/* 6 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => {
            const IconComp = mod.icon
            return (
              <Link key={idx} href={mod.path} className="no-underline">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="backdrop-blur-xl bg-black/60 border border-gray-800 hover:border-gray-600 rounded-xl p-6 flex flex-col justify-between h-full transition-all cursor-pointer shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <IconComp className="w-6 h-6 text-white" />
                      <span className="font-mono text-[11px] font-bold text-gray-400 tracking-wider">
                        {mod.subtitle}
                      </span>
                    </div>
                    <h3 className="font-mono font-extrabold text-lg text-white mb-2">{mod.title}</h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">{mod.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between font-mono text-xs font-bold text-white">
                    <span>EXPLORE MODULE</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
