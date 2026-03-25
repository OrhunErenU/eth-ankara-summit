'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants'
import { useUIStore } from '@/stores/uiStore'
import { Container } from '@/components/ui/layout/Container'

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const { isMenuOpen, setMenuOpen } = useUIStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useGSAP(() => {
    gsap.from(navRef.current, { y: -20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 })
  }, { scope: navRef })

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Ana navigasyon"
    >
      <Container className="flex items-center justify-between h-16 lg:h-[72px]">
        <Link href="/" className="font-display text-lg font-bold tracking-tight" aria-label={`${SITE_NAME} ana sayfa`}>
          <span className="text-eth-purple">ETH</span>
          <span className="text-text-primary"> Ankara</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all duration-200">
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link href="#tickets" className="btn-primary inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold">
              Bilet Al
            </Link>
          </li>
        </ul>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-bg-secondary transition-colors"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isMenuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile */}
      <div className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-border transition-all duration-300 ${
        isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link href="#tickets" onClick={() => setMenuOpen(false)} className="btn-primary flex items-center justify-center w-full py-3 rounded-xl text-base font-semibold">
                Bilet Al
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </nav>
  )
}
