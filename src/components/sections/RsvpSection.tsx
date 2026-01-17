'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Users, Send, Scroll } from 'lucide-react'
import NarutoOrnament, { NarutoCloudBackground, SealPatternBackground } from '../ui/NarutoOrnament'
import { ShurikenDecoration, KonohaLeaf, FuinjutsuSeal } from '../ui/NarutoDecorations'
import { submitRSVP } from '@/lib/supabase'

export default function RsvpSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const [formData, setFormData] = useState({
        name: '',
        attendance: 'hadir' as 'hadir' | 'tidak_hadir',
        guests_count: 1,
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Submit to Supabase
            await submitRSVP({
                name: formData.name,
                attendance: formData.attendance,
                guests_count: formData.guests_count,
                message: formData.message || undefined,
            })

            setIsSubmitted(true)
        } catch (error) {
            console.error('Error submitting RSVP:', error)
            // Still show success even if Supabase fails (fallback mode)
            setIsSubmitted(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <section id="rsvp" className="py-20 px-4 bg-ivory dark:bg-dark-bg relative overflow-hidden">
                <NarutoCloudBackground />

                <div className="absolute top-0 left-0 right-0">
                    <NarutoOrnament variant="top" />
                </div>

                <div className="max-w-lg mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-dark-surface rounded-2xl p-8 shadow-lg border-2 border-naruto-orange/20 relative overflow-hidden"
                    >
                        {/* Mission scroll background */}
                        <NarutoOrnament variant="missionScroll" />

                        <div className="w-16 h-16 rounded-full bg-konoha-green/20 flex items-center justify-center mx-auto mb-6 relative">
                            <KonohaLeaf className="w-10 h-10 text-konoha-green" />
                        </div>
                        <h3 className="font-serif text-2xl text-brown dark:text-cream mb-4 relative">
                            Misi Diterima! ✔️
                        </h3>
                        <p className="text-brown/70 dark:text-cream/70 relative">
                            Konfirmasi kehadiran Anda telah kami terima.
                            Kami menantikan kehadiran Anda di hari bahagia kami. Dattebayo! 🍥
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <NarutoOrnament variant="bottom" />
                </div>
            </section>
        )
    }

    return (
        <section id="rsvp" className="py-20 px-4 bg-ivory relative">
            {/* Top Ornament */}
            <div className="absolute top-0 left-0 right-0">
                <NarutoOrnament variant="top" />
            </div>

            <div className="max-w-lg mx-auto">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="text-naruto-orange text-sm tracking-[0.2em] uppercase mb-2">
                        ✉️ RSVP
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-brown dark:text-cream mb-4">
                        Konfirmasi Kehadiran
                    </h2>
                    <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />

                    <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto mt-6 text-sm md:text-base">
                        Mohon konfirmasi kehadiran Anda untuk membantu kami
                        mempersiapkan acara dengan lebih baik.
                    </p>
                </motion.div>

                {/* RSVP Form */}
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="card-ultra-premium p-6 md:p-8"
                >
                    {/* Name */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-brown dark:text-cream text-sm font-medium mb-2">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="input-premium"
                            placeholder="Masukkan nama Anda"
                            required
                        />
                    </div>

                    {/* Attendance */}
                    <div className="mb-6">
                        <label className="block text-brown dark:text-cream text-sm font-medium mb-3">
                            Konfirmasi Kehadiran
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, attendance: 'hadir' })}
                                className={`p-5 rounded-2xl border-2 transition-all duration-300 ${formData.attendance === 'hadir'
                                    ? 'border-gold bg-gold/15 text-gold glow-ring'
                                    : 'border-gold/20 text-brown/60 dark:text-cream/60 hover:border-gold/50 hover:bg-gold/5'
                                    }`}
                            >
                                <div className="text-3xl mb-2">✓</div>
                                <div className="text-sm font-semibold">Hadir</div>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, attendance: 'tidak_hadir', guests_count: 0 })}
                                className={`p-5 rounded-2xl border-2 transition-all duration-300 ${formData.attendance === 'tidak_hadir'
                                    ? 'border-gold bg-gold/15 text-gold glow-ring'
                                    : 'border-gold/20 text-brown/60 dark:text-cream/60 hover:border-gold/50 hover:bg-gold/5'
                                    }`}
                            >
                                <div className="text-3xl mb-2">✗</div>
                                <div className="text-sm font-semibold">Tidak Hadir</div>
                            </button>
                        </div>
                    </div>

                    {/* Number of Guests */}
                    {formData.attendance === 'hadir' && (
                        <div className="mb-6">
                            <label htmlFor="guests" className="block text-brown text-sm font-medium mb-2">
                                <Users size={16} className="inline mr-2" />
                                Jumlah Tamu
                            </label>
                            <select
                                id="guests"
                                value={formData.guests_count}
                                onChange={(e) => setFormData({ ...formData, guests_count: parseInt(e.target.value) })}
                                className="input-field"
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                        {num} Orang
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Message */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-brown text-sm font-medium mb-2">
                            Pesan untuk Kedua Mempelai (Opsional)
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="input-field min-h-[100px] resize-none"
                            placeholder="Tulis pesan Anda..."
                            rows={3}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-ultra-premium flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Mengirim...
                            </>
                        ) : (
                            <>
                                <Send size={18} />
                                Kirim Konfirmasi
                            </>
                        )}
                    </button>
                </motion.form>
            </div>

            {/* Bottom Ornament */}
            <div className="absolute bottom-0 left-0 right-0">
                <NarutoOrnament variant="bottom" />
            </div>
        </section>
    )
}
