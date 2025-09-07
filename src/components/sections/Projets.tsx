
'use client'

// import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

import SectionReveal from '../ui/SectionReveal'
// import PageFlipScrollSection from '../ui/PageFlipScrollSection'
import { Warning } from '../icons/Warning'

const ProjectsSection = () => {
    // const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    // const projects = [
    //     {
    //         id: 1,
    //         title: 'E-ranis Restaurant',
    //         description: 'Application web complète pour un restaurant avec système de commande en ligne, gestion des menus et interface d\'administration.',
    //         image: '/api/placeholder/600/400',
    //         technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Express.js', 'Node.js'],
    //         type: 'Stage',
    //         year: '2024',
    //         liveUrl: '#',
    //         githubUrl: '#',
    //         features: [
    //             'Interface responsive',
    //             'Système de commande',
    //             'Panel admin',
    //             'API REST'
    //         ],
    //         challenges: 'Intégration complexe du système de paiement et optimisation des performances',
    //         impact: 'Augmentation de 40% des commandes en ligne'
    //     },
    //     {
    //         id: 2,
    //         title: 'Portfolio Powerksoft',
    //         description: 'Site vitrine professionnel développé avec WordPress, incluant un système de gestion de contenu personnalisé et optimisations SEO.',
    //         image: '/api/placeholder/600/400',
    //         technologies: ['WordPress', 'PHP', 'MySQL', 'CSS3', 'JavaScript'],
    //         type: 'Stage',
    //         year: '2024',
    //         liveUrl: '#',
    //         githubUrl: '#',
    //         features: [
    //             'CMS personnalisé',
    //             'SEO optimisé',
    //             'Design responsive',
    //             'Performance'
    //         ],
    //         challenges: 'Personnalisation avancée de WordPress et optimisation SEO',
    //         impact: 'Amélioration de 60% du référencement naturel'
    //     },
    //     {
    //         id: 3,
    //         title: 'Application Mobile E-Commerce',
    //         description: 'Application mobile cross-platform pour le commerce électronique avec panier, paiement intégré et suivi des commandes.',
    //         image: '/api/placeholder/600/400',
    //         technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'Stripe'],
    //         type: 'Freelance',
    //         year: '2024',
    //         liveUrl: '#',
    //         githubUrl: '#',
    //         features: [
    //             'Paiement sécurisé',
    //             'Notifications push',
    //             'Suivi commandes',
    //             'Chat support'
    //         ],
    //         challenges: 'Synchronisation temps réel et gestion des états complexes',
    //         impact: 'Conversion mobile augmentée de 35%'
    //     },
    //     {
    //         id: 4,
    //         title: 'Dashboard Analytics',
    //         description: 'Tableau de bord interactif pour l\'analyse de données avec graphiques en temps réel et exports personnalisés.',
    //         image: '/api/placeholder/600/400',
    //         technologies: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL', 'Prisma'],
    //         type: 'Freelance',
    //         year: '2024',
    //         liveUrl: '#',
    //         githubUrl: '#',
    //         features: [
    //             'Temps réel',
    //             'Graphiques interactifs',
    //             'Export PDF/Excel',
    //             'Multi-utilisateurs'
    //         ],
    //         challenges: 'Optimisation des requêtes et visualisation de gros volumes de données',
    //         impact: 'Réduction de 50% du temps d\'analyse des données'
    //     },
    //     {
    //         id: 5,
    //         title: 'API Microservices',
    //         description: 'Architecture microservices avec API Gateway, authentification JWT et documentation Swagger complète.',
    //         image: '/api/placeholder/600/400',
    //         technologies: ['Node.js', 'Express.js', 'Docker', 'MongoDB', 'Redis'],
    //         type: 'Freelance',
    //         year: '2024',
    //         liveUrl: '#',
    //         githubUrl: '#',
    //         features: [
    //             'Microservices',
    //             'JWT Auth',
    //             'Docker',
    //             'Documentation API'
    //         ],
    //         challenges: 'Orchestration des services et gestion de la scalabilité',
    //         impact: 'Amélioration de 70% des performances système'
    //     }
    // ]

    // const getTypeColor = (type: string) => {
    //     return type === 'Freelance' ? '[var(--terminal-green)]' : '[var(--terminal-cyan)]'
    // }

    // Créer les pages pour chaque projet
    // const projectPages = projects.map((project) => (
    //     <div key={project.id} className="w-full h-full max-w-6xl mx-auto">
    //         <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
    //             {/* Côté gauche - Image et infos principales */}
    //             <motion.div
    //                 initial={{ opacity: 0, x: -50 }}
    //                 animate={{ opacity: 1, x: 0 }}
    //                 transition={{ duration: 0.6, delay: 0.2 }}
    //                 className="space-y-6"
    //             >
    //                 <div className="terminal-window">
    //                     <div className="terminal-header">
    //                         <div className="terminal-buttons">
    //                             <div className="terminal-button close"></div>
    //                             <div className="terminal-button minimize"></div>
    //                             <div className="terminal-button maximize"></div>
    //                         </div>

    //                         <div className="flex items-center space-x-2 flex-1 justify-center">
    //                             <BookOpen className="w-4 h-4 text-[var(--terminal-cyan)]" />
    //                             <span className="text-sm text-[var(--terminal-text)] font-mono">
    //                                 ~/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}
    //                             </span>
    //                         </div>
    //                     </div>

    //                     <div className="p-6">
    //                         <div className="mb-4 text-[var(--terminal-cyan)] font-mono text-sm">
    //                             $ cat project-preview.jpg
    //                         </div>

    //                         {/* Image du projet avec effet 3D */}
    //                         <motion.div
    //                             className="relative h-64 bg-[var(--terminal-border)] rounded-lg overflow-hidden mb-6"
    //                             whileHover={{ scale: 1.02, rotateY: 5 }}
    //                             transition={{ duration: 0.3 }}
    //                             style={{ transformStyle: 'preserve-3d' }}
    //                         >
    //                             <div className="w-full h-full bg-gradient-to-br from-[var(--terminal-cyan)]/20 to-[var(--terminal-green)]/20 flex items-center justify-center">
    //                                 <span className="text-8xl font-bold text-[var(--terminal-text)]/30">
    //                                     {project.title.charAt(0)}
    //                                 </span>
    //                             </div>
                    
    //                             {/* Overlay avec actions */}
    //                             <motion.div
    //                                 className="absolute inset-0 bg-[var(--terminal-bg)]/95 flex flex-col items-center justify-center space-y-4"
    //                                 initial={{ opacity: 0 }}
    //                                 whileHover={{ opacity: 1 }}
    //                                 transition={{ duration: 0.3 }}
    //                             >
    //                                 <div className="flex space-x-4">
    //                                     <motion.a
    //                                         href={project.liveUrl}
    //                                         target="_blank"
    //                                         rel="noopener noreferrer"
    //                                         whileHover={{ scale: 1.1 }}
    //                                         whileTap={{ scale: 0.9 }}
    //                                         className="px-6 py-3 bg-[var(--terminal-green)] text-[var(--terminal-bg)] rounded-lg font-mono text-sm flex items-center space-x-2"
    //                                     >
    //                                         <ExternalLink className="w-4 h-4" />
    //                                         <span>Voir le site</span>
    //                                     </motion.a>

    //                                     <motion.a
    //                                         href={project.githubUrl}
    //                                         target="_blank"
    //                                         rel="noopener noreferrer"
    //                                         whileHover={{ scale: 1.1 }}
    //                                         whileTap={{ scale: 0.9 }}
    //                                         className="px-6 py-3 bg-[var(--terminal-cyan)] text-[var(--terminal-bg)] rounded-lg font-mono text-sm flex items-center space-x-2"
    //                                     >
    //                                         <Github className="w-4 h-4" />
    //                                         <span>Code</span>
    //                                     </motion.a>
    //                                 </div>
    //                             </motion.div>
    //                         </motion.div>

    //                         {/* Métadonnées */}
    //                         <div className="flex items-center space-x-4 mb-4">
    //                             <div className="flex items-center space-x-1">
    //                                 <Calendar className="w-4 h-4 text-[var(--terminal-text)]" />
    //                                 <span className="text-[var(--terminal-text)] text-sm">{project.year}</span>
    //                             </div>

    //                             <span className={`px-3 py-1 bg-${getTypeColor(project.type)}/20 text-${getTypeColor(project.type)} text-sm rounded border border-${getTypeColor(project.type)}/30 font-mono`}>
    //                                 {project.type}
    //                             </span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </motion.div>

    //             {/* Côté droit - Détails du projet */}
    //             <motion.div
    //                 initial={{ opacity: 0, x: 50 }}
    //                 animate={{ opacity: 1, x: 0 }}
    //                 transition={{ duration: 0.6, delay: 0.4 }}
    //                 className="space-y-6"
    //             >
    //                 <div>
    //                     <h2 className="text-4xl font-bold text-white mb-4 font-mono">
    //                         {project.title}
    //                     </h2>
                    
    //                     <p className="text-[var(--terminal-text)] text-lg leading-relaxed">
    //                         {project.description}
    //                     </p>
    //                 </div>

    //                 {/* Technologies */}
    //                 <div>
    //                     <div className="text-[var(--terminal-green)] text-sm font-mono mb-3">
    //                         $ cat technologies.json
    //                     </div>

    //                     <div className="flex flex-wrap gap-2">
    //                         {project.technologies.map((tech, index) => (
    //                             <motion.span
    //                                 key={index}
    //                                 initial={{ opacity: 0, scale: 0.8 }}
    //                                 animate={{ opacity: 1, scale: 1 }}
    //                                 transition={{ duration: 0.3, delay: index * 0.1 }}
    //                                 className="px-3 py-1 bg-[var(--terminal-border)] text-[var(--terminal-text)] text-sm rounded font-mono border border-[var(--terminal-border)] hover:border-[var(--terminal-cyan)] transition-colors"
    //                             >
    //                                 {tech}
    //                             </motion.span>
    //                         ))}
    //                     </div>
    //                 </div>

    //                 {/* Fonctionnalités */}
    //                 <div>
    //                     <div className="text-[var(--terminal-yellow)] text-sm font-mono mb-3">
    //                         $ ls features/
    //                     </div>

    //                     <div className="grid grid-cols-2 gap-2">
    //                         {project.features.map((feature, index) => (
    //                             <motion.div
    //                                 key={index}
    //                                 initial={{ opacity: 0, x: -20 }}
    //                                 animate={{ opacity: 1, x: 0 }}
    //                                 transition={{ duration: 0.3, delay: index * 0.1 }}
    //                                 className="flex items-center space-x-2 text-[var(--terminal-text)] text-sm"
    //                             >
    //                                 <span className="text-[var(--terminal-green)]">•</span>
    //                                 <span>{feature}</span>
    //                             </motion.div>
    //                         ))}
    //                     </div>
    //                 </div>

    //                 {/* Défis et Impact */}
    //                 <div className="grid md:grid-cols-2 gap-4">
    //                     <div className="p-4 bg-[var(--terminal-border)]/20 rounded-lg border border-[var(--terminal-border)]">
    //                         <div className="text-[var(--terminal-red)] text-sm font-mono mb-2">
    //                             Défis techniques
    //                         </div>

    //                         <p className="text-[var(--terminal-text)] text-sm">
    //                             {project.challenges}
    //                         </p>

    //                     </div>

    //                     <div className="p-4 bg-[var(--terminal-green)]/10 rounded-lg border border-[var(--terminal-green)]/30">
    //                         <div className="text-[var(--terminal-green)] text-sm font-mono mb-2">
    //                             Impact
    //                         </div>

    //                         <p className="text-[var(--terminal-text)] text-sm">
    //                             {project.impact}
    //                         </p>
    //                     </div>
    //                 </div>
    //             </motion.div>
    //         </div>
    //     </div>
    // ))

    // Page finale avec tous les projets
    // const finalPage = (
    //     <div className="w-full h-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-8">
    //         <motion.div
    //             initial={{ opacity: 0, scale: 0.8 }}
    //             animate={{ opacity: 1, scale: 1 }}
    //             transition={{ duration: 0.6 }}
    //         >
    //             <Github className="w-24 h-24 text-[var(--terminal-green)] mx-auto mb-6" />

    //             <h2 className="text-4xl font-bold text-white mb-4 font-mono">
    //                 Découvrez tous mes projets
    //             </h2>

    //             <p className="text-[var(--terminal-text)] text-xl mb-8 max-w-2xl">
    //                 Explorez ma collection complète de projets open source, contributions et expérimentations sur GitHub.
    //             </p>
    //         </motion.div>

    //         <motion.a
    //             href="https://github.com/G-E-N-I-N"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             whileHover={{ scale: 1.05, y: -5 }}
    //             whileTap={{ scale: 0.95 }}
    //             className="inline-flex items-center space-x-3 px-12 py-6 font-bold rounded-xl hover:bg-[var(--terminal-cyan)] transition-all duration-300 font-mono text-lg shadow-lg"
    //         >
    //             <Github className="w-6 h-6" />
    //             <span>Voir tous mes projets</span>
    //         </motion.a>

    //         <div className="text-[var(--terminal-green)] font-mono text-sm mt-8">
    //             $ git clone --recursive https://github.com/votre-username
    //         </div>
    //     </div>
    // )

    return (
        <section id="projets" className="relative">
            {/* En-tête de section */}
            <div className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
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
                                    -- MES RÉALISATIONS --
                                </h2>

                                <div className="w-24 h-1 bg-[var(--terminal-green)] mx-auto mb-6"></div>
                            </motion.div>

                            <p className="text-xl text-[var(--terminal-text)] max-w-3xl mx-auto leading-relaxed mb-8">
                                Découvrez mes projets récents, alliant innovation technique et expérience utilisateur optimale.
                            </p>

                            <div className="flex items-center justify-center space-x-2 text-[var(--terminal-yellow)] font-mono text-sm">
                                <BookOpen className="w-5 h-5" />
                                <span>Faites défiler pour tourner les pages de mon portfolio</span>
                            </div>

                            <span className='flex items-center justify-center space-x-4 text-[var(--terminal-red)]'> <Warning /> En cours de développement </span>
                        </div>
                    </SectionReveal>
                </div>
            </div>

            {/* Section de défilement avec animation de page de cahier */}
            {/* <PageFlipScrollSection
                    className="bg-gradient-to-b from-[var(--terminal-bg)] via-[var(--terminal-bg)]/95 to-[var(--terminal-bg)]"
                    onSectionComplete={() => {
                    console.log('Section projets terminée')
                }}
            >
                {[...projectPages, finalPage]}
            </PageFlipScrollSection> */}
        </section>
    )
}

export default ProjectsSection