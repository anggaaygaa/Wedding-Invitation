'use client'

// Naruto Anime Animation Components
// Komponen animasi bertema Naruto untuk undangan pernikahan

import { motion } from 'framer-motion'

interface AnimationProps {
    className?: string
}

// Rasengan Loading Spinner
export function RasenganLoader({ className = '' }: AnimationProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Outer chakra ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-chakra-blue/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Middle spinning ring */}
            <motion.div
                className="absolute inset-2 rounded-full border-2 border-chakra-blue/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner spinning ring */}
            <motion.div
                className="absolute inset-4 rounded-full border-2 border-chakra-blue/70"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            {/* Core glow */}
            <motion.div
                className="absolute inset-6 rounded-full bg-chakra-blue"
                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Chakra burst effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-chakra-blue/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            />
        </div>
    )
}

// Sharingan Spinning Loader
export function SharinganSpinner({ className = '' }: AnimationProps) {
    return (
        <div className={`relative ${className}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer ring */}
                <circle cx="50" cy="50" r="48" stroke="#E63946" strokeWidth="2" fill="none" opacity="0.3" />

                {/* Eye background */}
                <circle cx="50" cy="50" r="40" fill="#E63946" fillOpacity="0.1" />

                {/* Spinning tomoe */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    style={{ originX: '50%', originY: '50%' }}
                >
                    {/* Three tomoe */}
                    <ellipse cx="50" cy="22" rx="6" ry="10" fill="#E63946" />
                    <ellipse cx="74" cy="62" rx="6" ry="10" fill="#E63946" transform="rotate(120, 74, 62)" />
                    <ellipse cx="26" cy="62" rx="6" ry="10" fill="#E63946" transform="rotate(-120, 26, 62)" />

                    {/* Connecting curves */}
                    <path d="M50 32 Q58 42, 64 52" stroke="#E63946" strokeWidth="2" fill="none" opacity="0.6" />
                    <path d="M64 52 Q56 62, 50 68" stroke="#E63946" strokeWidth="2" fill="none" opacity="0.6" />
                    <path d="M50 68 Q42 62, 36 52" stroke="#E63946" strokeWidth="2" fill="none" opacity="0.6" />
                    <path d="M36 52 Q42 42, 50 32" stroke="#E63946" strokeWidth="2" fill="none" opacity="0.6" />
                </motion.g>

                {/* Pupil */}
                <circle cx="50" cy="50" r="12" fill="#E63946" />
                <circle cx="50" cy="50" r="6" fill="#1A1A2E" />
            </svg>
        </div>
    )
}

// Chakra Flow Animation (for borders/lines)
export function ChakraFlowLine({ className = '' }: AnimationProps) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-chakra-blue/30 to-transparent" />
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-chakra-blue to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ width: '50%' }}
            />
        </div>
    )
}

// Ninja Smoke Poof Animation
export function NinjaSmokePoof({ className = '', isVisible = false }: AnimationProps & { isVisible?: boolean }) {
    if (!isVisible) return null

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-8 h-8 rounded-full bg-white/60 dark:bg-gray-400/60"
                    initial={{
                        scale: 0,
                        x: '50%',
                        y: '50%',
                        opacity: 1
                    }}
                    animate={{
                        scale: [0, 2, 3],
                        x: `${50 + (Math.random() - 0.5) * 100}%`,
                        y: `${50 + (Math.random() - 0.5) * 100}%`,
                        opacity: [1, 0.5, 0]
                    }}
                    transition={{
                        duration: 0.6,
                        delay: i * 0.05,
                        ease: 'easeOut'
                    }}
                />
            ))}
        </div>
    )
}

// Jutsu Hand Seals Sequence Animation
export function JutsuHandSeals({ className = '' }: AnimationProps) {
    const seals = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {seals.slice(0, 4).map((seal, index) => (
                <motion.div
                    key={index}
                    className="w-8 h-8 rounded-full bg-naruto-orange/20 border border-naruto-orange/40 flex items-center justify-center text-naruto-orange text-xs font-bold"
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 2,
                        delay: index * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    {seal}
                </motion.div>
            ))}
        </div>
    )
}

// Chakra Ripple Effect (on click/focus)
export function ChakraRipple({ className = '' }: AnimationProps) {
    return (
        <motion.div
            className={`absolute inset-0 rounded-full ${className}`}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                background: 'radial-gradient(circle, rgba(65, 105, 225, 0.4) 0%, transparent 70%)'
            }}
        />
    )
}

// Floating Chakra Particles
export function FloatingChakraParticles({ className = '' }: AnimationProps) {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 3,
    }))

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-chakra-blue"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}

// Konoha Leaf Spiral Animation
export function KonohaLeafSpiral({ className = '' }: AnimationProps) {
    const leaves = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        angle: i * 60,
        delay: i * 0.2,
    }))

    return (
        <div className={`relative ${className}`}>
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    className="absolute w-4 h-4"
                    style={{
                        originX: '200%',
                        originY: '50%',
                    }}
                    initial={{ rotate: leaf.angle }}
                    animate={{ rotate: leaf.angle + 360 }}
                    transition={{
                        duration: 8,
                        delay: leaf.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <svg viewBox="0 0 30 30" className="text-konoha-green">
                        <path
                            d="M15 5 Q22 8, 25 15 Q22 22, 15 25 Q8 22, 5 15 Q8 8, 15 5"
                            fill="currentColor"
                            fillOpacity="0.6"
                        />
                        <path d="M15 8 L15 22" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                    </svg>
                </motion.div>
            ))}
        </div>
    )
}

// Sage Mode Activation Effect
export function SageModeActivation({ className = '', isActive = false }: AnimationProps & { isActive?: boolean }) {
    return (
        <motion.div
            className={`absolute inset-0 pointer-events-none ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Orange pigmentation glow around eyes area */}
            <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/4 rounded-full"
                style={{
                    background: 'radial-gradient(ellipse, rgba(255, 107, 53, 0.3) 0%, transparent 70%)',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </motion.div>
    )
}

// Bijuu Chakra Cloak Effect
export function BijuuChakraCloak({ className = '' }: AnimationProps) {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {/* Chakra flames */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bottom-0 w-6 rounded-t-full bg-gradient-to-t from-naruto-orange to-naruto-yellow"
                    style={{
                        left: `${10 + i * 12}%`,
                        height: '30%',
                    }}
                    animate={{
                        height: ['30%', '50%', '30%'],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 0.8 + i * 0.1,
                        delay: i * 0.1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}

// Lightning/Chidori Effect
export function ChidoriEffect({ className = '' }: AnimationProps) {
    return (
        <svg viewBox="0 0 100 100" className={`text-chakra-blue ${className}`}>
            <defs>
                <filter id="lightning-glow">
                    <feGaussianBlur stdDeviation="2" result="glow" />
                    <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Lightning bolts */}
            <motion.g filter="url(#lightning-glow)">
                <motion.path
                    d="M50 10 L45 30 L55 35 L40 55 L50 50 L35 80"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    animate={{ opacity: [1, 0.5, 1], pathLength: [0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.path
                    d="M60 20 L55 40 L65 45 L50 70"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    animate={{ opacity: [0.5, 1, 0.5], pathLength: [0, 1] }}
                    transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }}
                />
            </motion.g>

            {/* Center glow */}
            <motion.circle
                cx="50"
                cy="50"
                r="15"
                fill="currentColor"
                fillOpacity="0.3"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 0.3, repeat: Infinity }}
            />
        </svg>
    )
}
