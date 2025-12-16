# E-Pajak Web Application

Web aplikasi perpajakan pemerintahan yang dibuat dengan React + Vite. Aplikasi ini menyediakan landing page yang informatif dan halaman login yang aman untuk wajib pajak.

## 🎨 Desain

### Color Palette
- **Background Primary**: `#F3F9FE` - Warna background utama yang lembut
- **Color Primary**: `#008bff` - Biru untuk tombol dan aksen utama
- **Color Secondary**: `#c72023` - Merah untuk aksen tambahan
- **Text Colors**: `#1a1a1a` (primary), `#666` (secondary)

### Fitur Desain
- **Tanpa Gradasi**: Menggunakan warna solid untuk tampilan yang clean dan profesional
- **Animasi Hover**: Animasi smooth yang tidak mengganggu user experience
- **Responsive**: Fully responsive untuk semua ukuran layar
- **Modern UI**: Menggunakan glass morphism, floating cards, dan micro-interactions

## 📁 Struktur Folder

```
src/
├── components/
│   ├── Navbar.jsx          # Navigasi utama
│   └── Navbar.css
├── pages/
│   ├── LandingPage.jsx     # Halaman landing
│   ├── LandingPage.css
│   ├── LoginPage.jsx       # Halaman login
│   └── LoginPage.css
├── App.jsx                 # Main app component
├── App.css
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses:
```
http://localhost:5173
```

### Build untuk Production

```bash
npm run build
```

File production akan tersimpan di folder `dist/`.

## ✨ Fitur

### Landing Page
- **Hero Section**: Headline menarik dengan ilustrasi floating cards
- **Stats Section**: Menampilkan statistik penting (50M+ wajib pajak, dll)
- **Services Grid**: 6 layanan utama (E-Filing, E-Billing, E-Bukpot, dll)
- **CTA Section**: Call-to-action untuk mendorong user login
- **Footer**: Informasi kontak dan navigasi lengkap

### Login Page
- **Split Layout**: Desain dua kolom yang modern
- **Left Side Features**:
  - Brand logo dan ilustrasi
  - Animated background dengan floating circles
  - Feature highlights (Aman & Terpercaya, Akses 24/7)
- **Right Side Form**:
  - Input NPWP dengan auto-formatting
  - Password dengan toggle show/hide
  - Remember me checkbox
  - Alternative login options (NIK, Registrasi baru)
- **Form Validation**: Input validation dan loading state

## 🎯 Komponen Utama

### Navbar
- Sticky navigation bar
- Responsive menu (hamburger pada mobile)
- Smooth transitions dan hover effects
- Logo dengan animasi subtle

### Landing Page Sections
1. **Hero**: Gradient-free design dengan floating animation cards
2. **Stats**: Grid statistik dengan hover effects
3. **Services**: 6 service cards dengan icon dan deskripsi
4. **CTA**: Section untuk mendorong user action
5. **Footer**: Multi-column footer dengan links

### Login Form
- NPWP auto-formatting (XX.XXX.XXX.X-XXX.XXX)
- Password visibility toggle
- Loading state saat submit
- Alternative login methods
- Responsive design

## 🎨 Animasi

### Landing Page
- `fadeIn`: Fade in sederhana
- `fadeInUp`: Fade in dengan slide dari bawah
- `float`: Floating animation untuk cards

### Login Page
- `fadeInLeft`: Slide masuk dari kiri
- `fadeInRight`: Slide masuk dari kanan
- `spin`: Rotating loader
- `float`: Background circles animation

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔒 Keamanan (Untuk Development Selanjutnya)

Untuk implementasi production, pastikan menambahkan:
- [ ] HTTPS
- [ ] CSRF protection
- [ ] Input sanitization
- [ ] Rate limiting
- [ ] JWT atau session management
- [ ] Enkripsi data sensitif

## 🎯 TODO / Next Steps

- [ ] Implementasi routing (React Router)
- [ ] Integrasi dengan backend API
- [ ] Dashboard setelah login
- [ ] E-Filing module
- [ ] E-Billing module
- [ ] Forgot password functionality
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Accessibility improvements (ARIA labels)

## 📝 Catatan

- Aplikasi ini adalah frontend-only untuk demonstrasi
- Login saat ini hanya simulasi (console.log dan alert)
- Untuk production, perlu backend API yang proper
- Semua data dan statistik adalah placeholder

## 🤝 Kontribusi

Jika ingin berkontribusi, silakan:
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push ke branch
5. Create Pull Request

## 📄 License

Copyright © 2024 Direktorat Jenderal Pajak

---

**Dibuat dengan ❤️ menggunakan React + Vite**
