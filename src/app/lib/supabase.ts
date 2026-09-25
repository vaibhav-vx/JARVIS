import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// TypeScript Database Schemas
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

export interface SponsorInquiryPayload {
  company_name: string
  contact_person: string
  email: string
  phone: string
  tier: string
  created_at?: string
}

/**
 * Insert Team Registration into Supabase DB table 'registrations'
 */
export async function submitRegistration(payload: RegistrationPayload) {
  try {
    const isPlaceholder = !process.env.NEXT_PUBLIC_SUPABASE_URL || 
                          process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder') || 
                          process.env.NEXT_PUBLIC_SUPABASE_URL.includes('your-project-id');
    if (isPlaceholder) {
      console.warn('Supabase URL is using placeholder template — Fallback local state used.')
      return { success: true, data: payload, localFallback: true }
    }

    const { data, error } = await supabase.from('registrations').insert([payload]).select()
    if (error) throw error
    return { success: true, data }
  } catch (err) {
    console.error('Supabase Registration Insert Error:', err)
    return { success: false, error: err, localFallback: true }
  }
}

/**
 * Insert Sponsor Inquiry into Supabase DB table 'sponsorships'
 */
export async function submitSponsorInquiry(payload: SponsorInquiryPayload) {
  try {
    const isPlaceholder = !process.env.NEXT_PUBLIC_SUPABASE_URL || 
                          process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder') || 
                          process.env.NEXT_PUBLIC_SUPABASE_URL.includes('your-project-id');
    if (isPlaceholder) {
      console.warn('Supabase URL is using placeholder template — Fallback local state used.')
      return { success: true, data: payload, localFallback: true }
    }

    const { data, error } = await supabase.from('sponsorships').insert([payload]).select()
    if (error) throw error
    return { success: true, data }
  } catch (err) {
    console.error('Supabase Sponsorship Insert Error:', err)
    return { success: false, error: err, localFallback: true }
  }
}
