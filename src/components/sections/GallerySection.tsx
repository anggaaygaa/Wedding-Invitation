'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { X, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import NarutoOrnament, { NarutoCloudBackground, SealPatternBackground } from '../ui/NarutoOrnament'
import { ShurikenDecoration, KonohaLeaf, SharinganPattern, FuinjutsuSeal } from '../ui/NarutoDecorations'
import { getGalleryPhotos, GalleryPhoto } from '@/lib/supabase'

export default function GallerySection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null)
    const [photos, setPhotos] = useState<GalleryPhoto[]>([])
    const [loading, setLoading] = useState(true)
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

    useEffect(() => {
        async function fetchPhotos() {
            try {
                const data = await getGalleryPhotos()
                setPhotos(data)
            } catch (error) {
                console.error('Error fetching photos:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchPhotos()
    }, [])

    const handleImageError = (photoId: string) => {
        setImageErrors(prev => ({ ...prev, [photoId]: true }))
    }

    return (
        <>
            <section id="gallery" className="py-16 md:py-20 px-4 md:px-6 bg-white dark:bg-dark-bg relative overflow-hidden">
                {/* Subtle cloud background */}
                <NarutoCloudBackground />

                {/* Corner decorations */}
                <div className="absolute top-8 left-8 opacity-15 hidden lg:block">
                    <SharinganPattern className="w-20 h-20 animate-spin-slow" />
                </div>
                <div className="absolute top-8 right-8 opacity-15 hidden lg:block">
                    <SharinganPattern className="w-20 h-20 animate-spin-slow" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Section Title */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8 md:mb-10"
                    >
                        <div className="flex justify-center mb-4">
                            <ShurikenDecoration className="w-10 h-10 opacity-40 animate-spin-slow" />
                        </div>
                        <p className="text-naruto-orange text-sm tracking-[0.2em] uppercase mb-2">
                            📸 Galeri Misi
                        </p>
                        <h2 className="font-serif text-2xl md:text-3xl text-brown dark:text-cream mb-3">
                            Momen Bahagia
                        </h2>
                        <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />

                        <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto mt-6 text-sm md:text-base">
                            Kumpulan momen indah perjalanan cinta kami - dari genin hingga chunin 🍥
                        </p>
                    </motion.div>

                    {/* Rasengan-style Loading State */}
                    {loading && (
                        <div className="flex flex-col justify-center items-center py-12">
                            <div className="relative w-16 h-16">
                                <div className="absolute inset-0 rounded-full border-4 border-chakra-blue/30 animate-spin" />
                                <div className="absolute inset-2 rounded-full border-4 border-chakra-blue/50 animate-spin [animation-direction:reverse]" />
                                <div className="absolute inset-4 rounded-full bg-chakra-blue/60 animate-pulse" />
                            </div>
                            <p className="text-brown/50 dark:text-cream/50 text-sm mt-4">Mengumpulkan momen...</p>
                        </div>
                    )}

                    {/* Gallery Grid */}
                    {!loading && photos.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {photos.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border-2 border-naruto-orange/10 hover:border-naruto-orange/40 transition-colors"
                                    onClick={() => setSelectedImage(photo)}
                                >
                                    {imageErrors[photo.id || ''] ? (
                                        // Placeholder with Konoha leaf when image fails
                                        <div className="absolute inset-0 bg-gradient-to-br from-cream to-white dark:from-dark-surface dark:to-dark-card flex items-center justify-center">
                                            <div className="text-center">
                                                <KonohaLeaf className="w-12 h-12 text-konoha-green/30 mx-auto mb-2" />
                                                <p className="text-brown/40 dark:text-cream/40 text-xs">Foto {index + 1}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        // Actual image
                                        <Image
                                            src={photo.image_url}
                                            alt={photo.alt_text}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={() => handleImageError(photo.id || '')}
                                        />
                                    )}

                                    {/* Naruto-themed Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-naruto-orange/50 via-naruto-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="relative">
                                            <ShurikenDecoration className="w-12 h-12 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500" />
                                        </div>
                                    </div>

                                    {/* Corner decorations that appear on hover */}
                                    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                                        <KonohaLeaf className="w-4 h-4 text-konoha-green" />
                                    </div>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                                        <KonohaLeaf className="w-4 h-4 text-konoha-green -scale-x-100" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && photos.length === 0 && (
                        <div className="text-center py-12 bg-white/50 dark:bg-dark-surface/50 rounded-2xl border border-naruto-orange/20">
                            <ImageIcon size={48} className="text-naruto-orange/30 mx-auto mb-4" />
                            <p className="text-brown/50 dark:text-cream/50">Belum ada foto</p>
                        </div>
                    )}


                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <div className="relative max-w-4xl w-full h-[80vh]">
                        {imageErrors[selectedImage.id || ''] ? (
                            <div className="w-full h-full bg-cream rounded-lg flex items-center justify-center">
                                <p className="text-brown/50">Foto tidak dapat ditampilkan</p>
                            </div>
                        ) : (
                            <Image
                                src={selectedImage.image_url}
                                alt={selectedImage.alt_text}
                                fill
                                className="object-contain rounded-lg"
                                onError={() => handleImageError(selectedImage.id || '')}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
