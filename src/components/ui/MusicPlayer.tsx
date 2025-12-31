'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Music } from 'lucide-react'
import { getMusicConfig, MusicConfig } from '@/lib/supabase'

interface MusicPlayerProps {
    autoPlay?: boolean  // Prop untuk mengontrol autoplay dari parent
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showPrompt, setShowPrompt] = useState(true)
    const [musicConfig, setMusicConfig] = useState<MusicConfig | null>(null)
    const [musicError, setMusicError] = useState(false)
    const [hasUserInteracted, setHasUserInteracted] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        async function fetchMusicConfig() {
            try {
                const config = await getMusicConfig()
                setMusicConfig(config)
            } catch (error) {
                console.error('Error fetching music config:', error)
            }
        }
        fetchMusicConfig()
    }, [])

    // Autoplay when component receives autoPlay prop and user has interacted
    useEffect(() => {
        if (autoPlay && musicConfig && audioRef.current && !musicError && !isPlaying) {
            // Attempt autoplay
            const playPromise = audioRef.current.play()
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true)
                        setShowPrompt(false)
                        setHasUserInteracted(true)
                    })
                    .catch((error) => {
                        // Autoplay was prevented, show the prompt
                        console.log('Autoplay prevented by browser:', error)
                        setShowPrompt(true)
                    })
            }
        }
    }, [autoPlay, musicConfig, musicError])

    useEffect(() => {
        // Auto-hide prompt after 8 seconds
        const timer = setTimeout(() => {
            setShowPrompt(false)
        }, 8000)

        return () => clearTimeout(timer)
    }, [])

    const toggleMusic = () => {
        if (audioRef.current && musicConfig) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play().catch(() => {
                    console.log('Autoplay prevented')
                })
            }
            setIsPlaying(!isPlaying)
            setShowPrompt(false)
            setHasUserInteracted(true)
        }
    }

    const handleMusicError = () => {
        setMusicError(true)
        console.log('Music file not found - please add music file')
    }

    const handleMusicCanPlay = () => {
        // Music is ready to play
        console.log('Music loaded and ready')
    }

    if (!musicConfig) {
        return null
    }

    return (
        <>
            {/* Audio Element with loop enabled */}
            <audio
                ref={audioRef}
                loop  // Musik akan mengulang otomatis setelah selesai
                onError={handleMusicError}
                onCanPlay={handleMusicCanPlay}
                preload="auto"
            >
                <source src={musicConfig.music_url} type="audio/mpeg" />
                <source src={musicConfig.music_url.replace('.mp3', '.ogg')} type="audio/ogg" />
            </audio>

            {/* Play Prompt - shown when autoplay is blocked */}
            {showPrompt && !isPlaying && !musicError && (
                <div className="fixed bottom-36 right-20 bg-white/95 dark:bg-dark-surface backdrop-blur-md rounded-lg shadow-lg p-3 z-40 animate-pulse max-w-[180px] border border-gold/20">
                    <p className="text-xs text-brown dark:text-dark-text">
                        🎵 Klik tombol musik untuk memutar lagu
                    </p>
                </div>
            )}

            {/* Music Error State */}
            {musicError && showPrompt && (
                <div className="fixed bottom-36 right-20 bg-yellow-50 dark:bg-yellow-900/30 backdrop-blur-md rounded-lg shadow-lg p-3 z-40 max-w-[200px] border border-yellow-200 dark:border-yellow-700">
                    <div className="flex items-start gap-2">
                        <Music size={14} className="text-yellow-600 mt-0.5" />
                        <p className="text-[10px] text-yellow-800 dark:text-yellow-200">
                            File musik belum ada. Tambahkan di: <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded text-[9px]">{musicConfig.music_url}</code>
                        </p>
                    </div>
                </div>
            )}

            {/* Music Button */}
            <button
                onClick={toggleMusic}
                className={`music-btn ${musicError ? 'opacity-50' : ''} ${isPlaying ? 'ring-2 ring-gold ring-offset-2' : ''}`}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
                title={musicConfig.music_title || 'Wedding Music'}
            >
                {isPlaying ? (
                    <Volume2 size={22} className="animate-pulse" />
                ) : (
                    <VolumeX size={22} />
                )}
            </button>
        </>
    )
}

