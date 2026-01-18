'use client'

import { motion } from 'framer-motion'
import CountdownTimer from '../ui/CountdownTimer'
import NarutoOrnament, { NarutoFloatingLeaves, NarutoCloudBackground, SealPatternBackground } from '../ui/NarutoOrnament'
import { KonohaLeaf, ShurikenDecoration, KuramaSilhouette, FuinjutsuSeal, MangekyoSharingan, SummoningCircle } from '../ui/NarutoDecorations'

// Wedding Date: March 28, 2026
const weddingDate = new Date('2026-03-28T08:00:00')

export default function HeroSection() {

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 overflow-hidden"
        >
            {/* Kurama Silhouette Background - subtle backdrop */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20 pointer-events-none">
                <KuramaSilhouette className="w-full max-w-4xl h-auto" />
            </div>

            {/* Seal Pattern Background - faint fuinjutsu effect */}
            <SealPatternBackground />

            {/* Cloud Background Pattern */}
            <NarutoCloudBackground />

            {/* Floating Konoha Leaves */}
            <NarutoFloatingLeaves />

            {/* Decorative Frame */}
            <NarutoOrnament variant="frame" />

            {/* Corner Mangekyo Sharingan decorations - very subtle */}
            <div className="absolute top-8 left-8 opacity-10 dark:opacity-20 hidden lg:block">
                <MangekyoSharingan className="w-16 h-16" />
            </div>
            <div className="absolute top-8 right-8 opacity-10 dark:opacity-20 hidden lg:block">
                <MangekyoSharingan className="w-16 h-16" />
            </div>

            {/* Konoha leaf decorations on sides - hidden on mobile */}
            <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 opacity-20">
                <KonohaLeaf className="w-20 h-20 animate-float" />
            </div>
            <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 opacity-20 -scale-x-100">
                <KonohaLeaf className="w-20 h-20 animate-float [animation-delay:2s]" />
            </div>

            {/* Summoning Circle decoration - bottom corners */}
            <div className="absolute bottom-20 left-4 opacity-10 dark:opacity-15 hidden md:block">
                <SummoningCircle className="w-24 h-24 animate-spin-slow" />
            </div>
            <div className="absolute bottom-20 right-4 opacity-10 dark:opacity-15 hidden md:block">
                <SummoningCircle className="w-24 h-24 animate-spin-slow [animation-direction:reverse]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-xl mx-auto">
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

                {/* Decorative Seal Pattern - above title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex justify-center mb-4"
                >
                    <FuinjutsuSeal className="w-16 h-16 opacity-30 animate-pulse" />
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

                {/* Couple Names - with chakra glow effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6"
                >
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-naruto-orange mb-2 tracking-wide drop-shadow-lg dark:drop-shadow-[0_0_15px_rgba(255,107,53,0.5)]">
                        Eko
                    </h1>
                    <div className="flex items-center justify-center gap-4 md:gap-6 my-3 md:my-4">
                        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-naruto-orange/60" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                            <KonohaLeaf className="w-10 h-10 text-konoha-green" />
                        </motion.div>
                        <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-naruto-orange/60" />
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-naruto-orange tracking-wide drop-shadow-lg dark:drop-shadow-[0_0_15px_rgba(255,107,53,0.5)]">
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
                    <div className="inline-block px-4 py-2 rounded-lg bg-white/30 dark:bg-dark-surface/30 backdrop-blur-sm border border-naruto-orange/10">
                        <p className="text-brown/60 dark:text-cream/60 text-sm italic">
                            &ldquo;I&apos;m not gonna run away, I never go back on my word! That&apos;s my nindo: my ninja way!&rdquo;
                        </p>
                        <p className="text-naruto-orange/50 dark:text-naruto-orange/50 text-xs mt-1">
                            Our promise to each other
                        </p>
                    </div>
                </motion.div>

                {/* Wedding Date with seal decoration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-8"
                >
                    <div className="relative inline-block px-8 py-4 border-2 border-naruto-orange/30 dark:border-naruto-orange/50 rounded-full bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm overflow-hidden">
                        {/* Subtle chakra glow animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-naruto-orange/0 via-naruto-orange/5 to-naruto-orange/0 animate-chakra-flow" />
                        <p className="text-brown dark:text-cream font-medium text-lg relative z-10">
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

