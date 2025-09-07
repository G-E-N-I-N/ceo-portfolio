
'use client'


import { motion } from 'framer-motion'
import { GitCommit, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react'

import SectionReveal from '../ui/SectionReveal'
import StaggerContainer, { StaggerItem } from '../ui/StaggerContainer'

const TimeLines = () => {
    const timelineEvents = [
        {
            id: 5,
            hash: 'a7f3c2d',
            date: '2024-2025',
            type: 'freelance',
            icon: Briefcase,
            title: 'Développeur Freelance',
            organization: 'Indépendant',
            location: 'Yaoundé, Cameroun',
            description: 'Développement d\'applications web et mobiles pour divers clients. Spécialisation en React.js, Node.js et React Native.',
            achievements: [
                'Création d\'applications web complètes',
                'Développement d\'APIs RESTful robustes',
                'Applications mobiles cross-platform',
                'Déploiement et maintenance',
            ],
            color: '[var(--terminal-green)]'
        },
        {
            id: 4,
            hash: 'b8e4d1a',
            date: '2025',
            type: 'stage',
            icon: Briefcase,
            title: 'Stage Développeur Web',
            organization: 'E-ranis',
            location: 'Yaoundé, Cameroun',
            description: 'Développement d\'une application web complète avec React.js et Express.js.',
            achievements: [
                'Interface utilisateur responsive avec React.js et Vite',
                'API backend avec Express.js et Node.js',
                'Intégration Tailwind CSS pour le design',
            ],
            color: '[var(--terminal-cyan)]'
        },
        {
            id: 3,
            hash: 'c9f5e2b',
            date: '2023-2024 (6 mois)',
            type: 'stage',
            icon: Briefcase,
            title: 'Stage Développeur Web',
            organization: 'Powerksoft',
            location: 'Yaoundé, Cameroun',
            description: 'Développement de sites web avec WordPress, personnalisation de thèmes.',
            achievements: [
                'Développement de sites WordPress personnalisés',
                'Formation aux bonnes pratiques web'
            ],
            color: '[var(--terminal-yellow)]'
        },
        {
            id: 2,
            hash: 'd1a6f3c',
            date: '2022-2025',
            type: 'education',
            icon: GraduationCap,
            title: 'Licence en Informatique',
            organization: 'Université de Yaoundé I',
            location: 'Yaoundé, Cameroun',
            description: 'Formation complète en informatique avec spécialisation en développement logiciel et science de données.',
            achievements: [
                'Programmation orientée objet (Java, Python)',
                'Développement web (HTML, CSS, JavaScript)',
                'Bases de données (SQL, PostgreSQL, MySQL)',
                'Algorithmes et structures de données',
                'MAchine Learning et IA',
            ],
            color: '[var(--terminal-purple)]'
        },
        {
            id: 1,
            hash: 'e2b7g4d',
            date: '2019',
            type: 'education',
            icon: Award,
            title: 'Baccalauréat Série C',
            organization: 'Lycée bilingue d\'Etoug-ébé',
            location: 'Cameroun',
            description: 'Obtention du baccalauréat série C (Mathématiques et Sciences Physiques) avec mention.',
            achievements: [
                'Spécialisation Mathématiques-Physique',
                'Bases solides en sciences exactes',
                'Développement de la logique analytique',
                'Préparation aux études supérieures'
            ],
            color: '[var(--terminal-red)]'
        }
    ]

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'freelance': return 'FREELANCE'
            case 'stage': return 'STAGE'
            case 'education': return 'FORMATION'
            default: return 'AUTRE'
        }
    }
  
    return (
        <section id="parcours" className="py-10 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <SectionReveal>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-[var(--terminal-red)] mb-4 font-mono">
                                -- MON PARCOURS --
                            </h2>

                            <div className="w-24 h-1 bg-[var(--terminal-yellow)] mx-auto mb-6"></div>
                        </motion.div>

                        <p className="text-xl text-t[var(--terminal-text)] max-w-3xl mx-auto leading-relaxed">
                            Mon évolution professionnelle et académique, présentée comme un historique Git.
                        </p>
                    </div>
                </SectionReveal>

                <SectionReveal delay={0.3}>
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <div className="terminal-button close"></div>
                                <div className="terminal-button minimize"></div>
                                <div className="terminal-button maximize"></div>
                            </div>

                            <div className="flex items-center space-x-2 flex-1 justify-center">
                                <GitCommit className="w-4 h-4 text-[var(--terminal-green)]" />
                                <span className="text-sm text-[var(--terminal-text)] font-mono">
                                    git log --oneline --graph
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="mb-4 text-[var(--terminal-green)] font-mono text-sm">
                                $ git log --pretty=format:&quot;%h %ad %s&quot; --date=short
                            </div>

                            <StaggerContainer className="space-y-6">
                                {timelineEvents.map((event, index) => {
                                    const IconComponent = event.icon
                                    
                                    return (
                                        <StaggerItem key={event.id}>
                                            <motion.div
                                                whileHover={{ x: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex items-start space-x-4 group border border-[var(--terminal-border)] p-4 rounded-lg hover:shadow-lg hover:bg-[var(--terminal-bg-hover)] transition-all duration-300"
                                            >
                                                <div className="flex flex-col items-center">
                                                    <div className={`w-10 h-10 bg-${event.color}/20 rounded-full flex items-center justify-center border-2 border-${event.color} group-hover:bg-${event.color}/30 transition-colors duration-300`}>
                                                        <IconComponent className={`w-5 h-5 text-${event.color}`} />
                                                    </div>

                                                    {index < timelineEvents.length - 1 && (
                                                        <div className="w-0.5 h-16 bg-[var(--terminal-border)] mt-2"></div>
                                                    )}
                                                </div>

                                                <div className="flex-1 space-y-3">
                                                    <div className="flex items-center space-x-3 font-mono text-sm">
                                                        <span className={`text-${event.color} font-bold`}>
                                                            {event.hash}
                                                        </span>

                                                        <span className="text-[var(--terminal-text)]">
                                                            {event.date}
                                                        </span>

                                                        <span className={`px-2 py-1 bg-${event.color}/20 text-${event.color} text-xs rounded border border-${event.color}/30`}>
                                                            {getTypeLabel(event.type)}
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <h3 className="text-xl font-bold text-white mb-1">
                                                            {event.title}
                                                        </h3>

                                                        <div className="flex items-center space-x-4 text-[var(--terminal-text)] text-sm mb-2">
                                                            <span className="font-semibold">{event.organization}</span>
                                                
                                                            <div className="flex items-center space-x-1">
                                                                <MapPin className="w-3 h-3" />
                                                                <span>{event.location}</span>
                                                            </div>
                                                        </div>

                                                        <p className="text-[var(--terminal-text)] leading-relaxed mb-3">
                                                            {event.description}
                                                        </p>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className={`text-${event.color} text-sm font-mono`}>
                                                            $ cat achievements.md
                                                        </div>
                                                    
                                                        <div className="grid gap-1">
                                                            {event.achievements.map((achievement, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                                    className="flex items-center space-x-2 text-[var(--terminal-text)] text-sm"
                                                                >
                                                                    <span className={`text-${event.color}`}>•</span>
                                                                    <span>{achievement}</span>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </StaggerItem>
                                    )
                                })}
                            </StaggerContainer>

                            <div className="mt-8 pt-6 border-t border-[var(--terminal-border)]">
                                <div className="text-[var(--terminal-green)] font-mono text-sm mb-2">
                                    $ git status
                                </div>

                                <div className="text-[var(--terminal-text)] text-sm">
                                    On branch main<br />
                                    Your branch is up to date with &apos;origin/main&apos;.<br />
                                    <span className="text-[var(--terminal-green)]">
                                        Ready for new commits and exciting opportunities! 🚀
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionReveal>

                <SectionReveal delay={0.6}>
                    <div className="text-center mt-16">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-[var(--terminal-red)] text-[var(--terminal-bg)] font-semibold rounded-lg hover:bg-[var(--terminal-green)] transition-colors duration-300 font-mono"
                            >
                                Créons ensemble le prochain commit
                            </button>
                        </motion.div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}

export default TimeLines