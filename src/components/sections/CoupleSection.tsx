'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram } from 'lucide-react'
import NarutoOrnament, { NarutoCloudBackground, SealPatternBackground } from '../ui/NarutoOrnament'
import { KonohaLeaf, ShurikenDecoration, MangekyoSharingan, FuinjutsuSeal, SharinganPattern } from '../ui/NarutoDecorations'

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
            {/* Photo Frame - Simplified */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 group">


                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-naruto-orange/30 bg-gradient-to-br from-naruto-orange/5 to-transparent" />

                {/* Photo container */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white via-cream to-ivory dark:from-dark-surface dark:via-dark-card dark:to-dark-elevated flex items-center justify-center overflow-hidden border border-naruto-orange/20 shadow-md">
                    {/* Placeholder - Replace with actual image */}
                    <div className="text-center">
                        <div className="text-4xl mb-1 opacity-60">
                            {order === 'putra' ? '🥷' : '👸'}
                        </div>
                        <p className="text-brown/40 dark:text-cream/40 text-xs">Foto</p>
                    </div>
                </div>

            </div>

            {/* Name */}
            <div className="mb-3">
                <h3 className="font-serif text-3xl md:text-4xl text-naruto-orange mb-2 tracking-wide">
                    {name}
                </h3>
                <p className="text-brown dark:text-cream font-medium text-base">
                    {fullName}
                </p>
            </div>

            {/* Parent Info */}
            <div className="inline-block px-4 py-2 rounded-lg bg-white/60 dark:bg-dark-surface/60 border border-naruto-orange/20">
                <p className="text-naruto-orange text-xs mb-1 font-medium">
                    {order === 'putra' ? 'Putra dari' : 'Putri dari'}
                </p>
                <p className="text-brown/80 dark:text-cream/80 text-sm leading-relaxed">
                    {parentInfo}
                </p>
            </div>

            {/* Instagram - optional */}
            {instagram && (
                <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-naruto-orange hover:text-naruto-yellow transition-colors group"
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
        <section id="couple" className="py-16 md:py-20 px-4 md:px-6 bg-ivory relative overflow-hidden">
            {/* Background Pattern */}
            <NarutoCloudBackground />

            {/* Top Ornament */}
            <div className="absolute top-0 left-0 right-0">
                <NarutoOrnament variant="top" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <p className="text-naruto-orange text-sm tracking-[0.3em] uppercase mb-3">
                        Mempelai
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-brown dark:text-cream mb-4">
                        Calon Pengantin
                    </h2>

                    <NarutoOrnament variant="divider" className="max-w-sm mx-auto" />

                    {/* Ayat Al-Quran */}
                    <div className="mt-6 max-w-xl mx-auto">
                        <p className="text-brown/80 dark:text-cream/80 italic text-sm md:text-base leading-relaxed">
                            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
                            pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram
                            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.&rdquo;
                        </p>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="w-12 h-px bg-naruto-orange/30" />
                            <p className="text-naruto-orange text-sm font-medium">QS. Ar-Rum: 21</p>
                            <div className="w-12 h-px bg-naruto-orange/30" />
                        </div>
                    </div>
                </motion.div>

                {/* Couple Cards with Center Divider */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-8 relative">
                    {/* Center Shuriken Decoration - Desktop only */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
                        <div className="flex items-center gap-2">
                            <ShurikenDecoration className="w-12 h-12 animate-spin-slow opacity-40" />
                            <div className="w-px h-32 bg-gradient-to-b from-transparent via-naruto-orange/40 to-transparent" />
                            <ShurikenDecoration className="w-12 h-12 animate-spin-slow opacity-40 [animation-direction:reverse]" />
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
                        <div className="w-16 h-px bg-naruto-orange/30" />
                        <ShurikenDecoration className="w-8 h-8 animate-spin-slow opacity-30" />
                        <div className="w-16 h-px bg-naruto-orange/30" />
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

                {/* Naruto Quote about Bonds */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-10 md:mt-12"
                >
                    <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-naruto-orange/20">
                        <p className="text-brown/60 italic text-sm">
                            &ldquo;When people are protecting something truly special to them, they truly can become as strong as they can be.&rdquo;
                        </p>
                        <p className="text-naruto-orange/60 text-xs mt-1">
                            - Naruto Uzumaki
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Ornament */}
            <div className="absolute bottom-0 left-0 right-0">
                <NarutoOrnament variant="bottom" />
            </div>
        </section>
    )
}
