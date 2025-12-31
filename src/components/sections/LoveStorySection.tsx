'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Calendar, MessageCircle, Users, Sparkles } from 'lucide-react'
import JavaneseOrnament from '../ui/JavaneseOrnament'

interface TimelineItem {
    year: string
    title: string
    description: string
    icon: React.ReactNode
}

const timelineData: TimelineItem[] = [
    {
        year: '2020',
        title: 'Pertama Bertemu',
        description: 'Pertemuan pertama yang menjadi awal dari segalanya. Takdir mempertemukan kami di waktu yang tepat.',
        icon: <Users size={20} />,
    },
    {
        year: '2021',
        title: 'Mulai Dekat',
        description: 'Seiring waktu, kedekatan kami semakin terjalin. Setiap percakapan mempererat hubungan kami.',
        icon: <MessageCircle size={20} />,
    },
    {
        year: '2023',
        title: 'Menjalin Cinta',
        description: 'Cinta yang tumbuh dari persahabatan. Kami memutuskan untuk melangkah lebih serius bersama.',
        icon: <Heart size={20} />,
    },
    {
        year: '2025',
        title: 'Lamaran',
        description: 'Dengan restu keluarga, kami berkomitmen untuk melanjutkan ke jenjang yang lebih sakral.',
        icon: <Sparkles size={20} />,
    },
    {
        year: '2026',
        title: 'Hari Bahagia',
        description: 'InsyaAllah, kami akan menyatukan cinta dalam ikatan suci pernikahan pada 28 Maret 2026.',
        icon: <Calendar size={20} />,
    },
]

function TimelineCard({ item, index, isLeft }: { item: TimelineItem; index: number; isLeft: boolean }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Content Card */}
            <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`bg-white p-5 rounded-2xl border border-gold/20 shadow-sm card-hover inline-block max-w-sm ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                            {item.icon}
                        </div>
                        <div>
                            <span className="text-gold font-semibold text-sm">{item.year}</span>
                            <h4 className="text-brown font-serif text-lg">{item.title}</h4>
                        </div>
                    </div>
                    <p className="text-brown/70 text-sm leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* Timeline Dot - Hidden on mobile, shown between cards on desktop */}
            <div className="hidden md:flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gold border-4 border-ivory relative z-10" />
            </div>

            {/* Empty space for opposite side on desktop */}
            <div className="hidden md:block flex-1" />
        </motion.div>
    )
}

export default function LoveStorySection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="story" className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
                        Cerita Kami
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
                        Perjalanan Cinta
                    </h2>

                    <JavaneseOrnament variant="divider" className="max-w-sm mx-auto" />

                    <p className="text-brown/70 max-w-lg mx-auto mt-6 text-sm md:text-base italic">
                        &ldquo;Jodoh iku wis digarisake dening Gusti. Kabeh ana wektune.&rdquo;
                    </p>
                    <p className="text-brown/40 text-xs mt-2">
                        Jodoh sudah ditentukan oleh Tuhan. Semua ada waktunya.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Desktop only */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-12">
                        {timelineData.map((item, index) => (
                            <TimelineCard
                                key={index}
                                item={item}
                                index={index}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>

                {/* Ending quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-3">
                        <div className="w-12 h-px bg-gold/30" />
                        <Heart size={20} className="text-gold fill-gold" />
                        <div className="w-12 h-px bg-gold/30" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
