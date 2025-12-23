import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState('beranda')

  const menuItems = [
    { id: 'beranda', label: 'Beranda', href: '#beranda' },
    { id: 'layanan', label: 'Layanan', href: '#layanan' },
    { id: 'informasi', label: 'Informasi', href: '#informasi' },
    { id: 'bantuan', label: 'Bantuan', href: '#bantuan' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">TaxIT</span>
            <span className="logo-subtitle">Direktorat Jenderal Pajak</span>
          </div>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Pill Navigation - Inspired by ReactBits */}
          <div className="pill-nav">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`pill-nav-item ${activeMenu === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveMenu(item.id)
                  setIsMenuOpen(false)
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.label}
              </a>
            ))}
            <span className="pill-nav-indicator" style={{
              transform: `translateX(${menuItems.findIndex(item => item.id === activeMenu) * 100}%)`
            }}></span>
          </div>

          <button className="btn-login" onClick={onLoginClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Masuk
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
