'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation } from 'lucide-react'
import NarutoOrnament from '../ui/NarutoOrnament'

export default function LocationSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const address = "Dusun Prokimal 183 RT 001 RW 012, Desa Gejugjati, Kecamatan Lekok, Kabupaten Pasuruan"

    // Google Maps embed URL (can be updated with actual coordinates)
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31624.956762037847!2d112.9!3d-7.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d5c9f4a2ef51%3A0x4027a76e352e930!2sLekok%2C%20Pasuruan%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1"

    const openMaps = () => {
        // Open Google Maps with the address
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
        window.open(mapsUrl, '_blank')
    }

    return (
        <section id="location" className="py-16 md:py-20 px-4 md:px-6 bg-ivory relative">
            {/* Top Ornament */}
            <div className="absolute top-0 left-0 right-0">
                <NarutoOrnament variant="top" />
            </div>

            <div className="max-w-3xl mx-auto">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-10"
                >
                    <p className="text-naruto-orange text-sm tracking-[0.2em] uppercase mb-2">
                        📍 Lokasi
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-brown dark:text-cream mb-3">
                        Petunjuk Arah
                    </h2>
                    <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />
                </motion.div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg border border-naruto-orange/10"
                >
                    {/* Map */}
                    <div className="relative h-48 md:h-64 lg:h-72 bg-cream">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Acara"
                        />
                    </div>

                    {/* Address Info */}
                    <div className="p-5 md:p-6">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-naruto-orange/10 flex items-center justify-center flex-shrink-0">
                                <MapPin size={20} className="text-naruto-orange" />
                            </div>
                            <div>
                                <h4 className="text-brown dark:text-cream font-semibold mb-1 text-sm">
                                    Kediaman Mempelai Wanita
                                </h4>
                                <p className="text-brown/70 dark:text-cream/70 text-sm leading-relaxed">
                                    {address}
                                </p>
                                <p className="text-naruto-orange text-xs mt-1">
                                    (Selatan Balai RW)
                                </p>
                            </div>
                        </div>

                        {/* Direction Button */}
                        <button
                            onClick={openMaps}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-naruto-orange to-naruto-yellow text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all hover:scale-[1.02] text-sm"
                        >
                            <Navigation size={16} />
                            Buka di Google Maps
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Ornament */}
            <div className="absolute bottom-0 left-0 right-0">
                <NarutoOrnament variant="bottom" />
            </div>
        </section>
    )
}
