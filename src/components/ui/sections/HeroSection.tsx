'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'
import { EVENT_DATE, EVENT_LOCATION } from '@/lib/constants'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          metaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <Container className="relative z-10 text-center">
        <h1
          ref={titleRef}
          className="font-display font-extrabold tracking-[-0.02em] leading-[1.1]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
        >
          <span className="gradient-text">ETH Ankara</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-text-secondary max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
        >
          Ankara&apos;nın 3000 yıllık tarihi, Ethereum&apos;un merkeziyetsiz geleceğiyle buluşuyor.
          İki gün boyunca konuşmalar, workshoplar ve networking.
        </p>

        <div
          ref={metaRef}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium"
        >
          <div className="flex items-center gap-2 text-ankara-gold">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="3"
                width="12"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M2 7h12"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 1v4M11 1v4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>{EVENT_DATE}</span>
          </div>
          <div className="flex items-center gap-2 text-eth-purple">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="8"
                cy="6"
                r="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span>{EVENT_LOCATION}</span>
          </div>
        </div>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tickets"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-eth-purple to-ankara-gold text-white hover:shadow-[0_0_40px_rgba(98,126,234,0.4)] transition-all duration-200 hover:scale-[1.02]"
          >
            Bilet Al
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold border border-white/10 text-text-primary hover:border-eth-purple/40 hover:bg-eth-purple/5 transition-all duration-200"
          >
            Daha Fazla
          </a>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  )
}
