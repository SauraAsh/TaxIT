import { useState } from 'react'
import './TopBar.css'

const TopBar = ({ user, onLogout }) => {
  const [showNotif, setShowNotif] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const notifications = [
    {
      id: 1,
      title: 'SPT Tahunan',
      message: 'Batas pelaporan SPT 31 Maret 2024',
      time: '2 jam yang lalu',
      unread: true
    },
    {
      id: 2,
      title: 'Pembayaran Berhasil',
      message: 'Pembayaran pajak Anda telah dikonfirmasi',
      time: '1 hari yang lalu',
      unread: true
    },
    {
      id: 3,
      title: 'Update Sistem',
      message: 'Fitur baru tersedia di dashboard',
      time: '3 hari yang lalu',
      unread: false
    }
  ]

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="search-trigger">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Cari sesuatu...</span>
          <kbd>Ctrl+K</kbd>
        </button>
      </div>

      <div className="topbar-right">
        {/* Notifications */}
        <div className="topbar-item">
          <button 
            className="icon-button"
            onClick={() => {
              setShowNotif(!showNotif)
              setShowProfile(false)
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
          </button>

          {/* Notification Dropdown */}
          {showNotif && (
            <div className="dropdown notification-dropdown">
              <div className="dropdown-header">
                <h3>Notifikasi</h3>
                <button className="mark-read">Tandai semua dibaca</button>
              </div>
              <div className="dropdown-content">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`notif-item ${notif.unread ? 'unread' : ''}`}>
                    <div className="notif-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="notif-content">
                      <div className="notif-title">{notif.title}</div>
                      <div className="notif-message">{notif.message}</div>
                      <div className="notif-time">{notif.time}</div>
                    </div>
                    {notif.unread && <span className="unread-dot"></span>}
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <a href="#notifications">Lihat semua notifikasi</a>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="topbar-item">
          <button 
            className="user-button"
            onClick={() => {
              setShowProfile(!showProfile)
              setShowNotif(false)
            }}
          >
            <div className="user-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <div className="avatar-placeholder">
                  {user.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="user-info">
              <span className="user-name-text">{user.name}</span>
              <span className="user-npwp">{user.npwp}</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="dropdown profile-dropdown">
              <div className="dropdown-header profile-header">
                <div className="profile-avatar-large">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <div className="avatar-placeholder-large">
                      {user.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="profile-info">
                  <div className="profile-name">{user.name}</div>
                  <div className="profile-email">{user.email}</div>
                  <div className="profile-npwp">NPWP: {user.npwp}</div>
                </div>
              </div>
              <div className="dropdown-content">
                <a href="#profile" className="dropdown-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Profil Saya
                </a>
                <a href="#settings" className="dropdown-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Pengaturan
                </a>
                <a href="#help" className="dropdown-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Bantuan
                </a>
              </div>
              <div className="dropdown-footer">
                <button className="logout-button" onClick={onLogout}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Keluar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default TopBar
