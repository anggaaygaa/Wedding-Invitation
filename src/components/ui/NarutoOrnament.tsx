'use client'

// Naruto Anime Ornament Components
// Ornamen bertema Naruto untuk undangan pernikahan

import { motion } from 'framer-motion'

interface OrnamentProps {
    variant?: 'frame' | 'divider' | 'corner' | 'kunai' | 'top' | 'bottom'
    className?: string
}

export default function NarutoOrnament({ variant = 'divider', className = '' }: OrnamentProps) {
    switch (variant) {
        case 'frame':
            return <ScrollFrame className={className} />
        case 'divider':
            return <ShurikenDivider className={className} />
        case 'corner':
            return <LeafCorner className={className} />
        case 'kunai':
            return <KunaiSymbol className={className} />
        case 'top':
            return <TopOrnament className={className} />
        case 'bottom':
            return <BottomOrnament className={className} />
        default:
            return <ShurikenDivider className={className} />
    }
}

// Scroll-style Frame
function ScrollFrame({ className = '' }: { className?: string }) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            {/* Corner decorations */}
            <svg className="absolute top-0 left-0 w-24 h-24 text-naruto-orange" viewBox="0 0 100 100">
                <path
                    d="M5 95 L5 30 Q5 5, 30 5 L95 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.4"
                />
                <circle cx="30" cy="30" r="8" fill="currentColor" fillOpacity="0.3" />
                <path d="M20 20 L25 35 L20 30 L15 35 Z" fill="currentColor" fillOpacity="0.5" />
            </svg>
            <svg className="absolute top-0 right-0 w-24 h-24 text-naruto-orange -scale-x-100" viewBox="0 0 100 100">
                <path
                    d="M5 95 L5 30 Q5 5, 30 5 L95 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.4"
                />
                <circle cx="30" cy="30" r="8" fill="currentColor" fillOpacity="0.3" />
                <path d="M20 20 L25 35 L20 30 L15 35 Z" fill="currentColor" fillOpacity="0.5" />
            </svg>
            <svg className="absolute bottom-0 left-0 w-24 h-24 text-naruto-orange -scale-y-100" viewBox="0 0 100 100">
                <path
                    d="M5 95 L5 30 Q5 5, 30 5 L95 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.4"
                />
                <circle cx="30" cy="30" r="8" fill="currentColor" fillOpacity="0.3" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-24 h-24 text-naruto-orange scale-[-1]" viewBox="0 0 100 100">
                <path
                    d="M5 95 L5 30 Q5 5, 30 5 L95 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.4"
                />
                <circle cx="30" cy="30" r="8" fill="currentColor" fillOpacity="0.3" />
            </svg>
        </div>
    )
}

// Shuriken Divider
function ShurikenDivider({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center gap-3 py-2 ${className}`}>
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-naruto-orange/50" />
            {/* Shuriken */}
            <svg viewBox="0 0 40 40" className="w-6 h-6 text-naruto-orange animate-spin-slow">
                <circle cx="20" cy="20" r="4" fill="currentColor" />
                <path d="M20 5 L22 16 L20 20 L18 16 Z" fill="currentColor" fillOpacity="0.6" />
                <path d="M35 20 L24 22 L20 20 L24 18 Z" fill="currentColor" fillOpacity="0.6" />
                <path d="M20 35 L18 24 L20 20 L22 24 Z" fill="currentColor" fillOpacity="0.6" />
                <path d="M5 20 L16 18 L20 20 L16 22 Z" fill="currentColor" fillOpacity="0.6" />
            </svg>
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-naruto-orange/50" />
        </div>
    )
}

// Leaf Corner Ornament
function LeafCorner({ className = '' }: { className?: string }) {
    return (
        <svg viewBox="0 0 50 50" className={`text-konoha-green ${className}`}>
            <path
                d="M5 45 Q5 20, 25 10 Q35 5, 45 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
            />
            {/* Konoha spiral */}
            <circle cx="25" cy="25" r="10" fill="currentColor" fillOpacity="0.2" />
            <path
                d="M25 18 Q30 20, 32 25 Q30 30, 25 32 Q20 30, 18 25 Q20 20, 25 18"
                fill="currentColor"
                fillOpacity="0.4"
            />
        </svg>
    )
}

// Kunai Symbol
function KunaiSymbol({ className = '' }: { className?: string }) {
    return (
        <svg viewBox="0 0 20 60" className={`text-naruto-orange ${className}`}>
            {/* Blade */}
            <path
                d="M10 5 L16 25 L10 22 L4 25 Z"
                fill="currentColor"
                fillOpacity="0.4"
                stroke="currentColor"
                strokeWidth="0.5"
            />
            {/* Handle */}
            <rect x="8" y="25" width="4" height="20" rx="1" fill="currentColor" fillOpacity="0.5" />
            {/* Ring */}
            <circle cx="10" cy="52" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        </svg>
    )
}

// Top Ornament Banner
function TopOrnament({ className = '' }: { className?: string }) {
    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <svg viewBox="0 0 400 40" className="w-full h-auto text-naruto-orange" preserveAspectRatio="xMidYMid slice">
                {/* Gradient banner */}
                <defs>
                    <linearGradient id="topBannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                        <stop offset="30%" stopColor="currentColor" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
                        <stop offset="70%" stopColor="currentColor" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <rect x="0" y="35" width="400" height="3" fill="url(#topBannerGrad)" />
                {/* Center emblem */}
                <circle cx="200" cy="20" r="15" fill="currentColor" fillOpacity="0.2" />
                <circle cx="200" cy="20" r="8" fill="currentColor" fillOpacity="0.4" />
                {/* Side decorations */}
                <path d="M160 20 L180 20" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <path d="M220 20 L240 20" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            </svg>
        </div>
    )
}

// Bottom Ornament Wave
function BottomOrnament({ className = '' }: { className?: string }) {
    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <svg viewBox="0 0 400 50" className="w-full h-auto text-naruto-orange" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="bottomWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {/* Wave pattern */}
                <path
                    d="M0 25 Q50 10, 100 25 Q150 40, 200 25 Q250 10, 300 25 Q350 40, 400 25"
                    stroke="url(#bottomWaveGrad)"
                    strokeWidth="2"
                    fill="none"
                />
                <rect x="0" y="5" width="400" height="2" fill="url(#bottomWaveGrad)" />
            </svg>
        </div>
    )
}

// Floating Leaves Background (like Melati but with Konoha leaves)
export function NarutoFloatingLeaves() {
    const leaves = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 8,
    }))

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    className="absolute"
                    initial={{ y: '-10%', x: `${leaf.x}%`, rotate: 0, opacity: 0 }}
                    animate={{
                        y: '110%',
                        rotate: 720,
                        opacity: [0, 0.6, 0.6, 0],
                    }}
                    transition={{
                        duration: leaf.duration,
                        delay: leaf.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <svg viewBox="0 0 30 30" className="w-4 h-4 md:w-6 md:h-6 text-konoha-green">
                        <path
                            d="M15 5 Q22 8, 25 15 Q22 22, 15 25 Q8 22, 5 15 Q8 8, 15 5"
                            fill="currentColor"
                            fillOpacity="0.5"
                        />
                        <path d="M15 8 L15 22" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
                    </svg>
                </motion.div>
            ))}
        </div>
    )
}

// Cloud Background Pattern
export function NarutoCloudBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="narutoCloudPattern" x="0" y="0" width="150" height="100" patternUnits="userSpaceOnUse">
                        <path
                            d="M30 50 Q45 35, 70 40 Q95 30, 110 50 Q120 65, 100 75 Q75 85, 50 75 Q25 80, 20 60 Q15 50, 30 50"
                            fill="#FF6B35"
                            fillOpacity="0.08"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#narutoCloudPattern)" />
            </svg>
        </div>
    )
}
