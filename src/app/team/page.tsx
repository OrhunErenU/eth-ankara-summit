'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SmoothScroll } from '@/components/animations/SmoothScroll'
import { Navbar } from '@/components/ui/navigation/Navbar'
import { Container } from '@/components/ui/layout/Container'
import { Footer } from '@/components/ui/sections/Footer'
import { TEAM_MEMBERS } from '@/lib/constants'

function TeamContent() {
  const pageRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.from(headingRef.current, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from('.team-card', { y: 25, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }, '-=0.3')
  }, { scope: pageRef })

  return (
    <div ref={pageRef}>
      <Navbar />
      <main className="pt-28 pb-24 bg-bg-primary min-h-screen">
        <Container>
          <div ref={headingRef} className="text-center mb-14">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-eth-purple transition-colors mb-6">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ana Sayfa
            </Link>
            <h1 className="font-display font-bold tracking-[-0.02em]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              <span className="gradient-text">Takımımız</span>
            </h1>
            <p className="mt-3 text-text-secondary text-base max-w-lg mx-auto">
              ETH Ankara&apos;yı hayata geçiren tutkulu ekip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((m) => (
              <div key={m.id} className="team-card card flex flex-col items-center p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-eth-purple-bg to-ankara-gold-bg flex items-center justify-center border-2 border-border">
                  <span className="font-display font-bold text-xl text-eth-purple">{m.name.charAt(0)}</span>
                </div>
                <h3 className="mt-4 font-display font-semibold text-base text-text-primary">{m.name}</h3>
                <p className="mt-0.5 text-sm text-ankara-gold">{m.role}</p>
                {m.social && (
                  <div className="mt-3 flex gap-2">
                    {m.social.twitter && (
                      <a href={m.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} Twitter`}
                        className="w-7 h-7 rounded-lg bg-bg-secondary flex items-center justify-center text-text-muted hover:text-eth-purple transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                      </a>
                    )}
                    {m.social.github && (
                      <a href={m.social.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} GitHub`}
                        className="w-7 h-7 rounded-lg bg-bg-secondary flex items-center justify-center text-text-muted hover:text-eth-purple transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default function TeamPage() {
  return (
    <SmoothScroll>
      <TeamContent />
    </SmoothScroll>
  )
}
