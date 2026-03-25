'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'

gsap.registerPlugin(ScrollTrigger)

const SCHEDULE_PREVIEW = [
  {
    day: 'Gün 1',
    date: '23 Mayıs, Cumartesi',
    items: [
      { time: '09:00', title: 'Açılış Konuşması' },
      { time: '10:00', title: 'Ana Sahne Sunumları' },
      { time: '14:00', title: 'Workshop Oturumları' },
      { time: '18:00', title: 'Networking Etkinliği' },
    ],
  },
  {
    day: 'Gün 2',
    date: '24 Mayıs, Pazar',
    items: [
      { time: '09:00', title: 'Panel Tartışmaları' },
      { time: '12:00', title: 'Hackathon Sunumları' },
      { time: '16:00', title: 'Kapanış & Ödüller' },
      { time: '19:00', title: 'After Party' },
    ],
  },
]

export function ScheduleSection() {
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

      gsap.from('.schedule-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.schedule-card',
          start: 'top 85%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="relative py-28 lg:py-36"
    >
      <div className="section-divider" />

      <Container>
        <div ref={contentRef} className="text-center mb-16 pt-12">
          <span className="inline-block px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase text-eth-purple-light bg-eth-purple/[0.08] border border-eth-purple/15 mb-6">
            Takvim
          </span>
          <h2
            className="font-display font-bold tracking-[-0.02em] leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            <span className="gradient-text">Program</span>
          </h2>
          <p className="mt-5 text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            İki gün dolu dolu Ethereum içeriği sizi bekliyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SCHEDULE_PREVIEW.map((day) => (
            <div
              key={day.day}
              className="schedule-card glass-card p-8 rounded-2xl transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-text-primary">
                    {day.day}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">{day.date}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-ankara-gold/[0.08] border border-ankara-gold/15 flex items-center justify-center text-ankara-gold">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 7h12" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="space-y-0">
                {day.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`flex items-center gap-4 py-3.5 ${
                      idx < day.items.length - 1 ? 'border-b border-white/[0.04]' : ''
                    }`}
                  >
                    <span className="text-xs font-mono text-eth-purple-light/70 w-12 shrink-0">
                      {item.time}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-eth-purple/40 shrink-0" />
                    <span className="text-sm text-text-secondary">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="badge-shimmer inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-eth-purple/[0.06] border border-eth-purple/15 text-eth-purple-light text-sm font-medium">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Detaylı program yakında duyurulacak
          </div>
        </div>
      </Container>
    </section>
  )
}
