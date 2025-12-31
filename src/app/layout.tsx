import type { Metadata } from 'next'
import { Playfair_Display, Poppins, Satisfy } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

const satisfy = Satisfy({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-satisfy',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Undangan Pernikahan - Eko & Keke',
    description: 'Undangan pernikahan Achmad Eko Wahyu Prasetyo & Keke Putri Yunindia - 28 Maret 2026',
    keywords: ['undangan', 'pernikahan', 'wedding', 'eko', 'keke'],
    authors: [{ name: 'Wedding Invitation' }],
    openGraph: {
        title: 'Undangan Pernikahan - Eko & Keke',
        description: 'Kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id" className={`${playfair.variable} ${poppins.variable} ${satisfy.variable}`}>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    )
}
