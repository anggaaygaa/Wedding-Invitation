'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { X, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import NarutoOrnament from '../ui/NarutoOrnament'
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
            <section id="gallery" className="py-20 px-4 bg-white dark:bg-dark-bg relative">
                <div className="max-w-5xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <p className="text-naruto-orange text-sm tracking-[0.2em] uppercase mb-2">
                            📸 Galeri
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-brown dark:text-cream mb-4">
                            Momen Bahagia
                        </h2>
                        <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />

                        <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto mt-6 text-sm md:text-base">
                            Kumpulan momen indah perjalanan cinta kami
                        </p>
                    </motion.div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin w-8 h-8 border-2 border-naruto-orange border-t-transparent rounded-full" />
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
                                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-naruto-orange/10"
                                    onClick={() => setSelectedImage(photo)}
                                >
                                    {imageErrors[photo.id || ''] ? (
                                        // Placeholder when image fails to load
                                        <div className="absolute inset-0 bg-gradient-to-br from-cream to-ivory dark:from-dark-surface dark:to-dark-card flex items-center justify-center">
                                            <div className="text-center">
                                                <ImageIcon size={48} className="text-naruto-orange/30 mx-auto mb-2" />
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

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-naruto-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                                            <span className="text-naruto-orange text-xl">+</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && photos.length === 0 && (
                        <div className="text-center py-12">
                            <ImageIcon size={48} className="text-gold/30 mx-auto mb-4" />
                            <p className="text-brown/50">Belum ada foto</p>
                        </div>
                    )}

                    {/* Database Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center mt-8"
                    >
                        <p className="text-brown/40 text-xs italic">
                            * Foto diambil dari database dan dapat dikelola secara dinamis
                        </p>
                    </motion.div>
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
