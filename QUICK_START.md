# 🚀 QUICK START GUIDE - E-Pajak Web App

## Langkah 1: Pastikan Prerequisites Terpenuhi ✅

```bash
# Cek versi Node.js (minimal v16)
node --version

# Cek versi npm
npm --version
```

Jika belum ada, download dari: https://nodejs.org/

---

## Langkah 2: Install Dependencies 📦

```bash
# Masuk ke folder project
cd D:\webpajak

# Install semua dependencies
npm install
```

Tunggu hingga proses selesai (biasanya 1-2 menit)

---

## Langkah 3: Jalankan Development Server 🏃‍♂️

```bash
npm run dev
```

Anda akan melihat output seperti ini:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

---

## Langkah 4: Buka di Browser 🌐

Buka browser dan akses:
```
http://localhost:5173
```

Atau tekan `Ctrl + Click` pada link di terminal

---

## 🎉 Selesai!

Anda sekarang sudah bisa melihat:
- **Landing Page** - Halaman utama dengan hero, services, dan stats
- **Login Page** - Klik tombol "Masuk" di navbar atau di hero

---

## 🎮 Testing Features

### Test Landing Page
1. ✓ Scroll ke bawah untuk lihat semua section
2. ✓ Hover pada service cards untuk lihat animasi
3. ✓ Klik tombol "Mulai Sekarang" atau "Masuk" di navbar
4. ✓ Resize browser untuk test responsive design

### Test Login Page
1. ✓ Masukkan NPWP (contoh: 12.345.678.9-012.345)
   - Format akan otomatis ter-format saat mengetik
2. ✓ Masukkan password
   - Klik icon mata untuk show/hide password
3. ✓ Centang "Ingat saya" (opsional)
4. ✓ Klik "Masuk" untuk submit
   - Akan muncul loading spinner dan alert "Login berhasil"
5. ✓ Klik "Kembali" untuk ke landing page

---

## 🛠️ Useful Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Shortcuts di Browser
```
Ctrl + Shift + I     # Buka DevTools
Ctrl + Shift + M     # Toggle responsive mode
Ctrl + R             # Refresh page
```

---

## 📝 Edit Code

### Mengubah Warna
Edit file: `src/index.css`
```css
:root {
  --bg-primary: #F3F9FE;      /* Background utama */
  --color-primary: #008bff;   /* Warna biru utama */
  --color-secondary: #c72023; /* Warna merah */
}
```

### Mengubah Teks Hero
Edit file: `src/pages/LandingPage.jsx`
```jsx
<h1 className="hero-title">
  Layanan Pajak Digital<br />
  <span className="highlight">Mudah, Cepat, & Aman</span>
</h1>
```

### Menambah Menu Navbar
Edit file: `src/components/Navbar.jsx`
```jsx
const menuItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Informasi', href: '#informasi' },
  { label: 'Bantuan', href: '#bantuan' },
  // Tambah menu baru di sini
]
```

---

## 🐛 Troubleshooting

### Port 5173 sudah digunakan?
```bash
# Vite akan otomatis cari port lain (5174, 5175, dll)
# Atau kill process yang menggunakan port 5173
```

### Dependencies error?
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules
npm install
```

### Hot reload tidak jalan?
```bash
# Restart dev server
Ctrl + C  # Stop server
npm run dev  # Start lagi
```

### Browser tidak auto-refresh?
```bash
# Hard refresh
Ctrl + Shift + R
```

---

## 📱 Test Responsive

### Desktop View (> 1024px)
- 2 kolom layout
- Semua fitur visible
- Floating cards animation

### Tablet View (768px - 1024px)
- 1 kolom untuk hero
- 2 kolom untuk services
- Navbar still horizontal

### Mobile View (< 768px)
- Semua 1 kolom
- Hamburger menu
- Simplified layout

Cara test: Tekan `F12` → Klik icon device/mobile → Pilih device

---

## 🎯 Next Steps

Setelah familiar dengan UI:
1. ✅ Explore semua fitur yang ada
2. ✅ Coba edit beberapa styling
3. ✅ Pahami struktur component
4. ✅ Baca dokumentasi lengkap di `README_FEATURES.md`
5. ✅ Lihat component guide di `COMPONENT_GUIDE.js`
6. ✅ Check project summary di `PROJECT_SUMMARY.md`

---

## 💡 Tips

- **Hot Module Replacement (HMR)** aktif, jadi setiap perubahan langsung terlihat
- **Console errors?** Check browser DevTools (F12)
- **Styling tips?** Lihat `utilities.css` untuk utility classes
- **Stuck?** Cek dokumentasi atau restart dev server

---

## ✨ Enjoy Coding!

Project siap untuk dikembangkan lebih lanjut! 🚀

Untuk pertanyaan atau issue:
1. Check documentation files
2. Review code comments
3. Test di berbagai browser dan device

**Happy Coding! 💻**
