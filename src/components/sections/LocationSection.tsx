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
                    className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gold/5 border border-gold/10"
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
                    <div className="p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                                <MapPin size={24} className="text-gold" />
                            </div>
                            <div>
                                <h4 className="text-brown font-semibold mb-1">
                                    Kediaman Mempelai Wanita
                                </h4>
                                <p className="text-brown/70 text-sm leading-relaxed">
                                    {address}
                                </p>
                                <p className="text-gold text-sm mt-2">
                                    (Selatan Balai RW)
                                </p>
                            </div>
                        </div>

                        {/* Direction Button */}
                        <button
                            onClick={openMaps}
                            className="w-full btn-primary flex items-center justify-center gap-2"
                        >
                            <Navigation size={18} />
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
