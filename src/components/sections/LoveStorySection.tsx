'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Calendar, MessageCircle, Users, Sparkles, Shield } from 'lucide-react'
import NarutoOrnament, { NarutoCloudBackground, SealPatternBackground } from '../ui/NarutoOrnament'
import { KonohaLeaf, ShurikenDecoration, FuinjutsuSeal, MangekyoSharingan, KuramaSilhouette, SummoningCircle } from '../ui/NarutoDecorations'

interface TimelineItem {
    year: string
    title: string
    description: string
    icon: React.ReactNode
    narutoRef?: string
}

const timelineData: TimelineItem[] = [
    {
        year: '2020',
        title: 'Pertama Bertemu',
        description: 'Seperti Naruto bertemu Hinata di akademi, takdir mempertemukan kami di waktu yang tepat.',
        icon: <Users size={20} />,
        narutoRef: 'Academy Arc',
    },
    {
        year: '2021',
        title: 'Mulai Dekat',
        description: 'Seiring waktu, ikatan kami semakin kuat. Seperti Team 7, kami saling melengkapi dan tumbuh bersama.',
        icon: <MessageCircle size={20} />,
        narutoRef: 'Team Formation',
    },
    {
        year: '2023',
        title: 'Menjalin Cinta',
        description: 'Cinta yang tumbuh dari persahabatan. Bersama, kami menjadi lebih kuat dari sebelumnya.',
        icon: <Heart size={20} />,
        narutoRef: 'Chunin Exam',
    },
    {
        year: '2025',
        title: 'Lamaran',
        description: 'Dengan restu keluarga dan tekad yang bulat, kami berkomitmen untuk melanjutkan misi cinta selamanya.',
        icon: <Sparkles size={20} />,
        narutoRef: 'The Last',
    },
    {
        year: '2026',
        title: 'Hari Bahagia',
        description: 'InsyaAllah, kami akan menyatukan cinta dalam ikatan suci pernikahan pada 28 Maret 2026. Dattebayo!',
        icon: <Calendar size={20} />,
        narutoRef: 'Boruto Era',
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
            {/* Content Card - Mission scroll style */}
            <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`relative bg-white dark:bg-dark-surface p-5 rounded-2xl border-2 border-naruto-orange/20 shadow-sm hover:shadow-md hover:border-naruto-orange/40 transition-all inline-block max-w-sm overflow-hidden group ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    {/* Mission scroll background */}
                    <NarutoOrnament variant="missionScroll" />

                    <div className={`flex items-center gap-3 mb-3 relative ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-naruto-orange/20 to-naruto-yellow/10 flex items-center justify-center text-naruto-orange border border-naruto-orange/20">
                            {item.icon}
                        </div>
                        <div>
                            <span className="text-naruto-orange font-semibold text-sm">{item.year}</span>
                            <h4 className="text-brown dark:text-cream font-serif text-lg">{item.title}</h4>
                        </div>
                    </div>
                    <p className="text-brown/70 dark:text-cream/70 text-sm leading-relaxed relative">
                        {item.description}
                    </p>

                    {/* Naruto Arc reference badge */}
                    {item.narutoRef && (
                        <div className={`mt-3 relative ${isLeft ? 'md:text-right' : ''}`}>
                            <span className="inline-block text-[10px] bg-naruto-orange/10 text-naruto-orange px-2 py-1 rounded-full border border-naruto-orange/20">
                                📖 {item.narutoRef}
                            </span>
                        </div>
                    )}

                    {/* Corner Konoha leaf decoration */}
                    <div className="absolute -top-1 -right-1 opacity-20 group-hover:opacity-50 transition-opacity">
                        <KonohaLeaf className="w-6 h-6 text-konoha-green" />
                    </div>
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
        <section id="story" className="py-16 md:py-20 px-4 md:px-6 bg-white dark:bg-dark-bg relative overflow-hidden">
            {/* Cloud background */}
            <NarutoCloudBackground />

            {/* Kurama silhouette backdrop */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 pointer-events-none">
                <KuramaSilhouette className="w-full max-w-3xl h-auto" />
            </div>

            {/* Corner seal decorations */}
            <div className="absolute top-16 left-8 opacity-10 hidden lg:block">
                <FuinjutsuSeal className="w-20 h-20 animate-spin-slow" />
            </div>
            <div className="absolute bottom-16 right-8 opacity-10 hidden lg:block">
                <FuinjutsuSeal className="w-20 h-20 animate-spin-slow [animation-direction:reverse]" />
            </div>

            {/* Side Sharingan decorations */}
            <div className="absolute top-1/3 left-4 opacity-10 hidden lg:block">
                <MangekyoSharingan className="w-12 h-12" />
            </div>
            <div className="absolute bottom-1/3 right-4 opacity-10 hidden lg:block">
                <MangekyoSharingan className="w-12 h-12" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <div className="flex justify-center mb-4">
                        <ShurikenDecoration className="w-10 h-10 opacity-40 animate-spin-slow" />
                    </div>
                    <p className="text-naruto-orange text-sm tracking-[0.3em] uppercase mb-3">
                        📖 Our Ninja Way
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-brown dark:text-cream mb-4">
                        Perjalanan Cinta
                    </h2>

                    <NarutoOrnament variant="divider" className="max-w-sm mx-auto" />

                    <div className="mt-6 inline-block px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-naruto-orange/10">
                        <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto text-sm md:text-base italic">
                            &ldquo;The pain of being alone is completely out of this world, isn&apos;t it? I don&apos;t know why, but I understand your feelings so much, it actually hurts.&rdquo;
                        </p>
                        <p className="text-naruto-orange/60 text-xs mt-2">
                            - Naruto Uzumaki 🍥
                        </p>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Desktop only - enhanced with gradient */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-naruto-orange/40 to-transparent" />

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

                {/* Ending decoration with Summoning Circle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-10 md:mt-12"
                >
                    <div className="inline-flex items-center gap-4">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-naruto-orange/40" />
                        <div className="relative">
                            <SummoningCircle className="w-12 h-12 opacity-40 animate-spin-slow" />
                            <KonohaLeaf className="w-6 h-6 text-konoha-green opacity-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-naruto-orange/40" />
                    </div>
                    <p className="text-brown/40 dark:text-cream/40 text-xs mt-4 italic">
                        &ldquo;Believe it!&rdquo; - Our journey continues...
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
