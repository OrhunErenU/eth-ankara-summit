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
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="speakers"
      className="relative py-24 lg:py-32"
    >
      <Container>
        <div ref={contentRef} className="text-center">
          <h2
            className="font-display font-bold tracking-[-0.01em]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
          >
            <span className="gradient-text">Konuşmacılar</span>
          </h2>
          <p className="mt-4 text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            Ethereum ekosisteminin en etkili isimlerini sahnemizde ağırlayacağız.
          </p>

          {/* TBA Placeholder */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`speaker-placeholder-${i}`}
                className="group flex flex-col items-center p-6 rounded-2xl bg-bg-elevated border border-white/[0.06] hover:border-ankara-gold/20 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-bg-secondary flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-text-secondary/40"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M20 21a8 8 0 10-16 0"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-4 w-24 h-3 rounded-full bg-bg-secondary" />
                <div className="mt-2 w-16 h-2 rounded-full bg-bg-secondary" />
              </div>
            ))}
          </div>

          <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ankara-gold/10 border border-ankara-gold/20 text-ankara-gold text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Yakında Duyurulacak
          </div>
        </div>
      </Container>
    </section>
  )
}
