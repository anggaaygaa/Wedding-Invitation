'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Calendar, MessageCircle, Users, Sparkles } from 'lucide-react'
import NarutoOrnament from '../ui/NarutoOrnament'
import { KonohaLeaf, ShurikenDecoration } from '../ui/NarutoDecorations'

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
        description: 'Seperti Naruto bertemu Hinata, takdir mempertemukan kami di waktu yang tepat.',
        icon: <Users size={20} />,
    },
    {
        year: '2021',
        title: 'Mulai Dekat',
        description: 'Seiring waktu, ikatan kami semakin kuat. Seperti Team 7, kami saling melengkapi.',
        icon: <MessageCircle size={20} />,
    },
    {
        year: '2023',
        title: 'Menjalin Cinta',
        description: 'Cinta yang tumbuh dari persahabatan. Bersama, kami menjadi lebih kuat.',
        icon: <Heart size={20} />,
    },
    {
        year: '2025',
        title: 'Lamaran',
        description: 'Dengan restu keluarga, kami berkomitmen untuk melanjutkan misi bersama selamanya.',
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
                <div className={`bg-white dark:bg-dark-surface p-5 rounded-2xl border border-naruto-orange/20 shadow-sm hover:shadow-md transition-shadow inline-block max-w-sm ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-full bg-naruto-orange/10 flex items-center justify-center text-naruto-orange">
                            {item.icon}
                        </div>
                        <div>
                            <span className="text-naruto-orange font-semibold text-sm">{item.year}</span>
                            <h4 className="text-brown dark:text-cream font-serif text-lg">{item.title}</h4>
                        </div>
                    </div>
                    <p className="text-brown/70 dark:text-cream/70 text-sm leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* Timeline Dot - Hidden on mobile, shown between cards on desktop */}
            <div className="hidden md:flex flex-col items-center">
                <ShurikenDecoration className="w-6 h-6 animate-spin-slow" />
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
        <section id="story" className="py-24 px-4 bg-white dark:bg-dark-bg relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-naruto-orange text-sm tracking-[0.3em] uppercase mb-3">
                        📖 Our Story
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-brown dark:text-cream mb-6">
                        Perjalanan Cinta
                    </h2>

                    <NarutoOrnament variant="divider" className="max-w-sm mx-auto" />

                    <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto mt-6 text-sm md:text-base italic">
                        &ldquo;The pain of being alone is completely out of this world, isn&apos;t it? I don&apos;t know why, but I understand your feelings so much, it actually hurts.&rdquo;
                    </p>
                    <p className="text-naruto-orange/60 text-xs mt-2">
                        - Naruto Uzumaki
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Desktop only */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-naruto-orange/30 to-transparent" />

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

                {/* Ending decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-3">
                        <div className="w-12 h-px bg-naruto-orange/30" />
                        <KonohaLeaf className="w-8 h-8 text-konoha-green opacity-60" />
                        <div className="w-12 h-px bg-naruto-orange/30" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
