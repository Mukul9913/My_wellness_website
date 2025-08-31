import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tejesh Dixit - Wellness with Kangen Water | Global Distributor',
  description: 'Wellness begins with what you choose daily. Helping families rethink hydration, energy & EMF awareness. Kangen Water Global Distributor in Indore.',
  keywords: 'Kangen Water, Wellness, Hydration, EMF Protection, Health, Indore, Wellness Advisor',
  authors: [{ name: 'Tejesh Dixit' }],
  creator: 'Tejesh Dixit',
  publisher: 'WellnesswithTejesh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wellnesswithtejesh.com',
    title: 'Tejesh Dixit - Wellness with Kangen Water',
    description: 'Transform your health with Kangen Water. Expert wellness guidance in Indore.',
    siteName: 'WellnesswithTejesh',
    images: [{
      url: '/assets/tejesh-profile.jpg',
      width: 1200,
      height: 630,
      alt: 'Tejesh Dixit - Wellness Advisor',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejesh Dixit - Wellness with Kangen Water',
    description: 'Transform your health with Kangen Water. Expert wellness guidance in Indore.',
    creator: '@wellnesswithtejesh',
    images: ['/assets/tejesh-profile.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen mt-2">
          {children}
        </main>
      </body>
    </html>
  )
}
