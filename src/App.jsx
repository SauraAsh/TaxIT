import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/dashboard/Dashboard'
import { HubungiSupport, LupaPassword, SyaratKetentuan } from './pages/support'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const handleLogin = () => {
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setCurrentPage('landing')
  }

  return (
    <div className="app">
      {currentPage === 'landing' && (
        <LandingPage onNavigateToLogin={() => setCurrentPage('login')} />
      )}
      {currentPage === 'login' && (
        <LoginPage 
          onBack={() => setCurrentPage('landing')}
          onNavigateToSupport={() => setCurrentPage('support')}
          onNavigateToForgotPassword={() => setCurrentPage('forgot-password')}
          onNavigateToTerms={() => setCurrentPage('terms')}
          onLoginSuccess={handleLogin}
        />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onLogout={handleLogout} />
      )}
      {currentPage === 'support' && (
        <HubungiSupport onBack={() => setCurrentPage('login')} />
      )}
      {currentPage === 'forgot-password' && (
        <LupaPassword 
          onBack={() => setCurrentPage('login')}
          onBackToLogin={() => setCurrentPage('login')}
        />
      )}
      {currentPage === 'terms' && (
        <SyaratKetentuan onBack={() => setCurrentPage('login')} />
      )}
    </div>
  )
}

export default App
