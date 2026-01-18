'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Gift, Copy, Check, CreditCard, QrCode, Smartphone, Scroll } from 'lucide-react'
import Image from 'next/image'
import NarutoOrnament, { NarutoCloudBackground, SealPatternBackground } from '../ui/NarutoOrnament'
import { ShurikenDecoration, FuinjutsuSeal, KonohaLeaf, KunaiDecoration } from '../ui/NarutoDecorations'
import { getGiftAccounts, GiftAccount } from '@/lib/supabase'

function BankCard({ account }: { account: GiftAccount }) {
    const [copied, setCopied] = useState(false)
    const [showQris, setShowQris] = useState(false)
    const [qrisError, setQrisError] = useState(false)

    const copyToClipboard = async () => {
        if (!account.account_number) return
        try {
            await navigator.clipboard.writeText(account.account_number)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy:', error)
        }
    }

    const isQrisOnly = account.qris_image_url && !account.account_number
    const hasQris = Boolean(account.qris_image_url)

    return (
        <div className="bg-white rounded-xl p-5 border border-gold/10 card-hover">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    {isQrisOnly ? (
                        <Smartphone size={20} className="text-gold" />
                    ) : (
                        <CreditCard size={20} className="text-gold" />
                    )}
                </div>
                <div className="flex-1">
                    <p className="text-brown font-semibold">{account.bank_name}</p>
                    <p className="text-brown/60 text-sm">{account.account_name}</p>
                </div>
                {hasQris && !isQrisOnly && (
                    <button
                        onClick={() => setShowQris(!showQris)}
                        className="p-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
                        title="Tampilkan QRIS"
                    >
                        <QrCode size={18} />
                    </button>
                )}
            </div>

            {/* Bank Account Number */}
            {account.account_number && (
                <div className="flex items-center justify-between bg-ivory rounded-lg p-3 mb-3">
                    <span className="text-brown font-mono font-medium tracking-wider">
                        {account.account_number}
                    </span>
                    <button
                        onClick={copyToClipboard}
                        className={`p-2 rounded-lg transition-all ${copied
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gold/10 text-gold hover:bg-gold/20'
                            }`}
                        title="Salin nomor rekening"
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                </div>
            )}

            {copied && (
                <p className="text-green-600 text-xs mb-2 text-center animate-fade-in">
                    Nomor rekening berhasil disalin!
                </p>
            )}

            {/* QRIS Section */}
            {(showQris || isQrisOnly) && hasQris && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3"
                >
                    <div className="bg-white border border-gold/20 rounded-xl p-4 text-center">
                        <p className="text-brown/70 text-sm mb-3">Scan QRIS untuk pembayaran</p>
                        <div className="relative w-48 h-48 mx-auto bg-ivory rounded-lg overflow-hidden">
                            {qrisError ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <QrCode size={48} className="text-gold/30 mb-2" />
                                    <p className="text-brown/40 text-xs">QRIS akan ditambahkan</p>
                                </div>
                            ) : (
                                <Image
                                    src={account.qris_image_url || ''}
                                    alt="QRIS Code"
                                    fill
                                    className="object-contain p-2"
                                    onError={() => setQrisError(true)}
                                />
                            )}
                        </div>
                        <p className="text-brown/50 text-xs mt-3 italic">
                            Dana • OVO • GoPay • ShopeePay • LinkAja
                        </p>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default function GiftSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [accounts, setAccounts] = useState<GiftAccount[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchAccounts() {
            try {
                const data = await getGiftAccounts()
                setAccounts(data)
            } catch (error) {
                console.error('Error fetching gift accounts:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchAccounts()
    }, [])

    return (
        <section id="gift" className="py-16 md:py-20 px-4 md:px-6 bg-ivory dark:bg-dark-bg relative overflow-hidden">
            {/* Cloud background */}
            <NarutoCloudBackground />

            {/* Corner seals */}
            <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
                <FuinjutsuSeal className="w-20 h-20 animate-spin-slow" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
                <FuinjutsuSeal className="w-20 h-20 animate-spin-slow [animation-direction:reverse]" />
            </div>

            {/* Top Ornament */}
            <div className="absolute top-0 left-0 right-0">
                <NarutoOrnament variant="top" />
            </div>

            <div className="max-w-2xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-10"
                >
                    <div className="w-16 h-16 rounded-full bg-naruto-orange/10 flex items-center justify-center mx-auto mb-4">
                        <ShurikenDecoration className="w-10 h-10 opacity-60 animate-spin-slow" />
                    </div>
                    <p className="text-naruto-orange text-sm tracking-[0.2em] uppercase mb-2">
                        🎁 Hadiah
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-brown dark:text-cream mb-3">
                        Amplop Digital
                    </h2>
                    <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />

                    <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto mt-6 text-sm md:text-base">
                        Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin
                        memberikan tanda kasih ninja dapat melalui: 🍥
                    </p>
                </motion.div>

                {/* Rasengan-style Loading State */}
                {loading && (
                    <div className="flex flex-col justify-center items-center py-8">
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 rounded-full border-4 border-chakra-blue/30 animate-spin" />
                            <div className="absolute inset-2 rounded-full border-4 border-chakra-blue/50 animate-spin [animation-direction:reverse]" />
                            <div className="absolute inset-4 rounded-full bg-chakra-blue/60 animate-pulse" />
                        </div>
                        <p className="text-brown/50 dark:text-cream/50 text-sm mt-4">Memuat...</p>
                    </div>
                )}

                {/* Bank Accounts & QRIS */}
                {!loading && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {accounts.map((account, index) => (
                            <motion.div
                                key={account.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                <BankCard account={account} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}


            </div>

            {/* Bottom Ornament */}
            <div className="absolute bottom-0 left-0 right-0">
                <NarutoOrnament variant="bottom" />
            </div>
        </section>
    )
}
