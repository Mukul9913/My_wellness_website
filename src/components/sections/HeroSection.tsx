'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProfileImage from '@/components/ui/ProfileImage'
import { MapPin, MessageCircle, Calendar } from 'lucide-react'
import WellnessSurveyModal from '../WellnessSurveyModal'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
const [showSurvey, setShowSurvey] = useState(false)

  const texts = [
    'Wellness begins with what you choose daily.',
    'Helping families rethink hydration & health.',
    'Your trusted Kangen Water distributor.',
    'Transform your health, transform your life.'
  ]

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isTyping) {
      if (displayText.length < texts[currentText].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentText].slice(0, displayText.length + 1))
        }, 50)
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 30)
      } else {
        setCurrentText((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayText, currentText, isTyping, texts])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <ProfileImage
              src="/assets/tejesh-profile.jpg"
              alt="Tejesh Dixit - Wellness Advisor"
              size="lg"
            />
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
                Tejesh Dixit
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-teal-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              @WellnesswithTejesh
            </motion.p>
          </div>

          {/* Typing Animation */}
          <motion.div
            className="h-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              {displayText}
              <motion.span
                className="inline-block w-0.5 h-6 bg-teal-400 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center gap-2 text-teal-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <MapPin size={24} />
            <span>Indore, MP | Your Personal Wellness Advisor</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-3"
              >
                <Calendar size={24} />
                Free Wellness Consultation
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/918770343316?text=Hi+Tejesh,+I+want+to+know+about+Kangen+water"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3"
              >
                <MessageCircle size={24} />
                WhatsApp Now
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <button
    onClick={() => setShowSurvey(true)}
    className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-3"
    type="button"
  >
    Take Wellness Survey
  </button>
</motion.div>

          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            {[
              { number: "1000+", label: "Families Helped" },
              { number: "5+", label: "Years Experience" }, 
              { number: "500+", label: "Workshops" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2 group-hover:text-teal-200 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {showSurvey && (
  <WellnessSurveyModal open={showSurvey} onClose={() => setShowSurvey(false)} />
)}
    </section>
  )
}
