import React from 'react'

interface SectionHeaderProps {
  badge: string
  title: string
  subtitle: string
}

export default function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 text-left">
      <div className="font-mono text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">
        {badge}
      </div>
      <h1 className="font-mono font-black text-3xl sm:text-5xl text-white tracking-tight mb-2">
        {title}
      </h1>
      <p className="text-base text-gray-400 font-sans max-w-3xl">
        {subtitle}
      </p>
    </div>
  )
}
