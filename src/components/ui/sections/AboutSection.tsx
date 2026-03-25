'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container } from '@/components/ui/layout/Container'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  { icon: '🎤', title: 'Konuşmalar', desc: 'Ethereum ekosisteminin lider isimlerinden ilham verici sunumlar ve paneller.', color: 'eth-purple' },
  { icon: '🤝', title: 'Networking', desc: 'Geliştiriciler, girişimciler ve yatırımcılarla değerli bağlantılar kurun.', color: 'ankara-gold' },
  { icon: '💻', title: 'Workshop\'lar', desc: 'Uygulamalı atölye çalışmalarıyla Solidity, DeFi ve daha fazlası.', color: 'eth-purple' },
  { icon: '⚡', title: 'Hackathon', desc: 'Yenilikçi projeler geliştirin, mentorlardan destek alın ve ödüller kazanın.', color: 'ankara-gold' },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(headingRef.current, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none reverse' } })
    gsap.from('.feature-card', { y: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-bg-primary">
      <Container>
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-purple mb-5">Etkinlik Hakkında</div>
          <h2 className="font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
            Tarih ve Gelecek <span className="gradient-text">Buluşuyor</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed text-base lg:text-lg">
            ETH Ankara, Anadolu&apos;nun kadim başkentinde Ethereum topluluğunu bir araya getiriyor.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card card p-6 hover:translate-y-[-2px]">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                f.color === 'eth-purple' ? 'bg-eth-purple-bg' : 'bg-ankara-gold-bg'
              }`}>
                {f.icon}
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
