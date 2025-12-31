# Wedding Invitation Website

Website undangan pernikahan elektronik dengan tema adat Jawa modern untuk **Achmad Eko Wahyu Prasetyo & Keke Putri Yunindia**.

## 🎨 Features

- ✅ Responsive design (Mobile-first)
- ✅ Modern UI dengan tema adat Jawa
- ✅ Countdown timer ke hari H
- ✅ RSVP form dengan database
- ✅ Guestbook ucapan real-time
- ✅ Amplop digital + QRIS barcode
- ✅ Gallery foto dinamis dari database
- ✅ Google Maps integration
- ✅ Background music player (dinamis)
- ✅ WhatsApp share button
- ✅ Guest name personalization (?to=Nama)
- ✅ Love story timeline
- ✅ Dress code section
- ✅ Video section (YouTube embed)
- ✅ Smooth animations (Framer Motion)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + React 18
- **Styling**: TailwindCSS
- **Backend**: Supabase (PostgreSQL)
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## ⚙️ Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + Javanese theme
│   ├── layout.tsx       # Root layout dengan fonts
│   └── page.tsx         # Main page dengan sections
├── components/
│   ├── sections/        # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── CoupleSection.tsx
│   │   ├── LoveStorySection.tsx
│   │   ├── EventSection.tsx
│   │   ├── DressCodeSection.tsx
│   │   ├── LocationSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── VideoSection.tsx
│   │   ├── RsvpSection.tsx
│   │   ├── WishesSection.tsx
│   │   ├── GiftSection.tsx
│   │   └── FooterSection.tsx
│   └── ui/              # Reusable components
│       ├── CountdownTimer.tsx
│       ├── MusicPlayer.tsx
│       ├── Navigation.tsx
│       ├── ShareButton.tsx
│       └── JavaneseOrnament.tsx
├── lib/
│   └── supabase.ts      # Supabase client & functions
public/
├── images/
│   ├── gallery/         # Prewedding photos
│   └── qris/            # QRIS barcode images
└── audio/               # Background music
```

## 🗄️ Supabase Setup

Create these tables in your Supabase project:

### Table: rsvp
```sql
CREATE TABLE rsvp (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attendance TEXT NOT NULL,
  guests_count INTEGER DEFAULT 1,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Table: wishes
```sql
CREATE TABLE wishes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Table: gallery_photos
```sql
CREATE TABLE gallery_photos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO gallery_photos (image_url, alt_text, order_index) VALUES
  ('/images/gallery/photo-1.jpg', 'Prewedding 1', 1),
  ('/images/gallery/photo-2.jpg', 'Prewedding 2', 2),
  ('/images/gallery/photo-3.jpg', 'Prewedding 3', 3),
  ('/images/gallery/photo-4.jpg', 'Prewedding 4', 4),
  ('/images/gallery/photo-5.jpg', 'Prewedding 5', 5),
  ('/images/gallery/photo-6.jpg', 'Prewedding 6', 6);
```

### Table: gift_accounts
```sql
CREATE TABLE gift_accounts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  bank_name TEXT NOT NULL,
  account_number TEXT,
  account_name TEXT NOT NULL,
  qris_image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data with QRIS
INSERT INTO gift_accounts (bank_name, account_number, account_name, qris_image_url, order_index) VALUES
  ('Bank BCA', '1234567890', 'Achmad Eko Wahyu Prasetyo', NULL, 1),
  ('Bank Mandiri', '0987654321', 'Keke Putri Yunindia', NULL, 2),
  ('QRIS (Dana/OVO/GoPay)', NULL, 'Eko & Keke', '/images/qris/qris-code.png', 3);
```

### Table: music_config
```sql
CREATE TABLE music_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  music_url TEXT NOT NULL,
  music_title TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default music
INSERT INTO music_config (music_url, music_title, is_active) VALUES
  ('/audio/wedding-music.mp3', 'Lagu Pernikahan Jawa', TRUE);
```

### Enable Row Level Security (RLS)
```sql
-- Enable RLS
ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE gift_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE music_config ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read" ON gallery_photos FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON gift_accounts FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON music_config FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON wishes FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON wishes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read" ON rsvp FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON rsvp FOR INSERT WITH CHECK (true);
```

## 🔗 Personalisasi Guest Name

Kirim undangan dengan nama tamu:
```
https://yourdomain.com?to=Budi%20Santoso
https://yourdomain.com?to=Keluarga%20Besar%20Ahmad
```

## 📅 Wedding Details

- **Date**: 28 Maret 2026
- **Akad**: 08.00 WIB - Selesai
- **Resepsi**: 12.00 WIB - Selesai
- **Location**: Dusun Prokimal 183, Desa Gejugjati, Kecamatan Lekok, Kabupaten Pasuruan

## 📝 TODO

- [ ] Upload prewedding photos ke Supabase Storage
- [ ] Add background music MP3
- [ ] Upload QRIS barcode image
- [ ] Update bank account numbers di database
- [ ] Add groom's parents name
- [ ] Update Google Maps link
- [ ] Configure Supabase environment variables

---

Made with ❤️ for Eko & Keke Wedding
