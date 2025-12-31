import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Check if Supabase is configured
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey

// Create client only if configured, otherwise null
export const supabase: SupabaseClient | null = isSupabaseConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Types for our database
export interface RSVP {
    id?: string
    name: string
    attendance: 'hadir' | 'tidak_hadir'
    guests_count: number
    message?: string
    created_at?: string
}

export interface Wish {
    id?: string
    name: string
    message: string
    created_at?: string
}

// RSVP Functions
export async function submitRSVP(data: Omit<RSVP, 'id' | 'created_at'>) {
    if (!supabase) {
        console.log('Supabase not configured - RSVP saved locally:', data)
        return [{ ...data, id: Date.now().toString(), created_at: new Date().toISOString() }]
    }

    const { data: result, error } = await supabase
        .from('rsvp')
        .insert([data])
        .select()

    if (error) throw error
    return result
}

export async function getRSVPs() {
    if (!supabase) {
        console.log('Supabase not configured - returning empty RSVPs')
        return []
    }

    const { data, error } = await supabase
        .from('rsvp')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data
}

// Wishes Functions
export async function submitWish(data: Omit<Wish, 'id' | 'created_at'>) {
    if (!supabase) {
        console.log('Supabase not configured - Wish saved locally:', data)
        return [{ ...data, id: Date.now().toString(), created_at: new Date().toISOString() }]
    }

    const { data: result, error } = await supabase
        .from('wishes')
        .insert([data])
        .select()

    if (error) throw error
    return result
}

export async function getWishes() {
    if (!supabase) {
        console.log('Supabase not configured - returning empty wishes')
        return []
    }

    const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data
}

// Real-time subscription for wishes
export function subscribeToWishes(callback: (wishes: Wish[]) => void) {
    if (!supabase) {
        console.log('Supabase not configured - realtime disabled')
        return () => { } // Return empty cleanup function
    }

    const channel = supabase
        .channel('wishes-channel')
        .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'wishes' },
            async () => {
                const wishes = await getWishes()
                callback(wishes || [])
            }
        )
        .subscribe()

    return () => {
        supabase.removeChannel(channel)
    }
}

// ============================================
// GALLERY PHOTOS
// ============================================
export interface GalleryPhoto {
    id?: string
    image_url: string
    alt_text: string
    order_index: number
    is_active: boolean
    created_at?: string
}

// Default photos when Supabase is not configured
const defaultGalleryPhotos: GalleryPhoto[] = [
    { id: '1', image_url: '/images/gallery/photo-1.jpg', alt_text: 'Prewedding 1', order_index: 1, is_active: true },
    { id: '2', image_url: '/images/gallery/photo-2.jpg', alt_text: 'Prewedding 2', order_index: 2, is_active: true },
    { id: '3', image_url: '/images/gallery/photo-3.jpg', alt_text: 'Prewedding 3', order_index: 3, is_active: true },
    { id: '4', image_url: '/images/gallery/photo-4.jpg', alt_text: 'Prewedding 4', order_index: 4, is_active: true },
    { id: '5', image_url: '/images/gallery/photo-5.jpg', alt_text: 'Prewedding 5', order_index: 5, is_active: true },
    { id: '6', image_url: '/images/gallery/photo-6.jpg', alt_text: 'Prewedding 6', order_index: 6, is_active: true },
]

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
    if (!supabase) {
        console.log('Supabase not configured - returning default gallery photos')
        return defaultGalleryPhotos
    }

    const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true })

    if (error) {
        console.error('Error fetching gallery:', error)
        return defaultGalleryPhotos
    }
    return data || defaultGalleryPhotos
}

// ============================================
// GIFT ACCOUNTS (with QRIS support)
// ============================================
export interface GiftAccount {
    id?: string
    bank_name: string
    account_number: string
    account_name: string
    qris_image_url?: string // URL to QRIS barcode image
    is_active: boolean
    order_index: number
    created_at?: string
}

// Default gift accounts when Supabase is not configured
const defaultGiftAccounts: GiftAccount[] = [
    {
        id: '1',
        bank_name: 'Bank BCA',
        account_number: '1234567890',
        account_name: 'Achmad Eko Wahyu Prasetyo',
        qris_image_url: '',
        is_active: true,
        order_index: 1,
    },
    {
        id: '2',
        bank_name: 'Bank Mandiri',
        account_number: '0987654321',
        account_name: 'Keke Putri Yunindia',
        qris_image_url: '',
        is_active: true,
        order_index: 2,
    },
    {
        id: '3',
        bank_name: 'QRIS (Dana/OVO/GoPay)',
        account_number: '',
        account_name: 'Eko & Keke',
        qris_image_url: '/images/qris-placeholder.png', // Placeholder for QRIS
        is_active: true,
        order_index: 3,
    },
]

export async function getGiftAccounts(): Promise<GiftAccount[]> {
    if (!supabase) {
        console.log('Supabase not configured - returning default gift accounts')
        return defaultGiftAccounts
    }

    const { data, error } = await supabase
        .from('gift_accounts')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true })

    if (error) {
        console.error('Error fetching gift accounts:', error)
        return defaultGiftAccounts
    }
    return data || defaultGiftAccounts
}

// ============================================
// MUSIC CONFIG
// ============================================
export interface MusicConfig {
    id?: string
    music_url: string
    music_title: string
    is_active: boolean
    created_at?: string
}

// Default music config
const defaultMusicConfig: MusicConfig = {
    id: '1',
    music_url: '/audio/wedding-music.mp3',
    music_title: 'Wedding Music',
    is_active: true,
}

export async function getMusicConfig(): Promise<MusicConfig> {
    if (!supabase) {
        console.log('Supabase not configured - returning default music config')
        return defaultMusicConfig
    }

    const { data, error } = await supabase
        .from('music_config')
        .select('*')
        .eq('is_active', true)
        .limit(1)
        .single()

    if (error) {
        console.error('Error fetching music config:', error)
        return defaultMusicConfig
    }
    return data || defaultMusicConfig
}

