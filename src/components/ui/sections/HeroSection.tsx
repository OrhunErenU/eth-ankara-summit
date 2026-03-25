'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'
import { EVENT_DATE, EVENT_LOCATION } from '@/lib/constants'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.from(badgeRef.current, { y: -15, opacity: 0, duration: 0.5, ease: 'power3.out' })
      .from(titleRef.current, { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.2')
      .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .from(metaRef.current, { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .from(ctaRef.current, { y: 15, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center bg-bg-hero overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-eth-purple/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-ankara-gold/[0.06] blur-[100px] pointer-events-none" />

      <Container className="relative z-10 text-center py-32">
        <div ref={badgeRef} className="flex justify-center mb-8">
          <div className="badge-purple">
            <span className="w-2 h-2 rounded-full bg-eth-purple animate-[pulse-dot_2s_ease-in-out_infinite]" />
            <span className="uppercase tracking-wider">Kayıtlar Yakında</span>
          </div>
        </div>

        <h1 ref={titleRef} className="font-display font-extrabold tracking-[-0.03em] leading-[0.95]" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
          <span className="gradient-text">ETH</span>
          <br />
          <span className="text-text-primary">Ankara</span>
        </h1>

        <p ref={subtitleRef} className="mt-6 text-text-secondary max-w-lg mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)' }}>
          Ankara&apos;nın 3000 yıllık tarihi, Ethereum&apos;un merkeziyetsiz geleceğiyle buluşuyor. İki gün boyunca konuşmalar, workshop&apos;lar ve networking.
        </p>

        <div ref={metaRef} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="pill">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 7h12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {EVENT_DATE}
          </div>
          <div className="pill">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {EVENT_LOCATION}
          </div>
        </div>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#tickets" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold">
            Bilet Al
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#about" className="btn-secondary inline-flex items-center px-8 py-4 rounded-2xl text-base font-semibold">
            Keşfet
          </a>
        </div>
      </Container>
    </section>
  )
}
