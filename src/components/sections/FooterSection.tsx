'use client'

import { Heart } from 'lucide-react'
import NarutoOrnament from '../ui/NarutoOrnament'
import { KonohaLeaf } from '../ui/NarutoDecorations'

export default function FooterSection() {
    return (
        <footer className="py-16 px-4 bg-uchiha-navy text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="footerCloudPattern" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
                            <path
                                d="M20 40 Q35 25, 55 32 Q75 22, 90 38 Q100 50, 85 60 Q65 70, 45 62 Q25 72, 18 55 Q10 45, 20 40"
                                fill="#FF6B35"
                                fillOpacity="0.3"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footerCloudPattern)" />
                </svg>
            </div>

            <div className="max-w-2xl mx-auto text-center relative z-10">
                {/* Closing Message */}
                <div className="mb-8">
                    <p className="text-naruto-orange text-sm tracking-[0.2em] uppercase mb-4">
                        ありがとう • Terima Kasih
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl mb-6 text-naruto-yellow">
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
                    <NarutoOrnament variant="divider" className="opacity-50" />
                </div>

                {/* Couple Names */}
                <div className="mb-8">
                    <p className="font-serif text-xl text-naruto-orange">
                        Kami yang Berbahagia
                    </p>
                    <p className="text-white/80 mt-2">
                        Achmad Eko Wahyu Prasetyo & Keke Putri Yunindia
                    </p>
                </div>

                {/* Naruto Quote */}
                <div className="mb-8 px-6 py-4 bg-white/5 rounded-xl border border-naruto-orange/20">
                    <p className="text-white/60 italic text-sm">
                        &ldquo;I&apos;m not gonna run away and I never go back on my word, that is my ninja way!&rdquo;
                    </p>
                    <p className="text-naruto-orange/60 text-xs mt-2">- Naruto Uzumaki</p>
                </div>

                {/* Konoha Leaf decoration */}
                <div className="flex justify-center mb-6">
                    <KonohaLeaf className="w-12 h-12 text-konoha-green opacity-40" />
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-white/40 text-sm flex items-center justify-center gap-1">
                        Made with <Heart size={14} className="text-sharingan-red fill-sharingan-red" /> & Ninja Spirit
                    </p>
                    <p className="text-white/30 text-xs mt-2">
                        © 2026 Eko & Keke Wedding • Dattebayo! 🍥
                    </p>
                </div>
            </div>
        </footer>
    )
}
