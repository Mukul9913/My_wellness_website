'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle, Calendar, ExternalLink } from 'lucide-react'

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8770343316",
      href: "tel:+918770343316"
    },
    {
      icon: Mail,
      label: "Email",
      value: "wellnesswithtejesh@gmail.com",
      href: "mailto:wellnesswithtejesh@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, Madhya Pradesh",
      href: "https://maps.google.com/?q=Indore,+Madhya+Pradesh"
    }
  ]

  const quickActions = [
    {
      icon: MessageCircle,
      title: "WhatsApp Consultation",
      description: "Get instant answers to your wellness questions",
      href: "https://wa.me/918770343316?text=Hi+Tejesh,+I+want+to+know+about+wellness",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Book Workshop",
      description: "Join our free wellness workshop",
      href: "https://wa.me/918770343316?text=Hi+Tejesh,+I+want+to+book+wellness+workshop",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ExternalLink,
      title: "Visit Studio",
      description: "Experience our wellness studio in Indore",
      href: "https://maps.google.com/?q=Indore,+Madhya+Pradesh",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to start your wellness journey? Let&apos;s connect and discuss how we can help transform your health.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700 hover:border-teal-500 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{info.label}</h3>
              <p className="text-slate-300 group-hover:text-teal-300 transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickActions.map((action, index) => (
            <motion.a
              key={action.title}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-r ${action.color} rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <action.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{action.title}</h3>
              <p className="text-white/80 group-hover:text-white transition-colors">
                {action.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
