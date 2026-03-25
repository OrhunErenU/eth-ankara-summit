import { create } from 'zustand'

interface UIState {
  isMenuOpen: boolean
  activeSection: string
  scrollProgress: number
  isLoaded: boolean
  setMenuOpen: (open: boolean) => void
  setActiveSection: (section: string) => void
  setScrollProgress: (progress: number) => void
  setLoaded: (loaded: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  activeSection: 'hero',
  scrollProgress: 0,
  isLoaded: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setLoaded: (loaded) => set({ isLoaded: loaded }),
}))
