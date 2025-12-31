# Background Music (Backsound)

## 🎵 Cara Menambahkan Musik Latar

Tambahkan file musik format MP3 di folder ini dengan nama:
```
wedding-music.mp3
```

## 📥 Sumber Musik Gamelan Jawa Gratis

Berikut beberapa sumber musik gamelan Jawa yang royalty-free:

### 1. Internet Archive
- **URL**: https://archive.org/details/gamalan_music_of_central_java
- **Lisensi**: Public Domain
- **Deskripsi**: Koleksi musik gamelan Jawa klasik

### 2. StockTune
- **URL**: https://stocktune.com/free-javanese-stock-music
- **Lisensi**: Royalty-free untuk komersial
- **Deskripsi**: Musik Jawa modern

### 3. Audio.com
- **URL**: https://audio.com
- **Cari**: "Gamelan Jawa" atau "Javanese"
- **Lisensi**: Bervariasi (cek per track)

### 4. Freesound
- **URL**: https://freesound.org
- **Cari**: "Javanese Gamelan"
- **Lisensi**: Creative Commons (perlu atribusi)

## 🎶 Rekomendasi Jenis Musik

Untuk undangan pernikahan Jawa, pilih musik dengan nuansa:
- **Gamelan halus** - cocok untuk kesan sakral
- **Langgam Jawa** - nuansa romantis tradisional
- **Gamelan kontemporer** - modern tapi tetap Jawa

## ⚙️ Konfigurasi via Database

Anda juga bisa mengatur musik via Supabase:

```sql
INSERT INTO music_config (id, music_url, is_active)
VALUES (1, '/audio/wedding-music.mp3', true);
```

Atau gunakan URL dari cloud storage:
```sql
UPDATE music_config 
SET music_url = 'https://yourstorage.com/musik-gamelan.mp3'
WHERE id = 1;
```

## ⚠️ Catatan Penting

1. File harus format **MP3** untuk kompatibilitas browser
2. Ukuran file sebaiknya **< 5MB** untuk loading cepat
3. Musik akan **autoplay** setelah user klik "Buka Undangan"
4. Pastikan musik **royalty-free** atau sudah mendapat izin
