'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Shirt, Info } from 'lucide-react'
import JavaneseOrnament from '../ui/JavaneseOrnament'

interface DressCodeItem {
    gender: 'pria' | 'wanita'
    title: string
    description: string
    colors: string[]
}

const dressCodeData: DressCodeItem[] = [
    {
        gender: 'pria',
        title: 'Untuk Pria',
        description: 'Batik formal atau kemeja dengan nuansa earth tone. Bisa menggunakan beskap Jawa untuk kesan tradisional.',
        colors: ['#8B7355', '#C9A961', '#4A3728', '#D2B48C'],
    },
    {
        gender: 'wanita',
        title: 'Untuk Wanita',
        description: 'Kebaya atau dress dengan nuansa earth tone. Batik modern atau kain tradisional sangat dianjurkan.',
        colors: ['#C9A961', '#D4AF37', '#F5EFE6', '#8B7355'],
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
            className="bg-white rounded-2xl p-6 border border-gold/20 shadow-sm card-hover"
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Shirt size={28} className="text-gold" />
            </div>

            {/* Title */}
            <h4 className="font-serif text-xl text-brown text-center mb-3">
                {item.title}
            </h4>

            {/* Description */}
            <p className="text-brown/70 text-sm text-center leading-relaxed mb-4">
                {item.description}
            </p>

            {/* Color Palette */}
            <div className="flex items-center justify-center gap-2">
                <span className="text-brown/50 text-xs mr-2">Warna:</span>
                {item.colors.map((color, index) => (
                    <div
                        key={index}
                        className="w-7 h-7 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                        title={color}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default function DressCodeSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="dresscode" className="py-20 px-4 bg-ivory relative overflow-hidden">
            {/* Top Ornament */}
            <div className="absolute top-0 left-0 right-0">
                <JavaneseOrnament variant="top" />
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
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                        <Palette size={28} className="text-gold" />
                    </div>
                    <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">
                        Dress Code
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-brown mb-4">
                        Panduan Berpakaian
                    </h2>

                    <JavaneseOrnament variant="divider" className="max-w-xs mx-auto" />
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
                    className="bg-gradient-to-r from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 backdrop-blur-sm rounded-xl p-5 border border-gold/30 dark:border-gold/40 flex items-start gap-4 shadow-sm"
                >
                    <div className="w-10 h-10 rounded-full bg-gold/20 dark:bg-gold/30 flex items-center justify-center flex-shrink-0">
                        <Info size={20} className="text-gold" />
                    </div>
                    <div>
                        <p className="text-brown dark:text-cream text-sm leading-relaxed">
                            Kami akan sangat senang jika Bapak/Ibu/Saudara/i berkenan hadir dengan busana
                            bernuansa <span className="text-gold font-semibold">Earth Tone</span> (coklat, krem, emas, beige)
                            untuk keselarasan dalam dokumentasi acara.
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
                    <p className="text-brown/50 text-xs mb-3">Referensi Warna Earth Tone</p>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        {['#4A3728', '#6B5344', '#8B7355', '#A08B70', '#C9A961', '#D4AF37', '#D2B48C', '#E8D5A3', '#F5EFE6'].map((color, index) => (
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
                <JavaneseOrnament variant="bottom" />
            </div>
        </section>
    )
}
