import { Metadata } from 'next'
import ServicesSection from '@/components/sections/ServicesSection'
import ServiceCard from '@/components/ui/ServiceCard'

export const metadata: Metadata = {
  title: 'Wellness Services - Kangen Water & EMF Protection',
  description: 'Comprehensive wellness services including Kangen Water solutions, EMF protection, consulting and workshops in Indore.',
  keywords: 'Kangen Water Services, EMF Protection, Wellness Consulting, Water Education Workshops',
}

const services = [
  {
    slug: 'kangen-water',
    title: 'Kangen Water Solutions',
    description: 'Premium ionized alkaline water systems for optimal hydration',
    icon: '💧',
    price: 'Contact for pricing',
    features: ['pH 8.5-9.5 alkaline water', 'Antioxidant properties', 'Medical grade equipment', 'Lifetime support']
  },
  {
    slug: 'emf-protection',
    title: 'EMF Protection',
    description: 'Comprehensive electromagnetic field protection solutions',
    icon: '🛡️',
    price: 'Contact for pricing',
    features: ['Home EMF assessment', 'Personal protection devices', 'Consultation included', 'Scientific testing']
  },
  {
    slug: 'wellness-consulting',
    title: 'Wellness Consulting',
    description: 'Personalized health and wellness guidance',
    icon: '🌱',
    price: 'Book Appointment',
    features: ['1-on-1 consultation', 'Custom wellness plan', 'Follow-up support', 'Scientific approach']
  },
  {
    slug: 'workshops',
    title: 'Educational Workshops',
    description: 'Learn about water science and wellness fundamentals',
    icon: '🎓',
    price: 'Free',
    features: ['Water education', 'EMF awareness', 'Group sessions', 'Q&A included']
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesSection />
      
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">Choose the wellness solution that&apos;s right for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}