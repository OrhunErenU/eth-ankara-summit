'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'
import { EVENT_DATE, EVENT_LOCATION } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

export function TicketsSection() {
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
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="tickets"
      className="relative py-24 lg:py-32"
    >
      <Container>
        <div
          ref={contentRef}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg-elevated to-bg-secondary border border-white/[0.06] p-8 lg:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-eth-purple/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2
              className="font-display font-bold tracking-[-0.01em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
            >
              Yerinizi <span className="gradient-text">Ayırtın</span>
            </h2>
            <p className="mt-4 text-text-secondary text-base lg:text-lg max-w-xl mx-auto">
              {EVENT_DATE} &bull; {EVENT_LOCATION}
            </p>

            <div className="mt-10 max-w-md mx-auto p-8 rounded-2xl bg-bg-primary/50 border border-white/[0.06]">
              <div className="text-ankara-gold font-display font-semibold text-lg mb-2">
                Biletler
              </div>
              <p className="text-text-secondary text-sm mb-6">
                Bilet satışları yakında başlayacak. Haberdar olmak için bizi takip edin.
              </p>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-eth-purple/10 border border-eth-purple/20 text-eth-purple text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 8h8M8 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Yakında Açılacak
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
