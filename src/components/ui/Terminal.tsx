'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from 'lucide-react'

interface TerminalLine {
    id: number
    type: 'system' | 'command' | 'output' | 'error'
    content: string
    timestamp?: Date
}

const Terminal = () => {
    const [lines, setLines] = useState<TerminalLine[]>([])
    const [currentInput, setCurrentInput] = useState('')
    const [isBooting, setIsBooting] = useState(true)
    const [showPrompt, setShowPrompt] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: () => [
        'Commandes disponibles:',
        '  help      - Affiche cette aide',
        '  about     - À propos de moi',
        '  skills    - Mes compétences techniques',
        '  services  - Mes services',
        '  projets   - Mes réalisations',
        '  parcours  - Mon parcours',
        '  contact   - Me contacter',
        '  clear     - Efface l\'écran',
        '  whoami    - Qui suis-je ?',
        '',
        'Tapez une commande ou naviguez avec la souris.'
    ],
    about: () => [
        'Christian Roussel VOUKENG DJIOKENG ( l0rd_9h057)',
        'Développeur de Solutions Logicielles',
        '',
        'Passionné par la création d\'expériences numériques,',
        'je conçois et développe des applications web et mobiles',
        'robustes, de l\'idée initiale à la mise en production.',
        '',
        'Actuellement en freelance et ouvert aux opportunités.'
    ],
    skills: () => [
        'Compétences Techniques:',
        '',
        '  Frontend:',
        '    ├── React.js / Next.js',
        '    ├── JavaScript / TypeScript',
        '    ├── HTML5 / CSS3',
        '    └── Tailwind CSS',
        '',
        '  Backend:',
        '    ├── Node.js / Express.js',
        '    └── Python (Django, Flask)',
        '',
        '  Mobile:',
        '    └── React Native',
        '',
        '  Bases de données:',
        '    ├── PostgreSQL',
        '    ├── MySQL',
        '    ├── MongoDB',
        '    └── Supabase',
        '',
        '  Outils:',
        '    ├── Git / GitHub',
        '    ├── WordPress',
        '    └── Arduino'
    ],
    services: () => {
        scrollToSection('services')
        return ['Redirection vers la section Services...']
    },
    projets: () => {
        scrollToSection('projets')
        return ['Redirection vers mes réalisations...']
    },
    parcours: () => {
        scrollToSection('parcours')
        return ['Redirection vers mon parcours...']
    },
    contact: () => {
        scrollToSection('contact')
        return ['Redirection vers la section Contact...']
    },
    clear: () => {
        setLines([])
        return []
    },
    whoami: () => [
        'l0rd_9h057@portfolio:~$ whoami',
        'Christian Voukeng',
        'Développeur passionné et créatif 🚀'
    ]
  }

    const scrollToSection = (sectionId: string) => {
        setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }, 500)
    }

    const addLine = (type: TerminalLine['type'], content: string) => {
        setLines(prev => [...prev, {
            id: Date.now() + Math.random(),
            type,
            content,
            timestamp: new Date()
        }])
    }

    const handleCommand = (command: string) => {
        const trimmedCommand = command.trim().toLowerCase()

        addLine('command', `l0rd_9h057@portfolio:~$ ${command}`)
        if (trimmedCommand === '') return

        if (commands[trimmedCommand as keyof typeof commands]) {
            const output = commands[trimmedCommand as keyof typeof commands]()
            output.forEach(line => {
                setTimeout(() => addLine('output', line), 100)
            })
        } else {
            addLine('error', `bash: ${trimmedCommand}: command not found`)
            addLine('output', 'Tapez "help" pour voir les commandes disponibles.')
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(currentInput)
            setCurrentInput('')
        }
    }

    useEffect(() => {
        const bootSequence = [
            { delay: 500, text: 'INITIALIZING PORTFOLIO...', type: 'system' as const },
            { delay: 1000, text: 'LOADING MODULES...[OK]', type: 'system' as const },
            { delay: 1500, text: 'FETCHING USER DATA... [OK]', type: 'system' as const },
            { delay: 2000, text: 'STARTING TERMINAL SESSION...[OK]', type: 'system' as const },
            { delay: 2000, text: '✓ Portfolio system ready', type: 'system' as const },
            { delay: 2500, text: '', type: 'output' as const },
            { delay: 3000, text: 'Bienvenue sur le portfolio de l0rd_9h057', type: 'output' as const },
            { delay: 3500, text: 'Tapez "help" pour voir les commandes disponibles.', type: 'output' as const },
            { delay: 4000, text: '', type: 'output' as const }
        ]

        bootSequence.forEach(({ delay, text, type }) => {
            setTimeout(() => {
                if (text) addLine(type, text)
                if (delay === 4000) {
                    setIsBooting(false)
                    setShowPrompt(true)
                }
            }, delay)
        })
    }, [])

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [lines])

    useEffect(() => {
        if (showPrompt && inputRef.current) {
            inputRef.current.focus()
        }
    }, [showPrompt])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl mx-auto terminal-window"
        >
            {/* Barre de titre du terminal */}
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="flex items-center space-x-2 flex-1 justify-start">
                    <TerminalIcon className="w-4 h-4 text-[var(--terminal-green)]" />
                    <span className="text-sm text-[var(--terminal-text)] font-mono">
                        l0rd_9h057@portfolio: ~/portfolio
                    </span>
                </div>
            </div>

            {/* Contenu du terminal */}
            <div
                ref={ terminalRef }
                className="p-6 h-96 overflow-y-auto font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Lignes du terminal */}
                {lines.map((line) => (
                    <motion.div
                        key={ line.id }
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`mb-1 ${
                        line.type === 'command'
                            ? 'text-[var(--terminal-cyan)]'
                            : line.type === 'error'
                            ? 'text-[var(--terminal-red)]'
                            : line.type === 'system'
                            ? 'text-[var(--terminal-yellow)]'
                            : 'text-[var(--terminal-text)]'
                        }`}
                    >
                        { line.content }
                    </motion.div>
                ))}

                {/* Prompt actuel */}
                {showPrompt && (
                    <div className="flex items-center">
                        <span className="text-[var(--terminal-green)] mr-2">l0rd_9h057@portfolio:~$</span>
                        <input
                            ref={ inputRef }
                            type="text"
                            value={ currentInput }
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyPress={ handleKeyPress }
                            className="flex-1 bg-transparent border-none outline-none text-[var(--terminal-text)] terminal-input"
                            placeholder="Tapez une commande..."
                            autoComplete="off"
                        />
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Terminal
