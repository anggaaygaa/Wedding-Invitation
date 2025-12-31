'use client'

import { Heart } from 'lucide-react'
import JavaneseOrnament from '../ui/JavaneseOrnament'

export default function FooterSection() {
    return (
        <footer className="py-16 px-4 bg-brown text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 batik-overlay" style={{ filter: 'invert(1)' }} />
            </div>

            <div className="max-w-2xl mx-auto text-center relative z-10">
                {/* Closing Message */}
                <div className="mb-8">
                    <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
                        Terima Kasih
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl mb-6">
                        Eko & Keke
                    </h2>

                    <p className="text-white/70 leading-relaxed mb-8">
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
                        kepada kami.
                    </p>

                    <p className="text-white/70 italic">
                        Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
                    </p>
                </div>

                {/* Ornament */}
                <div className="flex justify-center mb-8">
                    <JavaneseOrnament variant="divider" className="opacity-50" />
                </div>

                {/* Couple Names */}
                <div className="mb-8">
                    <p className="font-serif text-xl text-gold">
                        Kami yang Berbahagia
                    </p>
                    <p className="text-white/80 mt-2">
                        Achmad Eko Wahyu Prasetyo & Keke Putri Yunindia
                    </p>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-white/40 text-sm flex items-center justify-center gap-1">
                        Made with <Heart size={14} className="text-red-400 fill-red-400" /> by Wedding Team
                    </p>
                    <p className="text-white/30 text-xs mt-2">
                        © 2026 Eko & Keke Wedding
                    </p>
                </div>
            </div>
        </footer>
    )
}
