'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Pause, Youtube } from 'lucide-react'
import NarutoOrnament from '../ui/NarutoOrnament'

// Replace with actual YouTube video ID when available
const YOUTUBE_VIDEO_ID = '' // Example: 'dQw4w9WgXcQ'

export default function VideoSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [isPlaying, setIsPlaying] = useState(false)

    const hasVideo = Boolean(YOUTUBE_VIDEO_ID)

    return (
        <section id="video" className="py-20 px-4 bg-cream dark:bg-dark-bg relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="text-naruto-orange text-sm tracking-[0.3em] uppercase mb-3">
                        🎬 Video
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-brown dark:text-cream mb-4">
                        Prewedding Video
                    </h2>

                    <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl border border-naruto-orange/20 dark:border-naruto-orange/30"
                >
                    {hasVideo ? (
                        /* YouTube Embed */
                        <div className="relative aspect-video bg-black">
                            {!isPlaying ? (
                                /* Thumbnail with Play Button */
                                <div
                                    className="absolute inset-0 cursor-pointer group"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    {/* YouTube Thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                                        alt="Video Prewedding"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-naruto-orange/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-naruto-orange/30">
                                            <Play size={36} className="text-white ml-1" fill="white" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* YouTube iFrame */
                                <iframe
                                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                                    title="Prewedding Video"
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>
                    ) : (
                        /* Placeholder when no video */
                        <div className="aspect-video bg-gradient-to-br from-cream to-white dark:from-dark-surface dark:to-dark-card flex flex-col items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-naruto-orange/10 flex items-center justify-center mb-4">
                                <Youtube size={40} className="text-naruto-orange/50" />
                            </div>
                            <p className="text-brown/50 dark:text-cream/50 text-lg font-serif mb-2">Video Prewedding</p>
                            <p className="text-brown/30 dark:text-cream/30 text-sm">Coming Soon</p>
                            <p className="text-brown/20 dark:text-cream/20 text-xs mt-4 italic">
                                * Video akan ditambahkan
                            </p>
                        </div>
                    )}
                </motion.div>

                {/* Caption */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-brown/50 dark:text-cream/50 text-sm mt-6 italic"
                >
                    Momen indah perjalanan cinta kami
                </motion.p>
            </div>
        </section>
    )
}
