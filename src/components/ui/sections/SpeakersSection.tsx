'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'

gsap.registerPlugin(ScrollTrigger)

export function SpeakersSection() {
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

      gsap.from('.speaker-slot', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.speaker-slot',
          start: 'top 85%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="speakers"
      className="relative py-28 lg:py-36"
    >
      <div className="section-divider" />

      <Container>
        <div ref={contentRef} className="text-center pt-12">
          <span className="inline-block px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase text-ankara-gold bg-ankara-gold/[0.08] border border-ankara-gold/15 mb-6">
            Sahne
          </span>
          <h2
            className="font-display font-bold tracking-[-0.02em] leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            <span className="gradient-text">Konuşmacılar</span>
          </h2>
          <p className="mt-5 text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            Ethereum ekosisteminin en etkili isimlerini sahnemizde ağırlayacağız.
          </p>

          {/* Speaker Placeholder Grid */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`speaker-slot-${i}`}
                className="speaker-slot glass-card group flex flex-col items-center p-6 lg:p-7 rounded-2xl transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-eth-purple/[0.12] to-ankara-gold/[0.08] flex items-center justify-center border border-white/[0.06] group-hover:border-eth-purple/20 transition-all duration-500">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-text-secondary/30"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M20 21a8 8 0 10-16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="w-20 h-2.5 rounded-full bg-white/[0.04]" />
                  <div className="w-14 h-2 rounded-full bg-white/[0.03] mx-auto" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="badge-shimmer inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-ankara-gold/[0.06] border border-ankara-gold/15 text-ankara-gold text-sm font-medium">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Yakında Duyurulacak
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
