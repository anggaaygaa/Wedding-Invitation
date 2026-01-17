'use client'

// Naruto Anime Ornament Components - Enhanced Version
// Ornamen bertema Naruto untuk undangan pernikahan

import { motion } from 'framer-motion'

interface OrnamentProps {
    variant?: 'frame' | 'divider' | 'corner' | 'kunai' | 'top' | 'bottom' | 'villageGate' | 'headbandDivider' | 'fireKanji' | 'scrollBanner' | 'missionScroll'
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
        case 'villageGate':
            return <VillageGateOrnament className={className} />
        case 'headbandDivider':
            return <HeadbandDivider className={className} />
        case 'fireKanji':
            return <FireKanjiDecoration className={className} />
        case 'scrollBanner':
            return <ScrollBanner className={className} />
        case 'missionScroll':
            return <MissionScroll className={className} />
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

// Village Gate Ornament - Konoha Gate Style
function VillageGateOrnament({ className = '' }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 300 100" className="w-full h-auto text-naruto-orange">
                {/* Gate pillars */}
                <rect x="20" y="30" width="20" height="70" fill="currentColor" fillOpacity="0.3" />
                <rect x="260" y="30" width="20" height="70" fill="currentColor" fillOpacity="0.3" />

                {/* Gate top arch */}
                <path
                    d="M20 30 Q150 -20, 280 30"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    opacity="0.5"
                />

                {/* Konoha symbol in center */}
                <circle cx="150" cy="25" r="20" fill="currentColor" fillOpacity="0.2" />
                <path
                    d="M150 10 Q160 15, 165 25 Q160 35, 150 40 Q140 35, 135 25 Q140 15, 150 10"
                    fill="#2D5A27"
                    fillOpacity="0.6"
                />

                {/* Gate decorative lines */}
                <path d="M40 35 L40 95" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                <path d="M260 35 L260 95" stroke="currentColor" strokeWidth="2" opacity="0.4" />

                {/* Top banner */}
                <rect x="60" y="20" width="180" height="15" rx="2" fill="currentColor" fillOpacity="0.2" />

                {/* Side fire symbols */}
                <text x="70" y="70" fill="currentColor" fontSize="20" opacity="0.4">火</text>
                <text x="220" y="70" fill="currentColor" fontSize="20" opacity="0.4">火</text>
            </svg>
        </div>
    )
}

// Ninja Headband Divider
function HeadbandDivider({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 300 50" className="w-full max-w-md h-auto text-naruto-orange">
                {/* Headband cloth */}
                <path
                    d="M0 25 Q30 15, 60 25 L240 25 Q270 35, 300 25"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.3"
                />

                {/* Metal plate background */}
                <rect x="100" y="12" width="100" height="26" rx="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" opacity="0.5" />

                {/* Konoha symbol on plate */}
                <circle cx="150" cy="25" r="8" fill="#2D5A27" fillOpacity="0.6" />
                <path
                    d="M150 18 Q154 20, 156 25 Q154 30, 150 32 Q146 30, 144 25 Q146 20, 150 18"
                    fill="#2D5A27"
                    fillOpacity="0.8"
                />

                {/* Bolts/rivets */}
                <circle cx="110" cy="25" r="3" fill="currentColor" fillOpacity="0.4" />
                <circle cx="190" cy="25" r="3" fill="currentColor" fillOpacity="0.4" />

                {/* Cloth tails */}
                <path d="M0 25 Q10 30, 5 45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
                <path d="M300 25 Q290 30, 295 45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            </svg>
        </div>
    )
}

// Fire Kanji Decoration (火 - Hokage symbol)
function FireKanjiDecoration({ className = '' }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-naruto-orange">
                {/* Outer flame shape */}
                <path
                    d="M50 10 Q70 20, 80 40 Q85 60, 75 80 Q60 95, 50 90 Q40 95, 25 80 Q15 60, 20 40 Q30 20, 50 10"
                    fill="currentColor"
                    fillOpacity="0.1"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.4"
                />

                {/* Inner flame */}
                <path
                    d="M50 25 Q62 32, 68 45 Q72 58, 65 72 Q55 82, 50 78 Q45 82, 35 72 Q28 58, 32 45 Q38 32, 50 25"
                    fill="currentColor"
                    fillOpacity="0.2"
                />

                {/* Fire Kanji 火 */}
                <text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="32"
                    fontWeight="bold"
                    opacity="0.7"
                >
                    火
                </text>

                {/* Glow effect circle */}
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="3 3" />
            </svg>
        </div>
    )
}

// Scroll Banner (for titles/headers)
function ScrollBanner({ className = '' }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 400 80" className="w-full h-auto text-naruto-orange" preserveAspectRatio="xMidYMid meet">
                {/* Main scroll body */}
                <rect x="40" y="20" width="320" height="40" rx="5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" opacity="0.4" />

                {/* Left roll */}
                <ellipse cx="40" cy="40" rx="15" ry="25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                <ellipse cx="40" cy="40" rx="8" ry="20" fill="currentColor" fillOpacity="0.3" />

                {/* Right roll */}
                <ellipse cx="360" cy="40" rx="15" ry="25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                <ellipse cx="360" cy="40" rx="8" ry="20" fill="currentColor" fillOpacity="0.3" />

                {/* Decorative lines on scroll */}
                <line x1="60" y1="30" x2="340" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <line x1="60" y1="50" x2="340" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.3" />

                {/* Center Konoha leaf */}
                <circle cx="200" cy="40" r="12" fill="#2D5A27" fillOpacity="0.3" />
            </svg>
        </div>
    )
}

// Mission Scroll (for event cards)
function MissionScroll({ className = '' }: { className?: string }) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.02" />
                        <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Scroll texture */}
                <rect width="100" height="100" fill="url(#scrollGradient)" />

                {/* Top seal pattern */}
                <rect x="35" y="2" width="30" height="4" rx="2" fill="#FF6B35" fillOpacity="0.3" />
                <circle cx="50" cy="4" r="2" fill="#FF6B35" fillOpacity="0.5" />

                {/* Bottom seal pattern */}
                <rect x="35" y="94" width="30" height="4" rx="2" fill="#FF6B35" fillOpacity="0.3" />
                <circle cx="50" cy="96" r="2" fill="#FF6B35" fillOpacity="0.5" />

                {/* Corner seals */}
                <circle cx="5" cy="5" r="3" fill="#FF6B35" fillOpacity="0.2" />
                <circle cx="95" cy="5" r="3" fill="#FF6B35" fillOpacity="0.2" />
                <circle cx="5" cy="95" r="3" fill="#FF6B35" fillOpacity="0.2" />
                <circle cx="95" cy="95" r="3" fill="#FF6B35" fillOpacity="0.2" />

                {/* Side decorative lines */}
                <line x1="3" y1="20" x2="3" y2="80" stroke="#FF6B35" strokeWidth="1" strokeOpacity="0.2" />
                <line x1="97" y1="20" x2="97" y2="80" stroke="#FF6B35" strokeWidth="1" strokeOpacity="0.2" />
            </svg>
        </div>
    )
}

// Animated Akatsuki Cloud Background
export function AkatsukiCloudBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="akatsukiPattern" x="0" y="0" width="200" height="120" patternUnits="userSpaceOnUse">
                        {/* Akatsuki-style cloud */}
                        <path
                            d="M40 60 Q55 40, 80 50 Q105 35, 130 55 Q150 70, 135 85 Q110 100, 85 90 Q60 105, 45 90 Q25 80, 40 60"
                            fill="#E63946"
                            fillOpacity="0.1"
                            stroke="#E63946"
                            strokeWidth="2"
                            strokeOpacity="0.15"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#akatsukiPattern)" />
            </svg>
        </div>
    )
}

// Seal Pattern Background (Fuinjutsu)
export function SealPatternBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="sealPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        {/* Concentric circles */}
                        <circle cx="50" cy="50" r="45" stroke="#FF6B35" strokeWidth="1" fill="none" />
                        <circle cx="50" cy="50" r="35" stroke="#FF6B35" strokeWidth="0.5" fill="none" strokeDasharray="5 5" />
                        <circle cx="50" cy="50" r="25" stroke="#FF6B35" strokeWidth="1" fill="none" />

                        {/* Cross pattern */}
                        <line x1="50" y1="10" x2="50" y2="90" stroke="#FF6B35" strokeWidth="0.5" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="#FF6B35" strokeWidth="0.5" />

                        {/* Diagonal lines */}
                        <line x1="20" y1="20" x2="80" y2="80" stroke="#FF6B35" strokeWidth="0.3" />
                        <line x1="80" y1="20" x2="20" y2="80" stroke="#FF6B35" strokeWidth="0.3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sealPattern)" />
            </svg>
        </div>
    )
}

