
'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User } from "lucide-react"

// import { User } from '../icons/User'

const Whoami = () => {
    const [hovered, setHovered] = useState(false)
    
    return (
        <div className="relative h-auto w-auto min-h-[320px]">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="space-y-6 text-[1rem] md:text-[1.08rem] leading-relaxed pr-0 lg:pr-48 z-10 relative"
            >
                <div>
                    <span className="font-semibold text-[var(--terminal-cyan)] text-lg">Profil</span>
                    <p className="mt-1 text-[var(--terminal-text)]">
                        Passionné et rigoureux, titulaire d&apos;une licence en informatique de l&apos;université de Yaoundé I.<br />
                        Axé sur le développement de logiciels, doté d&apos;un sens de l&apos;initiative pour concevoir des solutions robustes et sécurisées.
                    </p>
                </div>

                <div>
                    <span className="font-semibold text-[var(--terminal-cyan)] text-lg">Points forts</span>
                    
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                        <li>
                            <span className="text-[var(--terminal-green)] font-semibold">Compétences techniques :</span>
                            <span className="ml-1">
                                C/C++, Java, Python, Javascript, HTML/CSS, React.js, Django, Flask, Express, React Native, PostgreSQL, MySQL, Supabase, MongoDB.
                            </span>
                        </li>
            
                        <li>
                            <span className="text-[var(--terminal-green)] font-semibold">Expérience et polyvalence :</span>
                            <span className="ml-1">
                                Stages Powerksoft & E-ranis Technologie (web/app), polyvalence logique, autonomie.
                            </span>
                        </li>
                    
                        <li>
                            <span className="text-[var(--terminal-green)] font-semibold">Qualités personnelles :</span>
                            <span className="ml-1">
                                Adaptable, tenace, rigoureux, esprit d&apos;équipe, contact et communication, autodidacte.
                            </span>
                        </li>
                        
                        <li>
                            <span className="text-[var(--terminal-green)] font-semibold">Formation académique :</span>
                            <span className="ml-1">
                                Baccalauréat C (2019), Licence informatique Université Yaoundé I (2025).
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-6 items-center mt-2">
                    <span className="font-semibold text-[var(--terminal-cyan)]">Pseudo :</span>
                    <span className="text-[var(--terminal-green)] font-mono">@l0rd_9h057</span>
                </div>
        
                <div>
                    <span className="font-semibold text-[var(--terminal-cyan)]">Email :</span>
                    <a
                        href="mailto:christian.voukeng@gmail.com"
                        className="ml-2 underline text-[var(--terminal-cyan)] hover:text-[var(--terminal-green)] transition"
                    >
                        djiokeng2003@gmail.com
                    </a>
                </div>
            </motion.div>
        
            <div className="fixed bottom-0 right-0 z-0 flex flex-col items-end select-none lg:block">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40, x: 40 }}
                    animate={{ opacity: 0.9, scale: 1, y: 0, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative pointer-events-auto"
                >
                    <motion.div
                        className="w-80 h-80 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--terminal-cyan)] shadow-[0_8px_32px_0_rgba(125,207,255,0.14)] bg-[var(--terminal-bg)] flex items-center justify-center cursor-pointer"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        animate={hovered ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ zIndex: 0 }}
                    >
                        <AnimatePresence>
                            {!hovered ? (
                                // <motion.img
                                //     key="profile-img"
                                //     src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                //     alt="l0rd_9h057"
                                //     className="w-full h-full object-cover"
                                //     initial={{ opacity: 1 }}
                                //     animate={{ opacity: 1 }}
                                //     exit={{ opacity: 0 }}
                                //     transition={{ duration: 0.3 }}
                                // />
                                <motion.div
                                    key="profile-img"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <User
                                        // className="w-full h-full object-cover"
                                        size={100}
                                        color="#7dcfff"
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="hover-message"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center justify-center w-full h-full bg-[var(--terminal-bg)] text-[var(--terminal-cyan)] text-center px-2"
                                >
                                    <span className="text-base md:text-lg font-semibold">
                                        Salut 👋 <br />
                                        C&apos;est l0rd_9h057 ! <br />
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
            
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}
                        className="absolute -bottom-0 right-0 bg-[var(--terminal-bg)] border border-[var(--terminal-cyan)] rounded-lg px-3 py-1 shadow-lg"
                    >
                        <span className="text-[var(--terminal-green)] font-mono text-base">@l0rd_9h057</span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Whoami