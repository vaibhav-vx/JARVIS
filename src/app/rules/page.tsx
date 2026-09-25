'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'

interface RuleCategory {
  category: string
  items: string[]
}

export default function RulesPage() {
  const rules: RuleCategory[] = [
    {
      category: '1. ELIGIBILITY & TEAM FORMATION',
      items: [
        'Teams must consist of 2 to 4 registered members.',
        'All team members must be enrolled students at a recognized college/university.',
        'Cross-branch and cross-year teams are permitted and encouraged.',
        'Each participant can belong to only ONE team.',
      ],
    },
    {
      category: '2. CODE & ORIGINALITY GUIDELINES',
      items: [
        'All project code, design assets, and hardware implementations MUST be created during the 24-hour hackathon window.',
        'Pre-existing open-source libraries, frameworks, and APIs are allowed provided they are declared in the README.',
        'Plagiarism or copying pre-existing repositories without modification will result in immediate disqualification.',
      ],
    },
    {
      category: '3. SUBMISSION REQUIREMENTS',
      items: [
        'Teams must submit a public GitHub repository link containing complete source code.',
        'A comprehensive README.md detailing project vision, tech stack, installation steps, and track selection.',
        'A 2-minute video demo demonstrating working functionality.',
      ],
    },
    {
      category: '4. JUDGING CRITERIA (100 PTS TOTAL)',
      items: [
        'Innovation & Originality (25 Pts): Uniqueness of the problem approach.',
        'Technical Complexity (25 Pts): Quality of software/hardware engineering.',
        'UI/UX & Execution (25 Pts): Usability, interface polish, and demo stability.',
        'Real-World Impact (25 Pts): Practical viability and scalability.',
      ],
    },
  ]

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Header */}
        <div className="mb-10">
          <div className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
            HACKATHON GUIDELINES &bull; CODE OF CONDUCT
          </div>
          <h1 className="font-mono font-black text-3xl sm:text-5xl text-white tracking-tight mb-2">
            RULES & REGULATIONS
          </h1>
          <p className="text-base text-gray-400 font-sans">
            Shree L. R. Tiwari College Of Engineering &bull; Official Competition Protocol
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {rules.map((section, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col gap-4">
              <div className="flex items-center gap-3 font-mono font-bold text-sm text-white border-b border-gray-800 pb-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>{section.category}</span>
              </div>
              <div className="flex flex-col gap-2.5">
                {section.items.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 font-sans text-sm text-gray-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
