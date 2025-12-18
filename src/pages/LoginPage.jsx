import { useState } from 'react'
import LoginNPWP from '../components/LoginNPWP'
import LoginNIK from '../components/LoginNIK'
import RegisterNPWP from '../components/RegisterNPWP'
import './LoginPage.css'

const LoginPage = ({ onBack, onNavigateToSupport, onNavigateToForgotPassword, onNavigateToTerms, onLoginSuccess }) => {
  const [currentView, setCurrentView] = useState('npwp') // 'npwp', 'nik', 'register'
  const [slideDirection, setSlideDirection] = useState('') // 'left', 'right'

  const navigateToView = (view) => {
    // Determine slide direction based on view order
    const viewOrder = ['npwp', 'nik', 'register']
    const currentIndex = viewOrder.indexOf(currentView)
    const targetIndex = viewOrder.indexOf(view)
    
    if (targetIndex > currentIndex) {
      setSlideDirection('left') // Slide to left (new view from right)
    } else {
      setSlideDirection('right') // Slide to right (new view from left)
    }
    
    setTimeout(() => {
      setCurrentView(view)
      setSlideDirection('')
    }, 50)
  }

  const alternativeOptions = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Login dengan NIK',
      description: 'Gunakan NIK untuk masuk',
      action: () => navigateToView('nik')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Daftar NPWP Baru',
      description: 'Belum punya NPWP? Daftar sekarang',
      action: () => navigateToView('register')
    }
  ]

  return (
    <div className="login-page">
      <button className="back-button" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Kembali
      </button>

      <div className={`login-container slide-${slideDirection}`}>
        {currentView === 'npwp' && (
          <LoginNPWP 
            onNavigate={navigateToView}
            alternativeOptions={alternativeOptions}
            onNavigateToSupport={onNavigateToSupport}
            onNavigateToForgotPassword={onNavigateToForgotPassword}
            onLoginSuccess={onLoginSuccess}
          />
        )}
        {currentView === 'nik' && (
          <LoginNIK 
            onNavigate={navigateToView}
            onBackToNPWP={() => navigateToView('npwp')}
            onNavigateToSupport={onNavigateToSupport}
            onNavigateToForgotPassword={onNavigateToForgotPassword}
          />
        )}
        {currentView === 'register' && (
          <RegisterNPWP 
            onNavigate={navigateToView}
            onBackToNPWP={() => navigateToView('npwp')}
            onNavigateToSupport={onNavigateToSupport}
            onNavigateToTerms={onNavigateToTerms}
          />
        )}
      </div>
    </div>
  )
}

export default LoginPage
