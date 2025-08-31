import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ResourcesSection from '@/components/sections/ResourcesSection'
import ContactSection from '@/components/sections/ContactSection'
import BackToTop from '@/components/ui/BackToTop'


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResourcesSection />
      <ContactSection />
      <BackToTop />
    </>
  )
}
