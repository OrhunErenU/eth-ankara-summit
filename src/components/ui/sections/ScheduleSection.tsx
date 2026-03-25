'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'

gsap.registerPlugin(ScrollTrigger)

const DAYS = [
  { day: 'Gün 1', date: '23 Mayıs, Cumartesi', items: [
    { time: '09:00', title: 'Açılış Konuşması' },
    { time: '10:00', title: 'Ana Sahne Sunumları' },
    { time: '14:00', title: 'Workshop Oturumları' },
    { time: '18:00', title: 'Networking Etkinliği' },
  ]},
  { day: 'Gün 2', date: '24 Mayıs, Pazar', items: [
    { time: '09:00', title: 'Panel Tartışmaları' },
    { time: '12:00', title: 'Hackathon Sunumları' },
    { time: '16:00', title: 'Kapanış & Ödüller' },
    { time: '19:00', title: 'After Party' },
  ]},
]

export function ScheduleSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(contentRef.current, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: contentRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } })
    gsap.from('.sched-card', { y: 30, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: '.sched-card', start: 'top 85%' } })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="schedule" className="py-24 lg:py-32 bg-bg-primary">
      <Container>
        <div ref={contentRef} className="text-center mb-14">
          <div className="badge-purple mb-5">Takvim</div>
          <h2 className="font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            <span className="gradient-text">Program</span>
          </h2>
          <p className="mt-4 text-text-secondary text-base lg:text-lg max-w-xl mx-auto">
            İki gün dolu dolu Ethereum içeriği sizi bekliyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {DAYS.map((day) => (
            <div key={day.day} className="sched-card card p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-text-primary">{day.day}</h3>
                  <p className="text-sm text-text-muted mt-0.5">{day.date}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-eth-purple-bg flex items-center justify-center text-eth-purple">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 7h12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="space-y-0">
                {day.items.map((item, idx) => (
                  <div key={item.title} className={`flex items-center gap-3 py-3 ${idx < day.items.length - 1 ? 'border-b border-border' : ''}`}>
                    <span className="text-xs font-mono text-eth-purple w-10 shrink-0">{item.time}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-eth-purple/30 shrink-0" />
                    <span className="text-sm text-text-secondary">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="badge-purple">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Detaylı program yakında
          </div>
        </div>
      </Container>
    </section>
  )
}
