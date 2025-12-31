'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram } from 'lucide-react'
import JavaneseOrnament, { BatikBackground } from '../ui/JavaneseOrnament'

interface CoupleCardProps {
    name: string
    fullName: string
    parentInfo: string
    order: 'putra' | 'putri'
    instagram?: string
    delay?: number
}

function CoupleCard({ name, fullName, parentInfo, order, instagram, delay = 0 }: CoupleCardProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay }}
            className="text-center"
        >
            {/* Photo Frame with Premium Javanese styling */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 mx-auto mb-8 group">
                {/* Outer animated glow ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold/30 glow-ring" />
                {/* Rotating dashed border ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-dashed border-gold/20 slow-rotate" />
                {/* Middle ring with gradient */}
                <div className="absolute inset-2 rounded-full border-2 border-gold/40 bg-gradient-to-br from-gold/5 to-transparent" />
                {/* Inner decorative ring */}
                <div className="absolute inset-4 rounded-full border border-gold/50 overflow-hidden">
                    {/* Batik pattern inside frame */}
                    <div className="absolute inset-0 batik-truntum" />
                </div>
                {/* Photo container with glassmorphism */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-ivory via-white to-cream flex items-center justify-center overflow-hidden border-2 border-gold/30 shadow-lg shadow-gold/20 group-hover:shadow-gold/40 transition-shadow duration-500">
                    {/* Placeholder - Replace with actual image */}
                    <div className="text-center">
                        <div className="text-5xl mb-2 opacity-50 group-hover:scale-110 transition-transform duration-300">
                            {order === 'putra' ? '🤵' : '👰'}
                        </div>
                        <p className="text-brown/40 dark:text-cream/40 text-xs">Foto</p>
                    </div>
                </div>
                {/* Corner ornaments with glow */}
                <div className="absolute -top-3 -left-3 w-10 h-10 glow-breathing">
                    <JavaneseOrnament variant="corner" className="w-full h-full opacity-70" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 -scale-x-100 glow-breathing">
                    <JavaneseOrnament variant="corner" className="w-full h-full opacity-70" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 -scale-y-100 glow-breathing">
                    <JavaneseOrnament variant="corner" className="w-full h-full opacity-70" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 scale-[-1] glow-breathing">
                    <JavaneseOrnament variant="corner" className="w-full h-full opacity-70" />
                </div>
            </div>

            {/* Name with special styling */}
            <div className="mb-4">
                <h3 className="font-serif text-4xl md:text-5xl gold-text mb-3 tracking-wide">
                    {name}
                </h3>
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-8 h-px bg-gold/40" />
                    <div className="w-2 h-2 rounded-full bg-gold/60" />
                    <div className="w-8 h-px bg-gold/40" />
                </div>
                <p className="text-brown dark:text-cream font-medium text-lg">
                    {fullName}
                </p>
            </div>

            {/* Parent Info with Javanese border */}
            <div className="relative inline-block px-6 py-3 mb-4">
                <div className="absolute inset-0 border border-gold/30 dark:border-gold/40 rounded-lg bg-white/50 dark:bg-dark-surface/50" />
                <p className="text-gold dark:text-gold text-sm mb-1 relative z-10 font-medium">
                    {order === 'putra' ? 'Putra dari' : 'Putri dari'}
                </p>
                <p className="text-brown dark:text-cream text-sm leading-relaxed relative z-10">
                    {parentInfo}
                </p>
            </div>

            {/* Instagram - optional */}
            {instagram && (
                <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-gold hover:text-gold-dark transition-colors group"
                >
                    <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">@{instagram}</span>
                </a>
            )}
        </motion.div>
    )
}

export default function CoupleSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="couple" className="py-24 px-4 bg-ivory relative overflow-hidden">
            {/* Background Pattern */}
            <BatikBackground className="opacity-50" />

            {/* Top Ornament */}
            <div className="absolute top-0 left-0 right-0">
                <JavaneseOrnament variant="top" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
                        Mempelai
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-brown dark:text-cream mb-6">
                        Calon Pengantin
                    </h2>

                    <JavaneseOrnament variant="divider" className="max-w-sm mx-auto" />

                    {/* Ayat Al-Quran */}
                    <div className="mt-8 max-w-2xl mx-auto">
                        <p className="text-brown/80 dark:text-cream/80 italic text-sm md:text-base leading-relaxed">
                            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
                            pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
                            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.&rdquo;
                        </p>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="w-12 h-px bg-gold/30" />
                            <p className="text-gold text-sm font-medium">QS. Ar-Rum: 21</p>
                            <div className="w-12 h-px bg-gold/30" />
                        </div>
                    </div>
                </motion.div>

                {/* Couple Cards with Center Divider */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-8 relative">
                    {/* Center Keris Decoration - Desktop only */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
                        <div className="flex items-center gap-2">
                            <JavaneseOrnament variant="keris" className="opacity-40 h-20" />
                            <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                            <JavaneseOrnament variant="keris" className="opacity-40 h-20 -scale-x-100" />
                        </div>
                    </div>

                    {/* Groom */}
                    <CoupleCard
                        name="Eko"
                        fullName="Achmad Eko Wahyu Prasetyo"
                        parentInfo="Bapak ... & Ibu ..."
                        order="putra"
                        delay={0.2}
                    />

                    {/* Mobile Divider */}
                    <div className="md:hidden flex items-center justify-center gap-4">
                        <div className="w-16 h-px bg-gold/30" />
                        <JavaneseOrnament variant="keris" className="opacity-30 h-12" />
                        <div className="w-16 h-px bg-gold/30" />
                    </div>

                    {/* Bride */}
                    <CoupleCard
                        name="Keke"
                        fullName="Keke Putri Yunindia"
                        parentInfo="Bapak Patra Temsilahadi & Ibu Arik Setyowati"
                        order="putri"
                        delay={0.4}
                    />
                </div>

                {/* Javanese Proverb */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gold/20">
                        <p className="text-brown/60 italic text-sm">
                            &ldquo;Manunggaling kawula lan Gusti&rdquo;
                        </p>
                        <p className="text-brown/40 text-xs mt-1">
                            Bersatunya hamba dengan Tuhan dalam keharmonisan
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Ornament */}
            <div className="absolute bottom-0 left-0 right-0">
                <JavaneseOrnament variant="bottom" />
            </div>
        </section>
    )
}
