
'use client';

import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

import { Whatsapp } from './icons/Whatsapp';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--terminal-bg)] border-t border-terminal-border py-4 mt-16"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        {/* Brand */}
                        <div className="flex items-center space-x-2">
                            <Terminal className="w-5 h-5 text-[var(--terminal-green)]" />
                            <span className="text-[var(--terminal-text)] font-mono">
                                <span className="text-[var(--terminal-green)]">l0rd_9h057@portfolio</span>
                                <span className="text-[var(--terminal-cyan)]">:~$</span>
                            </span>
                        </div>

                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-[var(--terminal-text)] text-sm">
                            <span> <span className='h-5 w-5'>©</span> {currentYear} l0rd_9h057</span>
                            <span className="text-[var(--terminal-red)]">•</span>
                            <span>All right reserved</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                href="https://wa.me/670571493"
                                className="text-[var(--terminal-text)] hover:text-[var(--terminal-green)] transition-colors duration-300"
                                title="Whatsapp"
                            >
                                <Whatsapp className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                href="mailto:djiokeng2003@gmail.com"
                                className="text-[var(--terminal-text)] hover:text-[var(--terminal-yellow)] transition-colors duration-300"
                                title="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                href="https://github.com/G-E-N-I-N"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--terminal-text)] hover:text-white transition-colors duration-300"
                                title="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                href="https://linkedin.com/in/christian-djiokeng-15434a253"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--terminal-text)] hover:text-[var(--terminal-cyan)] transition-colors duration-300"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Terminal-style separator */}
                    <div className="mt-6 pt-4 border-t border-terminal-border">
                        <div className="text-center text-[var(--terminal-text)] text-xs font-mono opacity-60">
                            <span className="text-[var(--terminal-green)]">$</span> Strong that scary of my power ! 🚀
                        </div>
                    </div>
                </div>
            </motion.footer>
        </>
    )
}

export default Footer;