'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'

gsap.registerPlugin(ScrollTrigger)

const SCHEDULE_PREVIEW = [
  { day: 'Gün 1 — 23 Mayıs', items: ['Açılış Konuşması', 'Ana Sahne Sunumları', 'Workshop Oturumları', 'Networking'] },
  { day: 'Gün 2 — 24 Mayıs', items: ['Panel Tartışmaları', 'Hackathon Sunumları', 'Kapanış Töreni', 'After Party'] },
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
      className="relative py-24 lg:py-32"
    >
      <Container>
        <div ref={contentRef} className="text-center mb-16">
          <h2
            className="font-display font-bold tracking-[-0.01em]"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
          >
            <span className="gradient-text">Program</span>
          </h2>
          <p className="mt-4 text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
            İki gün dolu dolu Ethereum içeriği.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SCHEDULE_PREVIEW.map((day) => (
            <div
              key={day.day}
              className="schedule-card p-8 rounded-2xl bg-bg-elevated border border-white/[0.06]"
            >
              <h3 className="font-display font-semibold text-lg text-ankara-gold mb-6">
                {day.day}
              </h3>
              <ul className="space-y-4">
                {day.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-text-secondary"
                  >
                    <div className="w-2 h-2 rounded-full bg-eth-purple/60 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-eth-purple/10 border border-eth-purple/20 text-eth-purple text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
