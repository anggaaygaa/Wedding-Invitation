'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { X, Camera, Heart } from 'lucide-react'
import Image from 'next/image'
import NarutoOrnament, { NarutoCloudBackground } from '../ui/NarutoOrnament'
import { getGalleryPhotos, GalleryPhoto } from '@/lib/supabase'

export default function PreweddingPhotosSection() {
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
            <section id="prewedding-photos" className="py-16 md:py-20 px-4 md:px-6 bg-cream dark:bg-dark-bg relative overflow-hidden">
                {/* Top Ornament */}
                <div className="absolute top-0 left-0 right-0">
                    <NarutoOrnament variant="top" />
                </div>

                {/* Naruto Cloud Pattern Background */}
                <div className="absolute inset-0 opacity-30 dark:opacity-20">
                    <NarutoCloudBackground />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Section Title */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8 md:mb-10"
                    >
                        <div className="w-14 h-14 rounded-full bg-naruto-orange/10 flex items-center justify-center mx-auto mb-4">
                            <Camera size={24} className="text-naruto-orange" />
                        </div>

                        <p className="text-naruto-orange text-sm tracking-[0.3em] uppercase mb-3">
                            📷 Galeri Foto
                        </p>
                        <h2 className="font-serif text-2xl md:text-3xl text-brown dark:text-cream mb-3">
                            Prewedding Photos
                        </h2>
                        <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />

                        <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto mt-6 text-sm md:text-base italic">
                            &ldquo;When people are protecting something truly special to them, they truly can become as strong as they can be.&rdquo;
                        </p>
                        <p className="text-naruto-orange/50 text-xs mt-2">
                            - Naruto Uzumaki
                        </p>
                    </motion.div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin w-8 h-8 border-2 border-naruto-orange border-t-transparent rounded-full" />
                        </div>
                    )}

                    {/* Photo Grid - Masonry Style */}
                    {!loading && photos.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                            {photos.map((photo, index) => {
                                // Vary the aspect ratio for visual interest
                                const isLarge = index === 0 || index === 5
                                const isTall = index === 2 || index === 7

                                return (
                                    <motion.div
                                        key={photo.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: index * 0.08 }}
                                        className={`relative rounded-xl overflow-hidden cursor-pointer group border border-naruto-orange/20 dark:border-naruto-orange/30 shadow-sm hover:shadow-lg hover:shadow-naruto-orange/10 transition-all ${isLarge ? 'col-span-2 row-span-2 aspect-square' :
                                            isTall ? 'row-span-2 aspect-[3/4]' :
                                                'aspect-square'
                                            }`}
                                        onClick={() => setSelectedImage(photo)}
                                    >
                                        {imageErrors[photo.id || ''] ? (
                                            // Placeholder when image fails to load
                                            <div className="absolute inset-0 bg-gradient-to-br from-cream to-white dark:from-dark-surface dark:to-dark-card flex flex-col items-center justify-center">
                                                <Camera size={32} className="text-naruto-orange/30 mb-2" />
                                                <p className="text-brown/40 dark:text-cream/40 text-xs">Foto {index + 1}</p>
                                            </div>
                                        ) : (
                                            // Actual image with gradient overlay
                                            <>
                                                <Image
                                                    src={photo.image_url}
                                                    alt={photo.alt_text}
                                                    fill
                                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    onError={() => handleImageError(photo.id || '')}
                                                />
                                                {/* Elegant overlay on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </>
                                        )}

                                        {/* Hover Overlay with icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-dark-surface/90 flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                                <Heart size={20} className="text-naruto-orange" />
                                            </div>
                                        </div>

                                        {/* Photo number badge */}
                                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-naruto-orange/80 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                            {index + 1}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && photos.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16 bg-white/50 dark:bg-dark-surface/50 rounded-2xl border border-naruto-orange/20"
                        >
                            <Camera size={48} className="text-naruto-orange/30 mx-auto mb-4" />
                            <p className="text-brown/50 dark:text-cream/50 mb-2">Foto prewedding akan ditambahkan</p>
                            <p className="text-brown/30 dark:text-cream/30 text-sm">Coming Soon</p>
                        </motion.div>
                    )}

                    {/* Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center text-brown/40 dark:text-cream/40 text-xs mt-8 italic"
                    >
                        * Foto dikelola secara dinamis dari database
                    </motion.p>
                </div>

                {/* Bottom Ornament */}
                <div className="absolute bottom-0 left-0 right-0">
                    <NarutoOrnament variant="bottom" />
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                    >
                        <X size={24} />
                    </button>

                    {/* Image counter */}
                    <div className="absolute top-4 left-4 text-white/70 text-sm">
                        {photos.findIndex(p => p.id === selectedImage.id) + 1} / {photos.length}
                    </div>

                    <div className="relative max-w-5xl w-full h-[85vh]" onClick={e => e.stopPropagation()}>
                        {imageErrors[selectedImage.id || ''] ? (
                            <div className="w-full h-full bg-cream dark:bg-dark-surface rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <Camera size={48} className="text-naruto-orange/30 mx-auto mb-4" />
                                    <p className="text-brown/50 dark:text-cream/50">Foto tidak dapat ditampilkan</p>
                                </div>
                            </div>
                        ) : (
                            <Image
                                src={selectedImage.image_url}
                                alt={selectedImage.alt_text}
                                fill
                                className="object-contain"
                                onError={() => handleImageError(selectedImage.id || '')}
                            />
                        )}
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full">
                        {selectedImage.alt_text}
                    </div>
                </motion.div>
            )}
        </>
    )
}
