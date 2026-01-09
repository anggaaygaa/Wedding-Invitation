'use client'

import { motion } from 'framer-motion'
import CountdownTimer from '../ui/CountdownTimer'
import NarutoOrnament, { NarutoFloatingLeaves, NarutoCloudBackground } from '../ui/NarutoOrnament'
import { KonohaLeaf, ShurikenDecoration } from '../ui/NarutoDecorations'

// Wedding Date: March 28, 2026
const weddingDate = new Date('2026-03-28T08:00:00')

export default function HeroSection() {

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
        >
            {/* Cloud Background Pattern */}
            <NarutoCloudBackground />

            {/* Floating Konoha Leaves */}
            <NarutoFloatingLeaves />

            {/* Decorative Frame */}
            <NarutoOrnament variant="frame" />

            {/* Konoha leaf decorations on sides - hidden on mobile */}
            <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 opacity-20">
                <KonohaLeaf className="w-20 h-20 animate-float" />
            </div>
            <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 opacity-20 -scale-x-100">
                <KonohaLeaf className="w-20 h-20 animate-float [animation-delay:2s]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Bismillah */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <p className="text-naruto-orange text-xl md:text-2xl font-medium mb-3" style={{ fontFamily: 'serif' }}>
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                    </p>
                    <p className="text-brown dark:text-cream/80 text-sm md:text-base">
                        Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
                    </p>
                </motion.div>

                {/* Decorative Shuriken - center top */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex justify-center mb-6"
                >
                    <div className="flex items-center gap-4">
                        <ShurikenDecoration className="w-8 h-8 opacity-30 animate-spin-slow" />
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-naruto-orange/50 to-transparent" />
                        <ShurikenDecoration className="w-8 h-8 opacity-30 animate-spin-slow [animation-direction:reverse]" />
                    </div>
                </motion.div>

                {/* The Wedding Of */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4"
                >
                    <p className="text-brown/70 dark:text-cream/70 text-sm tracking-[0.4em] uppercase">
                        The Wedding Of
                    </p>
                </motion.div>

                {/* Couple Names */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-naruto-orange mb-2 tracking-wide drop-shadow-lg">
                        Eko
                    </h1>
                    <div className="flex items-center justify-center gap-6 my-4">
                        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-naruto-orange/60" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                            <KonohaLeaf className="w-10 h-10 text-konoha-green" />
                        </motion.div>
                        <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-naruto-orange/60" />
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-naruto-orange tracking-wide drop-shadow-lg">
                        Keke
                    </h1>
                </motion.div>

                {/* Naruto Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-6"
                >
                    <p className="text-brown/60 dark:text-cream/60 text-sm italic">
                        &ldquo;I&apos;m not gonna run away, I never go back on my word! That&apos;s my nindo: my ninja way!&rdquo;
                    </p>
                    <p className="text-naruto-orange/50 dark:text-naruto-orange/50 text-xs mt-1">
                        Our promise to each other
                    </p>
                </motion.div>

                {/* Wedding Date */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-8"
                >
                    <div className="inline-block px-8 py-4 border-2 border-naruto-orange/30 dark:border-naruto-orange/50 rounded-full bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm">
                        <p className="text-brown dark:text-cream font-medium text-lg">
                            Sabtu, 28 Maret 2026
                        </p>
                    </div>
                </motion.div>

                {/* Divider Ornament */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className="text-brown/70 dark:text-cream/70 text-sm mb-4 tracking-wider">Countdown Menuju Hari H</p>
                    <CountdownTimer targetDate={weddingDate} />
                </motion.div>

            </div>

            {/* Bottom Ornament */}
            <div className="absolute bottom-0 left-0 right-0">
                <NarutoOrnament variant="bottom" />
            </div>
        </section>
    )
}
