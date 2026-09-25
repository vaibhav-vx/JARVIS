import { LucideIcon } from 'lucide-react'

// 1. Team Registration Types
export interface TeamLeader {
  name: string
  email: string
  phone: string
  college: string
  year: 'FE' | 'SE' | 'TE' | 'BE'
  branch: string
  rollNo: string
}

export interface TeamMember {
  name: string
  email: string
  phone: string
  year: 'FE' | 'SE' | 'TE' | 'BE'
  branch: string
  rollNo: string
}

export interface RegistrationPayload {
  registration_id: string
  team_name: string
  track: string
  project_idea?: string
  leader: TeamLeader
  members: TeamMember[]
  created_at?: string
}

// 2. Sponsorship Types
export interface SponsorInquiryPayload {
  company_name: string
  contact_person: string
  email: string
  phone: string
  tier: string
  created_at?: string
}

export interface SponsorItem {
  name: string
  tier: string
  category: string
}

// 3. Timeline Event Types
export interface TimelineEvent {
  id: string
  time: string
  title: string
  desc: string
  day: 'Day 1' | 'Day 2'
  status: 'upcoming' | 'past' | 'live'
  category: 'Keynote' | 'Hacking' | 'Mentorship' | 'Submission' | 'Ceremony'
}

// 4. Track Types
export interface Track {
  id: string
  title: string
  domain: string
  desc: string
  challenges: string[]
}

// 5. Prize Types
export interface PodiumPrize {
  rank: string
  title: string
  badge: string
  perks: string[]
}

export interface SpecialCategory {
  title: string
  desc: string
}

// 6. Vision & AR Types
export interface PosterTarget {
  id: string
  location: string
  hint: string
}

export interface Pillar {
  title: string
  desc: string
}

// 7. Navigation & Module Types
export interface NavLink {
  name: string
  path: string
}

export interface ModuleItem {
  title: string
  subtitle: string
  desc: string
  path: string
  icon: LucideIcon
}

// 8. Chatbot Types
export interface ChatMessage {
  sender: 'ai' | 'user'
  text: string
  timestamp: string
}
