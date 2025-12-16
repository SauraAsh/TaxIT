/* Component Usage Guide */

/*
==================================
NAVBAR COMPONENT
==================================
*/

// Import
import Navbar from './components/Navbar'

// Usage
<Navbar onLoginClick={() => handleLogin()} />

// Props:
// - onLoginClick: Function yang dipanggil saat tombol "Masuk" diklik

/*
==================================
LANDING PAGE
==================================
*/

// Import
import LandingPage from './pages/LandingPage'

// Usage
<LandingPage onNavigateToLogin={() => setPage('login')} />

// Props:
// - onNavigateToLogin: Function untuk navigasi ke halaman login

// Sections dalam LandingPage:
// 1. Hero - Headline + CTA buttons
// 2. Stats - 4 statistik utama
// 3. Services - 6 service cards
// 4. CTA - Call to action section
// 5. Footer - Informasi lengkap

/*
==================================
LOGIN PAGE
==================================
*/

// Import
import LoginPage from './pages/LoginPage'

// Usage
<LoginPage onBack={() => setPage('landing')} />

// Props:
// - onBack: Function untuk kembali ke landing page

// Features:
// - NPWP auto-formatting
// - Password toggle visibility
// - Remember me checkbox
// - Loading state
// - Alternative login options

/*
==================================
CUSTOMIZATION TIPS
==================================

1. Mengubah Warna:
   Edit variabel CSS di src/index.css:
   --bg-primary: #F3F9FE;
   --color-primary: #008bff;
   --color-secondary: #c72023;

2. Mengubah Animasi:
   Semua animasi ada di masing-masing CSS file
   Contoh: @keyframes fadeIn, fadeInUp, float

3. Menambah Service Card:
   Edit array 'services' di LandingPage.jsx
   Tambahkan object baru dengan icon, title, description

4. Mengubah Stats:
   Edit array 'stats' di LandingPage.jsx
   Ganti number dan label sesuai kebutuhan

5. Menambah Menu Navbar:
   Edit array 'menuItems' di Navbar.jsx
   Tambahkan label dan href baru

/*
==================================
RESPONSIVE DESIGN NOTES
==================================

Desktop (> 1024px):
- 2 kolom untuk hero dan login
- 3 kolom untuk services
- 4 kolom untuk stats

Tablet (768px - 1024px):
- 1 kolom untuk hero
- 2 kolom untuk services
- 2 kolom untuk stats

Mobile (< 768px):
- Semua jadi 1 kolom
- Hamburger menu untuk navbar
- Stack buttons di hero

/*
==================================
FORM VALIDATION EXAMPLE
==================================
*/

// Untuk menambahkan validasi yang lebih kompleks:

const validateNPWP = (npwp) => {
  const numbers = npwp.replace(/\D/g, '')
  return numbers.length === 15 // NPWP harus 15 digit
}

const validatePassword = (password) => {
  return password.length >= 8 // Minimal 8 karakter
}

// Di handleSubmit:
if (!validateNPWP(formData.npwp)) {
  alert('NPWP tidak valid')
  return
}

if (!validatePassword(formData.password)) {
  alert('Password minimal 8 karakter')
  return
}

/*
==================================
API INTEGRATION EXAMPLE
==================================
*/

// Untuk integrasi dengan backend API:

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  
  try {
    const response = await fetch('https://api.pajak.go.id/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        npwp: formData.npwp.replace(/\D/g, ''), // Kirim tanpa format
        password: formData.password
      })
    })
    
    if (response.ok) {
      const data = await response.json()
      // Simpan token ke localStorage atau state management
      localStorage.setItem('token', data.token)
      // Redirect ke dashboard
      navigate('/dashboard')
    } else {
      alert('Login gagal. Periksa NPWP dan password Anda.')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Terjadi kesalahan. Silakan coba lagi.')
  } finally {
    setIsLoading(false)
  }
}

/*
==================================
STATE MANAGEMENT EXAMPLE
==================================
*/

// Jika menggunakan Context API untuk global state:

// AuthContext.jsx
import { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const login = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
  }
  
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

// Di App.jsx:
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      {/* Your components */}
    </AuthProvider>
  )
}

/*
==================================
ROUTING EXAMPLE (React Router)
==================================
*/

// Install: npm install react-router-dom

// App.jsx dengan routing:
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import { useAuth } from './context/AuthContext'

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

*/
