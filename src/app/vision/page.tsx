'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Camera, Sparkles, User } from 'lucide-react'
import { PosterTarget, Pillar } from '../types'
import SectionHeader from '../components/SectionHeader'

export default function VisionPage() {
  const [arActive, setArActive] = useState(false)
  const [scannedPoster, setScannedPoster] = useState<PosterTarget | null>(null)

  const posters: PosterTarget[] = [
    { id: 'POSTER_01', location: 'Main Auditorium Foyer', hint: 'Scan the AI Core Poster to unlock +50 Bonus Point Code for Track 01' },
    { id: 'POSTER_02', location: 'Computer Engineering Lab 3', hint: 'Scan the Web3 Cipher Target to reveal hidden API credits' },
    { id: 'POSTER_03', location: 'Robotics & Hardware Center', hint: 'Scan the Hardware Matrix Target for extra microcontroller gear access' },
  ]

  const pillars: Pillar[] = [
    {
      title: 'TECHNICAL EXCELLENCE',
      desc: 'Promoting production-grade coding standards, robust software architecture, and real-world system resilience among student developers.',
    },
    {
      title: 'INTERDISCIPLINARY SYNTHESIS',
      desc: 'Breaking department silos by pairing Computer Science programmers with EXTC hardware engineers and Mechanical designers.',
    },
    {
      title: 'HARDWARE & SOFTWARE SYNERGY',
      desc: 'Encouraging hybrid projects combining custom microcontrollers, IoT telemetry, sensors, and cloud AI endpoints.',
    },
    {
      title: 'INDUSTRY READINESS',
      desc: 'Bridging classroom theory with industry demands through direct evaluation by senior engineering leads and tech mentors.',
    },
  ]

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Header */}
        <SectionHeader
          badge="INSTITUTIONAL VISION • SLRTCE"
          title="THE VISION OF JARVIS 4.0"
          subtitle="Empowering Student Innovators at Shree L. R. Tiwari College Of Engineering"
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, i) => (
            <div key={i} className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-xl p-6 flex flex-col gap-3 shadow-xl">
              <div className="flex items-center gap-2.5 border-b border-gray-800 pb-3">
                <Shield className="w-4 h-4 text-gray-400" />
                <span className="font-mono font-extrabold text-xs text-white tracking-wider">{p.title}</span>
              </div>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* AR Campus Treasure Hunt Section */}
        <div className="mb-16">
          <div className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col gap-6">
            <div className="text-center">
              <div className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-1">
                INTERACTIVE EXPERIENCE &bull; WEBAR CAMPUS HUNT
              </div>
              <h2 className="font-mono font-black text-2xl sm:text-3xl text-white my-1">
                CAMPUS AR TREASURE HUNT
              </h2>
              <p className="font-sans text-sm text-gray-400 max-w-2xl mx-auto">
                Scan physical JARVIS target posters across SLRTCE campus during the hackathon to unlock secret hints, bonus prize points, and developer credits!
              </p>
            </div>

            {/* AR Simulator Container */}
            <div className="bg-black/90 border border-gray-800 rounded-xl p-8 min-h-[340px] flex flex-col items-center justify-center">
              {!arActive ? (
                <div className="text-center flex flex-col items-center gap-4">
                  <Camera className="w-12 h-12 text-gray-400" />
                  <h3 className="font-mono font-bold text-base text-white">INITIALIZE WEBAR CAMERA SCANNER</h3>
                  <p className="font-sans text-xs text-gray-400 max-w-md">
                    Point your device camera at physical posters located near Auditorium, Labs, and Hardware Center.
                  </p>
                  <button
                    onClick={() => setArActive(true)}
                    className="font-mono font-extrabold text-xs text-white bg-gradient-to-r from-[#181b22] to-[#2b313e] hover:from-[#212630] hover:to-[#363e4e] border border-gray-600 px-6 py-3 rounded-lg shadow-xl transition-all tracking-wider cursor-pointer"
                  >
                    LAUNCH AR SCANNER SIMULATOR
                  </button>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center gap-5">
                  <div className="relative w-64 h-44 border border-dashed border-gray-600 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />
                    <div className="font-mono text-xs text-emerald-400 animate-pulse">WEBAR TARGET MATCHING...</div>
                  </div>

                  <div className="text-center">
                    <div className="font-mono text-[10px] text-gray-400 mb-2">SELECT POSTER TARGET TO SCAN:</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {posters.map((post) => (
                        <button
                          key={post.id}
                          onClick={() => setScannedPoster(post)}
                          className={`font-sans text-xs border px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                            scannedPoster?.id === post.id ? 'bg-gray-800 border-gray-600 text-white' : 'bg-gray-900 border-gray-800 text-gray-400'
                          }`}
                        >
                          {post.location}
                        </button>
                      ))}
                    </div>
                  </div>

                  {scannedPoster && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-3 bg-emerald-950/40 border border-emerald-500/50 p-4 rounded-xl max-w-xl"
                    >
                      <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-mono text-xs font-bold text-emerald-400">AR TARGET RECOGNIZED: {scannedPoster.id}</div>
                        <div className="font-sans text-xs text-gray-200 mt-0.5">{scannedPoster.hint}</div>
                      </div>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setArActive(false)}
                    className="font-mono text-xs text-gray-400 bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg cursor-pointer"
                  >
                    CLOSE AR SCANNER
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Student Council Leadership */}
        <div>
          <h2 className="font-mono font-black text-xl text-white mb-6">ORGANIZING LEADERSHIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 flex gap-4 items-start">
              <User className="w-6 h-6 text-white shrink-0" />
              <div>
                <div className="font-mono text-[10px] text-gray-400 tracking-wider">TECHNICAL HEAD</div>
                <div className="font-sans text-lg font-bold text-white my-1">Vaibhav Dubey</div>
                <div className="font-sans text-xs text-gray-400 leading-relaxed">
                  Leading technical operations, hackathon architecture, and platform engineering for JARVIS 4.0.
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 flex gap-4 items-start">
              <User className="w-6 h-6 text-white shrink-0" />
              <div>
                <div className="font-mono text-[10px] text-gray-400 tracking-wider">TECHNICAL COORDINATOR</div>
                <div className="font-sans text-lg font-bold text-white my-1">Mr. Manthan Joshi</div>
                <div className="font-sans text-xs text-gray-400 leading-relaxed">
                  Faculty guidance, institutional coordination, and industry partnership oversight at SLRTCE.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
