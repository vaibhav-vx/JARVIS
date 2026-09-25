'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavLink {
  name: string
  path: string
}

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  if (pathname === '/') return null

  const navLinks: NavLink[] = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT', path: '/about' },
    { name: 'TRACKS', path: '/tracks' },
    { name: 'VISION', path: '/vision' },
    { name: 'PRIZES', path: '/prizes' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'SPONSORS', path: '/sponsors' },
    { name: 'RULES', path: '/rules' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <Link href="/home" className="flex items-center gap-2.5 no-underline">
          <div className="flex flex-col">
            <span className="font-mono font-black text-lg text-white tracking-widest leading-none">
              J.A.R.V.I.S.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-mono text-xs font-bold tracking-wider px-3.5 py-2 rounded-md transition-all ${
                  isActive
                    ? 'text-white bg-gray-800 border-b-2 border-gray-500'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Primary CTA */}
        <div className="flex items-center gap-3">
          <Link href="/register" className="no-underline">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-mono font-extrabold text-xs text-white bg-gradient-to-r from-[#181b22] to-[#2b313e] hover:from-[#212630] hover:to-[#363e4e] border border-gray-600 px-4 py-2 rounded-lg shadow-lg transition-all tracking-wider"
            >
              REGISTER TEAM
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-950 border-b border-gray-800 px-6 py-4 flex flex-col gap-2 font-mono text-xs font-bold"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-2 tracking-wider ${pathname === link.path ? 'text-white' : 'text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center text-white bg-gray-900 border border-gray-700 py-3 rounded-lg"
            >
              REGISTER TEAM
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
