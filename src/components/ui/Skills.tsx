
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Smartphone, Zap, Database, TerminalSquare } from 'lucide-react'

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('native')

    const skillsData = {
        native: [
            { name: 'Java', level: 75, description: 'Développement d\'applications performantes et robustes.' },
            { name: 'Python', level: 90, description: 'Expertise avancée en développement back-end, incluant la conception de microservices.' },
            { name: 'Javascript', level: 90, description: 'Maîtrise du langage pour des applications complexes côté client et serveur.' },
            { name: 'C/C++', level: 80, description: 'Expérience dans la programmation système et les applications de haute performance.' }
        ],
        frontend: [
            { name: 'React.js', level: 85, description: 'Framework JavaScript moderne' },
            { name: 'Next.js', level: 50, description: 'Framework React full-stack' },
            { name: 'TypeScript', level: 80, description: 'JavaScript typé et sécurisé' },
            { name: 'HTML/CSS', level: 85, description: 'Technologies web fondamentales' },
            { name: 'Tailwind CSS', level: 70, description: 'Framework CSS utilitaire' },
        ],
        backend: [
            { name: 'Django', level: 75, description: 'Expérience approfondie dans la construction d\'applications web robustes.' },
            { name: 'Flask', level: 85, description: 'Maîtrise de la construction d\'APIs RESTful.' },
            { name: 'Express.js', level: 90, description: 'Expertise dans le développement d\'applications Node.js performantes.' },
        ],
        mobile: [
            { name: 'React Native', level: 80, description: 'Développement mobile cross-platform' },
            { name: 'Expo', level: 70, description: 'Plateforme pour React Native' },
        ],
        database: [
            { name: 'PostgreSQL', level: 85, description: 'Expertise en conception de schémas de bases de données et en optimisation.' },
            { name: 'MySQL', level: 85, description: 'Maîtrise de la conception et de la gestion de bases de données relationnelles.' },
            { name: 'Supabase', level: 80, description: 'Expertise dans l\'intégration et la gestion de back-ends serverless.' },
            { name: 'MongoDB', level: 80, description: 'Maîtrise des bases de données NoSQL pour des applications flexibles.' }
        ],
        tools: [
            { name: 'Git', level: 85, description: 'Contrôle de version distribué' },
            { name: 'WordPress', level: 70, description: 'CMS et développement de thèmes' },
        ]
    }

    const categories = [
        { id: 'native', name: 'langages natifs', icon: TerminalSquare },
        { id: 'frontend', name: 'Front-End', icon: Code },
        { id: 'backend', name: 'Back-End', icon: Server },
        { id: 'mobile', name: 'Mobile', icon: Smartphone },
        { id: 'database', name: 'Base de données', icon: Database },
        { id: 'tools', name: 'Outils', icon: Zap }
    ]

     return (
        <section id="skills" className="py-2 px-2">
            <div className="w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-xl border border-[var(--terminal-border)] bg-gradient-to-br from-[var(--terminal-bg)] to-[#24283b] shadow-lg"
                >

                    <div className="p-6 ">
                        <motion.div
                            className="flex flex-wrap gap-2 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        // delay: 0.5 + index * 0.1,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.04, backgroundColor: "var(--terminal-purple)", color: "#000000" }}
                                    whileTap={{ scale: 0.96 }}
                                    className={`px-4 py-2 rounded-md font-mono flex items-center text-sm border transition-all ${
                                        activeCategory === category.id
                                        ? 'bg-[var(--terminal-cyan)] text-[var(--terminal-bg)] border-[var(--terminal-cyan)]'
                                        : 'text-[var(--terminal-text)] border-[var(--terminal-border)] hover:border-[var(--terminal-cyan)] hover:text-[var(--terminal-cyan)]'
                                    }`}
                                >
                                    {category.icon && <category.icon className="mr-2" />}
                                    {category.name}
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Skills display */}
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-7"
                        >
                            {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <div>
                                            <h4 className="text-[var(--terminal-cyan)] font-semibold font-mono text-base">
                                                {skill.name}
                                            </h4>

                                            <p className="text-[var(--terminal-text)] text-xs">
                                                {skill.description}
                                            </p>
                                        </div>

                                        <div className="text-[var(--terminal-green)] font-mono text-sm">
                                            {skill.level}%
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="relative">
                                        <div className="w-full bg-[var(--terminal-surface)] rounded-full h-2 overflow-hidden border border-[var(--terminal-border)]">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-[var(--terminal-cyan)] to-[var(--terminal-green)] rounded-full relative"
                                            >
                                                {/* Animated glow effect */}
                                                <motion.div
                                                    animate={{ x: ['-100%', '200%'] }}
                                                    transition={{
                                                        duration: 2,
                                                        delay: (index * 0.1) + 1,
                                                        repeat: Infinity,
                                                        repeatDelay: 3
                                                    }}
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Command simulation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8 pt-6 border-t border-[var(--terminal-border)]"
                        >
                            <div className="text-xs font-mono text-[var(--terminal-cyan)] flex items-center mb-2 gap-1">
                                <span className="text-[var(--terminal-green)]">~</span>
                                <span className="text-[var(--terminal-cyan)]">❯</span>
                                <span>skills</span>
                                <span className="text-[var(--terminal-text)]">--category {activeCategory}</span>
                            </div>

                            <div className="text-[var(--terminal-green)] font-mono text-xs">
                                ✓ Affichage de {skillsData[activeCategory as keyof typeof skillsData].length} compétences dans la catégorie &quot;{activeCategory}&quot;
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <div className="font-mono text-sm max-w-2xl mx-auto text-[var(--terminal-text)]">
                        <p className="mb-4">
                            En constante évolution, je reste à jour avec les technologies 
                            et meilleures pratiques du développement logiciel.
                        </p>
                        
                        <p className="text-[var(--terminal-cyan)]">
                            &quot;L&apos;apprentissage continu est la clé du succès en développement&quot;
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills