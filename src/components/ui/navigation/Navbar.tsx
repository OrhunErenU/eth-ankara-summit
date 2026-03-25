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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1,
      })
    },
    { scope: navRef }
  )

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Ana navigasyon"
    >
      <Container className="flex items-center justify-between h-16 lg:h-20">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight"
          aria-label={`${SITE_NAME} ana sayfa`}
        >
          <span className="gradient-text">ETH</span>
          <span className="text-text-primary"> Ankara</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-4">
            <Link
              href="#tickets"
              className="btn-gradient inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            >
              <span>Bilet Al</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`}
          />
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-bg-primary/95 backdrop-blur-2xl border-b border-white/[0.06] transition-all duration-400 ${
          isMenuOpen
            ? 'max-h-[420px] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <Container className="py-6">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="#tickets"
                className="btn-gradient flex items-center justify-center w-full px-5 py-3.5 rounded-xl text-base font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                <span>Bilet Al</span>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </nav>
  )
}
