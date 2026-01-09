'use client'

// Naruto Anime Decorative Elements for Wedding Invitation
// Elemen-elemen dekoratif bertema anime Naruto

interface DecorativeProps {
    className?: string
}

// Konoha Leaf Symbol - Logo daun Konoha
export function KonohaLeaf({ className = '' }: DecorativeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-konoha-green ${className}`}
        >
            {/* Spiral center */}
            <circle cx="50" cy="50" r="35" fill="currentColor" fillOpacity="0.1" />
            <path
                d="M50 20 C65 25, 75 40, 75 55 C75 70, 60 80, 50 80 C40 80, 25 70, 25 55 C25 40, 35 25, 50 20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
            />
            {/* Inner spiral - Konoha symbol */}
            <path
                d="M50 30 Q60 35, 65 50 Q65 65, 50 70 Q35 65, 35 50 Q40 35, 50 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.2"
            />
            {/* Leaf veins */}
            <path d="M50 35 L50 65" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <path d="M40 45 L60 55" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <path d="M40 55 L60 45" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
    )
}

// Sharingan Pattern - Pola mata Sharingan
export function SharinganPattern({ className = '' }: DecorativeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-sharingan-red ${className}`}
        >
            {/* Outer ring */}
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            
            {/* Pupil */}
            <circle cx="50" cy="50" r="12" fill="currentColor" fillOpacity="0.8" />
            <circle cx="50" cy="50" r="8" fill="#1A1A2E" />
            
            {/* Three tomoe */}
            <g className="animate-sharingan-spin origin-center">
                <ellipse cx="50" cy="25" rx="6" ry="8" fill="currentColor" transform="rotate(0, 50, 50)" />
                <ellipse cx="71.65" cy="62.5" rx="6" ry="8" fill="currentColor" transform="rotate(120, 50, 50)" />
                <ellipse cx="28.35" cy="62.5" rx="6" ry="8" fill="currentColor" transform="rotate(240, 50, 50)" />
            </g>
            
            {/* Connecting curves */}
            <path
                d="M50 25 Q65 35, 71.65 62.5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
            />
            <path
                d="M71.65 62.5 Q55 75, 28.35 62.5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
            />
            <path
                d="M28.35 62.5 Q35 35, 50 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
            />
        </svg>
    )
}

// Kunai Decoration
export function KunaiDecoration({ className = '' }: DecorativeProps) {
    return (
        <svg
            viewBox="0 0 30 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-naruto-orange ${className}`}
        >
            {/* Blade */}
            <path
                d="M15 5 L25 40 L15 35 L5 40 Z"
                fill="currentColor"
                fillOpacity="0.3"
                stroke="currentColor"
                strokeWidth="1"
            />
            {/* Handle */}
            <rect x="12" y="40" width="6" height="35" rx="2" fill="currentColor" fillOpacity="0.5" />
            {/* Ring */}
            <circle cx="15" cy="85" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="15" cy="85" r="5" fill="currentColor" fillOpacity="0.2" />
        </svg>
    )
}

// Shuriken Decoration
export function ShurikenDecoration({ className = '' }: DecorativeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-uchiha-navy ${className}`}
        >
            {/* Center */}
            <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.6" />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            
            {/* Four blades */}
            <path d="M50 10 L55 42 L50 50 L45 42 Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M90 50 L58 55 L50 50 L58 45 Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M50 90 L45 58 L50 50 L55 58 Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M10 50 L42 45 L50 50 L42 55 Z" fill="currentColor" fillOpacity="0.4" />
        </svg>
    )
}

// Hokage Symbol
export function HokageSymbol({ className = '' }: DecorativeProps) {
    return (
        <svg
            viewBox="0 0 120 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-naruto-orange ${className}`}
        >
            {/* Fire/Flame shape representing Hokage */}
            <path
                d="M60 5 Q80 15, 85 30 Q90 45, 80 55 L60 50 L40 55 Q30 45, 35 30 Q40 15, 60 5"
                fill="currentColor"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="2"
            />
            {/* Inner flame */}
            <path
                d="M60 15 Q72 22, 75 32 Q78 42, 70 48 L60 45 L50 48 Q42 42, 45 32 Q48 22, 60 15"
                fill="currentColor"
                fillOpacity="0.3"
            />
            {/* Kanji-style mark */}
            <text x="60" y="38" textAnchor="middle" fill="currentColor" fontSize="16" opacity="0.8">火</text>
        </svg>
    )
}

// Chakra Circle Animation
export function ChakraCircle({ className = '' }: DecorativeProps) {
    return (
        <div className={`relative ${className}`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-chakra-blue animate-chakra-pulse"
            >
                {/* Multiple rings */}
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
                <circle cx="50" cy="50" r="15" fill="currentColor" fillOpacity="0.3" />
                
                {/* Energy particles */}
                <circle cx="50" cy="10" r="3" fill="currentColor" fillOpacity="0.8" className="animate-pulse" />
                <circle cx="90" cy="50" r="3" fill="currentColor" fillOpacity="0.8" className="animate-pulse" />
                <circle cx="50" cy="90" r="3" fill="currentColor" fillOpacity="0.8" className="animate-pulse" />
                <circle cx="10" cy="50" r="3" fill="currentColor" fillOpacity="0.8" className="animate-pulse" />
            </svg>
        </div>
    )
}

// Ninja Scroll Frame
export function NinjaScrollFrame({ className = '', children }: DecorativeProps & { children?: React.ReactNode }) {
    return (
        <div className={`relative ${className}`}>
            {/* Top scroll roll */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[110%]">
                <svg viewBox="0 0 200 20" className="w-full h-6 text-naruto-orange">
                    <rect x="10" y="5" width="180" height="12" rx="6" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="15" cy="11" r="8" fill="currentColor" fillOpacity="0.5" />
                    <circle cx="185" cy="11" r="8" fill="currentColor" fillOpacity="0.5" />
                </svg>
            </div>
            
            {/* Main scroll body */}
            <div className="bg-scroll-cream/90 border-2 border-naruto-orange/30 rounded-lg px-6 py-8 shadow-lg">
                {children}
            </div>
            
            {/* Bottom scroll roll */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%]">
                <svg viewBox="0 0 200 20" className="w-full h-6 text-naruto-orange">
                    <rect x="10" y="3" width="180" height="12" rx="6" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="15" cy="9" r="8" fill="currentColor" fillOpacity="0.5" />
                    <circle cx="185" cy="9" r="8" fill="currentColor" fillOpacity="0.5" />
                </svg>
            </div>
        </div>
    )
}

// Floating Konoha Leaves Background
export function FloatingLeaves({ className = '' }: DecorativeProps) {
    const leaves = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 6,
        size: 15 + Math.random() * 20,
    }))

    return (
        <div className={`fixed inset-0 pointer-events-none overflow-hidden z-[1] ${className}`}>
            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className="absolute animate-leaf-fall"
                    style={{
                        left: `${leaf.left}%`,
                        animationDelay: `${leaf.delay}s`,
                        animationDuration: `${leaf.duration}s`,
                    }}
                >
                    <KonohaLeaf className={`w-${Math.round(leaf.size / 4)} h-auto opacity-40`} />
                </div>
            ))}
        </div>
    )
}

// Cloud Pattern Background (Akatsuki-style clouds)
export function CloudPatternBackground({ className = '' }: DecorativeProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="cloudPattern" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
                        {/* Stylized cloud */}
                        <path
                            d="M20 40 Q30 25, 50 30 Q70 20, 90 35 Q100 45, 90 55 Q70 65, 50 60 Q30 70, 20 55 Q10 45, 20 40"
                            fill="#FF6B35"
                            fillOpacity="0.05"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cloudPattern)" />
            </svg>
        </div>
    )
}

// Side Ninja Silhouettes (replacing Side Pillars)
export function NinjaSilhouettes({ className = '' }: DecorativeProps) {
    return (
        <>
            {/* Left ninja silhouette */}
            <div className={`fixed left-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-[2] ${className}`}>
                <svg className="w-full h-full text-naruto-orange" viewBox="0 0 60 800" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="ninjaFadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <rect width="60" height="800" fill="url(#ninjaFadeLeft)" />
                    {/* Kunai pattern */}
                    <pattern id="kunaiPatternLeft" x="0" y="0" width="60" height="150" patternUnits="userSpaceOnUse">
                        <path d="M30 20 L40 50 L30 45 L20 50 Z" fill="currentColor" fillOpacity="0.1" />
                        <circle cx="30" cy="70" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" />
                    </pattern>
                    <rect width="60" height="800" fill="url(#kunaiPatternLeft)" />
                </svg>
            </div>

            {/* Right ninja silhouette */}
            <div className={`fixed right-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-[2] ${className}`}>
                <svg className="w-full h-full text-naruto-orange" viewBox="0 0 60 800" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="ninjaFadeRight" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <rect width="60" height="800" fill="url(#ninjaFadeRight)" />
                    <rect width="60" height="800" fill="url(#kunaiPatternLeft)" />
                </svg>
            </div>
        </>
    )
}

// Naruto-style Divider
export function NarutoDivider({ className = '' }: DecorativeProps) {
    return (
        <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-naruto-orange/60" />
            <ShurikenDecoration className="w-8 h-8 animate-spin-slow" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-naruto-orange/60" />
        </div>
    )
}

// Rasengan Effect (for special highlights)
export function RasenganEffect({ className = '' }: DecorativeProps) {
    return (
        <div className={`relative ${className}`}>
            <div className="absolute inset-0 rounded-full bg-chakra-blue/20 animate-ping" />
            <div className="absolute inset-2 rounded-full bg-chakra-blue/30 animate-pulse" />
            <svg
                viewBox="0 0 100 100"
                className="relative text-chakra-blue animate-spin-slow"
            >
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7" />
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />
                <circle cx="50" cy="50" r="15" fill="currentColor" fillOpacity="0.8" />
            </svg>
        </div>
    )
}

// Corner Ornaments with Konoha leaves
export function NarutoCornerOrnaments({ className = '' }: DecorativeProps) {
    return (
        <>
            <div className={`absolute top-4 left-4 ${className}`}>
                <KonohaLeaf className="w-12 h-12 opacity-30" />
            </div>
            <div className={`absolute top-4 right-4 -scale-x-100 ${className}`}>
                <KonohaLeaf className="w-12 h-12 opacity-30" />
            </div>
            <div className={`absolute bottom-4 left-4 -scale-y-100 ${className}`}>
                <KonohaLeaf className="w-12 h-12 opacity-30" />
            </div>
            <div className={`absolute bottom-4 right-4 scale-[-1] ${className}`}>
                <KonohaLeaf className="w-12 h-12 opacity-30" />
            </div>
        </>
    )
}
