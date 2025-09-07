
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface AnimatedTextProps {
    text: string;
    className?: string;
    speed?: number;
    onComplete?: () => void;
}

const AnimatedText = ({ 
    text,
    className = '',
    speed = 0.05,
}: AnimatedTextProps) => {
    const [displayedText, setDisplayedText] = useState('')
    const [isTyping, setIsTyping] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (isTyping) {
            if (currentIndex < text.length) {
                const typingTimeout = setTimeout(() => {
                    setDisplayedText(prev => prev + text[currentIndex])
                    setCurrentIndex(prev => prev + 1)
                }, speed * 1000)

                return () => clearTimeout(typingTimeout)
            } else {
                const completionTimeout = setTimeout(() => {
                    setIsTyping(false)
                }, 1500)
                
                return () => clearTimeout(completionTimeout);
            }
        } else {
            if (displayedText.length > 0) {
                const deletingTimeout = setTimeout(() => {
                    setDisplayedText(prev => prev.slice(0, -1));
                }, speed * 1000 / 2)

                return () => clearTimeout(deletingTimeout)
            } else {
                const restartTimeout = setTimeout(() => {
                    setIsTyping(true)
                    setCurrentIndex(0)
                    setDisplayedText('')
                }, 500)

                return () => clearTimeout(restartTimeout)
            }
        }
    }, [displayedText, currentIndex, isTyping, speed, text])

    return (
        <motion.span
            className={ className }
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
        >
            { displayedText }
            {isTyping && (
                <span className="inline-block w-2 h-5 bg-[var(--terminal-cyan)] ml-1 animate-pulse" />
            )}
        </motion.span>
    );
};

export default AnimatedText;