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

  useGSAP(() => {
    gsap.from(contentRef.current, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: contentRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } })
    gsap.from('.speaker-slot', { y: 25, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out',
      scrollTrigger: { trigger: '.speaker-slot', start: 'top 85%' } })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="speakers" className="py-24 lg:py-32 bg-bg-secondary">
      <Container>
        <div ref={contentRef} className="text-center">
          <div className="badge-gold mb-5">Sahne</div>
          <h2 className="font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            <span className="gradient-text">Konuşmacılar</span>
          </h2>
          <p className="mt-4 text-text-secondary text-base lg:text-lg max-w-xl mx-auto">
            Ethereum ekosisteminin en etkili isimlerini sahnemizde ağırlayacağız.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`speaker-${i}`} className="speaker-slot card flex flex-col items-center p-5">
                <div className="w-16 h-16 rounded-full bg-bg-secondary flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-muted" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M20 21a8 8 0 10-16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="mt-3 w-16 h-2 rounded-full bg-bg-secondary" />
                <div className="mt-1.5 w-12 h-1.5 rounded-full bg-bg-secondary" />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="badge-gold">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
