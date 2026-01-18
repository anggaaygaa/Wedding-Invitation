'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Send, MessageCircle, Scroll } from 'lucide-react'
import NarutoOrnament, { NarutoCloudBackground, SealPatternBackground } from '../ui/NarutoOrnament'
import { ShurikenDecoration, KonohaLeaf, FuinjutsuSeal, KunaiDecoration } from '../ui/NarutoDecorations'
import { Wish, submitWish, getWishes, subscribeToWishes } from '@/lib/supabase'

// Demo wishes for display before Supabase is connected
const demoWishes: Wish[] = [
    {
        id: '1',
        name: 'Budi Santoso',
        message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin.',
        created_at: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Siti Rahayu',
        message: 'Barakallahu lakuma wa baraka alaikuma wa jamaah bainakuma fi khair. Semoga langgeng sampai Jannah!',
        created_at: new Date(Date.now() - 3600000).toISOString(),
    },
    {
        id: '3',
        name: 'Ahmad Fauzi',
        message: 'Congrats Eko & Keke! Semoga pernikahan kalian diberkahi Allah SWT. Happy wedding!',
        created_at: new Date(Date.now() - 7200000).toISOString(),
    },
]

function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

export default function WishesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const [wishes, setWishes] = useState<Wish[]>(demoWishes)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        // Load wishes from Supabase
        const loadWishes = async () => {
            try {
                const data = await getWishes()
                if (data && data.length > 0) {
                    setWishes(data)
                }
            } catch (error) {
                console.log('Using demo wishes - Supabase not connected')
            }
        }

        loadWishes()

        // Subscribe to realtime updates
        const unsubscribe = subscribeToWishes((newWishes) => {
            setWishes(newWishes)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!name.trim() || !message.trim()) {
            alert('Mohon isi nama dan ucapan Anda')
            return
        }

        setIsSubmitting(true)

        try {
            await submitWish({ name, message })
            setName('')
            setMessage('')
        } catch (error) {
            // If Supabase is not connected, add to local state
            const newWish: Wish = {
                id: Date.now().toString(),
                name,
                message,
                created_at: new Date().toISOString(),
            }
            setWishes([newWish, ...wishes])
            setName('')
            setMessage('')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="wishes" className="py-16 md:py-20 px-4 md:px-6 bg-cream dark:bg-dark-bg relative overflow-hidden">
            {/* Cloud background pattern */}
            <NarutoCloudBackground />

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
                <FuinjutsuSeal className="w-24 h-24 animate-spin-slow" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
                <FuinjutsuSeal className="w-24 h-24 animate-spin-slow [animation-direction:reverse]" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-10"
                >
                    <div className="flex justify-center mb-4">
                        <ShurikenDecoration className="w-10 h-10 opacity-40 animate-spin-slow" />
                    </div>
                    <p className="text-naruto-orange text-sm tracking-[0.2em] uppercase mb-2">
                        💬 Ucapan & Doa
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-brown dark:text-cream mb-3">
                        Kirim Ucapan
                    </h2>
                    <NarutoOrnament variant="divider" className="max-w-xs mx-auto" />

                    <p className="text-brown/70 dark:text-cream/70 max-w-lg mx-auto mt-6 text-sm md:text-base">
                        Berikan doa dan ucapan terbaik untuk kedua mempelai - &ldquo;Believe it!&rdquo; 🍥
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Wish Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-naruto-orange/20 shadow-lg"
                        >
                            <h3 className="font-serif text-xl text-brown dark:text-cream mb-6 flex items-center gap-2">
                                <MessageCircle size={20} className="text-naruto-orange" />
                                Tulis Ucapan
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="wishName" className="block text-brown text-sm font-medium mb-2">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="wishName"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="input-field"
                                        placeholder="Nama Anda"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="wishMessage" className="block text-brown text-sm font-medium mb-2">
                                        Ucapan & Doa
                                    </label>
                                    <textarea
                                        id="wishMessage"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="input-field min-h-[120px] resize-none"
                                        placeholder="Tulis ucapan dan doa terbaik Anda..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Kirim Ucapan
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Wishes List */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-naruto-orange/20 shadow-lg max-h-[500px] overflow-y-auto"
                    >
                        <h3 className="font-serif text-xl text-brown dark:text-cream mb-6">
                            Ucapan Tamu ({wishes.length})
                        </h3>

                        <div className="space-y-4">
                            {wishes.map((wish, index) => (
                                <motion.div
                                    key={wish.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-cream dark:bg-dark-card rounded-xl p-4 border border-naruto-orange/10"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-naruto-orange to-naruto-orange-dark flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white font-semibold text-sm">
                                                {wish.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-2 mb-1">
                                                <h4 className="text-brown dark:text-cream font-medium text-sm truncate">
                                                    {wish.name}
                                                </h4>
                                                <span className="text-brown/40 dark:text-cream/40 text-xs whitespace-nowrap">
                                                    {wish.created_at && formatDate(wish.created_at)}
                                                </span>
                                            </div>
                                            <p className="text-brown/70 dark:text-cream/70 text-sm leading-relaxed">
                                                {wish.message}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
