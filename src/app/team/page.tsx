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
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }).from(
        '.team-card',
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.4'
      )
    },
    { scope: pageRef }
  )

  return (
    <div ref={pageRef}>
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div ref={headingRef} className="text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ana Sayfa
            </Link>
            <h1
              className="font-display font-bold tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              <span className="gradient-text">Takımımız</span>
            </h1>
            <p className="mt-4 text-text-secondary text-base lg:text-lg max-w-2xl mx-auto">
              ETH Ankara&apos;yı hayata geçiren tutkulu ekip.
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="team-card group flex flex-col items-center p-8 rounded-2xl bg-bg-elevated border border-white/[0.06] hover:border-eth-purple/30 transition-all duration-300"
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-eth-purple/20 to-ankara-gold/20 flex items-center justify-center border-2 border-white/[0.06] group-hover:border-eth-purple/30 transition-all duration-300">
                  <span className="font-display font-bold text-2xl text-text-primary/60">
                    {member.name.charAt(0)}
                  </span>
                </div>

                <h3 className="mt-5 font-display font-semibold text-lg text-text-primary text-center">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-ankara-gold">{member.role}</p>

                {member.social && (
                  <div className="mt-4 flex gap-3">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-eth-purple transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-eth-purple transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
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
