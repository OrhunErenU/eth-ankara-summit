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

  useGSAP(() => {
    gsap.from(contentRef.current, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: contentRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="sponsors" className="py-24 lg:py-32 bg-bg-secondary">
      <Container>
        <div ref={contentRef} className="text-center">
          <div className="badge-gold mb-5">Destekçiler</div>
          <h2 className="font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            <span className="gradient-text">Sponsorlar</span>
          </h2>
          <p className="mt-4 text-text-secondary text-base lg:text-lg max-w-xl mx-auto">
            ETH Ankara&apos;yı mümkün kılan destekçilerimiz.
          </p>

          <div className="mt-14 space-y-8 max-w-3xl mx-auto">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">Platinum</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`p-${i}`} className="card flex items-center justify-center h-24">
                    <div className="w-16 h-2.5 rounded-full bg-bg-secondary" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">Gold</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`g-${i}`} className="card flex items-center justify-center h-20">
                    <div className="w-12 h-2 rounded-full bg-bg-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-3">
            <div className="badge-gold">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Yakında Duyurulacak
            </div>
            <p className="text-text-muted text-sm">
              Sponsor olmak ister misiniz?{' '}
              <a href="mailto:sponsor@ethankara.org" className="text-eth-purple hover:underline">Bize ulaşın</a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
