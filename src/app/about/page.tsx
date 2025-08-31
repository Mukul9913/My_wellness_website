import { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'

export const metadata: Metadata = {
  title: 'About Tejesh Dixit - Kangen Water Global Distributor',
  description: 'Learn about Tejesh Dixit, your trusted wellness advisor and Kangen Water global distributor in Indore. 5+ years helping families achieve optimal health.',
  keywords: 'Tejesh Dixit, About, Kangen Water Distributor, Wellness Advisor, Indore, EMF Protection',
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
    </div>
  )
}
