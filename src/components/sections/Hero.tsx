
'use client'

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import AnimatedText from '../ui/AnimatedText';
import Terminal from '../ui/Terminal';

const Hero = () => {
    const scrollToNext = () => {
        const element = document.getElementById('services');
        if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center px-4 py-10">
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%237dcfff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-[var(--terminal-text)] text-lg font-mono"
                            >
                                $ whoami
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-4xl md:text-6xl font-bold text-[var(--var(--terminal-text)])] leading-tight"
                            >
                                Christian
                                <br />
                                <span className="text-[var(--terminal-green)]">Voukeng</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="text-xl md:text-2xl text-terminal-text font-mono"
                            >
                                <AnimatedText 
                                    text="Développeur de Solutions Logicielles"
                                    speed={0.08}
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.5 }}
                            className="space-y-4"
                        >
                            <p className="text-lg text-[var(--terminal-text)] leading-relaxed">
                                Passionné par la création d'expériences numériques, je conçois et développe 
                                en <span className="text-[var(--terminal-green)] font-semibold">freelance</span> des
                                applications web et mobiles robustes, de l'idée initiale à la mise en production.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {['C/C++', 'Python', 'JavaScript', 'Java', '+'].map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 2 + index * 0.1 }}
                                        className="px-3 py-1 bg-[var(--terminal-border)]/30 text-[var(--terminal-cyan)] text-sm rounded-md border border-[var(--terminal-cyan)]/30"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-[var(--terminal-green)] text-[var(--terminal-bg)] font-semibold rounded-lg hover:bg-[var(--terminal-cyan)] transition-colors duration-300"
                            >
                                Voir mes réalisations
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 border border-[var(--terminal-cyan)] text-[var(--terminal-cyan)] font-semibold rounded-lg hover:bg-[var(--terminal-cyan)] hover:text-[var(--terminal-bg)] transition-all duration-300"
                            >
                                Me contacter
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 4 }}
                            className="mt-4"
                        >
                            <p className="text-[var(--terminal-text)] text-sm text-center">
                                💡 <span className="text-[var(--terminal-yellow)]">Astuce:</span> Tapez "help" dans le terminal pour découvrir les commandes
                            </p>

                            <Terminal />
                        </motion.div>
                    </motion.div>
                </div>
                
                {/* Scroll indicator with enhanced animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        animate={{ 
                            y: [0, 10, 0],
                            opacity: [0.7, 1, 0.7] 
                        }}
                        transition={{ 
                            duration: 2.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        onClick={scrollToNext}
                        className="text-[var(--terminal-text)] hover:text-[var(--terminal-cyan)] transition-colors duration-300"
                    >
                        <div className="text-xs font-mono">Explorez mon univers terminal</div>
                        <div className="text-2xl">↓</div>
                    </motion.button>
                </motion.div>
            </div>

            {/* Photo de profil en arrière-plan */}
            {/* <div className="absolute right-0 bottom-0 z-0 hidden lg:block">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="relative"
                >
                    <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[var(--terminal-cyan)] shadow-2xl">
                        <img
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="l0rd_9h057"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[var(--terminal-bg)] border border-[var(--terminal-cyan)] rounded-lg px-4 py-2"
                    >
                        <span className="text-[var(--terminal-green)] font-mono text-lg">@l0rd_9h057</span>
                    </motion.div>
                </motion.div>
            </div> */}
        </section>
    )
}

export default Hero