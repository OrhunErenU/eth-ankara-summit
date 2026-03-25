'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Konuşmalar',
    description: 'Ethereum ekosisteminin lider isimlerinden ilham verici sunumlar ve panel tartışmaları.',
    accent: 'eth-purple',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Networking',
    description: 'Geliştiriciler, girişimciler ve yatırımcılarla değerli bağlantılar kurun.',
    accent: 'ankara-gold',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Workshop\'lar',
    description: 'Uygulamalı atölye çalışmalarıyla Solidity, DeFi ve daha fazlası.',
    accent: 'eth-purple',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Hackathon',
    description: 'Yenilikçi projeler geliştirin, mentorlardan destek alın ve ödüller kazanın.',
    accent: 'ankara-gold',
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.feature-card', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 lg:py-36"
    >
      {/* Top divider */}
      <div className="section-divider" />

      <Container>
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-20 pt-12">
          <span className="inline-block px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase text-eth-purple-light bg-eth-purple/[0.08] border border-eth-purple/15 mb-6">
            Etkinlik Hakkında
          </span>
          <h2
            className="font-display font-bold tracking-[-0.02em] leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            Tarih ve Gelecek{' '}
            <span className="gradient-text">Buluşuyor</span>
          </h2>
          <p className="mt-5 text-text-secondary leading-relaxed text-base lg:text-lg max-w-2xl mx-auto">
            ETH Ankara, Anadolu&apos;nun kadim başkentinde Ethereum topluluğunu bir araya getiriyor.
            İki gün boyunca merkeziyetsiz geleceği birlikte şekillendireceğiz.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="feature-card glass-card group p-7 rounded-2xl transition-all duration-500 cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  feature.accent === 'eth-purple'
                    ? 'bg-eth-purple/[0.08] text-eth-purple group-hover:bg-eth-purple/[0.15] group-hover:shadow-[0_0_20px_rgba(98,126,234,0.15)]'
                    : 'bg-ankara-gold/[0.08] text-ankara-gold group-hover:bg-ankara-gold/[0.15] group-hover:shadow-[0_0_20px_rgba(197,165,90,0.15)]'
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
