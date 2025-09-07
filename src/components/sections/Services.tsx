
'use client'

import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Database } from 'lucide-react';

import SectionReveal from '../ui/SectionReveal';
import StaggerContainer, { StaggerItem } from '../ui/StaggerContainer';

const Services = () => {

    const services = [
        {
            title: 'Développement Front-End',
            description: 'Création d\'interfaces modernes et responsives. Experience utilisateur optimisée et design adaptatif.',
            technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'etc'],
            icon: Code,
            color: '[var(--terminal-cyan)]',
        },
        {
            title: 'Développement Back-End', 
            description: 'Architecture et développement d\'APIs RESTful robustes avec Node.js. Gestion de bases de données et sécurité.',
            technologies: ['Node.js', 'Express', 'Flask', 'Django', 'etc'],
            icon: Server,
            color: '[var(--terminal-green)]',
        },
        {
            title: 'Gestion de Bases de Données', 
            description: 'Conception et optimisation de bases de données SQL et NoSQL. Intégrité des données et performance assurées.',
            technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'etc'],
            icon: Database,
            color: '[var(--terminal-red)]',
        },
        {
            title: 'Développement Mobile',
            description: 'Applications mobiles cross-platform avec React Native. Performance native et expérience utilisateur fluide.',
            technologies: ['React Native', 'Expo'],
            icon: Smartphone,
            color: '[var(--terminal-yellow)]',
        }
    ]

    return (
        <section id="services" className="py-10 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <SectionReveal>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-[var(--terminal-cyan)] mb-4 font-mono">
                                -- MES SERVICES --
                            </h2>
                            <div className="w-24 h-1 bg-[var(--terminal-green)] mx-auto mb-6"></div>
                        </motion.div>

                        <p className="text-xl text-[var(--terminal-text)] max-w-3xl mx-auto leading-relaxed">
                            En tant que développeur freelance, je propose des solutions complètes 
                            pour vos projets numériques, de la conception à la mise en production.
                        </p>
                    </div>
                </SectionReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon

                        return (
                            <StaggerItem key={service.title}>
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.05,
                                        y: -10
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="terminal-window h-full group cursor-pointer"
                                >
                                    <div className="terminal-header">
                                        <div className="terminal-buttons">
                                            <div className="terminal-button close"></div>
                                            <div className="terminal-button minimize"></div>
                                            <div className="terminal-button maximize"></div>
                                        </div>

                                        <div className="flex items-center space-x-2 flex-1 justify-center">
                                            <IconComponent className={`w-4 h-4 text-${service.color}`} />
                                            <span className="text-sm text-[var(--terminal-text)] font-mono">
                                                ~/services/{service.title.toLowerCase().replace(/\s+/g, '-')}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        <div className="text-center">
                                            <div className={`w-16 h-16 bg-${service.color}/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${service.color}/30 transition-colors duration-300`}>
                                                <IconComponent className={`w-8 h-8 text-${service.color}`} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <p className="text-[var(--terminal-text)] leading-relaxed text-sm">
                                            {service.description}
                                        </p>

                                        <div className="space-y-3">
                                            <div className="text-[var(--terminal-green)] text-sm font-mono">
                                                $ ls technologies/
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                                                        viewport={{ once: true }}
                                                        className="px-2 py-1 bg-[var(--terminal-border)]/30 text-[var(--terminal-cyan)] text-xs rounded border border-[var(--terminal-border)] font-mono"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* ToDO */}
                                        {/* <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center text-[var(--terminal-cyan)] text-sm font-mono cursor-pointer group-hover:text-[var(--terminal-green)] transition-colors duration-300"
                                        >
                                            <span>En savoir plus</span>
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </motion.div> */}
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>

                <SectionReveal delay={0.6}>
                    <div className="text-center mt-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-[var(--terminal-green)] text-[var(--terminal-bg)] font-semibold rounded-lg hover:bg-[var(--terminal-cyan)] transition-colors duration-300 font-mono"
                            >
                                Discutons de votre projet
                            </button>
                        </motion.div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}

export default Services