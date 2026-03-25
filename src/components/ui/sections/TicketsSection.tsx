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

  useGSAP(() => {
    gsap.from(contentRef.current, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: contentRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="tickets" className="py-24 lg:py-32 bg-bg-primary">
      <Container>
        <div ref={contentRef} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-eth-purple-bg via-white to-ankara-gold-bg border border-border p-10 lg:p-16 text-center">
          {/* Soft blobs */}
          <div className="absolute top-0 left-1/4 w-[300px] h-[200px] bg-eth-purple/[0.05] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[150px] bg-ankara-gold/[0.05] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="badge-purple mb-5">Biletler</div>
            <h2 className="font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
              Yerinizi <span className="gradient-text">Ayırtın</span>
            </h2>
            <p className="mt-3 text-text-secondary text-base">{EVENT_DATE} &bull; {EVENT_LOCATION}</p>

            <div className="mt-10 max-w-sm mx-auto card p-8">
              <p className="font-display font-bold text-lg text-eth-purple">ETH Ankara 2026</p>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                Bilet satışları yakında başlayacak. Haberdar olmak için bizi sosyal medyadan takip edin.
              </p>
              <div className="mt-6">
                <div className="badge-purple">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
