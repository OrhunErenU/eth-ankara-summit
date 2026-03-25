import type { NavItem, TeamMember } from '@/types'

export const SITE_NAME = 'ETH Ankara'
export const SITE_DESCRIPTION = 'Ankara\'nın 3000 yıllık tarihi, Ethereum\'un merkeziyetsiz geleceğiyle buluşuyor. 23-24 Mayıs 2026, Ankara.'
export const EVENT_DATE = '23-24 Mayıs 2026'
export const EVENT_LOCATION = 'Ankara, Türkiye'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hakkında', href: '#about' },
  { label: 'Konuşmacılar', href: '#speakers' },
  { label: 'Program', href: '#schedule' },
  { label: 'Sponsorlar', href: '#sponsors' },
  { label: 'Takım', href: '/team' },
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Orhun Eren',
    role: 'Organizatör',
    avatarUrl: '/team/placeholder.svg',
    social: {
      twitter: '#',
      github: '#',
    },
  },
  {
    id: 'member-2',
    name: 'Takım Üyesi',
    role: 'Koordinatör',
    avatarUrl: '/team/placeholder.svg',
  },
  {
    id: 'member-3',
    name: 'Takım Üyesi',
    role: 'Geliştirici',
    avatarUrl: '/team/placeholder.svg',
  },
  {
    id: 'member-4',
    name: 'Takım Üyesi',
    role: 'Tasarımcı',
    avatarUrl: '/team/placeholder.svg',
  },
]

export const ANIMATION = {
  DURATION_MICRO: 0.2,
  DURATION_SMALL: 0.4,
  DURATION_MEDIUM: 0.6,
  DURATION_LARGE: 1.0,
  STAGGER_DEFAULT: 0.1,
  EASE_ENTRANCE: 'power3.out',
  EASE_EXIT: 'power2.in',
  EASE_SNAPPY: 'expo.out',
} as const

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const
