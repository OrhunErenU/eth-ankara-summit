'use client'

import dynamic from 'next/dynamic'
import { SmoothScroll } from '@/components/animations/SmoothScroll'
import { Navbar } from '@/components/ui/navigation/Navbar'
import { HeroSection } from '@/components/ui/sections/HeroSection'
import { AboutSection } from '@/components/ui/sections/AboutSection'
import { SpeakersSection } from '@/components/ui/sections/SpeakersSection'
import { ScheduleSection } from '@/components/ui/sections/ScheduleSection'
import { SponsorsSection } from '@/components/ui/sections/SponsorsSection'
import { TicketsSection } from '@/components/ui/sections/TicketsSection'
import { Footer } from '@/components/ui/sections/Footer'

const CanvasProvider = dynamic(
  () =>
    import('@/components/canvas/CanvasProvider').then(
      (mod) => mod.CanvasProvider
    ),
  { ssr: false }
)

export default function HomePage() {
  return (
    <SmoothScroll>
      <CanvasProvider />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SpeakersSection />
          <ScheduleSection />
          <SponsorsSection />
          <TicketsSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
