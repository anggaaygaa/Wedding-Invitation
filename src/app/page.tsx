'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/ui/Navigation'
import ShareButton from '@/components/ui/ShareButton'
import ThemeToggle from '@/components/ui/ThemeToggle'
import HeroSection from '@/components/sections/HeroSection'
import CoupleSection from '@/components/sections/CoupleSection'
import LoveStorySection from '@/components/sections/LoveStorySection'
import EventSection from '@/components/sections/EventSection'
import DressCodeSection from '@/components/sections/DressCodeSection'
import LocationSection from '@/components/sections/LocationSection'
import GallerySection from '@/components/sections/GallerySection'
import VideoSection from '@/components/sections/VideoSection'
import PreweddingPhotosSection from '@/components/sections/PreweddingPhotosSection'
import RsvpSection from '@/components/sections/RsvpSection'
import WishesSection from '@/components/sections/WishesSection'
import GiftSection from '@/components/sections/GiftSection'
import FooterSection from '@/components/sections/FooterSection'
import NarutoOrnament, { NarutoFloatingLeaves, NarutoCloudBackground } from '@/components/ui/NarutoOrnament'
import {
    KonohaLeaf,
    ShurikenDecoration,
    NinjaSilhouettes,
    NarutoCornerOrnaments,
    CloudPatternBackground
} from '@/components/ui/NarutoDecorations'

// Opening Cover Component with Naruto Theme
function OpeningCover({ onOpen, guestName }: { onOpen: () => void; guestName: string }) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-scroll-cream via-ivory to-cream flex flex-col items-center justify-center px-4 overflow-hidden"
        >
            {/* Cloud Background Pattern */}
            <NarutoCloudBackground />

            {/* Floating Konoha Leaves */}
            <NarutoFloatingLeaves />

            {/* Decorative Frame */}
            <NarutoOrnament variant="frame" />

            {/* Konoha leaf decorations on sides - hidden on mobile */}
            <div className="hidden md:block absolute left-8 bottom-1/4 opacity-20">
                <KonohaLeaf className="w-24 h-24 animate-float" />
            </div>
            <div className="hidden md:block absolute right-8 bottom-1/4 opacity-20 -scale-x-100">
                <KonohaLeaf className="w-24 h-24 animate-float [animation-delay:1s]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-md mx-auto">
                {/* Top Ornament */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6"
                >
                    <NarutoOrnament variant="divider" />
                </motion.div>

                {/* Bismillah */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-naruto-orange text-xl md:text-2xl mb-4"
                    style={{ fontFamily: 'serif' }}
                >
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                </motion.p>

                {/* Undangan Pernikahan */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6"
                >
                    <p className="text-brown/50 text-xs tracking-[0.4em] uppercase mb-2">
                        Undangan Pernikahan
                    </p>
                    <p className="text-brown/60 text-sm tracking-[0.3em] uppercase">
                        The Wedding Of
                    </p>
                </motion.div>

                {/* Couple Names with Naruto styling */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-4"
                >
                    <h1 className="font-serif text-5xl md:text-6xl text-naruto-orange mb-2 tracking-wide drop-shadow-lg">
                        Eko
                    </h1>
                    <div className="flex items-center justify-center gap-4 my-3">
                        <div className="w-12 h-px bg-naruto-orange/40" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                            <ShurikenDecoration className="w-8 h-8 text-naruto-orange" />
                        </motion.div>
                        <div className="w-12 h-px bg-naruto-orange/40" />
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl text-naruto-orange tracking-wide drop-shadow-lg">
                        Keke
                    </h1>
                </motion.div>

                {/* Kunai decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-center gap-6 mb-4"
                >
                    <NarutoOrnament variant="kunai" className="opacity-40 -rotate-12 h-10" />
                    <NarutoOrnament variant="kunai" className="opacity-40 rotate-12 -scale-x-100 h-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-6"
                >
                    <div className="inline-block px-8 py-3 border-2 border-naruto-orange/40 rounded-full bg-white/60 backdrop-blur-sm shadow-lg">
                        <p className="text-brown/80 dark:text-cream/80 text-sm md:text-base font-medium">
                            Sabtu, 28 Maret 2026
                        </p>
                    </div>
                </motion.div>

                {/* Guest Greeting with personalized name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mb-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-naruto-orange/20 shadow-lg"
                >
                    <p className="text-brown/60 dark:text-cream/60 text-xs tracking-wider mb-2">Kepada Yth.</p>
                    <p className="text-brown dark:text-cream font-medium text-xl mb-1 text-naruto-orange">
                        {guestName || 'Bapak/Ibu/Saudara/i'}
                    </p>
                    <p className="text-brown/50 dark:text-cream/50 text-xs">beserta keluarga</p>
                </motion.div>

                {/* Open Button with Ninja scroll style */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    onClick={onOpen}
                    className="px-12 py-4 text-base relative overflow-hidden group bg-gradient-to-r from-naruto-orange to-naruto-yellow text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Buka Undangan
                    </span>
                </motion.button>

                {/* Naruto quote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-brown/40 text-xs mt-6 italic"
                >
                    &ldquo;The bond between two people is the greatest power of all&rdquo;
                </motion.p>
            </div>

            {/* Bottom decorative line */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex items-center gap-2 text-naruto-orange/40">
                    <div className="w-8 h-px bg-current" />
                    <KonohaLeaf className="w-6 h-6" />
                    <div className="w-8 h-px bg-current" />
                </div>
            </motion.div>
        </motion.div>
    )
}

// Main page component wrapped in Suspense for useSearchParams
function HomeContent() {
    const searchParams = useSearchParams()
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Get guest name from URL parameter
    const guestName = searchParams.get('to') || ''

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <main className="min-h-screen">
            {/* Opening Cover */}
            <AnimatePresence>
                {!isOpen && <OpeningCover onOpen={() => setIsOpen(true)} guestName={guestName} />}
            </AnimatePresence>

            {isOpen && (
                <>
                    {/* Floating Konoha Leaves */}
                    <NarutoFloatingLeaves />

                    {/* Cloud Pattern Background */}
                    <CloudPatternBackground />

                    {/* Side Ninja Silhouettes */}
                    <NinjaSilhouettes />

                    {/* Corner Ornaments with Konoha leaves */}
                    <div className="fixed inset-0 pointer-events-none z-[5]">
                        <NarutoCornerOrnaments />
                    </div>

                    {/* Konoha leaf decorations on sides - hidden on mobile */}
                    <div className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 pointer-events-none z-[3] opacity-20">
                        <KonohaLeaf className="w-20 h-auto animate-float" />
                    </div>
                    <div className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 pointer-events-none z-[3] opacity-20 -scale-x-100">
                        <KonohaLeaf className="w-20 h-auto animate-float" />
                    </div>

                    <Navigation />
                    <CoupleSection />
                    <LoveStorySection />
                    <EventSection />
                    <DressCodeSection />
                    <LocationSection />
                    <GallerySection />
                    <VideoSection />
                    <PreweddingPhotosSection />
                    <HeroSection />
                    <RsvpSection />
                    <WishesSection />
                    <GiftSection />
                    <FooterSection />
                    <ThemeToggle />
                    <ShareButton guestName={guestName} />
                </>
            )}
        </main>
    )
}

// Export with Suspense wrapper
export default function Home() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-scroll-cream">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-naruto-orange/30 border-t-naruto-orange rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-brown/50 text-sm">Memuat undangan...</p>
                </div>
            </div>
        }>
            <HomeContent />
        </Suspense>
    )
}
