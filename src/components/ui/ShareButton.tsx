'use client'

import { useState } from 'react'
import { Share2, MessageCircle, Copy, Check, X, Link } from 'lucide-react'

interface ShareButtonProps {
    guestName?: string
}

export default function ShareButton({ guestName }: ShareButtonProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    const shareUrl = guestName
        ? `${baseUrl}?to=${encodeURIComponent(guestName)}`
        : baseUrl

    const shareText = `Assalamu'alaikum Wr. Wb.\n\nKami mengundang Bapak/Ibu/Saudara/i${guestName ? ` *${guestName}*` : ''} untuk hadir dalam acara pernikahan kami:\n\n*Eko & Keke*\n📅 Sabtu, 28 Maret 2026\n📍 Dusun Prokimal, Kec. Lekok, Kab. Pasuruan\n\nUntuk informasi lebih lanjut, silakan buka undangan digital kami:\n${shareUrl}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.\n\nTerima kasih.\nWassalamu'alaikum Wr. Wb.`

    const shareToWhatsApp = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`
        window.open(whatsappUrl, '_blank')
        setIsOpen(false)
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy:', error)
        }
    }

    const copyMessage = async () => {
        try {
            await navigator.clipboard.writeText(shareText)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy:', error)
        }
    }

    return (
        <>
            {/* Floating Share Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-52 right-6 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
                aria-label="Share invitation"
            >
                <Share2 size={22} />
            </button>

            {/* Share Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-serif text-xl text-gray-900 dark:text-white">Bagikan Undangan</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Share Options */}
                        <div className="space-y-3">
                            {/* WhatsApp */}
                            <button
                                onClick={shareToWhatsApp}
                                className="w-full flex items-center gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-900 dark:text-white font-medium">WhatsApp</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Kirim via WhatsApp</p>
                                </div>
                            </button>

                            {/* Copy Link */}
                            <button
                                onClick={copyLink}
                                className="w-full flex items-center gap-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/30 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    {copied ? <Check size={24} /> : <Link size={24} />}
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-900 dark:text-white font-medium">
                                        {copied ? 'Tersalin!' : 'Salin Link'}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm truncate max-w-[180px]">
                                        {shareUrl}
                                    </p>
                                </div>
                            </button>

                            {/* Copy Message */}
                            <button
                                onClick={copyMessage}
                                className="w-full flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <Copy size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-900 dark:text-white font-medium">Salin Pesan</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Salin teks undangan lengkap</p>
                                </div>
                            </button>
                        </div>

                        {/* Note */}
                        <p className="text-center text-gray-500 dark:text-gray-400 text-xs mt-6">
                            Bagikan undangan ini kepada tamu yang diundang
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

