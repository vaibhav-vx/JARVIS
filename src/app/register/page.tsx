'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Users, CheckCircle2, Plus, Trash2, Shield } from 'lucide-react'
import { submitRegistration, TeamLeader, TeamMember } from '../lib/supabase'

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [registrationId, setRegistrationId] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // 1. Team Info
  const [teamName, setTeamName] = useState('')
  const [track, setTrack] = useState('AI & Intelligent Agents')
  const [projectIdea, setProjectIdea] = useState('')

  // 2. Team Leader Info
  const [leader, setLeader] = useState<TeamLeader>({
    name: '',
    email: '',
    phone: '',
    college: 'Shree L. R. Tiwari College Of Engineering',
    year: 'TE',
    branch: 'Computer Engineering',
    rollNo: '',
  })

  // 3. Team Members (At least 1 required member, total team 2 to 4)
  const [teammates, setTeammates] = useState<TeamMember[]>([
    { name: '', email: '', phone: '', year: 'TE', branch: 'Computer Engineering', rollNo: '' },
  ])

  const addTeammate = () => {
    if (teammates.length < 3) {
      setTeammates([
        ...teammates,
        { name: '', email: '', phone: '', year: 'TE', branch: 'Computer Engineering', rollNo: '' },
      ])
    }
  }

  const removeTeammate = (idx: number) => {
    if (teammates.length > 1) {
      setTeammates(teammates.filter((_, i) => i !== idx))
    }
  }

  const handleTeammateChange = (idx: number, field: keyof TeamMember, value: string) => {
    const updated = [...teammates]
    updated[idx][field] = value as any
    setTeammates(updated)
  }

  const validateForm = (): boolean => {
    const errs: Record<string, string> = {}

    if (!teamName.trim()) errs.teamName = 'Team name is required'
    if (!leader.name.trim()) errs.leaderName = 'Leader name is required'
    if (!leader.email.trim() || !leader.email.includes('@')) errs.leaderEmail = 'Valid leader email is required'
    if (!leader.phone.trim() || leader.phone.replace(/\D/g, '').length < 10) errs.leaderPhone = '10-digit mobile number required'
    if (!leader.college.trim()) errs.leaderCollege = 'College name is required'
    if (!leader.rollNo.trim()) errs.leaderRoll = 'Roll No is required'

    teammates.forEach((tm, idx) => {
      if (!tm.name.trim()) errs[`tm_${idx}_name`] = `Member #${idx + 1} name required`
      if (!tm.email.trim() || !tm.email.includes('@')) errs[`tm_${idx}_email`] = `Member #${idx + 1} valid email required`
      if (!tm.phone.trim() || tm.phone.replace(/\D/g, '').length < 10) errs[`tm_${idx}_phone`] = `Member #${idx + 1} 10-digit phone required`
      if (!tm.rollNo.trim()) errs[`tm_${idx}_roll`] = `Member #${idx + 1} Roll No required`
    })

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const regId = 'JARVIS-2026-' + Math.floor(1000 + Math.random() * 9000)

    await submitRegistration({
      registration_id: regId,
      team_name: teamName,
      track,
      project_idea: projectIdea,
      leader,
      members: teammates,
    })

    setRegistrationId(regId)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Header */}
        <div className="mb-10">
          <div className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
            SLRTCE STUDENT COUNCIL &bull; OFFICIAL REGISTRATION
          </div>
          <h1 className="font-mono font-black text-3xl sm:text-5xl text-white tracking-tight mb-2">
            TEAM REGISTRATION PORTAL
          </h1>
          <p className="text-base text-gray-400 font-sans">
            Shree L. R. Tiwari College Of Engineering &bull; Register your 2 to 4 member team for JARVIS Hackathon 4.0
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col gap-8">
            {/* SECTION 1: TEAM & TRACK IDENTIFICATION */}
            <div className="flex items-center gap-3 border-b border-gray-800 pb-3 font-mono text-xs font-bold text-white tracking-wider">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>1. TEAM & TRACK SELECTION</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-400">TEAM NAME *</label>
                <input
                  type="text"
                  placeholder="e.g. Neural Nexus"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className={`bg-gray-900 border rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans ${
                    errors.teamName ? 'border-red-500' : 'border-gray-800 focus:border-gray-600'
                  }`}
                />
                {errors.teamName && <span className="text-[11px] text-red-400 font-sans">{errors.teamName}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-400">PROBLEM STATEMENT TRACK *</label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                >
                  <option value="AI & Intelligent Agents">Track 01: AI & Intelligent Agents</option>
                  <option value="Open Innovation & Web3">Track 02: Open Innovation & Web3</option>
                  <option value="Smart Campus & IoT Hardware">Track 03: Smart Campus & IoT Hardware</option>
                  <option value="Healthcare & Sustainability Tech">Track 04: Healthcare & Sustainability Tech</option>
                </select>
              </div>
            </div>

            {/* SECTION 2: TEAM LEADER DETAILS */}
            <div className="flex items-center gap-3 border-b border-gray-800 pb-3 font-mono text-xs font-bold text-white tracking-wider">
              <User className="w-4 h-4 text-emerald-400" />
              <span>2. TEAM LEADER DETAILS (PRIMARY CONTACT)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-400">LEADER FULL NAME *</label>
                <input
                  type="text"
                  placeholder="Leader Full Name"
                  value={leader.name}
                  onChange={(e) => setLeader({ ...leader, name: e.target.value })}
                  className={`bg-gray-900 border rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans ${
                    errors.leaderName ? 'border-red-500' : 'border-gray-800 focus:border-gray-600'
                  }`}
                />
                {errors.leaderName && <span className="text-[11px] text-red-400 font-sans">{errors.leaderName}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-400">LEADER EMAIL ADDRESS *</label>
                <input
                  type="email"
                  placeholder="leader@college.edu"
                  value={leader.email}
                  onChange={(e) => setLeader({ ...leader, email: e.target.value })}
                  className={`bg-gray-900 border rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans ${
                    errors.leaderEmail ? 'border-red-500' : 'border-gray-800 focus:border-gray-600'
                  }`}
                />
                {errors.leaderEmail && <span className="text-[11px] text-red-400 font-sans">{errors.leaderEmail}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-400">LEADER PHONE / WHATSAPP NO. *</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={leader.phone}
                  onChange={(e) => setLeader({ ...leader, phone: e.target.value })}
                  className={`bg-gray-900 border rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans ${
                    errors.leaderPhone ? 'border-red-500' : 'border-gray-800 focus:border-gray-600'
                  }`}
                />
                {errors.leaderPhone && <span className="text-[11px] text-red-400 font-sans">{errors.leaderPhone}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-400">COLLEGE / INSTITUTION NAME *</label>
                <input
                  type="text"
                  placeholder="College Name"
                  value={leader.college}
                  onChange={(e) => setLeader({ ...leader, college: e.target.value })}
                  className={`bg-gray-900 border rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans ${
                    errors.leaderCollege ? 'border-red-500' : 'border-gray-800 focus:border-gray-600'
                  }`}
                />
                {errors.leaderCollege && <span className="text-[11px] text-red-400 font-sans">{errors.leaderCollege}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-400">YEAR OF STUDY *</label>
                <select
                  value={leader.year}
                  onChange={(e) => setLeader({ ...leader, year: e.target.value as any })}
                  className="bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                >
                  <option value="FE">First Year (FE)</option>
                  <option value="SE">Second Year (SE)</option>
                  <option value="TE">Third Year (TE)</option>
                  <option value="BE">Final Year (BE)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-gray-400">BRANCH / DEPARTMENT *</label>
                <input
                  type="text"
                  placeholder="e.g. Computer Engineering"
                  value={leader.branch}
                  onChange={(e) => setLeader({ ...leader, branch: e.target.value })}
                  className="bg-gray-900 border border-gray-800 focus:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="font-mono text-xs text-gray-400">STUDENT ROLL NO / ID *</label>
                <input
                  type="text"
                  placeholder="e.g. 10245"
                  value={leader.rollNo}
                  onChange={(e) => setLeader({ ...leader, rollNo: e.target.value })}
                  className={`bg-gray-900 border rounded-lg px-3.5 py-2.5 text-sm text-white outline-none font-sans ${
                    errors.leaderRoll ? 'border-red-500' : 'border-gray-800 focus:border-gray-600'
                  }`}
                />
                {errors.leaderRoll && <span className="text-[11px] text-red-400 font-sans">{errors.leaderRoll}</span>}
              </div>
            </div>

            {/* SECTION 3: TEAM MEMBERS DETAILS */}
            <div className="flex items-center gap-3 border-b border-gray-800 pb-3 font-mono text-xs font-bold text-white tracking-wider">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>3. TEAM MEMBERS DETAILS ({teammates.length} ADDED)</span>
            </div>

            {teammates.map((tm, idx) => (
              <div key={idx} className="bg-gray-950 border border-gray-800 rounded-xl p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-gray-400">
                  <span>TEAMMATE #{idx + 1} {idx === 0 ? '(REQUIRED MEMBER)' : '(OPTIONAL MEMBER)'}</span>
                  {teammates.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTeammate(idx)}
                      className="text-red-400 hover:text-red-300 flex items-center gap-1 font-mono text-[11px] cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>REMOVE</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[10px] text-gray-400">FULL NAME *</label>
                    <input
                      type="text"
                      placeholder="Member Full Name"
                      value={tm.name}
                      onChange={(e) => handleTeammateChange(idx, 'name', e.target.value)}
                      className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white outline-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[10px] text-gray-400">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      placeholder="member@college.edu"
                      value={tm.email}
                      onChange={(e) => handleTeammateChange(idx, 'email', e.target.value)}
                      className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white outline-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[10px] text-gray-400">PHONE / MOBILE NO. *</label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={tm.phone}
                      onChange={(e) => handleTeammateChange(idx, 'phone', e.target.value)}
                      className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white outline-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[10px] text-gray-400">YEAR OF STUDY *</label>
                    <select
                      value={tm.year}
                      onChange={(e) => handleTeammateChange(idx, 'year', e.target.value)}
                      className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white outline-none font-sans"
                    >
                      <option value="FE">First Year (FE)</option>
                      <option value="SE">Second Year (SE)</option>
                      <option value="TE">Third Year (TE)</option>
                      <option value="BE">Final Year (BE)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[10px] text-gray-400">BRANCH *</label>
                    <input
                      type="text"
                      placeholder="Branch"
                      value={tm.branch}
                      onChange={(e) => handleTeammateChange(idx, 'branch', e.target.value)}
                      className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white outline-none font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[10px] text-gray-400">ROLL NO *</label>
                    <input
                      type="text"
                      placeholder="Roll No"
                      value={tm.rollNo}
                      onChange={(e) => handleTeammateChange(idx, 'rollNo', e.target.value)}
                      className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-xs text-white outline-none font-sans"
                    />
                  </div>
                </div>
              </div>
            ))}

            {teammates.length < 3 && (
              <button
                type="button"
                onClick={addTeammate}
                className="flex items-center justify-center gap-2 font-mono font-bold text-xs text-white bg-gray-900 border border-gray-800 hover:border-gray-700 py-3 rounded-lg cursor-pointer transition-all"
              >
                <Plus className="w-4 h-4 text-emerald-400" />
                <span>ADD TEAMMATE #{teammates.length + 1}</span>
              </button>
            )}

            <button
              type="submit"
              className="font-mono font-extrabold text-xs text-white bg-gradient-to-r from-[#181b22] to-[#2b313e] hover:from-[#212630] hover:to-[#363e4e] border border-gray-600 py-4 rounded-lg shadow-2xl transition-all tracking-wider"
            >
              SUBMIT TEAM REGISTRATION
            </button>
          </form>
        ) : (
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-2xl p-8 text-center flex flex-col items-center gap-5 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-emerald-400" />
            <h2 className="font-mono font-black text-2xl text-white">TEAM REGISTRATION SUCCESSFUL!</h2>
            <div className="font-mono text-xs font-bold text-emerald-400 bg-gray-900 border border-emerald-500/50 px-4 py-1.5 rounded">
              REGISTRATION ID: {registrationId}
            </div>

            <p className="font-sans text-sm text-gray-400 max-w-xl">
              Team <strong>{teamName}</strong> has been successfully registered for JARVIS Hackathon 4.0 at <strong>Shree L. R. Tiwari College Of Engineering</strong>!
            </p>

            <div className="w-full max-w-xl bg-gray-950 border border-gray-800 rounded-xl p-5 text-left flex flex-col gap-2 font-sans text-xs">
              <div className="font-mono font-bold text-white border-b border-gray-800 pb-2 mb-1">
                REGISTERED TEAM SUMMARY:
              </div>
              <div className="text-gray-300">Track: <strong className="text-white">{track}</strong></div>
              <div className="text-gray-300">Leader: <strong className="text-white">{leader.name} ({leader.year} - {leader.email} | {leader.phone})</strong></div>
              {teammates.map((tm, idx) => (
                <div key={idx} className="text-gray-300">Member #{idx + 1}: <strong className="text-white">{tm.name} ({tm.year} - {tm.email} | {tm.phone})</strong></div>
              ))}
            </div>

            <div className="mt-2">
              <a
                href="https://www.instagram.com/studentcouncil.slrtce?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold text-white bg-gray-900 border border-gray-700 px-6 py-3 rounded-lg inline-block hover:border-gray-500 transition-all"
              >
                JOIN SLRTCE STUDENT COUNCIL INSTAGRAM
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
