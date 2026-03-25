'use client'

import { SmoothScroll } from '@/components/animations/SmoothScroll'
import { Navbar } from '@/components/ui/navigation/Navbar'
import { HeroSection } from '@/components/ui/sections/HeroSection'
import { AboutSection } from '@/components/ui/sections/AboutSection'
import { SpeakersSection } from '@/components/ui/sections/SpeakersSection'
import { ScheduleSection } from '@/components/ui/sections/ScheduleSection'
import { SponsorsSection } from '@/components/ui/sections/SponsorsSection'
import { TicketsSection } from '@/components/ui/sections/TicketsSection'
import { Footer } from '@/components/ui/sections/Footer'

export default function HomePage() {
  return (
    <SmoothScroll>
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
    </SmoothScroll>
  )
}
