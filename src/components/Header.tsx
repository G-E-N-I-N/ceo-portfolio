
'use client'

import { useState } from "react"
import { motion } from 'framer-motion'
import { Terminal, Menu, X, Github, Linkedin } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: 'Accueil', id: 'hero' },
        { label: 'Services', id: 'services' },
        { label: 'Projets', id: 'projets' },
        { label: 'Parcours', id: 'parcours' },
        // { label: 'A propos', id: 'a_propos' },
        { label: 'Contact', id: 'contact' },
    ]

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if(section) {
            section.scrollIntoView({behavior: 'smooth'})
            setIsMenuOpen(false)
        }
    }

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-1 left-0 right-0 z-40 bg-[var(--terminal-bg)]/80 backdrop-blur-md border-b border-terminal-border"
            >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo/Brand */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('hero')}
                        >
                            <Terminal className="w-6 h-6 text-[var(--terminal-text)]" />
                            <span className="text-lg font-bold text-[var(--terminal-text)]">
                                <span className="text-[var(--terminal-text)]">l0rd_9h057@portfolio</span>
                                <span className="text-[var(--terminal-text)]">:~$</span>
                            </span>
                        </motion.div>

                        {/* Navigation Desktop */}
                        <nav className="hidden md:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <motion.button
                                    key={ item.id }
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-[var(--terminal-text)] cursor-pointer hover:text-[var(--terminal-text)] transition-colors duration-300 text-sm font-medium"
                                >
                                    { item.label }
                                </motion.button>
                            ))}
                        </nav>

                        {/* Social Links & Contact */}
                        <div className="hidden md:flex items-center space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                href="https://github.com/G-E-N-I-N"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--terminal-text)] hover:text-[var(--terminal-text)] transition-colors duration-300"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                href="https://linkedin.com/in/christian-djiokeng-15434a253"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--terminal-text)] hover:text-[var(--terminal-text)] transition-colors duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="bg-[var(--terminal-text)] text-[var(--terminal-bg)] px-4 py-2 rounded-md font-medium hover:bg-[var(--terminal-cyan)] hover:text-black transition-colors duration-300 text-sm"
                            >
                                Me Contacter
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-[var(--terminal-text)] hover:text-[var(--terminal-text)] transition-colors duration-300"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    <motion.div
                        initial={false}
                        animate={{
                        height: isMenuOpen ? 'auto' : 0,
                        opacity: isMenuOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="py-4 space-y-3 border-t border-terminal-border mt-3">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full cursor-pointer text-left text-[var(--terminal-text)] hover:text-[var(--terminal-text)] transition-colors duration-300 py-2"
                                >
                                    {item.label}
                                </motion.button>
                            ))}

                            <div className="flex items-center justify-between space-x-4 border-t border-terminal-border">
                                <div className="flex items-center space-x-4 pt-3">
                                    <motion.a
                                        whileTap={{ scale: 0.95 }}
                                        href="https://github.com/G-E-N-I-N"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--terminal-text)] hover:text-[var(--terminal-text)] transition-colors duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        whileTap={{ scale: 0.95 }}
                                        href="https://linkedin.com/in/christian-djiokeng-15434a253"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--terminal-text)] hover:text-[var(--terminal-text)] transition-colors duration-300"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </motion.a>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection('contact')}
                                    className="mt-3 rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors duration-300 flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                                >
                                    Contact
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.header>
        </>
    )
}

export default Header