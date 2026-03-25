'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'
import { EVENT_DATE, EVENT_LOCATION } from '@/lib/constants'

function EthDiamondSVG() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
      <svg
        viewBox="0 0 200 320"
        fill="none"
        className="w-[280px] h-[440px] sm:w-[320px] sm:h-[500px] lg:w-[380px] lg:h-[600px] opacity-[0.06] animate-[float_6s_ease-in-out_infinite]"
      >
        <path d="M100 0L0 160l100 60 100-60L100 0z" fill="url(#diamond-grad-top)" />
        <path d="M100 220L0 160l100 60 100-60-100 60z" fill="url(#diamond-grad-mid)" />
        <path d="M0 160l100 160 100-160-100 60L0 160z" fill="url(#diamond-grad-bot)" />
        <defs>
          <linearGradient id="diamond-grad-top" x1="100" y1="0" x2="100" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#627EEA" />
            <stop offset="1" stopColor="#627EEA" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="diamond-grad-mid" x1="100" y1="160" x2="100" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8BA2F0" />
            <stop offset="1" stopColor="#627EEA" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="diamond-grad-bot" x1="100" y1="160" x2="100" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#627EEA" stopOpacity="0.4" />
            <stop offset="1" stopColor="#C5A55A" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.5, ease: 'power3.out' })
        .from(titleRef.current, { y: 80, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.2')
        .from(subtitleRef.current, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .from(metaRef.current, { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(98,126,234,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(98,126,234,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ETH Diamond watermark */}
      <EthDiamondSVG />

      {/* Content */}
      <Container className="relative z-10 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-eth-purple/[0.08] border border-eth-purple/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eth-purple opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-eth-purple" />
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-eth-purple-light">
              23-24 Mayıs 2026 &middot; Ankara
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-display font-extrabold tracking-[-0.04em] leading-[0.9]"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          <span className="gradient-text">ETH</span>
          <br />
          <span className="text-text-primary">Ankara</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 sm:mt-8 text-text-secondary max-w-lg mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)' }}
        >
          Ankara&apos;nın 3000 yıllık tarihi, Ethereum&apos;un merkeziyetsiz
          geleceğiyle buluşuyor. İki gün boyunca konuşmalar, workshop&apos;lar ve networking.
        </p>

        {/* Date & Location pills */}
        <div ref={metaRef} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ankara-gold/[0.06] border border-ankara-gold/15 text-ankara-gold text-sm font-medium">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 7h12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {EVENT_DATE}
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-eth-purple/[0.06] border border-eth-purple/15 text-eth-purple-light text-sm font-medium">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {EVENT_LOCATION}
          </div>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tickets"
            className="btn-gradient inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold text-white"
          >
            <span className="flex items-center gap-2">
              Bilet Al
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold text-text-secondary border border-white/[0.08] hover:border-eth-purple/30 hover:text-text-primary hover:bg-eth-purple/[0.04] transition-all duration-300"
          >
            Keşfet
          </a>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent pointer-events-none" />
    </section>
  )
}
