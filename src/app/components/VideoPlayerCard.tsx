import React from 'react'

interface VideoPlayerCardProps {
  src: string
  type?: string
}

export default function VideoPlayerCard({ src, type = 'video/mp4' }: VideoPlayerCardProps) {
  return (
    <div className="backdrop-blur-xl bg-black/60 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl mb-12">
      <div className="w-full aspect-video bg-black">
        <video
          autoPlay
          muted
          loop
          controls
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={src} type={type} />
        </video>
      </div>
    </div>
  )
}
