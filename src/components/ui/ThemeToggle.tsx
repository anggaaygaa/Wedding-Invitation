'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'

type ThemeMode = 'system' | 'light' | 'dark'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<ThemeMode>('system')
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Get actual theme based on system preference
    const getSystemTheme = () => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
        return 'light'
    }

    // Apply theme to document
    const applyTheme = (mode: ThemeMode) => {
        const root = document.documentElement
        const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (mode === 'system') {
            // Follow system preference but still add dark/light class for Tailwind
            root.classList.remove('theme-light', 'theme-dark')
            root.removeAttribute('data-theme')

            if (systemIsDark) {
                root.classList.remove('light')
                root.classList.add('dark')
            } else {
                root.classList.remove('dark')
                root.classList.add('light')
            }
        } else if (mode === 'dark') {
            root.classList.remove('light', 'theme-light')
            root.classList.add('dark', 'theme-dark')
            root.setAttribute('data-theme', 'dark')
        } else { // mode === 'light'
            root.classList.remove('dark', 'theme-dark')
            root.classList.add('light', 'theme-light')
            root.setAttribute('data-theme', 'light')
        }
    }

    // Initialize theme from localStorage
    useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem('theme') as ThemeMode | null
        if (savedTheme) {
            setTheme(savedTheme)
            applyTheme(savedTheme)
        }

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system')
            }
        }
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [theme])

    // Handle theme change
    const handleThemeChange = (newTheme: ThemeMode) => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
        setIsOpen(false)
    }

    // Current displayed icon
    const getCurrentIcon = () => {
        if (theme === 'system') {
            return <Monitor size={20} />
        } else if (theme === 'dark') {
            return <Moon size={20} />
        }
        return <Sun size={20} />
    }

    if (!mounted) return null

    return (
        <div className="fixed bottom-36 right-6 z-50">
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                whileTap={{ scale: 0.9 }}
                title="Ganti Tema"
            >
                {getCurrentIcon()}
            </motion.button>

            {/* Theme Options */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute bottom-16 right-0 bg-white dark:bg-dark-surface rounded-xl shadow-xl border border-gold/20 overflow-hidden min-w-[140px]"
                    >
                        <button
                            onClick={() => handleThemeChange('system')}
                            className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gold/10 transition-colors ${theme === 'system' ? 'bg-gold/20 text-gold' : 'text-brown dark:text-dark-text'
                                }`}
                        >
                            <Monitor size={18} />
                            <span className="text-sm font-medium">Sistem</span>
                        </button>
                        <button
                            onClick={() => handleThemeChange('light')}
                            className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gold/10 transition-colors ${theme === 'light' ? 'bg-gold/20 text-gold' : 'text-brown dark:text-dark-text'
                                }`}
                        >
                            <Sun size={18} />
                            <span className="text-sm font-medium">Terang</span>
                        </button>
                        <button
                            onClick={() => handleThemeChange('dark')}
                            className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gold/10 transition-colors ${theme === 'dark' ? 'bg-gold/20 text-gold' : 'text-brown dark:text-dark-text'
                                }`}
                        >
                            <Moon size={18} />
                            <span className="text-sm font-medium">Gelap</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
