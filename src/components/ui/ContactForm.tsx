'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

interface ContactFormProps {
  serviceTitle?: string
}

export default function ContactForm({ serviceTitle = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceTitle,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create WhatsApp message
    const message = `
नमस्ते Tejesh जी,

मैं आपकी वेबसाइट से संपर्क कर रहा/रही हूं:

नाम: ${formData.name}
ईमेल: ${formData.email}
फोन: ${formData.phone}
${formData.service ? `सेवा: ${formData.service}` : ''}

संदेश: ${formData.message}

कृपया मुझसे संपर्क करें।

धन्यवाद!
    `.trim()
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/918770343316?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your message has been sent via WhatsApp. Tejesh will respond shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-green-600 hover:text-green-700 font-semibold"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        Get in Touch
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            placeholder="Your phone number"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          placeholder="Your email address"
        />
      </div>
      
      {!serviceTitle && (
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Service Interest
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          >
            <option value="">Select a service</option>
            <option value="Kangen Water">Kangen Water Solutions</option>
            <option value="EMF Protection">EMF Protection</option>
            <option value="Wellness Consulting">Wellness Consulting</option>
            <option value="Workshops">Educational Workshops</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
      )}
      
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your wellness goals or questions..."
        />
      </div>
      
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send via WhatsApp
          </>
        )}
      </motion.button>
      
      <p className="text-sm text-slate-500 text-center mt-4">
        By submitting this form, you`ll be redirected to WhatsApp to complete your message.
      </p>
    </motion.form>
  )
}
