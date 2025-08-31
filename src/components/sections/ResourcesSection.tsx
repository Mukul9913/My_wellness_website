'use client'
import { motion } from 'framer-motion'
import { BookOpen, Video, Download, Calendar, ExternalLink, FileText } from 'lucide-react'

export default function ResourcesSection() {
  const resources = [
    {
      icon: Calendar,
      type: "Workshop",
      title: "Free Wellness Workshop",
      description: "आपकी सेहत आपकी जिम्मेदारी - Know Your Water 🌊",
      action: "Book Now",
      href: "https://wa.me/918770343316?text=Hi+Tejesh,+I+want+to+book+wellness+workshop",
      color: "from-blue-500 to-blue-600",
      badge: "Free"
    },
    {
      icon: Download,
      type: "E-book",
      title: "Know Your Water Guide",
      description: "Comprehensive guide to understanding water quality and its impact on health",
      action: "Download Free",
      href: "https://drive.google.com/file/d/1-s8vLPuL-dHEM3INRNHNHYrCgJFNFCRR/view?usp=drivesdk",
      color: "from-green-500 to-green-600",
      badge: "PDF"
    },
    {
      icon: FileText,
      type: "E-book",
      title: "EMR Digital Yug Ka Invisible Khatra",
      description: "Essential guide to protecting yourself from digital age electromagnetic radiation",
      action: "Download Free",
      href: "https://drive.google.com/file/d/1-l6HvPa1qntQE99XoQGmApHN_tnNai12/view?usp=drivesdk",
      color: "from-orange-500 to-red-500",
      badge: "PDF"
    },
    {
      icon: Video,
      type: "Video Series",
      title: "Transformation Stories",
      description: "Watch real people achieve real results with Kangen water",
      action: "Watch Now",
      href: "https://youtube.com/playlist?list=PLtSlCIEnlYqZbP_BSFWIsRcWCnZbqKFF8&si=donzKibNqO9mNMkf",
      color: "from-purple-500 to-purple-600",
      badge: "Video"
    }
  ]

  const blogPosts = [
    {
      title: "Health Shuru Hoti Hai Paani Se – Kya Aap Tayyar Hain?",
      excerpt: "Discover how your health journey begins with the water you drink. Are you ready to make the change?",
      href: "https://wellnesswithtejesh.blogspot.com/2025/08/health-shuru-hoti-hai-paani-se-kya-aap.html",
      date: "August 2025"
    },
    {
      title: "Bachaiye Apne Ghar Ko – EMF Detox Guide",
      excerpt: "Protect your home from invisible digital dangers with our comprehensive EMF detox guide.",
      href: "https://wellnesswithtejesh.blogspot.com/2025/08/digital-duniya-ke-invisible-khataron-se.html",
      date: "August 2025"
    }
  ]

  return (
    <section className="py-20 bg-white">
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
            Wellness Resources
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Free educational materials to support your health journey
          </p>
        </motion.div>

        {/* Main Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-gradient-to-r ${resource.color} rounded-2xl p-8 text-white overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                {resource.badge}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm uppercase tracking-wider font-semibold">
                      {resource.type}
                    </p>
                    <h3 className="text-2xl font-bold">
                      {resource.title}
                    </h3>
                  </div>
                </div>

                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>{resource.action}</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Wellness Wisdom Blog
            </h3>
            <p className="text-xl text-slate-600">
              Latest insights and tips for your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-teal-600 text-sm font-semibold">
                    {post.date}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="https://wellnesswithtejesh.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <span>Visit Blog</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
