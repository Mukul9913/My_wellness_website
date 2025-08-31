'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfileImageProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  showStatus?: boolean
  className?: string
}

export default function ProfileImage({ 
  src, 
  alt, 
  size = 'md', 
  showStatus = true, 
  className = '' 
}: ProfileImageProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative inline-block"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-teal-300/50 shadow-md`}>
          <Image
            src={src}
            alt={alt}
            width={size === 'lg' ? 128 : size === 'md' ? 96 : 64}
            height={size === 'lg' ? 128 : size === 'md' ? 96 : 64}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        {showStatus && (
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-slate-600">Available</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}