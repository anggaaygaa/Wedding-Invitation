'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import NarutoOrnament, { SealPatternBackground } from '../ui/NarutoOrnament'
import { ShurikenDecoration, FuinjutsuSeal, KunaiDecoration } from '../ui/NarutoDecorations'

interface EventCardProps {
    title: string
    subtitle: string
    date: string
    time: string
    location: string
    address: string
    delay?: number
}

function EventCard({ title, subtitle, date, time, location, address, delay = 0 }: EventCardProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const addToCalendar = () => {
        const startDate = '20260328T010000Z' // March 28, 2026 08:00 WIB = 01:00 UTC
        const endDate = '20260328T090000Z' // End roughly at 16:00 WIB
        const eventTitle = title === 'Akad Nikah'
            ? 'Akad Nikah Eko & Keke'
            : 'Resepsi Pernikahan Eko & Keke'

        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(address)}&details=${encodeURIComponent('Undangan Pernikahan Achmad Eko Wahyu Prasetyo & Keke Putri Yunindia')}`

        window.open(calendarUrl, '_blank')
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay }}
            className="relative bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-2xl border-2 border-naruto-orange/20 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:border-naruto-orange/40 group overflow-hidden"
        >
            {/* Mission Scroll Background Pattern */}
            <NarutoOrnament variant="missionScroll" />

            {/* Corner Shurikens */}
            <div className="absolute -top-3 -right-3 z-10">
                <ShurikenDecoration className="w-8 h-8 animate-spin-slow opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <div className="absolute -bottom-3 -left-3 z-10">
                <ShurikenDecoration className="w-6 h-6 animate-spin-slow opacity-20 group-hover:opacity-40 transition-opacity [animation-direction:reverse]" />
            </div>

            {/* Kunai decorations - sides */}
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 opacity-10 hidden md:block">
                <KunaiDecoration className="w-4 h-12 rotate-180" />
            </div>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 opacity-10 hidden md:block">
                <KunaiDecoration className="w-4 h-12" />
            </div>

            {/* Title - Mission Briefing Style */}
            <div className="text-center mb-6">
                <p className="text-naruto-orange/70 text-xs uppercase tracking-wider mb-1">{subtitle}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-naruto-orange mb-2 drop-shadow">
                    {title}
                </h3>
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-naruto-orange to-transparent mx-auto" />
            </div>

            {/* Details */}
            <div className="space-y-4">
                {/* Date */}
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-naruto-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-naruto-orange/20 transition-all group-hover:scale-105">
                        <Calendar size={22} className="text-naruto-orange" />
                    </div>
                    <div>
                        <p className="text-brown/60 dark:text-cream/60 text-xs uppercase tracking-wide">Tanggal Misi</p>
                        <p className="text-brown dark:text-cream font-medium">{date}</p>
                    </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-naruto-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-naruto-orange/20 transition-all group-hover:scale-105">
                        <Clock size={22} className="text-naruto-orange" />
                    </div>
                    <div>
                        <p className="text-brown/60 dark:text-cream/60 text-xs uppercase tracking-wide">Waktu</p>
                        <p className="text-brown dark:text-cream font-medium">{time}</p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-naruto-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-naruto-orange/20 transition-all group-hover:scale-105">
                        <MapPin size={22} className="text-naruto-orange" />
                    </div>
                    <div>
                        <p className="text-brown/60 dark:text-cream/60 text-xs uppercase tracking-wide">Lokasi</p>
                        <p className="text-brown dark:text-cream font-medium">{location}</p>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className="mt-6 p-4 bg-scroll-cream/50 dark:bg-dark-card/50 rounded-xl border border-naruto-orange/10">
                <p className="text-brown/70 dark:text-cream/70 text-sm text-center leading-relaxed">
                    {address}
                </p>
            </div>

            {/* Add to Calendar Button */}
            <button
                onClick={addToCalendar}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-naruto-orange to-naruto-yellow text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all hover:scale-[1.02] text-sm"
            >
                📅 Simpan ke Kalender
            </button>
        </motion.div>
    )
}

export default function EventSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="event" className="py-20 px-4 bg-white dark:bg-dark-bg relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-naruto-orange text-sm tracking-[0.2em] uppercase mb-2">
                        📜 Mission Briefing
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-brown dark:text-cream mb-4">
                        Waktu & Tempat
                    </h2>
                    <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />

                    <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto mt-6 text-sm md:text-base">
                        Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
                        Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.
                    </p>
                </motion.div>

                {/* Event Cards */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <EventCard
                        title="Akad Nikah"
                        subtitle="Main Mission"
                        date="Sabtu, 28 Maret 2026"
                        time="08.00 WIB - Selesai"
                        location="Kediaman Mempelai Wanita"
                        address="Dusun Prokimal 183 RT 001 RW 012, Desa Gejugjati, Kecamatan Lekok, Kabupaten Pasuruan (Selatan Balai RW)"
                        delay={0.2}
                    />

                    <EventCard
                        title="Resepsi"
                        subtitle="Celebration Quest"
                        date="Sabtu, 28 Maret 2026"
                        time="12.00 WIB - Selesai"
                        location="Kediaman Mempelai Wanita"
                        address="Dusun Prokimal 183 RT 001 RW 012, Desa Gejugjati, Kecamatan Lekok, Kabupaten Pasuruan (Selatan Balai RW)"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    )
}
