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
      className="relative py-28 lg:py-36"
    >
      <div className="section-divider" />

      <Container>
        <div
          ref={contentRef}
          className="relative overflow-hidden rounded-3xl p-[1px] pt-12"
          style={{
            background: 'linear-gradient(135deg, rgba(98,126,234,0.2), rgba(197,165,90,0.15), rgba(98,126,234,0.1))',
          }}
        >
          <div className="relative rounded-3xl bg-bg-primary p-10 lg:p-20 text-center overflow-hidden">
            {/* Background orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-eth-purple/[0.06] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-ankara-gold/[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase text-eth-purple-light bg-eth-purple/[0.08] border border-eth-purple/15 mb-6">
                Biletler
              </span>
              <h2
                className="font-display font-bold tracking-[-0.02em] leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
              >
                Yerinizi{' '}
                <span className="gradient-text">Ayırtın</span>
              </h2>
              <p className="mt-5 text-text-secondary text-base lg:text-lg max-w-xl mx-auto">
                {EVENT_DATE} &bull; {EVENT_LOCATION}
              </p>

              <div className="mt-12 max-w-sm mx-auto glass-card p-8 lg:p-10 rounded-2xl">
                <div className="gradient-text-gold font-display font-bold text-xl mb-3">
                  ETH Ankara 2026
                </div>
                <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                  Bilet satışları yakında başlayacak. Haberdar olmak için bizi sosyal medyadan takip edin.
                </p>

                <div className="badge-shimmer inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-eth-purple/[0.06] border border-eth-purple/15 text-eth-purple-light text-sm font-medium">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 5v6M5 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Yakında Açılacak
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
