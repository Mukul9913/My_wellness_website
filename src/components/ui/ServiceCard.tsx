'use client'  // ← Add this at the very top

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  service: {
    slug: string
    title: string
    description: string
    icon: string
    price: string
    features: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
    >
      <div className="text-center">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
        <p className="text-slate-600 mb-4">{service.description}</p>
        
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {service.price}
        </div>
        
        <div className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="text-sm text-slate-600 flex items-center gap-2">
              <span className="text-green-500">✓</span>
              {feature}
            </div>
          ))}
        </div>
        
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold group"
        >
          Learn More 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}