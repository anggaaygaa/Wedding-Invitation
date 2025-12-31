interface JavaneseOrnamentProps {
    className?: string
    variant?: 'top' | 'bottom' | 'divider' | 'corner' | 'frame' | 'batik' | 'wayang' | 'keris'
}

export default function JavaneseOrnament({ className = '', variant = 'divider' }: JavaneseOrnamentProps) {

    // Elegant divider with Javanese floral motif
    if (variant === 'divider') {
        return (
            <div className={`flex items-center justify-center gap-2 py-4 ${className}`}>
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-gold">
                    <path d="M0 10 Q15 0, 30 10 T60 10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gold"
                >
                    {/* Javanese Lotus/Padma flower */}
                    <ellipse cx="25" cy="25" rx="8" ry="5" fill="currentColor" fillOpacity="0.3" />
                    <path d="M25 20 Q28 15, 25 8 Q22 15, 25 20" fill="currentColor" fillOpacity="0.8" />
                    <path d="M25 30 Q28 35, 25 42 Q22 35, 25 30" fill="currentColor" fillOpacity="0.8" />
                    <path d="M18 25 Q13 22, 6 25 Q13 28, 18 25" fill="currentColor" fillOpacity="0.8" />
                    <path d="M32 25 Q37 22, 44 25 Q37 28, 32 25" fill="currentColor" fillOpacity="0.8" />
                    <path d="M19 19 Q14 14, 10 10 Q17 16, 19 19" fill="currentColor" fillOpacity="0.6" />
                    <path d="M31 19 Q36 14, 40 10 Q33 16, 31 19" fill="currentColor" fillOpacity="0.6" />
                    <path d="M19 31 Q14 36, 10 40 Q17 34, 19 31" fill="currentColor" fillOpacity="0.6" />
                    <path d="M31 31 Q36 36, 40 40 Q33 34, 31 31" fill="currentColor" fillOpacity="0.6" />
                    <circle cx="25" cy="25" r="4" fill="currentColor" />
                </svg>
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-gold">
                    <path d="M0 10 Q15 0, 30 10 T60 10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                </svg>
            </div>
        )
    }

    // Top decorative border with Javanese kawung pattern
    if (variant === 'top') {
        return (
            <div className={`w-full overflow-hidden h-24 ${className}`}>
                <svg
                    viewBox="0 0 800 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-gold"
                    preserveAspectRatio="xMidYMax slice"
                >
                    {/* Kawung pattern circles */}
                    <defs>
                        <pattern id="kawungTop" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <ellipse cx="20" cy="10" rx="8" ry="5" fill="currentColor" fillOpacity="0.15" />
                            <ellipse cx="10" cy="20" rx="5" ry="8" fill="currentColor" fillOpacity="0.15" />
                            <ellipse cx="30" cy="20" rx="5" ry="8" fill="currentColor" fillOpacity="0.15" />
                            <ellipse cx="20" cy="30" rx="8" ry="5" fill="currentColor" fillOpacity="0.15" />
                            <circle cx="20" cy="20" r="3" fill="currentColor" fillOpacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="800" height="100" fill="url(#kawungTop)" />

                    {/* Bottom curved border */}
                    <path d="M0 90 Q100 70, 200 85 T400 80 T600 85 T800 90 L800 100 L0 100 Z" fill="white" />

                    {/* Decorative line */}
                    <path d="M200 85 Q300 75, 400 80 Q500 75, 600 85" stroke="currentColor" strokeWidth="2" fill="none" />

                    {/* Center ornament */}
                    <circle cx="400" cy="78" r="6" fill="currentColor" />
                    <circle cx="400" cy="78" r="3" fill="white" />
                </svg>
            </div>
        )
    }

    // Bottom decorative border
    if (variant === 'bottom') {
        return (
            <div className={`w-full overflow-hidden h-24 ${className}`}>
                <svg
                    viewBox="0 0 800 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-gold"
                    preserveAspectRatio="xMidYMin slice"
                >
                    {/* Kawung pattern */}
                    <defs>
                        <pattern id="kawungBottom" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <ellipse cx="20" cy="10" rx="8" ry="5" fill="currentColor" fillOpacity="0.15" />
                            <ellipse cx="10" cy="20" rx="5" ry="8" fill="currentColor" fillOpacity="0.15" />
                            <ellipse cx="30" cy="20" rx="5" ry="8" fill="currentColor" fillOpacity="0.15" />
                            <ellipse cx="20" cy="30" rx="8" ry="5" fill="currentColor" fillOpacity="0.15" />
                            <circle cx="20" cy="20" r="3" fill="currentColor" fillOpacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="800" height="100" fill="url(#kawungBottom)" />

                    {/* Top curved border */}
                    <path d="M0 10 Q100 30, 200 15 T400 20 T600 15 T800 10 L800 0 L0 0 Z" fill="white" />

                    {/* Decorative line */}
                    <path d="M200 15 Q300 25, 400 20 Q500 25, 600 15" stroke="currentColor" strokeWidth="2" fill="none" />

                    {/* Center ornament */}
                    <circle cx="400" cy="22" r="6" fill="currentColor" />
                    <circle cx="400" cy="22" r="3" fill="white" />
                </svg>
            </div>
        )
    }

    // Corner ornament with Javanese ukiran style
    if (variant === 'corner') {
        return (
            <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-gold ${className}`}
            >
                {/* Javanese curved carving motif */}
                <path
                    d="M0 0 
             C20 0, 30 5, 35 15 
             Q40 25, 35 35 
             Q30 45, 20 45
             Q10 45, 5 35
             Q0 25, 0 0"
                    fill="currentColor"
                    fillOpacity="0.2"
                />
                <path
                    d="M0 0 
             C15 2, 22 8, 25 18 
             Q28 28, 22 35"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                />
                {/* Spiral accent */}
                <path
                    d="M15 20 Q18 22, 18 26 Q18 30, 14 30 Q10 30, 10 26"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                />
                {/* Small decorative dots */}
                <circle cx="8" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="8" r="1.5" fill="currentColor" fillOpacity="0.6" />
                <circle cx="20" cy="15" r="1.5" fill="currentColor" fillOpacity="0.6" />
            </svg>
        )
    }

    // Full frame with Javanese border
    if (variant === 'frame') {
        return (
            <div className={`absolute inset-0 pointer-events-none ${className}`}>
                {/* Top left corner */}
                <div className="absolute top-4 left-4">
                    <JavaneseOrnament variant="corner" />
                </div>
                {/* Top right corner */}
                <div className="absolute top-4 right-4 -scale-x-100">
                    <JavaneseOrnament variant="corner" />
                </div>
                {/* Bottom left corner */}
                <div className="absolute bottom-4 left-4 -scale-y-100">
                    <JavaneseOrnament variant="corner" />
                </div>
                {/* Bottom right corner */}
                <div className="absolute bottom-4 right-4 scale-x-[-1] scale-y-[-1]">
                    <JavaneseOrnament variant="corner" />
                </div>

                {/* Border lines */}
                <div className="absolute top-8 left-24 right-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="absolute bottom-8 left-24 right-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="absolute left-8 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                <div className="absolute right-8 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </div>
        )
    }

    // Batik Parang pattern
    if (variant === 'batik') {
        return (
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-gold ${className}`}
            >
                <defs>
                    <pattern id="parang" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                        {/* Parang motif - diagonal S curves */}
                        <path
                            d="M0 25 Q6 20, 12.5 12.5 Q19 5, 25 0"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            opacity="0.4"
                        />
                        <path
                            d="M0 12.5 Q6 7.5, 12.5 0"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.3"
                        />
                        {/* Small accent */}
                        <circle cx="12.5" cy="12.5" r="2" fill="currentColor" fillOpacity="0.2" />
                    </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#parang)" />
            </svg>
        )
    }

    // Wayang silhouette
    if (variant === 'wayang') {
        return (
            <svg
                width="80"
                height="120"
                viewBox="0 0 80 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-gold ${className}`}
            >
                {/* Simplified wayang head with crown */}
                <ellipse cx="40" cy="25" rx="15" ry="18" fill="currentColor" fillOpacity="0.15" />
                {/* Crown/mahkota */}
                <path d="M25 18 L30 5 L35 15 L40 2 L45 15 L50 5 L55 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
                {/* Face features */}
                <ellipse cx="40" cy="28" rx="10" ry="12" fill="currentColor" fillOpacity="0.2" />
                {/* Body */}
                <path d="M30 45 Q40 50, 50 45 L55 80 Q40 85, 25 80 Z" fill="currentColor" fillOpacity="0.15" />
                {/* Arms */}
                <path d="M25 50 Q15 60, 10 80 Q15 85, 20 80 Q25 65, 30 55" fill="currentColor" fillOpacity="0.1" />
                <path d="M55 50 Q65 60, 70 80 Q65 85, 60 80 Q55 65, 50 55" fill="currentColor" fillOpacity="0.1" />
                {/* Kain/sarong */}
                <path d="M25 80 Q40 90, 55 80 L60 115 Q40 120, 20 115 Z" fill="currentColor" fillOpacity="0.2" />
                {/* Decorative lines */}
                <path d="M35 60 L45 60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <path d="M35 70 L45 70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            </svg>
        )
    }

    // Keris ornament
    if (variant === 'keris') {
        return (
            <svg
                width="30"
                height="80"
                viewBox="0 0 30 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-gold ${className}`}
            >
                {/* Handle/hulu */}
                <ellipse cx="15" cy="10" rx="8" ry="6" fill="currentColor" fillOpacity="0.3" />
                <rect x="12" y="14" width="6" height="10" rx="2" fill="currentColor" fillOpacity="0.4" />
                {/* Guard/ganja */}
                <ellipse cx="15" cy="26" rx="10" ry="3" fill="currentColor" fillOpacity="0.5" />
                {/* Wavy blade/bilah */}
                <path
                    d="M15 29 
             Q18 35, 14 42 
             Q10 49, 16 56 
             Q22 63, 14 70
             Q12 72, 15 75
             Q18 72, 16 70
             Q24 63, 18 56
             Q12 49, 18 42
             Q22 35, 15 29"
                    fill="currentColor"
                    fillOpacity="0.6"
                />
                {/* Center line */}
                <path d="M15 29 L15 75" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            </svg>
        )
    }

    return null
}

// Batik background pattern component
export function BatikBackground({ className = '' }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="batikBg" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        {/* Kawung pattern */}
                        <ellipse cx="30" cy="15" rx="12" ry="8" fill="#C9A961" fillOpacity="0.04" />
                        <ellipse cx="15" cy="30" rx="8" ry="12" fill="#C9A961" fillOpacity="0.04" />
                        <ellipse cx="45" cy="30" rx="8" ry="12" fill="#C9A961" fillOpacity="0.04" />
                        <ellipse cx="30" cy="45" rx="12" ry="8" fill="#C9A961" fillOpacity="0.04" />
                        <circle cx="30" cy="30" r="4" fill="#C9A961" fillOpacity="0.06" />
                        {/* Small accent dots */}
                        <circle cx="30" cy="30" r="1.5" fill="#C9A961" fillOpacity="0.1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#batikBg)" />
            </svg>
        </div>
    )
}

// Floating melati (jasmine) flowers
export function FloatingMelati({ className = '' }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Melati flower 1 */}
            <svg className="absolute top-[10%] left-[5%] w-8 h-8 text-gold/20 animate-float" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="4" fill="currentColor" />
                <ellipse cx="15" cy="8" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="15" cy="22" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="8" cy="15" rx="5" ry="3" fill="currentColor" />
                <ellipse cx="22" cy="15" rx="5" ry="3" fill="currentColor" />
            </svg>

            {/* Melati flower 2 */}
            <svg className="absolute top-[20%] right-[10%] w-6 h-6 text-gold/15 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="4" fill="currentColor" />
                <ellipse cx="15" cy="8" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="15" cy="22" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="8" cy="15" rx="5" ry="3" fill="currentColor" />
                <ellipse cx="22" cy="15" rx="5" ry="3" fill="currentColor" />
            </svg>

            {/* Melati flower 3 */}
            <svg className="absolute top-[60%] left-[8%] w-5 h-5 text-gold/10 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="4" fill="currentColor" />
                <ellipse cx="15" cy="8" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="15" cy="22" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="8" cy="15" rx="5" ry="3" fill="currentColor" />
                <ellipse cx="22" cy="15" rx="5" ry="3" fill="currentColor" />
            </svg>

            {/* Melati flower 4 */}
            <svg className="absolute top-[70%] right-[5%] w-7 h-7 text-gold/15 animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="4" fill="currentColor" />
                <ellipse cx="15" cy="8" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="15" cy="22" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="8" cy="15" rx="5" ry="3" fill="currentColor" />
                <ellipse cx="22" cy="15" rx="5" ry="3" fill="currentColor" />
            </svg>

            {/* Melati flower 5 */}
            <svg className="absolute top-[40%] right-[15%] w-4 h-4 text-gold/10 animate-float" style={{ animationDelay: '4s' }} viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="4" fill="currentColor" />
                <ellipse cx="15" cy="8" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="15" cy="22" rx="3" ry="5" fill="currentColor" />
                <ellipse cx="8" cy="15" rx="5" ry="3" fill="currentColor" />
                <ellipse cx="22" cy="15" rx="5" ry="3" fill="currentColor" />
            </svg>
        </div>
    )
}
