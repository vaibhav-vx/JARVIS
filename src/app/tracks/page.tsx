'use client'

import { motion } from 'framer-motion'
import { Track } from '../types'
import SectionHeader from '../components/SectionHeader'
import VideoPlayerCard from '../components/VideoPlayerCard'

export default function TracksPage() {
  const tracks: Track[] = [
    {
      id: 'TRACK 01',
      title: 'AI & INTELLIGENT AGENTS',
      domain: 'GENERATIVE AI, LLM AGENTS & COMPUTER VISION',
      desc: 'Build next-gen LLM applications, autonomous agents, RAG pipelines, multimodal assistants, or computer vision systems.',
      challenges: ['Autonomous Task Execution', 'RAG over Complex Datasets', 'Voice & Multimodal AI Agents'],
    },
    {
      id: 'TRACK 02',
      title: 'OPEN INNOVATION & WEB3',
      domain: 'FULL-STACK, CLOUD PLATFORMS & DECENTRALIZED WEB',
      desc: 'Craft ultra-fast web platforms, cross-platform mobile apps, or decentralized Web3 systems that deliver seamless UX.',
      challenges: ['Real-time Cloud Systems', 'DeFi & Smart Contracts', 'High-Scale Web & Mobile Apps'],
    },
    {
      id: 'TRACK 03',
      title: 'SMART CAMPUS & IOT HARDWARE',
      domain: 'ROBOTICS, EMBEDDED SYSTEMS & EDGE COMPUTING',
      desc: 'Develop smart edge hardware, robotics telemetry, IoT sensor networks, or embedded systems bridging physical and digital worlds.',
      challenges: ['Edge AI & Microcontrollers', 'Robotics & Drone Telemetry', 'Smart Campus Automation'],
    },
    {
      id: 'TRACK 04',
      title: 'HEALTHCARE & SUSTAINABILITY TECH',
      domain: 'MEDTECH, GREEN TECH & RENEWABLE ENERGY',
      desc: 'Engineer solutions for digital healthcare monitoring, carbon footprint tracking, smart agriculture, or clean energy management.',
      challenges: ['Patient Health Telemetry', 'Green Tech & Energy Analytics', 'Smart Agriculture Sensors'],
    },
  ]

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* 1. RECTANGLE VIDEO AT TOP (UPSIDE IN VIEW - CLEAN NO TEXT OVERLAY) */}
        <VideoPlayerCard src="/videos/aura-scene.mp4" />

        {/* 2. ALL WRITTEN TEXT & CARDS DOWNSIDE */}
        <SectionHeader
          badge="HACKATHON TRACKS • DOMAINS"
          title="PROBLEM STATEMENT TRACKS"
          subtitle="Shree L. R. Tiwari College Of Engineering • Official Problem Statements Release on October 16, 2026, 09:00 AM"
        />

        {/* 4 Track Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div key={track.id} className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold text-white bg-gray-800 border border-gray-700 px-2.5 py-1 rounded">
                    {track.id}
                  </span>
                </div>

                <h3 className="font-mono font-extrabold text-lg text-white mb-1">{track.title}</h3>
                <div className="font-mono text-xs font-bold text-gray-400 mb-3">{track.domain}</div>
                <p className="font-sans text-sm text-gray-400 leading-relaxed mb-4">{track.desc}</p>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-2">KEY FOCUS AREAS:</div>
                <div className="flex flex-col gap-1">
                  {track.challenges.map((item, idx) => (
                    <div key={idx} className="font-sans text-xs text-gray-300">
                      &rsaquo; {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
