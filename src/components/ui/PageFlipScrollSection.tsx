
'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence, Transition } from 'framer-motion'

import { Warning } from '../icons/Warning'

interface PageFlipScrollSectionProps {
  children: React.ReactNode[]
  className?: string
  onSectionComplete?: () => void
}

const PageFlipScrollSection = ({
    children,
    className = '',
    onSectionComplete
}: PageFlipScrollSectionProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const lastScrollY = useRef(0)
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isInSection, setIsInSection] = useState(false)
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
    const [isTransitioning, setIsTransitioning] = useState(false)

    const totalPages = children.length

    const handleScroll = useCallback((e: WheelEvent) => {
        if (!isInSection || isTransitioning) return

        e.preventDefault()

        const currentScrollY = window.scrollY
        const direction = e.deltaY > 0 ? 'down' : 'up'
        setScrollDirection(direction)

        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current)
        }

        scrollTimeout.current = setTimeout(() => {
            const delta = e.deltaY

            if (delta > 0 && currentIndex < totalPages - 1) {
                // Scroll vers le bas - page suivante
                setIsTransitioning(true)
                setCurrentIndex(prev => prev + 1)
            } else if (delta < 0 && currentIndex > 0) {
                // Scroll vers le haut - page précédente
                setIsTransitioning(true)
                setCurrentIndex(prev => prev - 1)
            } else if (delta > 0 && currentIndex === totalPages - 1) {
                // Fin de section - permettre le scroll normal
                setIsInSection(false)
                onSectionComplete?.()
            } else if (delta < 0 && currentIndex === 0) {
                // Début de section - permettre le scroll normal vers le haut
                setIsInSection(false)
            }
        }, 50)
    }, [isInSection, isTransitioning, currentIndex, totalPages, onSectionComplete])

    // Observer pour détecter l'entrée/sortie de la section
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Activer isInSection seulement si la section est entièrement visible
                if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
                    setIsInSection(true)
                    setCurrentIndex(0)
                } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0 && isInSection) {
                    setIsInSection(false)
                } else if (!entry.isIntersecting && entry.boundingClientRect.bottom < window.innerHeight && isInSection) {
                    setIsInSection(false)
                }
            },
            {
                threshold: [0.1, 0.5, 0.99],
                rootMargin: '0px 0px 0px 0px'
            }
        )

        observer.observe(container)

        return () => observer.disconnect()
    }, [isInSection])

    // Gestion des événements de scroll
    useEffect(() => {
        if (isInSection) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('wheel', handleScroll, { passive: false })
        } else {
            document.body.style.overflow = 'auto'
            window.removeEventListener('wheel', handleScroll)
        }

        return () => {
            document.body.style.overflow = 'auto'
            window.removeEventListener('wheel', handleScroll)
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current)
            }
        }
    }, [isInSection, handleScroll])

  // Reset de la transition
    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false)
            }, 800)
            return () => clearTimeout(timer)
        }
    }, [isTransitioning])

    // Animations de page de cahier
    const pageVariants = {
        enter: (direction: number) => ({
                    x: direction > 0 ? '100%' : '-100%',
                    rotateY: direction > 0 ? -90 : 90,
                    opacity: 0,
                    scale: 0.8,
                }),
                center: {
                    x: 0,
                    rotateY: 0,
                    opacity: 1,
                    scale: 1,
                },
                exit: (direction: number) => ({
                    x: direction > 0 ? '-100%' : '100%',
                    rotateY: direction > 0 ? 90 : -90,
                    opacity: 0,
                    scale: 0.8,
                }),
            }

    const pageTransition: Transition = {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.8,
    }

    const scrollToNext = () => {
        const element = document.getElementById('parcours');
        if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div
            ref={containerRef}
            className={`relative h-screen overflow-hidden ${className}`}
            style={{
                perspective: '1000px',
            }}
        >
            {/* Indicateur de progression */}
            {isInSection && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed top-20 right-8 z-50"
                >
                    <div className="bg-[var(--terminal-bg)]/90 backdrop-blur-sm border border-[var(--terminal-border)] rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                            <span className="text-[var(--terminal-cyan)] text-sm font-mono">
                                Page {currentIndex + 1}/{totalPages}
                            </span>

                            <div className="w-32 h-2 bg-[var(--terminal-border)] rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-[var(--terminal-cyan)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((currentIndex + 1) / totalPages) * 100}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </div>

                        <div className="text-[var(--terminal-text)] text-xs mt-2 font-mono">
                            {currentIndex === totalPages - 1
                                ? 'Scroll pour continuer ↓'
                                : 'Scroll pour tourner la page'
                            }
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Instructions de navigation */}
            {isInSection && currentIndex === 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
                >
                    <div className="bg-[var(--terminal-yellow)]/20 border border-[var(--terminal-yellow)]/50 rounded-lg px-6 py-3">
                        <div className="text-[var(--terminal-yellow)] font-mono text-sm text-center">
                            📖 Faites défiler pour tourner les pages
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Container des pages */}
            <div className="relative w-full h-full">
                <AnimatePresence mode="wait" custom={scrollDirection === 'down' ? 1 : -1}>
                    <motion.div
                        key={currentIndex}
                        custom={scrollDirection === 'down' ? 1 : -1}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={pageTransition}
                        className="absolute inset-0 w-full h-full"
                        style={{
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Effet d'ombre de page */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--terminal-border)]/10 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isTransitioning ? 0.3 : 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Contenu de la page */}
                        <div className="w-full h-full flex items-center justify-center p-8">
                            {children[currentIndex]}
                        </div>

                        {/* Effet de reliure (côté gauche) */}
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--terminal-border)]/30 via-[var(--terminal-border)]/50 to-[var(--terminal-border)]/30" />

                        {/* Numérotation des pages */}
                        <div className="absolute bottom-4 right-4 text-[var(--terminal-text)]/50 font-mono text-sm">
                            {currentIndex + 1} / {totalPages}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Effet de particules lors du changement de page */}
            {isTransitioning && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                >
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[var(--terminal-cyan)] rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                opacity: 0,
                                scale: 0,
                            }}
                            animate={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.02,
                                ease: 'easeOut',
                            }}
                        />
                    ))}
                </motion.div>
            )}

            {/* Indicateur de scroll en bas */}
            {isInSection && currentIndex === totalPages - 1 && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={scrollToNext}
                    className="cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--terminal-text)] hover:text-[var(--terminal-cyan)] transition-colors duration-300"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-[var(--terminal-green)] text-2xl"
                    >
                        ↓
                    </motion.div>

                    <div className="text-[var(--terminal-green)] font-mono text-sm mt-2">
                        Continuer
                    </div>
                </motion.button>
            )}
        </div>
    )
}

export default PageFlipScrollSection

    