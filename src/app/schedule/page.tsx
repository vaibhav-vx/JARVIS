'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar, CheckCircle2, Sparkles, Flag, Play } from 'lucide-react'

// TypeScript Interface for Timeline Events
export interface TimelineEvent {
  id: string
  time: string
  title: string
  desc: string
  day: 'Day 1' | 'Day 2'
  status: 'upcoming' | 'past' | 'live'
  category: 'Keynote' | 'Hacking' | 'Mentorship' | 'Submission' | 'Ceremony'
}

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  const timelineEvents: TimelineEvent[] = [
    {
      id: 'evt-01',
      time: '08:00 AM – 09:00 AM',
      title: 'Team Reporting & Check-in',
      desc: 'Badge verification, team registration confirmation, and desk allocation at SLRTCE Auditorium.',
      day: 'Day 1',
      status: 'past',
      category: 'Keynote',
    },
    {
      id: 'evt-02',
      time: '09:00 AM – 10:00 AM',
      title: 'Keynote & Problem Statements Reveal',
      desc: 'Opening ceremony by Technical Head Vaibhav Dubey & Technical Coordinator Mr. Manthan Joshi. Official release of 4 Track Problem Statements.',
      day: 'Day 1',
      status: 'past',
      category: 'Keynote',
    },
    {
      id: 'evt-03',
      time: '10:00 AM',
      title: 'Hacking Sprint 1 Begins',
      desc: '24-hour continuous hacking clock starts. Initial architecture setup and repo initialization.',
      day: 'Day 1',
      status: 'upcoming',
      category: 'Hacking',
    },
    {
      id: 'evt-04',
      time: '01:00 PM – 02:00 PM',
      title: 'Lunch Break & Networking',
      desc: 'Buffet lunch served at SLRTCE cafeteria for all registered hackathon teams.',
      day: 'Day 1',
      status: 'upcoming',
      category: 'Hacking',
    },
    {
      id: 'evt-05',
      time: '04:00 PM – 06:00 PM',
      title: 'Mentorship & Architecture Review',
      desc: 'Domain mentors visit teams for technical feedback, cloud architecture, and code reviews.',
      day: 'Day 1',
      status: 'upcoming',
      category: 'Mentorship',
    },
    {
      id: 'evt-06',
      time: '08:30 PM – 09:30 PM',
      title: 'Dinner Break',
      desc: 'Evening meal and energy refresh at the main dining hall.',
      day: 'Day 1',
      status: 'upcoming',
      category: 'Hacking',
    },
    {
      id: 'evt-07',
      time: '11:00 PM',
      title: 'Mid-Way Evaluation Checkpoint',
      desc: 'Progress check by jury panel. Bonus point evaluations for track achievements.',
      day: 'Day 1',
      status: 'upcoming',
      category: 'Mentorship',
    },
    {
      id: 'evt-08',
      time: '01:00 AM – 02:00 AM',
      title: 'Midnight Refreshments & Coding Sprint',
      desc: 'Late night snacks, coffee bar, and continuous development sprint.',
      day: 'Day 2',
      status: 'upcoming',
      category: 'Hacking',
    },
    {
      id: 'evt-09',
      time: '07:30 AM – 08:30 AM',
      title: 'Breakfast & Final Sprint',
      desc: 'Morning breakfast and final UI polish, bug fixes, and deployment.',
      day: 'Day 2',
      status: 'upcoming',
      category: 'Hacking',
    },
    {
      id: 'evt-10',
      time: '10:00 AM',
      title: 'Code Freeze & Project Submission',
      desc: 'All commits, video demos, and GitHub repository links must be submitted to the portal.',
      day: 'Day 2',
      status: 'upcoming',
      category: 'Submission',
    },
    {
      id: 'evt-11',
      time: '11:00 AM – 02:00 PM',
      title: 'Round 1 Judging & Live Demos',
      desc: 'Teams present 5-minute live project demos before technical judges.',
      day: 'Day 2',
      status: 'upcoming',
      category: 'Submission',
    },
    {
      id: 'evt-12',
      time: '03:00 PM – 04:30 PM',
      title: 'Grand Finale & Award Ceremony',
      desc: 'Finalist pitches, podium prize distributions, winner announcements, and closing remarks.',
      day: 'Day 2',
      status: 'upcoming',
      category: 'Ceremony',
    },
  ]

  const filteredEvents = timelineEvents.filter((evt) =>
    activeTab === 'upcoming' ? evt.status === 'upcoming' : evt.status === 'past'
  )

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Header Section */}
        <div className="mb-10 text-left">
          <div className="text-xs font-semibold tracking-widest text-gray-400 uppercase font-mono mb-2">
            HACKATHON SCHEDULE &bull; TIMELINE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3 font-mono">
            24-HOUR EVENT ITINERARY
          </h1>
          <p className="text-base text-gray-400 font-sans max-w-2xl">
            Shree L. R. Tiwari College Of Engineering &bull; October 16–17, 2026
          </p>
        </div>

        {/* Luma Aesthetic Tab Switcher */}
        <div className="flex items-center gap-3 mb-8 border-b border-gray-800/80 pb-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold font-mono tracking-wider transition-all backdrop-blur-md ${
              activeTab === 'upcoming'
                ? 'bg-gray-800/90 text-white border border-gray-700 shadow-lg'
                : 'bg-black/40 text-gray-400 hover:text-white hover:bg-gray-800/40 border border-transparent'
            }`}
          >
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>UPCOMING EVENTS ({timelineEvents.filter((e) => e.status === 'upcoming').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('past')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold font-mono tracking-wider transition-all backdrop-blur-md ${
              activeTab === 'past'
                ? 'bg-gray-800/90 text-white border border-gray-700 shadow-lg'
                : 'bg-black/40 text-gray-400 hover:text-white hover:bg-gray-800/40 border border-transparent'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-gray-400" />
            <span>PAST TIMELINE ({timelineEvents.filter((e) => e.status === 'past').length})</span>
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((evt) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="backdrop-blur-xl bg-black/60 border border-gray-800/80 rounded-xl p-6 shadow-xl hover:border-gray-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{evt.time}</span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-gray-800/80 text-gray-300 border border-gray-700 px-2.5 py-1 rounded">
                    {evt.day} &bull; {evt.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-mono mb-2">{evt.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">{evt.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>EVENT ID: {evt.id}</span>
                <span className="text-emerald-400 font-bold uppercase">&bull; {evt.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
