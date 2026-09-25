'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, CheckCircle2 } from 'lucide-react'
import { submitSponsorInquiry, SponsorInquiryPayload } from '../lib/supabase'

interface Sponsor {
  name: string
  tier: string
  category: string
}

export default function SponsorsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<SponsorInquiryPayload>({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    tier: 'Platinum Sponsor',
  })

  const sponsors: Sponsor[] = [
    { name: 'Stark Industries Tech', tier: 'TITLE SPONSOR', category: 'Platinum' },
    { name: 'Google Cloud Platform', tier: 'INFRASTRUCTURE PARTNER', category: 'Platinum' },
    { name: 'GitHub Developer Program', tier: 'DEV PLATFORM PARTNER', category: 'Gold' },
    { name: 'Vercel & Next.js', tier: 'DEPLOYMENT PARTNER', category: 'Gold' },
    { name: 'Supabase Data Systems', tier: 'DATABASE PARTNER', category: 'Silver' },
    { name: 'SLRTCE Innovation Cell', tier: 'HOST ACADEMIC PARTNER', category: 'Institutional' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitSponsorInquiry(formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Header */}
        <div className="mb-10">
          <div className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
            SPONSORS & PARTNERS &bull; SLRTCE
          </div>
          <h1 className="font-mono font-black text-3xl sm:text-5xl text-white tracking-tight mb-2">
            OUR SPONSORS & COLLABORATORS
          </h1>
          <p className="text-base text-gray-400 font-sans">
            Empowering Student Technical Talent at Shree L. R. Tiwari College Of Engineering
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sponsors.map((s, i) => (
            <div key={i} className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-xl">
              <Building2 className="w-8 h-8 text-gray-400" />
              <h3 className="font-mono font-extrabold text-base text-white">{s.name}</h3>
              <span className="font-mono text-[10px] font-bold text-gray-400 bg-gray-800 border border-gray-700 px-3 py-1 rounded">
                {s.tier}
              </span>
            </div>
          ))}
        </div>

        {/* Become a Sponsor Application Form */}
        <div className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3.5 border-b border-gray-800 pb-5 mb-6">
            <Building2 className="w-6 h-6 text-white" />
            <div>
              <h2 className="font-mono font-extrabold text-xl text-white">BECOME A SPONSOR & PARTNER</h2>
              <p className="font-sans text-xs text-gray-400 mt-0.5">
                Join us in shaping the next generation of engineers at JARVIS Hackathon 4.0
              </p>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-gray-400">COMPANY / ORGANIZATION NAME *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Acme Tech Solutions"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    className="bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-gray-400">CONTACT PERSON FULL NAME *</label>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={formData.contact_person}
                    onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                    className="bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-gray-400">OFFICIAL EMAIL ADDRESS *</label>
                  <input
                    required
                    type="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-gray-400">PHONE / MOBILE NUMBER *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="font-mono text-xs text-gray-400">DESIRED SPONSORSHIP TIER *</label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                  >
                    <option value="Title Sponsor">Title Sponsor</option>
                    <option value="Platinum Sponsor">Platinum Sponsor</option>
                    <option value="Gold Sponsor">Gold Sponsor</option>
                    <option value="Silver Sponsor">Silver Sponsor</option>
                    <option value="Community / API Partner">Community / API Partner</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="font-mono font-extrabold text-xs text-white bg-gradient-to-r from-[#181b22] to-[#2b313e] hover:from-[#212630] hover:to-[#363e4e] border border-gray-600 py-3.5 rounded-lg shadow-xl transition-all tracking-wider"
              >
                SUBMIT SPONSORSHIP INQUIRY
              </button>
            </form>
          ) : (
            <div className="text-center py-10 flex flex-col items-center gap-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-400" />
              <h3 className="font-mono font-bold text-lg text-white">SPONSORSHIP INQUIRY RECEIVED!</h3>
              <p className="font-sans text-sm text-gray-400 max-w-lg">
                Thank you, <strong>{formData.contact_person}</strong> ({formData.company_name}). Technical Coordinator Mr. Manthan Joshi and the SLRTCE Student Council will reach out shortly.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
