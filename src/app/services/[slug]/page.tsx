import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'

const serviceDetails = {
  'kangen-water': {
    title: 'Kangen Water Solutions',
    description: 'Transform your health with premium ionized alkaline water',
    content: `
      <h3>What is Kangen Water?</h3>
      <p>Kangen Water is ionized alkaline water produced by Enagic's medical-grade water ionizers. This water has a pH of 8.5-9.5 and contains antioxidant properties.</p>
      
      <h3>Health Benefits</h3>
      <ul>
        <li>Superior hydration at cellular level</li>
        <li>Antioxidant properties fight free radicals</li>
        <li>Helps neutralize acid in the body</li>
        <li>Supports overall wellness and energy</li>
      </ul>
      
      <h3>Water Types Available</h3>
      <ul>
        <li><strong>Kangen Water (pH 8.5-9.5):</strong> Daily drinking water</li>
        <li><strong>Clean Water (pH 7.0):</strong> Neutral water for medications</li>
        <li><strong>Beauty Water (pH 4.0-6.0):</strong> For skin and hair care</li>
        <li><strong>Strong Kangen Water (pH 11.0+):</strong> For cleaning purposes</li>
        <li><strong>Strong Acidic Water (pH 2.5):</strong> Disinfectant properties</li>
      </ul>
    `,
    price: 'Contact for pricing',
    whatsappText: 'Hi Tejesh, I want to know more about Kangen Water solutions and pricing'
  },
  'emf-protection': {
    title: 'EMF Protection Solutions',
    description: 'Protect your family from harmful electromagnetic radiation',
    content: `
      <h3>What is EMF?</h3>
      <p>Electromagnetic fields (EMFs) are invisible areas of energy produced by electricity, wifi, cell phones, and other electronic devices. Prolonged exposure may affect health and well-being.</p>
      
      <h3>Our Protection Solutions</h3>
      <ul>
        <li><strong>EMF Testing:</strong> Comprehensive home and office assessment</li>
        <li><strong>Personal Protection:</strong> Scalar energy pendants and cards</li>
        <li><strong>Home Shielding:</strong> EMF blocking materials and devices</li>
        <li><strong>Grounding Solutions:</strong> Earthing mats and sheets</li>
      </ul>
      
      <h3>Why EMF Protection Matters</h3>
      <ul>
        <li>Better sleep quality</li>
        <li>Reduced fatigue and stress</li>
        <li>Improved focus and concentration</li>
        <li>Enhanced overall well-being</li>
      </ul>
    `,
    price: 'From ₹5,000',
    whatsappText: 'Hi Tejesh, I need EMF protection solutions for my home and family'
  },
  'wellness-consulting': {
    title: 'Wellness Consulting',
    description: 'Personalized health and wellness guidance for optimal living',
    content: `
      <h3>Comprehensive Wellness Assessment</h3>
      <p>Get personalized guidance on your health journey with our comprehensive wellness consulting services. We analyze your lifestyle, diet, water intake, and environmental factors.</p>
      
      <h3>What's Included</h3>
      <ul>
        <li><strong>Health History Review:</strong> Complete analysis of your current health status</li>
        <li><strong>Lifestyle Assessment:</strong> Diet, exercise, sleep, and stress evaluation</li>
        <li><strong>Water Quality Analysis:</strong> Testing your current water source</li>
        <li><strong>Custom Wellness Plan:</strong> Tailored recommendations for improvement</li>
        <li><strong>Follow-up Support:</strong> Ongoing guidance and progress tracking</li>
      </ul>
      
      <h3>Areas We Cover</h3>
      <ul>
        <li>Hydration optimization</li>
        <li>Nutritional guidance</li>
        <li>EMF exposure reduction</li>
        <li>Stress management techniques</li>
        <li>Sleep quality improvement</li>
        <li>Energy enhancement strategies</li>
      </ul>
      
      <h3>Session Format</h3>
      <p>Available both online and in-person in Indore. Each session is 60-90 minutes with detailed action plan and resources provided.</p>
    `,
    price: 'Free',
    whatsappText: 'Hi Tejesh, I want to book a wellness consulting session to improve my health'
  },
  'workshops': {
    title: 'Educational Workshops',
    description: 'Learn about water science and wellness fundamentals',
    content: `
      <h3>Free Educational Workshops</h3>
      <p>Join our informative workshops to learn about the science of water, EMF protection, and holistic wellness approaches. These sessions are designed to educate and empower you with knowledge.</p>
      
      <h3>Workshop Topics</h3>
      <ul>
        <li><strong>Water Science Workshop:</strong> Understanding pH, ORP, and molecular hydrogen</li>
        <li><strong>EMF Awareness Session:</strong> Sources, effects, and protection strategies</li>
        <li><strong>Alkaline Living:</strong> Diet and lifestyle for optimal pH balance</li>
        <li><strong>Hydration & Health:</strong> The connection between water quality and wellness</li>
      </ul>
      
      <h3>What You'll Learn</h3>
      <ul>
        <li>Scientific basis of alkaline ionized water</li>
        <li>How to test your water quality at home</li>
        <li>EMF sources in your daily environment</li>
        <li>Simple protection strategies</li>
        <li>Lifestyle modifications for better health</li>
        <li>Q&A with wellness expert</li>
      </ul>
      
      <h3>Workshop Details</h3>
      <ul>
        
        <li><strong>Format:</strong> Interactive presentation with demonstrations</li>
        <li><strong>Materials:</strong> Handouts and resource guides provided</li>
        <li><strong>Group Size:</strong> 10-30 participants</li>
        <li><strong>Location:</strong> Indore venues or online via Zoom</li>
      </ul>
      
      <h3>Who Should Attend</h3>
      <p>Anyone interested in improving their health naturally, families concerned about water quality, individuals experiencing unexplained health issues, or those curious about EMF protection.</p>
    `,
    price: 'Free',
    whatsappText: 'Hi Tejesh, I want to attend your free wellness workshop. When is the next session?'
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]
  
  if (!service) {
    return {
      title: 'Service Not Found'
    }
  }

  return {
    title: `${service.title} - Tejesh Dixit Wellness`,
    description: service.description,
    keywords: `${service.title}, Wellness Services, Indore, Tejesh Dixit`,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]
  
  if (!service) {
    notFound()
  }

  return (
    <div className="pt-16">
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h1>
            <p className="text-xl text-slate-600 mb-8">{service.description}</p>
            
            <div className="prose prose-lg max-w-none mb-8" 
                 dangerouslySetInnerHTML={{ __html: service.content }} />
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold text-center">
                Price: {service.price}
              </div>
              <a 
                href={`https://wa.me/918770343316?text=${encodeURIComponent(service.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>📱</span> WhatsApp Inquiry
              </a>
            </div>
            
            <ContactForm serviceTitle={service.title} />
          </div>
        </div>
      </section>
    </div>
  )
}