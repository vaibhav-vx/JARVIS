'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleVideoEnded = () => {
    router.push('/home')
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#07080a] flex flex-col justify-between">
      {/* Pure Fullscreen Video Background - Plays ONCE (no loop) then redirects to /home */}
      <video
        autoPlay
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        onEnded={handleVideoEnded}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-1 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/videos/jarvis-start.mp4" type="video/mp4" />
      </video>

      {/* Top Navigation - Clean Brand Title & Top-Right Skip Button */}
      <div className="relative z-10 p-6 sm:p-10 flex justify-between items-center w-full">
        <div className="font-mono font-black text-xl text-white tracking-widest drop-shadow-md">
          J.A.R.V.I.S. 4.0
        </div>
        <Link href="/home" className="no-underline">
          <button className="flex items-center gap-2 font-mono font-bold text-xs text-white bg-black/60 hover:bg-black/90 border border-gray-600 hover:border-gray-400 px-5 py-2.5 rounded-lg backdrop-blur-md transition-all shadow-2xl cursor-pointer tracking-wider">
            <span>SKIP ›</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
