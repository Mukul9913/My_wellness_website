'use client'
import { motion } from 'framer-motion'
import { Droplets, Shield, Lightbulb, GraduationCap } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Droplets,
      title: "Kangen Water Solutions",
      description: "Global distributor of premium Kangen water ionizers for optimal hydration and wellness",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Shield,
      title: "EMF Protection Specialist",
      description: "Education and solutions for digital age invisible dangers and EMF protection",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Wellness Consulting",
      description: "Personal wellness advisor helping families make informed health decisions",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Water Education Workshops",
      description: "Free wellness workshops to help you understand the importance of quality water",
      color: "from-purple-400 to-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive wellness solutions to transform your health journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
