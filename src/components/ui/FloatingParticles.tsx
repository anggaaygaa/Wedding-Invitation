'use client'

import { useEffect, useState } from 'react'

interface Petal {
    id: number
    left: number
    delay: number
    duration: number
    size: number
    opacity: number
}

interface GoldDust {
    id: number
    left: number
    top: number
    delay: number
}

export default function FloatingParticles() {
    const [petals, setPetals] = useState<Petal[]>([])
    const [goldDusts, setGoldDusts] = useState<GoldDust[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Generate petals
        const newPetals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 12 + Math.random() * 8,
            size: 8 + Math.random() * 8,
            opacity: 0.3 + Math.random() * 0.4,
        }))
        setPetals(newPetals)

        // Generate gold dust particles
        const newGoldDusts: GoldDust[] = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
        }))
        setGoldDusts(newGoldDusts)
    }, [])

    if (!mounted) return null

    return (
        <div className="particles-container" aria-hidden="true">
            {/* Falling Petals - Kelopak Melati */}
            {petals.map((petal) => (
                <div
                    key={`petal-${petal.id}`}
                    className="petal"
                    style={{
                        left: `${petal.left}%`,
                        width: `${petal.size}px`,
                        height: `${petal.size}px`,
                        opacity: petal.opacity,
                        animationDelay: `${petal.delay}s`,
                        animationDuration: `${petal.duration}s`,
                    }}
                />
            ))}

            {/* Gold Dust Particles */}
            {goldDusts.map((dust) => (
                <div
                    key={`dust-${dust.id}`}
                    className="gold-dust"
                    style={{
                        left: `${dust.left}%`,
                        top: `${dust.top}%`,
                        animationDelay: `${dust.delay}s`,
                    }}
                />
            ))}
        </div>
    )
}

// Parallax Background Component
export function ParallaxBackground({ children }: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="relative">
            {/* Parallax Layer 1 - Slowest */}
            <div
                className="absolute inset-0 pointer-events-none kawung-pattern opacity-[0.03]"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            />

            {/* Parallax Layer 2 - Medium */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/5 blur-3xl" />
                <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gold/5 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}

// Corner Ornament Component with Glow
export function CornerOrnaments() {
    return (
        <>
            {/* Top Left */}
            <svg
                className="corner-ornament top-left glow-breathing"
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    d="M0 0 L50 0 Q40 10 30 20 Q20 30 10 40 L0 50 Z"
                    fill="url(#goldGrad)"
                    opacity="0.6"
                />
                <circle cx="25" cy="25" r="8" fill="url(#goldGrad)" opacity="0.4" />
                <path
                    d="M5 5 Q15 15 10 30 M15 5 Q25 15 20 25"
                    stroke="url(#goldGrad)"
                    strokeWidth="1"
                    opacity="0.5"
                />
                <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A961" />
                        <stop offset="50%" stopColor="#E8D5A3" />
                        <stop offset="100%" stopColor="#C9A961" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Top Right */}
            <svg
                className="corner-ornament top-right glow-breathing"
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    d="M0 0 L50 0 Q40 10 30 20 Q20 30 10 40 L0 50 Z"
                    fill="url(#goldGrad2)"
                    opacity="0.6"
                />
                <circle cx="25" cy="25" r="8" fill="url(#goldGrad2)" opacity="0.4" />
                <defs>
                    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A961" />
                        <stop offset="50%" stopColor="#E8D5A3" />
                        <stop offset="100%" stopColor="#C9A961" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Bottom Left */}
            <svg
                className="corner-ornament bottom-left glow-breathing"
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    d="M0 0 L50 0 Q40 10 30 20 Q20 30 10 40 L0 50 Z"
                    fill="url(#goldGrad3)"
                    opacity="0.6"
                />
                <circle cx="25" cy="25" r="8" fill="url(#goldGrad3)" opacity="0.4" />
                <defs>
                    <linearGradient id="goldGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A961" />
                        <stop offset="50%" stopColor="#E8D5A3" />
                        <stop offset="100%" stopColor="#C9A961" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Bottom Right */}
            <svg
                className="corner-ornament bottom-right glow-breathing"
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    d="M0 0 L50 0 Q40 10 30 20 Q20 30 10 40 L0 50 Z"
                    fill="url(#goldGrad4)"
                    opacity="0.6"
                />
                <circle cx="25" cy="25" r="8" fill="url(#goldGrad4)" opacity="0.4" />
                <defs>
                    <linearGradient id="goldGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A961" />
                        <stop offset="50%" stopColor="#E8D5A3" />
                        <stop offset="100%" stopColor="#C9A961" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}

// Animated Batik Background
export function AnimatedBatikBg() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Kawung Pattern */}
            <div className="absolute inset-0 kawung-pattern opacity-[0.04]" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

            {/* Radial gold accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
        </div>
    )
}

// Shimmer Overlay for cards/images
export function ShimmerOverlay() {
    return (
        <div className="absolute inset-0 shimmer-scan pointer-events-none" />
    )
}
