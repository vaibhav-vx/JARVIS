'use client'

import { motion } from 'framer-motion'
import { User, Shield, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import VideoPlayerCard from '../components/VideoPlayerCard'

export default function AboutPage() {
  const highlights = [
    { title: '24-Hour Continuous Innovation', desc: 'Non-stop hacking sprint designed to test technical endurance and product development speed.' },
    { title: 'Interdisciplinary Problem Solving', desc: 'Bringing together students across CS, IT, AI, EXTC, and Mechanical disciplines.' },
    { title: 'Industry & Academic Mentorship', desc: 'Direct access to senior engineering leads, tech founders, and domain experts.' },
    { title: 'Hands-On Hardware & Software Synthesis', desc: 'Support for physical hardware prototypes alongside full-stack & AI software.' },
  ]

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* 1. RECTANGLE VIDEO AT TOP (UPSIDE IN VIEW - CLEAN NO TEXT OVERLAY) */}
        <VideoPlayerCard src="/videos/iron-man-scene.mp4" />

        {/* 2. ALL WRITTEN TEXT & CONTENT DOWNSIDE */}
        <SectionHeader
          badge="ABOUT THE EVENT • SLRTCE"
          title="JARVIS HACKATHON 4.0"
          subtitle="Shree L. R. Tiwari College Of Engineering • Premier Flagship Student Hackathon"
        />

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col gap-4">
            <h2 className="font-mono font-extrabold text-lg text-white border-b border-gray-800 pb-3">
              HOST INSTITUTION & OVERVIEW
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              JARVIS Hackathon 4.0 is the premier technical competition hosted by <strong className="text-white">Shree L. R. Tiwari College Of Engineering (SLRTCE)</strong>, located in Mira Road East, Thane. Over two high-intensity days on October 16–17, 2026, hundreds of student developers, designers, and innovators gather to turn ground-breaking ideas into working software and hardware solutions.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Named in honor of J.A.R.V.I.S. (Just A Rather Very Intelligent System), this hackathon encourages participants to build intelligent systems, scalable cloud applications, smart IoT hardware, and sustainable technologies that tackle real-world challenges.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col gap-4">
            <h2 className="font-mono font-extrabold text-lg text-white border-b border-gray-800 pb-3">
              HACKATHON LEADERSHIP
            </h2>
            <div className="flex flex-col gap-3.5 mt-1">
              <div className="flex items-center gap-3.5 bg-gray-800/80 border border-gray-700 p-3.5 rounded-lg">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-mono text-[10px] text-gray-400 tracking-wider">TECHNICAL HEAD</div>
                  <div className="font-sans text-sm font-bold text-white">Vaibhav Dubey</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-gray-800/80 border border-gray-700 p-3.5 rounded-lg">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-mono text-[10px] text-gray-400 tracking-wider">TECHNICAL COORDINATOR</div>
                  <div className="font-sans text-sm font-bold text-white">Mr. Manthan Joshi</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-gray-800/80 border border-gray-700 p-3.5 rounded-lg">
                <Shield className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-mono text-[10px] text-gray-400 tracking-wider">ORGANIZING BODY</div>
                  <div className="font-sans text-sm font-bold text-white">SLRTCE Student Council</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Objectives */}
        <div>
          <h2 className="font-mono font-black text-xl text-white mb-6">CORE OBJECTIVES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <div key={i} className="bg-gray-800/80 border border-gray-700 rounded-xl p-5 flex gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono font-bold text-xs text-white mb-1">{h.title}</h3>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
