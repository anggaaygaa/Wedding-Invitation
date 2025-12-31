'use client'

// Rich Javanese Decorative Elements for Wedding Invitation
// Ornamen-ornamen khas adat Jawa yang lebih detail

interface DecorativeProps {
    className?: string
}

// Gunungan - Sacred mountain shape decoration
export function Gunungan({ className = '' }: DecorativeProps) {
    return (
        <svg
            viewBox="0 0 200 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-gold ${className}`}
        >
            {/* Main gunungan shape */}
            <path
                d="M100 10 
           L40 120 
           Q30 140, 40 160 
           L20 280 
           Q100 300, 180 280 
           L160 160 
           Q170 140, 160 120 
           Z"
                fill="currentColor"
                fillOpacity="0.08"
            />

            {/* Inner decorative layers */}
            <path
                d="M100 30 L55 120 Q50 135, 55 150 L45 250 Q100 265, 155 250 L145 150 Q150 135, 145 120 Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
            />

            <path
                d="M100 50 L70 120 Q67 130, 70 140 L60 220 Q100 235, 140 220 L130 140 Q133 130, 130 120 Z"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.2"
            />

            {/* Tree of life inside */}
            <path
                d="M100 80 L100 200"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.4"
            />
            <path d="M100 100 Q85 90, 75 100 M100 100 Q115 90, 125 100" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
            <path d="M100 120 Q80 108, 65 120 M100 120 Q120 108, 135 120" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
            <path d="M100 140 Q75 125, 55 140 M100 140 Q125 125, 145 140" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
            <path d="M100 160 Q80 148, 65 160 M100 160 Q120 148, 135 160" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
            <path d="M100 180 Q85 170, 75 180 M100 180 Q115 170, 125 180" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />

            {/* Top crown */}
            <circle cx="100" cy="25" r="8" fill="currentColor" fillOpacity="0.3" />
            <circle cx="100" cy="25" r="4" fill="currentColor" fillOpacity="0.5" />
        </svg>
    )
}

// Detailed Wayang Kulit silhouette
export function WayangDetail({ className = '' }: DecorativeProps) {
    return (
        <svg
            viewBox="0 0 120 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-gold ${className}`}
        >
            {/* Head with elaborate crown */}
            <ellipse cx="60" cy="35" rx="20" ry="25" fill="currentColor" fillOpacity="0.1" />

            {/* Crown/Mahkota detail */}
            <path
                d="M35 25 L40 8 L48 20 L55 5 L60 18 L65 5 L72 20 L80 8 L85 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
            />
            <circle cx="60" cy="12" r="4" fill="currentColor" fillOpacity="0.4" />

            {/* Face */}
            <ellipse cx="60" cy="40" rx="15" ry="18" fill="currentColor" fillOpacity="0.15" />
            {/* Eye */}
            <ellipse cx="55" cy="38" rx="4" ry="2" fill="currentColor" fillOpacity="0.3" />
            {/* Nose - long traditional wayang nose */}
            <path d="M60 42 Q70 50, 68 58" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />

            {/* Body/Torso */}
            <path
                d="M40 65 Q60 72, 80 65 L85 120 Q60 130, 35 120 Z"
                fill="currentColor"
                fillOpacity="0.1"
            />
            {/* Chest ornaments */}
            <circle cx="60" cy="80" r="6" fill="currentColor" fillOpacity="0.2" />
            <circle cx="60" cy="80" r="3" fill="currentColor" fillOpacity="0.3" />

            {/* Left arm - extended */}
            <path
                d="M35 70 Q20 85, 8 100 Q5 105, 10 108 Q18 105, 25 95 Q30 85, 40 75"
                fill="currentColor"
                fillOpacity="0.08"
            />

            {/* Right arm - bent */}
            <path
                d="M85 70 Q95 80, 105 95 Q110 100, 108 105 Q102 102, 95 92 Q88 82, 80 75"
                fill="currentColor"
                fillOpacity="0.08"
            />

            {/* Sarong/Kain with batik pattern suggestion */}
            <path
                d="M35 120 Q60 135, 85 120 L90 185 Q60 195, 30 185 Z"
                fill="currentColor"
                fillOpacity="0.12"
            />
            {/* Sarong pattern lines */}
            <path d="M45 140 L75 140" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <path d="M42 155 L78 155" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <path d="M40 170 L80 170" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </svg>
    )
}

// Horizontal decorative border with Javanese motifs
export function JavaneseBorder({ className = '' }: DecorativeProps) {
    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <svg
                viewBox="0 0 800 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto text-gold"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    {/* Repeating lotus pattern */}
                    <pattern id="lotusBorder" x="0" y="0" width="80" height="60" patternUnits="userSpaceOnUse">
                        {/* Lotus flower */}
                        <ellipse cx="40" cy="30" rx="8" ry="5" fill="currentColor" fillOpacity="0.2" />
                        <path d="M40 25 Q43 18, 40 10 Q37 18, 40 25" fill="currentColor" fillOpacity="0.4" />
                        <path d="M40 35 Q43 42, 40 50 Q37 42, 40 35" fill="currentColor" fillOpacity="0.4" />
                        <path d="M32 30 Q25 27, 18 30 Q25 33, 32 30" fill="currentColor" fillOpacity="0.4" />
                        <path d="M48 30 Q55 27, 62 30 Q55 33, 48 30" fill="currentColor" fillOpacity="0.4" />
                        {/* Connecting swirls */}
                        <path d="M0 30 Q10 25, 18 30" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
                        <path d="M62 30 Q70 35, 80 30" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
                    </pattern>
                </defs>

                <rect width="800" height="60" fill="url(#lotusBorder)" />

                {/* Top and bottom lines */}
                <line x1="0" y1="5" x2="800" y2="5" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                <line x1="0" y1="55" x2="800" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            </svg>
        </div>
    )
}

// Section background with Javanese temple pattern
export function TemplePattern({ className = '' }: DecorativeProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="templePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        {/* Candi/temple silhouette */}
                        <path
                            d="M50 20 L35 35 L35 45 L30 45 L30 55 L25 55 L25 80 L75 80 L75 55 L70 55 L70 45 L65 45 L65 35 Z"
                            fill="currentColor"
                            fillOpacity="0.03"
                        />
                        {/* Steps */}
                        <rect x="30" y="80" width="40" height="5" fill="currentColor" fillOpacity="0.02" />
                        <rect x="25" y="85" width="50" height="5" fill="currentColor" fillOpacity="0.02" />
                        {/* Window/door */}
                        <rect x="44" y="55" width="12" height="20" fill="currentColor" fillOpacity="0.04" rx="6" ry="0" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#templePattern)" className="text-gold" />
            </svg>
        </div>
    )
}

// Batik Mega Mendung (cloud pattern from Cirebon)
export function MegaMendungPattern({ className = '' }: DecorativeProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="megaMendung" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
                        {/* Cloud layers */}
                        <path
                            d="M10 40 Q20 30, 40 35 Q50 25, 70 30 Q85 20, 100 35 Q110 30, 120 40"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.06"
                        />
                        <path
                            d="M0 50 Q15 40, 35 45 Q50 35, 75 40 Q95 30, 120 50"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            opacity="0.08"
                        />
                        <path
                            d="M5 60 Q25 50, 45 55 Q60 45, 80 52 Q100 42, 115 60"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.05"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#megaMendung)" className="text-gold" />
            </svg>
        </div>
    )
}

// Ornate frame for photos/cards
export function OrnateFrame({ className = '', children }: DecorativeProps & { children?: React.ReactNode }) {
    return (
        <div className={`relative ${className}`}>
            {/* Corner ornaments */}
            <svg className="absolute -top-3 -left-3 w-12 h-12 text-gold glow-breathing" viewBox="0 0 50 50">
                <path d="M5 50 Q5 5, 50 5" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10 50 Q10 10, 50 10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                <circle cx="10" cy="10" r="4" fill="currentColor" fillOpacity="0.5" />
                <path d="M5 25 Q8 15, 18 12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                <circle cx="5" cy="25" r="2" fill="currentColor" fillOpacity="0.4" />
                <circle cx="25" cy="5" r="2" fill="currentColor" fillOpacity="0.4" />
            </svg>

            <svg className="absolute -top-3 -right-3 w-12 h-12 text-gold glow-breathing" viewBox="0 0 50 50">
                <path d="M45 50 Q45 5, 0 5" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M40 50 Q40 10, 0 10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                <circle cx="40" cy="10" r="4" fill="currentColor" fillOpacity="0.5" />
                <path d="M45 25 Q42 15, 32 12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
                <circle cx="45" cy="25" r="2" fill="currentColor" fillOpacity="0.4" />
                <circle cx="25" cy="5" r="2" fill="currentColor" fillOpacity="0.4" />
            </svg>

            <svg className="absolute -bottom-3 -left-3 w-12 h-12 text-gold glow-breathing" viewBox="0 0 50 50">
                <path d="M5 0 Q5 45, 50 45" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10 0 Q10 40, 50 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                <circle cx="10" cy="40" r="4" fill="currentColor" fillOpacity="0.5" />
                <circle cx="5" cy="25" r="2" fill="currentColor" fillOpacity="0.4" />
                <circle cx="25" cy="45" r="2" fill="currentColor" fillOpacity="0.4" />
            </svg>

            <svg className="absolute -bottom-3 -right-3 w-12 h-12 text-gold glow-breathing" viewBox="0 0 50 50">
                <path d="M45 0 Q45 45, 0 45" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M40 0 Q40 40, 0 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                <circle cx="40" cy="40" r="4" fill="currentColor" fillOpacity="0.5" />
                <circle cx="45" cy="25" r="2" fill="currentColor" fillOpacity="0.4" />
                <circle cx="25" cy="45" r="2" fill="currentColor" fillOpacity="0.4" />
            </svg>

            {children}
        </div>
    )
}

// Side decorative columns (like temple pillars)
export function SidePillars({ className = '' }: DecorativeProps) {
    return (
        <>
            {/* Left pillar */}
            <div className={`fixed left-0 top-0 bottom-0 w-8 md:w-12 pointer-events-none z-[2] ${className}`}>
                <svg className="w-full h-full text-gold" viewBox="0 0 40 800" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <pattern id="pillarPattern" x="0" y="0" width="40" height="100" patternUnits="userSpaceOnUse">
                            {/* Pillar motif */}
                            <rect x="15" y="0" width="10" height="100" fill="currentColor" fillOpacity="0.03" />
                            <ellipse cx="20" cy="25" rx="12" ry="3" fill="currentColor" fillOpacity="0.05" />
                            <ellipse cx="20" cy="75" rx="12" ry="3" fill="currentColor" fillOpacity="0.05" />
                            <circle cx="20" cy="50" r="6" fill="currentColor" fillOpacity="0.04" />
                        </pattern>
                    </defs>
                    <rect width="40" height="800" fill="url(#pillarPattern)" />
                    {/* Gradient fade */}
                    <rect width="40" height="800" fill="url(#pillarFade)" />
                    <defs>
                        <linearGradient id="pillarFade" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Right pillar */}
            <div className={`fixed right-0 top-0 bottom-0 w-8 md:w-12 pointer-events-none z-[2] ${className}`}>
                <svg className="w-full h-full text-gold" viewBox="0 0 40 800" preserveAspectRatio="xMidYMid slice">
                    <rect width="40" height="800" fill="url(#pillarPattern)" />
                    <defs>
                        <linearGradient id="pillarFadeRight" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <rect width="40" height="800" fill="url(#pillarFadeRight)" />
                </svg>
            </div>
        </>
    )
}

// Rich batik background combining multiple patterns
export function RichBatikBackground({ className = '' }: DecorativeProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Layer 1: Kawung pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="richKawung" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <ellipse cx="30" cy="15" rx="12" ry="8" fill="#C9A961" />
                        <ellipse cx="15" cy="30" rx="8" ry="12" fill="#C9A961" />
                        <ellipse cx="45" cy="30" rx="8" ry="12" fill="#C9A961" />
                        <ellipse cx="30" cy="45" rx="12" ry="8" fill="#C9A961" />
                        <circle cx="30" cy="30" r="6" fill="#C9A961" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#richKawung)" />
            </svg>

            {/* Layer 2: Diagonal parang lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="richParang" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <path d="M0 20 Q10 10, 20 20 Q30 30, 40 20" stroke="#C9A961" strokeWidth="2" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#richParang)" />
            </svg>

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] via-transparent to-gold/[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.01] via-transparent to-gold/[0.01]" />
        </div>
    )
}

// Traditional Javanese spiral/sulur ornament
export function SulurOrnament({ className = '' }: DecorativeProps) {
    return (
        <svg
            viewBox="0 0 200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-gold ${className}`}
        >
            {/* Central flower */}
            <circle cx="100" cy="50" r="12" fill="currentColor" fillOpacity="0.3" />
            <circle cx="100" cy="50" r="6" fill="currentColor" fillOpacity="0.5" />

            {/* Left spiraling vine */}
            <path
                d="M88 50 Q70 45, 60 50 Q50 55, 40 45 Q30 35, 15 40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
            />
            <path
                d="M60 50 Q55 40, 50 45"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
            />
            <circle cx="50" cy="45" r="4" fill="currentColor" fillOpacity="0.3" />
            <path
                d="M40 45 Q38 35, 30 38"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
            />
            <circle cx="30" cy="38" r="3" fill="currentColor" fillOpacity="0.2" />

            {/* Right spiraling vine */}
            <path
                d="M112 50 Q130 45, 140 50 Q150 55, 160 45 Q170 35, 185 40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
            />
            <path
                d="M140 50 Q145 40, 150 45"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
            />
            <circle cx="150" cy="45" r="4" fill="currentColor" fillOpacity="0.3" />
            <path
                d="M160 45 Q162 35, 170 38"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
            />
            <circle cx="170" cy="38" r="3" fill="currentColor" fillOpacity="0.2" />

            {/* Leaves */}
            <path d="M70 48 Q65 42, 72 38" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
            <path d="M130 48 Q135 42, 128 38" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
        </svg>
    )
}

// Wayang Arjuna - Ksatria tampan
export function WayangArjuna({ className = '' }: DecorativeProps) {
    return (
        <svg viewBox="0 0 100 180" fill="none" className={`text-gold animate-wayang ${className}`}>
            {/* Crown - lebih runcing */}
            <path d="M35 30 L40 10 L50 25 L55 5 L60 25 L65 10 L70 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="55" cy="8" r="3" fill="currentColor" fillOpacity="0.5" />
            {/* Head */}
            <ellipse cx="52" cy="40" rx="18" ry="20" fill="currentColor" fillOpacity="0.15" />
            {/* Face - refined features */}
            <ellipse cx="48" cy="38" rx="3" ry="1.5" fill="currentColor" fillOpacity="0.4" />
            <path d="M52 42 Q62 48, 60 55" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
            {/* Body - slim warrior */}
            <path d="M35 60 Q52 68, 70 60 L75 110 Q52 120, 30 110 Z" fill="currentColor" fillOpacity="0.12" />
            {/* Arms holding bow */}
            <path d="M30 65 Q15 80, 10 95 L15 98 Q25 85, 35 72" fill="currentColor" fillOpacity="0.1" />
            <path d="M75 65 Q90 75, 95 90 L90 93 Q82 80, 72 70" fill="currentColor" fillOpacity="0.1" />
            {/* Bow */}
            <path d="M10 95 Q52 60, 95 90" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
            {/* Lower garment */}
            <path d="M30 110 Q52 125, 75 110 L80 170 Q52 180, 25 170 Z" fill="currentColor" fillOpacity="0.15" />
        </svg>
    )
}

// Wayang Semar - Punakawan bijak
export function WayangSemar({ className = '' }: DecorativeProps) {
    return (
        <svg viewBox="0 0 120 160" fill="none" className={`text-gold animate-wayang-slow ${className}`}>
            {/* Head - round, friendly */}
            <circle cx="60" cy="35" r="28" fill="currentColor" fillOpacity="0.12" />
            {/* Hair bun */}
            <ellipse cx="60" cy="12" rx="12" ry="8" fill="currentColor" fillOpacity="0.15" />
            {/* Friendly face */}
            <ellipse cx="50" cy="32" rx="4" ry="2" fill="currentColor" fillOpacity="0.3" />
            <ellipse cx="70" cy="32" rx="4" ry="2" fill="currentColor" fillOpacity="0.3" />
            <path d="M50 45 Q60 52, 70 45" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
            {/* Big round body */}
            <ellipse cx="60" cy="95" rx="45" ry="40" fill="currentColor" fillOpacity="0.1" />
            {/* Arms */}
            <path d="M20 80 Q5 95, 10 110 L18 108 Q15 95, 25 85" fill="currentColor" fillOpacity="0.08" />
            <path d="M100 80 Q115 95, 110 110 L102 108 Q105 95, 95 85" fill="currentColor" fillOpacity="0.08" />
            {/* Sarong */}
            <path d="M25 120 Q60 140, 95 120 L100 155 Q60 165, 20 155 Z" fill="currentColor" fillOpacity="0.12" />
        </svg>
    )
}

// Animated Wayang Pair for section dividers
export function WayangPair({ className = '' }: DecorativeProps) {
    return (
        <div className={`flex items-center justify-center gap-8 ${className}`}>
            <WayangArjuna className="w-16 h-auto opacity-30" />
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            <WayangSemar className="w-20 h-auto opacity-25" />
        </div>
    )
}

// Floating Wayang Background
export function FloatingWayang({ className = '' }: DecorativeProps) {
    return (
        <div className={`fixed inset-0 pointer-events-none z-[1] overflow-hidden ${className}`}>
            {/* Wayang kiri atas */}
            <div className="absolute top-[15%] left-[5%] opacity-20 animate-float-slow">
                <WayangArjuna className="w-20 h-auto" />
            </div>
            {/* Wayang kanan atas */}
            <div className="absolute top-[25%] right-[8%] opacity-15 animate-float-slow -scale-x-100" style={{ animationDelay: '2s' }}>
                <WayangDetail className="w-16 h-auto" />
            </div>
            {/* Semar di tengah kiri */}
            <div className="absolute top-[50%] left-[3%] opacity-20 animate-float-slow" style={{ animationDelay: '4s' }}>
                <WayangSemar className="w-24 h-auto" />
            </div>
            {/* Wayang kanan bawah */}
            <div className="absolute bottom-[20%] right-[5%] opacity-15 animate-float-slow -scale-x-100" style={{ animationDelay: '1s' }}>
                <WayangArjuna className="w-18 h-auto" />
            </div>
        </div>
    )
}

