
'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

const StaggerContainer = ({ 
  children, 
  className = '', 
  staggerDelay = 0.1 
}: StaggerContainerProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: staggerDelay, delayChildren: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode 
  className?: string 
}) => {
  const itemVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
        variants={itemVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
  )
}

export default StaggerContainer

