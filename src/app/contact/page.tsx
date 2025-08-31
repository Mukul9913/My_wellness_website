import { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Tejesh - Wellness Consultation & Support',
  description: 'Get in touch with Tejesh Dixit for wellness consultation, Kangen Water information, and workshop booking in Indore.',
  keywords: 'Contact Tejesh, Wellness Consultation, Kangen Water Inquiry, Book Workshop',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  )
}
