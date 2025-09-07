
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
}

const SectionReveal = ({ 
    children, 
    className = '', 
    delay = 0, 
    direction = 'up' 
}: SectionRevealProps) => {
    const directionOffset = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { y: 0, x: 50 },
        right: { y: 0, x: -50 }
    }

    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                ...directionOffset[direction]
            }}
            whileInView={{ 
                opacity: 1, 
                y: 0, 
                x: 0 
            }}
            viewport={{ 
                once: true, 
                margin: "-100px" 
            }}
            transition={{ 
                duration: 0.6, 
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default SectionReveal
