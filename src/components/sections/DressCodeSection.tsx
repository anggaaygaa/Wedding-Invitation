'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Shirt, Info } from 'lucide-react'
import NarutoOrnament, { NarutoCloudBackground, SealPatternBackground } from '../ui/NarutoOrnament'
import { ShurikenDecoration, KonohaLeaf, HokageSymbol, FuinjutsuSeal } from '../ui/NarutoDecorations'

interface DressCodeItem {
    gender: 'pria' | 'wanita'
    title: string
    description: string
    colors: { name: string; hex: string }[]
    icon: string
}

const dressCodeData: DressCodeItem[] = [
    {
        gender: 'pria',
        title: 'Untuk Pria',
        description: 'Kemeja formal atau batik dengan nuansa Naruto theme. Warna-warna cerah seperti oranye, biru, atau hijau dianjurkan.',
        colors: [
            { name: 'Uzumaki Orange', hex: '#FF6B35' },
            { name: 'Konoha Green', hex: '#2D5A27' },
            { name: 'Uchiha Navy', hex: '#16213E' },
            { name: 'Scroll Cream', hex: '#FFF5E6' },
        ],
        icon: '🥷',
    },
    {
        gender: 'wanita',
        title: 'Untuk Wanita',
        description: 'Dress atau kebaya modern dengan nuansa Naruto theme. Warna-warna cerah dan vibrant sangat dianjurkan.',
        colors: [
            { name: 'Naruto Orange', hex: '#FF6B35' },
            { name: 'Sakura Pink', hex: '#FFB7C5' },
            { name: 'Hinata Lavender', hex: '#E6E6FA' },
            { name: 'Chakra Blue', hex: '#4169E1' },
        ],
        icon: '👸',
    },
]

function DressCard({ item, delay }: { item: DressCodeItem; delay: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay }}
            className="relative bg-white dark:bg-dark-surface rounded-2xl p-6 border-2 border-naruto-orange/20 shadow-sm hover:shadow-md hover:border-naruto-orange/40 transition-all group overflow-hidden"
        >
            {/* Mission scroll background effect */}
            <NarutoOrnament variant="missionScroll" />

            {/* Corner Konoha leaf */}
            <div className="absolute -top-2 -right-2 opacity-30 group-hover:opacity-60 transition-opacity">
                <KonohaLeaf className="w-8 h-8 text-konoha-green" />
            </div>

            {/* Icon - Shinobi style */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-naruto-orange/20 to-naruto-yellow/10 flex items-center justify-center mx-auto mb-4 text-3xl border-2 border-naruto-orange/20 group-hover:border-naruto-orange/40 transition-colors">
                {item.icon}
            </div>

            {/* Title */}
            <h4 className="font-serif text-xl text-brown dark:text-cream text-center mb-3">
                {item.title}
            </h4>

            {/* Description */}
            <p className="text-brown/70 dark:text-cream/70 text-sm text-center leading-relaxed mb-4">
                {item.description}
            </p>

            {/* Color Palette with names */}
            <div className="space-y-2">
                <span className="text-brown/50 dark:text-cream/50 text-xs block text-center">Rekomendasi Warna:</span>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                    {item.colors.map((color, index) => (
                        <div key={index} className="flex flex-col items-center group/color">
                            <div
                                className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform cursor-pointer"
                                style={{ backgroundColor: color.hex }}
                                title={color.name}
                            />
                            <span className="text-[10px] text-brown/50 dark:text-cream/50 mt-1">{color.name.split(' ')[0]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function DressCodeSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="dresscode" className="py-20 px-4 bg-ivory dark:bg-dark-bg relative overflow-hidden">
            {/* Top Ornament */}
            <div className="absolute top-0 left-0 right-0">
                <NarutoOrnament variant="top" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="w-14 h-14 rounded-full bg-naruto-orange/10 flex items-center justify-center mx-auto mb-4">
                        <Palette size={28} className="text-naruto-orange" />
                    </div>
                    <p className="text-naruto-orange text-sm tracking-[0.3em] uppercase mb-2">
                        🎨 Dress Code
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-brown dark:text-cream mb-4">
                        Panduan Berpakaian
                    </h2>

                    <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />
                </motion.div>

                {/* Dress Code Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {dressCodeData.map((item, index) => (
                        <DressCard key={item.gender} item={item} delay={0.2 + index * 0.15} />
                    ))}
                </div>

                {/* Info Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-r from-naruto-orange/10 to-naruto-yellow/5 dark:from-naruto-orange/20 dark:to-naruto-yellow/10 backdrop-blur-sm rounded-xl p-5 border border-naruto-orange/30 flex items-start gap-4 shadow-sm"
                >
                    <div className="w-10 h-10 rounded-full bg-naruto-orange/20 flex items-center justify-center flex-shrink-0">
                        <Info size={20} className="text-naruto-orange" />
                    </div>
                    <div>
                        <p className="text-brown dark:text-cream text-sm leading-relaxed">
                            Kami akan sangat senang jika Bapak/Ibu/Saudara/i berkenan hadir dengan busana
                            bernuansa <span className="text-naruto-orange font-semibold">Naruto Theme</span> (oranye, biru, hijau)
                            untuk keselarasan dalam dokumentasi acara. Dattebayo! 🍥
                        </p>
                    </div>
                </motion.div>

                {/* Color Reference */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-6 text-center"
                >
                    <p className="text-brown/50 dark:text-cream/50 text-xs mb-3">Referensi Warna Naruto Theme</p>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        {[
                            '#FF6B35', // Naruto Orange
                            '#FFB347', // Yellow
                            '#4169E1', // Chakra Blue
                            '#2D5A27', // Konoha Green
                            '#16213E', // Uchiha Navy
                            '#E63946', // Sharingan Red
                            '#FFB7C5', // Sakura Pink
                            '#E6E6FA', // Hinata Lavender
                            '#FFF5E6', // Scroll Cream
                        ].map((color, index) => (
                            <div
                                key={index}
                                className="w-8 h-8 rounded-lg border border-white/50 shadow-sm transition-transform hover:scale-110"
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
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
