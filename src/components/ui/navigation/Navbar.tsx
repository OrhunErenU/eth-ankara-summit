'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants'
import { useUIStore } from '@/stores/uiStore'
import { Container } from '@/components/ui/layout/Container'

gsap.registerPlugin()

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const { isMenuOpen, setMenuOpen } = useUIStore()

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      })
    },
    { scope: navRef }
  )

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-bg-primary/70 border-b border-white/[0.06]"
      role="navigation"
      aria-label="Ana navigasyon"
    >
      <Container className="flex items-center justify-between h-16 lg:h-20">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-text-primary hover:text-eth-purple transition-colors duration-200"
          aria-label={`${SITE_NAME} ana sayfa`}
        >
          <span className="gradient-text">{SITE_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#tickets"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-eth-purple to-ankara-gold text-white hover:shadow-[0_0_30px_rgba(98,126,234,0.4)] transition-all duration-200 hover:scale-[1.02]"
            >
              Bilet Al
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-bg-primary/95 backdrop-blur-lg border-b border-white/[0.06] transition-all duration-300 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <Container className="py-6">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-base font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#tickets"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-eth-purple to-ankara-gold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Bilet Al
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </nav>
  )
}
