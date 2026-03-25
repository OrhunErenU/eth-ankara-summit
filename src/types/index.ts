export interface Speaker {
  id: string
  name: string
  role: string
  company: string
  avatarUrl: string
  talkTitle?: string
  bio?: string
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export interface ScheduleItem {
  id: string
  time: string
  title: string
  speaker?: string
  type: 'talk' | 'workshop' | 'break' | 'panel' | 'networking'
  track?: string
  duration: number
}

export interface ScheduleDay {
  date: string
  label: string
  items: ScheduleItem[]
}

export interface Sponsor {
  id: string
  name: string
  logoUrl: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'community'
  websiteUrl: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatarUrl: string
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export interface NavItem {
  label: string
  href: string
}
