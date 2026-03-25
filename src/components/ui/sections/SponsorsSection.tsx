'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'

gsap.registerPlugin(ScrollTrigger)

export function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.sponsor-slot', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sponsor-slot',
          start: 'top 85%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="sponsors"
      className="relative py-28 lg:py-36"
    >
      <div className="section-divider" />

      <Container>
        <div ref={contentRef} className="text-center pt-12">
          <span className="inline-block px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase text-ankara-gold bg-ankara-gold/[0.08] border border-ankara-gold/15 mb-6">
            Destekçiler
          </span>
          <h2
            className="font-display font-bold tracking-[-0.02em] leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            <span className="gradient-text">Sponsorlar</span>
          </h2>
          <p className="mt-5 text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            ETH Ankara&apos;yı mümkün kılan destekçilerimiz.
          </p>

          {/* Sponsor Tiers */}
          <div className="mt-16 space-y-8 max-w-4xl mx-auto">
            {/* Platinum */}
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ankara-gold/60 mb-4">Platinum</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={`platinum-${i}`}
                    className="sponsor-slot glass-card flex items-center justify-center h-28 rounded-2xl transition-all duration-500"
                  >
                    <div className="w-20 h-3 rounded-full bg-white/[0.04]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Gold */}
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-ankara-gold/40 mb-4">Gold</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`gold-${i}`}
                    className="sponsor-slot glass-card flex items-center justify-center h-20 rounded-2xl transition-all duration-500"
                  >
                    <div className="w-16 h-2.5 rounded-full bg-white/[0.03]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 space-y-5">
            <div className="badge-shimmer inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-ankara-gold/[0.06] border border-ankara-gold/15 text-ankara-gold text-sm font-medium">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Yakında Duyurulacak
            </div>
            <p className="text-text-secondary text-sm">
              Sponsor olmak ister misiniz?{' '}
              <a
                href="mailto:sponsor@ethankara.org"
                className="text-eth-purple-light hover:text-eth-purple underline underline-offset-4 decoration-eth-purple/30 hover:decoration-eth-purple transition-all"
              >
                Bize ulaşın
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
