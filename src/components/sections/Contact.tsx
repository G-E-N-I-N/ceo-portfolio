
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, MessageCircle } from 'lucide-react'

import { Whatsapp } from '../icons/Whatsapp'
import SectionReveal from '../ui/SectionReveal'
import StaggerContainer, { StaggerItem } from '../ui/StaggerContainer'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [serverMailResponse, setServerMailResponse] = useState<string | null>(null)

    const contacts = [
        {
            icon: Whatsapp,
            label: 'Whatsapp',
            value: '+237 670 57 14 93',
            color: '[var(--terminal-cyan)]'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'djiokeng2003@gmail.com',
            color: '[var(--terminal-green)]'
        },
        {
            icon: MapPin,
            label: 'Localisation',
            value: 'Yaoundé, Cameroun',
            color: '[var(--terminal-red)]'
        },
        {
            icon: MessageCircle,
            label: 'Disponibilité',
            value: 'Ouvert aux opportunités',
            color: '[var(--terminal-yellow)]'
        }
    ]

    const socials = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/G-E-N-I-N',
            color: '[var(--terminal-text)]',
            description: 'Découvrez mes projets open source'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://linkedin.com/in/in/christian-djiokeng-15434a253',
            color: '[var(--terminal-cyan)]',
            description: 'Connectons-nous professionnellement'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:djiokeng2003@gmail.com',
            color: '[var(--terminal-green)]',
            description: 'Contactez-moi directement'
        }
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setServerMailResponse('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                const responseData = await res.json()
                setSubmitStatus('success')
                setServerMailResponse(responseData?.message)
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
            } else {
                const errorData = await res.json()
                setSubmitStatus('error')
                setServerMailResponse(errorData?.error || 'Une erreur inattendue est survenue.')
            }
        } catch(error) {
            console.error(error)
            setSubmitStatus('error')
            setServerMailResponse('Problème de connexion. Veuillez réessayer plus tard.')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }
    }

    return (
        <section id="contact" className="py-10 px-4 relative overflow-hidden">
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
                            <h2 className="text-4xl md:text-5xl font-bold text-[var(--terminal-yellow)] mb-4 font-mono">
                                -- ME CONTACTER --
                            </h2>

                            <div className="w-24 h-1 bg-[var(--terminal-cyan)] mx-auto mb-3"></div>
                        </motion.div>

                        <p className="text-xl text-[var(--terminal-text)] max-w-3xl mx-auto leading-relaxed">
                            Vous avez un projet en tête ? Discutons ensemble de vos besoins et créons quelque chose d&aposexceptionnel.
                        </p>
                    </div>
                </SectionReveal>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Formulaire de contact */}
                    <SectionReveal delay={0.2}>
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-buttons">
                                    <div className="terminal-button close"></div>
                                    <div className="terminal-button minimize"></div>
                                    <div className="terminal-button maximize"></div>
                                </div>

                                <div className="flex items-center space-x-2 flex-1 justify-center">
                                    <Send className="w-4 h-4 text-[var(--terminal-green)]" />
                                    <span className="text-sm text-[var(--terminal-text)] font-mono">
                                        ~/contact/send-message
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4 text-[var(--terminal-green)] font-mono text-sm">
                                    $ nano message.txt
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[var(--terminal-cyan)] text-sm font-mono mb-2">
                                                Nom complet
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded-lg text-[var(--terminal-text)] font-mono focus:border-[var(--terminal-cyan)] focus:outline-none transition-colors duration-300"
                                                placeholder="Votre nom"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[var(--terminal-cyan)] text-sm font-mono mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded-lg text-[var(--terminal-text)] font-mono focus:border-[var(--terminal-cyan)] focus:outline-none transition-colors duration-300"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[var(--terminal-cyan)] text-sm font-mono mb-2">
                                            Téléphone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded-lg text-[var(--terminal-text)] font-mono focus:border-[var(--terminal-cyan)] focus:outline-none transition-colors duration-300"
                                            placeholder="+237 xxxxxxxx"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[var(--terminal-cyan)] text-sm font-mono mb-2">
                                            Sujet
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded-lg text-[var(--terminal-text)] font-mono focus:border-[var(--terminal-cyan)] focus:outline-none transition-colors duration-300"
                                            placeholder="Sujet de votre message"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[var(--terminal-cyan)] text-sm font-mono mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded-lg text-[var(--terminal-text)] font-mono focus:border-[var(--terminal-cyan)] focus:outline-none transition-colors duration-300 resize-none"
                                            placeholder="Décrivez votre projet ou votre demande..."
                                        />
                                    </div>

                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-[var(--terminal-green)]/20 border border-[var(--terminal-green)]/30 rounded-lg"
                                        >
                                            <div className="text-[var(--terminal-green)] font-mono text-sm">
                                                ✓ Message envoyé avec succès ! Je vous répondrai rapidement.
                                            </div>
                                        </motion.div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-[var(--terminal-red)]/20 border border-[var(--terminal-red)]/30 rounded-lg"
                                        >
                                            <div className="text-[var(--terminal-red)] font-mono text-sm">
                                                { serverMailResponse }<br />
                                                <br /> ✗ Erreur lors de l&aposenvoi. Veuillez réessayer ou me contacter directement.
                                            </div>
                                        </motion.div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full px-8 py-4 bg-[var(--terminal-green)] text-[var(--terminal-bg)] font-semibold rounded-lg hover:bg-[var(--terminal-cyan)] transition-colors duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-[var(--terminal-bg)] border-t-transparent rounded-full animate-spin"></div>
                                                <span>Envoi en cours...</span>
                                            </>
                                            ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Envoyer le message</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Informations de contact et liens sociaux */}
                    <div className="space-y-8">
                        <SectionReveal delay={0.4}>
                            <div className="terminal-window">
                                <div className="terminal-header">
                                    <div className="terminal-buttons">
                                        <div className="terminal-button close"></div>
                                        <div className="terminal-button minimize"></div>
                                        <div className="terminal-button maximize"></div>
                                    </div>

                                    <div className="flex items-center space-x-2 flex-1 justify-center">
                                        <Mail className="w-4 h-4 text-[var(--terminal-cyan)]" />
                                        <span className="text-sm text-[var(--terminal-text)] font-mono">
                                            ~/contact/info
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4 text-[var(--terminal-cyan)] font-mono text-sm">
                                        $ cat contact-info.json
                                    </div>

                                    <StaggerContainer className="space-y-4">
                                        {contacts.map((info) => {
                                            const IconComponent = info.icon

                                            return (
                                                <StaggerItem key={info.label}>
                                                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[var(--terminal-border)]/20 transition-colors duration-300">
                                                            <div className={`w-10 h-10 bg-${info.color}/20 rounded-lg flex items-center justify-center`}>
                                                                <IconComponent className={`w-5 h-5 text-${info.color}`} />
                                                            </div>
                                                        <div>
                                                            
                                                        <div className="text-[var(--terminal-text)] text-sm font-mono">
                                                            {info.label}
                                                        </div>

                                                        <div className={`text-${info.color} font-semibold`}>
                                                            {info.value}
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                </StaggerItem>
                                            )
                                        })}
                                    </StaggerContainer>
                                </div>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.6}>
                            <div className="terminal-window">
                                <div className="terminal-header">
                                    <div className="terminal-buttons">
                                        <div className="terminal-button close"></div>
                                        <div className="terminal-button minimize"></div>
                                        <div className="terminal-button maximize"></div>
                                    </div>

                                    <div className="flex items-center space-x-2 flex-1 justify-center">
                                        <Github className="w-4 h-4 text-terminal-green" />
                                        <span className="text-sm text-[var(--terminal-text)] font-mono">
                                            ~/social/links
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4 text-[var(--terminal-green)] font-mono text-sm">
                                        $ ls -la social-networks/
                                    </div>

                                    <StaggerContainer className="space-y-4">
                                        {socials.map((link) => {
                                            const IconComponent = link.icon
                                        
                                            return (
                                                <StaggerItem key={link.name}>
                                                    <motion.a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ x: 10, scale: 1.02 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="flex items-center space-x-4 p-4 rounded-lg border border-[var(--terminal-border)] hover:border-[var(--terminal-cyan)] hover:bg-terminal-border/20 transition-all duration-300 group"
                                                    >
                                                        <div className={`w-12 h-12 bg-${link.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${link.color}/30 transition-colors duration-300`}>
                                                            <IconComponent className={`w-6 h-6 text-${link.color}`} />
                                                        </div>
                                                    
                                                        <div className="flex-1">
                                                            <div className="text-white font-semibold">
                                                                {link.name}
                                                            </div>
                                                    
                                                            <div className="text-[var(--terminal-text)] text-sm">
                                                                {link.description}
                                                            </div>
                                                        </div>

                                                        <div className="text-[var(--terminal-cyan)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            →
                                                        </div>
                                                    </motion.a>
                                                </StaggerItem>
                                            )
                                        })}
                                    </StaggerContainer>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>

                <SectionReveal delay={0.8}>
                    <div className="text-center mt-16">
                        <div className="terminal-window max-w-2xl mx-auto">
                            <div className="terminal-header">
                                <div className="terminal-buttons">
                                    <div className="terminal-button close"></div>
                                    <div className="terminal-button minimize"></div>
                                    <div className="terminal-button maximize"></div>
                                </div>

                                <div className="flex items-center space-x-2 flex-1 justify-center">
                                    <MessageCircle className="w-4 h-4 text-[var(--terminal-yellow)]" />
                                    <span className="text-sm text-[var(--terminal-text)] font-mono">
                                        ~/status/availability
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 text-center">
                                <div className="mb-4 text-[var(--terminal-yellow)] font-mono text-sm">
                                    $ echo $AVAILABILITY_STATUS
                                </div>
                            
                                <div className="text-[var(--terminal-green)] text-lg font-mono mb-2">
                                    ✓ Disponible pour de nouveaux projets
                                </div>
                            
                                <p className="text-[var(--terminal-text)]">
                                    Je suis actuellement ouvert aux opportunités freelance et aux collaborations. 
                                    N&aposhésitez pas à me contacter pour discuter de votre projet !
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}

export default Contact