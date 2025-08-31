// src/components/sections/AboutSection.tsx  
'use client'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Target, Heart } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const achievements = [
    { icon: Users, number: "1000+", label: "Families Helped", color: "from-blue-500 to-blue-600" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "from-purple-500 to-purple-600" },
    { icon: Award, number: "500+", label: "Workshops", color: "from-green-500 to-green-600" },
    { icon: Target, number: "24/7", label: "Support", color: "from-orange-500 to-orange-600" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Tejesh
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your Trusted Wellness Partner in Indore
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/assets/tejesh-profile.jpg"
                    alt="Tejesh Dixit"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Kangen Water Global Distributor
              </h3>
              <div className="space-y-3 text-slate-700">
                {[
                  { icon: "🏆", text: "Certified Wellness Advisor" },
                  { icon: "🎓", text: "EMF Protection Specialist" },
                  { icon: "📍", text: "Based in Indore, MP" },
                  { icon: "💫", text: "5+ Years Transforming Lives" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900">
              Transforming Lives Through Better Hydration
            </h3>
            
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                With over 5 years of dedicated experience, 
                <span className="font-semibold text-teal-700"> Tejesh Dixit</span> has 
                committed his life to helping families understand proper hydration and EMF protection.
              </p>
              
              <p>
                As a <span className="font-semibold text-teal-700">Kangen Water Global Distributor</span>, 
                he combines scientific knowledge with genuine care for optimal wellness.
              </p>
            </div>

            <motion.div
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-lg font-semibold mb-2">Mission Statement</p>
              <p className="text-teal-100">
                `To empower every family with the knowledge and tools needed for optimal wellness.`
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-slate-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {achievement.number}
              </div>
              <p className="text-slate-600 font-medium">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
