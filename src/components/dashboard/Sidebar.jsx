import { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ isOpen, onToggle }) => {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [expandedMenu, setExpandedMenu] = useState(null)

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      path: '/dashboard'
    },
    {
      id: 'efiling',
      label: 'E-Filing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      submenu: [
        { id: 'efiling-new', label: 'Lapor SPT Baru' },
        { id: 'efiling-draft', label: 'Draft' },
        { id: 'efiling-history', label: 'Riwayat' }
      ]
    },
    {
      id: 'ebilling',
      label: 'E-Billing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      submenu: [
        { id: 'ebilling-new', label: 'Buat Kode Billing' },
        { id: 'ebilling-check', label: 'Cek Status' },
        { id: 'ebilling-history', label: 'Riwayat' }
      ]
    },
    {
      id: 'ebukpot',
      label: 'E-Bukpot',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      submenu: [
        { id: 'ebukpot-upload', label: 'Upload Bukpot' },
        { id: 'ebukpot-list', label: 'Daftar Bukpot' }
      ]
    },
    {
      id: 'profile',
      label: 'Profil',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      path: '/profile'
    },
    {
      id: 'settings',
      label: 'Pengaturan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      path: '/settings'
    },
    {
      id: 'help',
      label: 'Bantuan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      path: '/help'
    }
  ]

  const handleMenuClick = (item) => {
    if (item.submenu) {
      setExpandedMenu(expandedMenu === item.id ? null : item.id)
    } else {
      setActiveMenu(item.id)
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={onToggle}></div>
      )}

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {isOpen && (
              <div className="logo-text">
                <span className="logo-title">E-Pajak</span>
                <span className="logo-subtitle">Dashboard</span>
              </div>
            )}
          </div>
          <button className="sidebar-toggle" onClick={onToggle}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <div key={item.id} className="menu-item-wrapper" style={{ animationDelay: `${index * 0.05}s` }}>
              <button
                className={`menu-item ${activeMenu === item.id ? 'active' : ''} ${expandedMenu === item.id ? 'expanded' : ''}`}
                onClick={() => handleMenuClick(item)}
              >
                <div className="menu-icon">{item.icon}</div>
                {isOpen && (
                  <>
                    <span className="menu-label">{item.label}</span>
                    {item.submenu && (
                      <svg 
                        className="menu-arrow" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        style={{ transform: expandedMenu === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </>
                )}
              </button>

              {/* Submenu - Staggered */}
              {item.submenu && isOpen && (
                <div className={`submenu ${expandedMenu === item.id ? 'open' : ''}`}>
                  {item.submenu.map((sub, subIndex) => (
                    <button
                      key={sub.id}
                      className={`submenu-item ${activeMenu === sub.id ? 'active' : ''}`}
                      onClick={() => setActiveMenu(sub.id)}
                      style={{ 
                        transitionDelay: expandedMenu === item.id ? `${subIndex * 0.05}s` : '0s'
                      }}
                    >
                      <span className="submenu-dot"></span>
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {isOpen && (
          <div className="sidebar-footer">
            <div className="footer-info">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Butuh bantuan?</span>
            </div>
            <a href="#support" className="footer-link">Hubungi Support</a>
          </div>
        )}
      </aside>
    </>
  )
}

export default Sidebar
