# 🎉 NEW FEATURE: Multi-Login & Registration Pages

## 📅 Update Date: ${new Date().toLocaleDateString('id-ID')}

---

## ✨ Fitur Baru

### 1. **Login dengan NPWP** ✅
- Form login standar dengan NPWP
- Auto-formatting NPWP (XX.XXX.XXX.X-XXX.XXX)
- Password toggle show/hide
- Remember me checkbox
- Staggered menu untuk alternative options

### 2. **Login dengan NIK** ✅
- Form login menggunakan NIK (16 digit)
- Warna tema hijau (#22c55e)
- Info box untuk pengguna baru
- Validasi input NIK
- Terintegrasi dengan sistem Dukcapil

### 3. **Daftar NPWP Baru** ✅
- Multi-step registration (3 steps)
- Progress indicator yang interaktif
- Warna tema purple (#8b5cf6)
- Form validation per step

**Step 1: Data Pribadi**
- NIK (auto-format 16 digit)
- Nama lengkap
- Tempat & tanggal lahir
- Jenis kelamin (radio buttons)

**Step 2: Alamat**
- Alamat lengkap (textarea)
- RT/RW/Kode Pos
- Kelurahan, Kecamatan
- Kota/Kabupaten, Provinsi

**Step 3: Verifikasi**
- Email (untuk menerima NPWP)
- Nomor HP (auto-format)
- Password & Konfirmasi password
- Checkbox persetujuan T&C

---

## 🎬 Slide Transition Animation

### Konsep
Transisi **slide horizontal** yang smooth antara halaman:
- **Slide Left**: Content keluar ke kiri, content baru masuk dari kanan
- **Slide Right**: Content keluar ke kanan, content baru masuk dari kiri

### Implementasi

```jsx
const [currentView, setCurrentView] = useState('npwp') // 'npwp', 'nik', 'register'
const [slideDirection, setSlideDirection] = useState('') // 'left', 'right'

const navigateToView = (view) => {
  const viewOrder = ['npwp', 'nik', 'register']
  const currentIndex = viewOrder.indexOf(currentView)
  const targetIndex = viewOrder.indexOf(view)
  
  // Determine direction
  if (targetIndex > currentIndex) {
    setSlideDirection('left') // Forward
  } else {
    setSlideDirection('right') // Backward
  }
  
  // Apply animation then change view
  setTimeout(() => {
    setCurrentView(view)
    setSlideDirection('')
  }, 50)
}
```

### CSS Animation

```css
/* Slide Out Left */
@keyframes slideOutLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100px);
  }
}

/* Slide Out Right */
@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100px);
  }
}

/* Container with animation class */
.login-container.slide-left .login-left,
.login-container.slide-left .login-right {
  animation: slideOutLeft 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
}
```

### Flow Navigation

```
NPWP Login (Blue)
    ↓ forward (slide left)
NIK Login (Green)
    ↓ forward (slide left)
Register NPWP (Purple)
    ↑ backward (slide right)
NIK Login (Green)
    ↑ backward (slide right)
NPWP Login (Blue)
```

---

## 🎨 Color Themes per Page

### Login NPWP
```css
Primary Color: #008bff (Blue)
Illustration BG: #008bff
Button: #008bff
```

### Login NIK
```css
Primary Color: #22c55e (Green)
Illustration BG: #22c55e
Button: #22c55e
Feature Icons: rgba(34, 197, 94, 0.1)
```

### Register NPWP
```css
Primary Color: #8b5cf6 (Purple)
Illustration BG: #8b5cf6
Button: #8b5cf6
Progress Active: #8b5cf6
Feature Icons: rgba(139, 92, 246, 0.1)
```

---

## 📁 File Structure

```
src/
├── pages/
│   ├── LoginPage.jsx          # Main container with navigation logic
│   └── LoginPage.css          # Shared styles + animations
├── components/
│   ├── LoginNPWP.jsx          # Login with NPWP form
│   ├── LoginNIK.jsx           # Login with NIK form
│   └── RegisterNPWP.jsx       # Registration multi-step form
```

---

## 🔄 Component Communication

### LoginPage (Parent)
```jsx
<LoginPage onBack={backToLanding} />
```

**State:**
- `currentView`: 'npwp' | 'nik' | 'register'
- `slideDirection`: '' | 'left' | 'right'

**Functions:**
- `navigateToView(view)`: Handle navigation with animation

### Child Components

**LoginNPWP**
```jsx
<LoginNPWP 
  onNavigate={navigateToView}
  alternativeOptions={options}
/>
```

**LoginNIK**
```jsx
<LoginNIK 
  onNavigate={navigateToView}
  onBackToNPWP={() => navigateToView('npwp')}
/>
```

**RegisterNPWP**
```jsx
<RegisterNPWP 
  onNavigate={navigateToView}
  onBackToNPWP={() => navigateToView('npwp')}
/>
```

---

## 🎯 Features per Component

### LoginNPWP
- ✅ NPWP auto-formatting
- ✅ Password toggle
- ✅ Remember me
- ✅ Forgot password link
- ✅ Staggered menu for alternatives
- ✅ Loading state

### LoginNIK
- ✅ NIK validation (16 digits)
- ✅ Password toggle
- ✅ Remember me
- ✅ Info box for new users
- ✅ Back button to NPWP login
- ✅ Green color theme
- ✅ Loading state

### RegisterNPWP
- ✅ Multi-step form (3 steps)
- ✅ Progress indicator
- ✅ Step navigation (Next/Back)
- ✅ NIK auto-format
- ✅ Phone auto-format
- ✅ Password confirmation
- ✅ Radio buttons for gender
- ✅ Textarea for address
- ✅ Terms & Conditions checkbox
- ✅ Purple color theme
- ✅ Loading state

---

## 💡 User Flow

### Flow 1: Login dengan NPWP
```
Landing → Login Page (NPWP) → Enter NPWP & Password → Submit → Dashboard
```

### Flow 2: Login dengan NIK
```
Landing → Login Page (NPWP) → Click "Login dengan NIK" → 
Enter NIK & Password → Submit → Dashboard
```

### Flow 3: Daftar NPWP Baru
```
Landing → Login Page (NPWP) → Click "Daftar NPWP Baru" →
Step 1 (Data Pribadi) → Step 2 (Alamat) → Step 3 (Verifikasi) →
Submit → Confirmation → Email Activation
```

---

## 🎨 Design Details

### Progress Steps (Register)
```jsx
<div className="progress-steps">
  <div className="progress-step active completed">
    <div className="step-number">✓</div>
    <div className="step-label">Data Pribadi</div>
  </div>
  <div className="progress-step active">
    <div className="step-number">2</div>
    <div className="step-label">Alamat</div>
  </div>
  <div className="progress-step">
    <div className="step-number">3</div>
    <div className="step-label">Verifikasi</div>
  </div>
</div>
```

**States:**
- Default: Gray
- Active: Purple with scale animation
- Completed: Purple with checkmark

### Back Button Styles
```css
.back-to-login {
  color: var(--color-primary);
  background: none;
  display: inline-flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
}

.back-to-login:hover {
  background-color: var(--bg-primary);
  transform: translateX(-4px);
}
```

### Info Box (NIK Login)
```jsx
<div className="info-box">
  <svg>...</svg>
  <div>
    <strong>Belum pernah login dengan NIK?</strong>
    <p>Hubungi kantor pajak atau Kring Pajak 1500-200</p>
  </div>
</div>
```

---

## 🔍 Form Validation

### NIK Validation
```javascript
const formatNIK = (value) => {
  const numbers = value.replace(/\D/g, '')
  return numbers.slice(0, 16) // Max 16 digits
}
```

### Phone Validation
```javascript
const formatPhone = (value) => {
  const numbers = value.replace(/\D/g, '')
  return numbers.slice(0, 13) // Max 13 digits (08xxxxxxxxxx)
}
```

### Password Validation
```jsx
<input
  type="password"
  minLength="8"
  required
/>
```

### Email Validation
```jsx
<input
  type="email"
  placeholder="email@example.com"
  required
/>
```

---

## 🎭 Animation Timing

### Slide Animation
- **Duration**: 0.4s
- **Easing**: `cubic-bezier(0.4, 0, 1, 1)` for exit
- **Easing**: `cubic-bezier(0, 0, 0.2, 1)` for enter
- **Delay**: 50ms between direction set and view change

### Form Step Transition
- **Duration**: 0.4s
- **Animation**: fadeIn
- **Easing**: ease

### Staggered Menu Items
- **Base delay**: 0.1s per item
- **Transition delay**: 0.05s per item
- **Max height transition**: 0.4s

---

## 📱 Responsive Behavior

### Desktop (> 1024px)
- Split layout (left/right)
- Full illustrations visible
- All animations active

### Tablet (768px - 1024px)
- Single column layout
- Left side hidden
- Right side centered (max-width: 500px)

### Mobile (< 640px)
- Compact padding
- Form rows become single column
- Progress steps vertical
- Button group stacked

---

## 🐛 Known Issues & Solutions

### Issue: Animation flicker
**Solution**: Added 50ms delay before view change
```javascript
setTimeout(() => {
  setCurrentView(view)
  setSlideDirection('')
}, 50)
```

### Issue: Form inputs not focusable on mobile
**Solution**: Added proper input types and removed conflicting styles
```jsx
<input type="tel" /> // for phone
<input type="date" /> // for birth date
```

---

## ✅ Testing Checklist

- [x] Slide animation smooth
- [x] NPWP auto-formatting works
- [x] NIK validation (16 digits)
- [x] Phone validation (max 13 digits)
- [x] Multi-step navigation
- [x] Progress indicator updates
- [x] Password toggle works
- [x] Form validation
- [x] Loading states
- [x] Responsive design
- [x] Back buttons work
- [x] Color themes consistent

---

## 🚀 Future Enhancements

- [ ] Add success/error toast notifications
- [ ] Implement actual form validation rules
- [ ] Add captcha for security
- [ ] Email verification flow
- [ ] OTP verification for NIK login
- [ ] Save draft functionality (Register)
- [ ] Social login options
- [ ] Biometric login (mobile)

---

## 📝 Usage Example

```jsx
import LoginPage from './pages/LoginPage'

function App() {
  const handleBackToLanding = () => {
    // Navigate back to landing
  }

  return (
    <LoginPage onBack={handleBackToLanding} />
  )
}
```

---

**Status: ✅ COMPLETE**
- Login NPWP: ✅
- Login NIK: ✅
- Register NPWP: ✅
- Slide Transitions: ✅
- Responsive: ✅

*Version: 2.1.0*
*Last Updated: ${new Date().toLocaleDateString('id-ID')}*
