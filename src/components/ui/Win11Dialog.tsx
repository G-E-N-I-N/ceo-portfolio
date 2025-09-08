
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Whoami from './Whoami'
import Skills from './Skills'

type Tab = 'whoami' | 'skills'

interface Win11DialogProps {
  open: boolean
  onClose: () => void
}

const tabs: { key: Tab, label: string, icon?: string }[] = [
    { key: 'whoami', label: 'Whoami', icon: '👤' },
    { key: 'skills', label: 'Skills', icon: '🧠' },
]

const whoamiContent = (
    <Whoami />
)

const skillsContent = (
    <Skills />
)

const tabContent: Record<Tab, React.ReactNode> = {
    whoami: whoamiContent,
    skills: skillsContent,
}

const Win11Dialog: React.FC<Win11DialogProps> = ({ open, onClose }) => {
    const [tab, setTab] = useState<Tab>('whoami')

    // Dialog animation variants
    const dialogVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 40 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -20 },
    }

    if (!open) return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--terminal-bg)]/80"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dialogVariants}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="
                        shadow-2xl rounded-2xl border border-[var(--terminal-border)] w-[100vh] max-w-full
                        bg-gradient-to-br from-[var(--terminal-bg)] to-[#24283b]
                    "
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="
                        flex items-center justify-between px-4 py-2
                        bg-[var(--terminal-border)]/60 rounded-t-2xl border-b border-[var(--terminal-border)]
                    ">
                        <div className="flex items-center gap-2">
                            <div className="terminal-button close"></div>
                            <div className="terminal-button minimize"></div>
                            <div className="terminal-button maximize"></div>
                            <span className="ml-3 font-semibold text-[var(--terminal-cyan)]">Info l0rd_9h057</span>
                        </div>

                        <button
                            onClick={onClose}
                            className="hover:bg-[var(--terminal-green)]/[0.09] p-1 rounded transition"
                            aria-label="Fermer"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18">
                                <line x1="4" y1="4" x2="14" y2="14" stroke="#7dcfff" strokeWidth="2"/>
                                <line x1="14" y1="4" x2="4" y2="14" stroke="#7dcfff" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center border-b border-[var(--terminal-border)] bg-[var(--terminal-bg)] px-2">
                        {tabs.map(t => (
                            <button
                                key={t.key}
                                className={`flex items-center gap-1 px-4 py-2 font-medium text-sm rounded-t-lg transition 
                                ${tab === t.key
                                    ? 'bg-[var(--terminal-bg)] border-x border-t border-[var(--terminal-cyan)] text-[var(--terminal-cyan)]'
                                    : 'text-[var(--terminal-text)] hover:bg-[var(--terminal-border)]/50'}
                                `}
                                onClick={() => setTab(t.key)}
                            >
                                {t.icon && <span>{t.icon}</span>} {t.label}
                            </button>
                        ))}
                    </div>

                    <div className="p-6 max-h-[80vh] overflow-auto bg-[var(--terminal-bg)] rounded-b-2xl text-[var(--terminal-text)]">
                        {tabContent[tab]}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Win11Dialog