'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

interface CountdownTimerProps {
    targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime()

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                }
            }

            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    if (!mounted) {
        return null
    }

    const timeBlocks = [
        { value: timeLeft.days, label: 'Hari' },
        { value: timeLeft.hours, label: 'Jam' },
        { value: timeLeft.minutes, label: 'Menit' },
        { value: timeLeft.seconds, label: 'Detik' },
    ]

    return (
        <div className="flex gap-3 md:gap-4 justify-center items-center">
            {timeBlocks.map((block, index) => (
                <div key={index} className="flex items-center">
                    <div className="countdown-premium group glow-ring">
                        <div className="text-2xl md:text-4xl font-bold gold-text font-serif transition-transform group-hover:scale-110">
                            {block.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs md:text-sm text-brown/60 dark:text-cream/60 mt-1 uppercase tracking-wider">
                            {block.label}
                        </div>
                    </div>
                    {/* Animated separator */}
                    {index < timeBlocks.length - 1 && (
                        <div className="mx-1 md:mx-2 flex flex-col gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-pulse" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
