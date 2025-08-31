import { Metadata } from 'next'
import ResourcesSection from '@/components/sections/ResourcesSection'

export const metadata: Metadata = {
  title: 'Wellness Resources - Free Guides & Educational Materials',
  description: 'Access free wellness resources including water quality guides, EMF protection ebooks, and educational workshops.',
  keywords: 'Wellness Resources, Free Ebooks, Water Guide, EMF Protection Guide, Wellness Videos',
}

export default function ResourcesPage() {
  return (
    <div className="pt-16">
      <ResourcesSection />
    </div>
  )
}
