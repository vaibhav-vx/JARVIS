'use client'

import { motion } from 'framer-motion'
import { Award, Shield, CheckCircle2 } from 'lucide-react'
import { PodiumPrize, SpecialCategory } from '../types'
import SectionHeader from '../components/SectionHeader'
import VideoPlayerCard from '../components/VideoPlayerCard'

export default function PrizesPage() {
  const podiumPrizes: PodiumPrize[] = [
    {
      rank: '1ST PLACE',
      title: 'CHAMPIONS & WINNERS',
      badge: 'GRAND WINNER',
      perks: ['Grand Cash Prize', 'Official SLRTCE Winner Trophy', 'Certificate of Excellence', 'Direct Mentorship & Incubation Access'],
    },
    {
      rank: '2ND PLACE',
      title: 'FIRST RUNNER-UP',
      badge: 'RUNNER UP',
      perks: ['Runner-Up Cash Prize', 'Official SLRTCE Runner-Up Trophy', 'Certificate of Merit', 'Cloud Credits & Tech Subscriptions'],
    },
    {
      rank: '3RD PLACE',
      title: 'SECOND RUNNER-UP',
      badge: 'SECOND RUNNER UP',
      perks: ['Second Runner-Up Cash Prize', 'Official SLRTCE Trophy', 'Certificate of Merit', 'Developer Tool Bundles'],
    },
  ]

  const specialCategories: SpecialCategory[] = [
    { title: 'BEST ALL-GIRLS TEAM', desc: 'Awarded to the top-performing team composed entirely of women innovators.' },
    { title: 'BEST HARDWARE HACK', desc: 'Honoring the most impressive physical prototype integrating microcontrollers & IoT telemetry.' },
    { title: 'BEST FRESHERS TEAM', desc: 'Recognizing outstanding first-year (FE) engineering teams exhibiting top potential.' },
  ]

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* 1. RECTANGLE REVEAL VIDEO AT TOP (UPSIDE IN VIEW - CLEAN NO TEXT OVERLAY) */}
        <VideoPlayerCard src="/videos/aura-scene.mp4" />

        {/* 2. ALL WRITTEN TEXT & CARDS DOWNSIDE */}
        <SectionHeader
          badge="PRIZES & REWARDS • RECOGNITION MATRIX"
          title="TOTAL PRIZE POOL & AWARDS"
          subtitle="Shree L. R. Tiwari College Of Engineering • Honoring High-Impact Technical Execution"
        />

        {/* Podium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {podiumPrizes.map((p, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center justify-between">
                <Award className="w-6 h-6 text-white" />
                <span className="font-mono text-[11px] font-bold text-white bg-gray-800 border border-gray-700 px-3 py-1 rounded">
                  {p.rank}
                </span>
              </div>

              <div>
                <h3 className="font-mono font-extrabold text-lg text-white mb-1">{p.title}</h3>
                <div className="font-mono text-xs font-bold text-gray-400 tracking-wider">{p.badge}</div>
              </div>

              <div className="pt-4 border-t border-gray-800 flex flex-col gap-2.5 mt-auto">
                {p.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2.5 font-sans text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Category Awards */}
        <div>
          <h2 className="font-mono font-black text-xl text-white mb-6">SPECIAL CATEGORY AWARDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialCategories.map((cat, i) => (
              <div key={i} className="bg-gray-800/80 border border-gray-700 rounded-xl p-5 flex gap-3.5 items-start">
                <Shield className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono font-bold text-xs text-white mb-1">{cat.title}</h3>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
