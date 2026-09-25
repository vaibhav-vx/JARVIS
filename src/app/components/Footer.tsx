'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ExternalLink, Globe, MapPin } from 'lucide-react'

export default function Footer() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <footer className="bg-gradient-to-b from-[#0f1115] to-[#07080a] border-t border-gray-800 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800/80">
          {/* Col 1: Host & Event Info */}
          <div className="flex flex-col gap-3">
            <div className="font-mono font-black text-lg text-white tracking-wider">
              J.A.R.V.I.S. HACKATHON 4.0
            </div>
            <p className="font-sans text-sm font-semibold text-gray-200">
              Shree L. R. Tiwari College Of Engineering
            </p>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-gray-400" />
              Kanakia Park, Mira Road East, Thane, Maharashtra 401107
            </p>
            <p className="font-mono text-[11px] text-gray-500 tracking-wider mt-1">
              OCTOBER 16 – 17, 2026 &bull; 24-HOUR HYBRID HACKATHON
            </p>
          </div>

          {/* Col 2: Leadership & Coordinators */}
          <div className="flex flex-col gap-3">
            <div className="font-mono font-extrabold text-xs text-white tracking-widest uppercase">
              HACKATHON LEADERSHIP
            </div>
            <div className="flex flex-col gap-2 font-sans text-xs">
              <div>
                <div className="font-mono text-[10px] text-gray-500">Technical Head:</div>
                <div className="font-bold text-white">Vaibhav Dubey</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-gray-500">Technical Coordinator:</div>
                <div className="font-bold text-white">Mr. Manthan Joshi</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-gray-500">Organizing Body:</div>
                <div className="font-bold text-white">SLRTCE Student Council</div>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="flex flex-col gap-3">
            <div className="font-mono font-extrabold text-xs text-white tracking-widest uppercase">
              NAVIGATION
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <Link href="/home" className="hover:text-white transition-colors">HOME</Link>
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <Link href="/tracks" className="hover:text-white transition-colors">TRACKS</Link>
              <Link href="/vision" className="hover:text-white transition-colors">VISION</Link>
              <Link href="/prizes" className="hover:text-white transition-colors">PRIZES</Link>
              <Link href="/schedule" className="hover:text-white transition-colors">SCHEDULE</Link>
              <Link href="/sponsors" className="hover:text-white transition-colors">SPONSORS</Link>
              <Link href="/rules" className="hover:text-white transition-colors">RULES</Link>
              <Link href="/register" className="hover:text-white transition-colors col-span-2">REGISTER</Link>
            </div>
          </div>

          {/* Col 4: Official Portals */}
          <div className="flex flex-col gap-3">
            <div className="font-mono font-extrabold text-xs text-white tracking-widest uppercase">
              OFFICIAL PORTALS
            </div>
            <div className="flex flex-col gap-2.5 font-sans text-xs">
              <a
                href="https://www.instagram.com/studentcouncil.slrtce?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-white bg-gray-900 border border-gray-800 hover:border-gray-700 px-3.5 py-2.5 rounded-lg transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>SLRTCE Student Council</span>
                <ExternalLink className="w-3 h-3 ml-auto text-gray-500" />
              </a>

              <a
                href="https://slrtce.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-white bg-gray-900 border border-gray-800 hover:border-gray-700 px-3.5 py-2.5 rounded-lg transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>SLRTCE Official Website</span>
                <ExternalLink className="w-3 h-3 ml-auto text-gray-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 text-xs font-sans text-gray-500">
          <div>
            &copy; 2026 JARVIS &bull; Shree L. R. Tiwari College Of Engineering. All Rights Reserved.
          </div>
          <div className="font-mono text-[10px] tracking-widest text-gray-500">
            STUDENT COUNCIL &bull; INNOVATION CELL
          </div>
        </div>
      </div>
    </footer>
  )
}
