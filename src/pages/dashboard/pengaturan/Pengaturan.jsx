import { useState, useRef, useEffect } from 'react'
import './Pengaturan.css'

const Pengaturan = () => {
  const [settings, setSettings] = useState({
    emailNotif: true,
    smsNotif: false,
    whatsappNotif: true,
    pushNotif: true,
    reminderSPT: true,
    reminderBilling: true,
    updateSystem: false,
    newsletter: true,
    bahasa: 'id',
    zonaWaktu: 'WIB',
    tema: 'light',
    formatTanggal: 'DD/MM/YYYY',
    showProfile: true,
    showActivity: false,
    allowAnalytics: true
  })

  const [showBahasaDropdown, setShowBahasaDropdown] = useState(false)
  const [showZonaDropdown, setShowZonaDropdown] = useState(false)
  const [showTemaDropdown, setShowTemaDropdown] = useState(false)
  const [showFormatDropdown, setShowFormatDropdown] = useState(false)

  const dropdownBahasaRef = useRef(null)
  const dropdownZonaRef = useRef(null)
  const dropdownTemaRef = useRef(null)
  const dropdownFormatRef = useRef(null)

  const bahasaOptions = [
    { value: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
    { value: 'en', label: 'English', flag: '🇬🇧' }
  ]

  const zonaWaktuOptions = [
    { value: 'WIB', label: 'WIB (GMT+7)' },
    { value: 'WITA', label: 'WITA (GMT+8)' },
    { value: 'WIT', label: 'WIT (GMT+9)' }
  ]

  const temaOptions = [
    { 
      value: 'light', 
      label: 'Terang', 
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"/>
        </svg>
      )
    },
    { 
      value: 'dark', 
      label: 'Gelap', 
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )
    },
    { 
      value: 'auto', 
      label: 'Otomatis', 
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
        </svg>
      )
    }
  ]

  const formatTanggalOptions = [
    { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY', example: '(22/12/2024)' },
    { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY', example: '(12/22/2024)' },
    { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD', example: '(2024-12-22)' }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownBahasaRef.current && !dropdownBahasaRef.current.contains(event.target)) {
        setShowBahasaDropdown(false)
      }
      if (dropdownZonaRef.current && !dropdownZonaRef.current.contains(event.target)) {
        setShowZonaDropdown(false)
      }
      if (dropdownTemaRef.current && !dropdownTemaRef.current.contains(event.target)) {
        setShowTemaDropdown(false)
      }
      if (dropdownFormatRef.current && !dropdownFormatRef.current.contains(event.target)) {
        setShowFormatDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    alert('Pengaturan berhasil disimpan!')
  }

  return (
    <div className="pengaturan-container">
      <div className="page-header">
        <div className="header-content">
          <h1>Pengaturan</h1>
          <p>Kelola preferensi dan notifikasi aplikasi Anda</p>
        </div>
      </div>

      <div className="settings-grid">
        {/* NOTIFIKASI */}
        <div className="settings-card">
          <div className="card-title">
            <svg className="title-icon" viewBox="0 0 24 24" fill="none">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <div>
              <h2>Notifikasi</h2>
              <span>Kelola pemberitahuan yang Anda terima</span>
            </div>
          </div>

          <div className="settings-items">
            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Email</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.emailNotif} onChange={() => handleToggle('emailNotif')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>SMS</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.smsNotif} onChange={() => handleToggle('smsNotif')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8.5 14.5L9.5 15.5L11.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>WhatsApp</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.whatsappNotif} onChange={() => handleToggle('whatsappNotif')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Push Notification</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.pushNotif} onChange={() => handleToggle('pushNotif')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="divider"></div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Pengingat SPT</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.reminderSPT} onChange={() => handleToggle('reminderSPT')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Pengingat Billing</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.reminderBilling} onChange={() => handleToggle('reminderBilling')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18 8L22 12L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Update Sistem</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.updateSystem} onChange={() => handleToggle('updateSystem')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 15H7.01M12 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Newsletter</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.newsletter} onChange={() => handleToggle('newsletter')} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* APLIKASI */}
        <div className="settings-card">
          <div className="card-title">
            <svg className="title-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div>
              <h2>Aplikasi</h2>
              <span>Sesuaikan tampilan dan perilaku aplikasi</span>
            </div>
          </div>

          <div className="settings-items">
            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Bahasa</span>
              </div>
              <div className="custom-select-wrapper" ref={dropdownBahasaRef}>
                <div className="custom-select-trigger" onClick={() => setShowBahasaDropdown(!showBahasaDropdown)}>
                  <div className="selected-option">
                    <span className="option-flag">{bahasaOptions.find(o => o.value === settings.bahasa)?.flag}</span>
                    <span className="option-text">{bahasaOptions.find(o => o.value === settings.bahasa)?.label}</span>
                  </div>
                  <svg className={`dropdown-arrow ${showBahasaDropdown ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {showBahasaDropdown && (
                  <div className="custom-select-dropdown">
                    {bahasaOptions.map((option) => (
                      <div key={option.value} className={`custom-option ${settings.bahasa === option.value ? 'selected' : ''}`} onClick={() => { handleChange('bahasa', option.value); setShowBahasaDropdown(false); }}>
                        <span className="option-flag">{option.flag}</span>
                        <span className="option-text">{option.label}</span>
                        {settings.bahasa === option.value && (
                          <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Zona Waktu</span>
              </div>
              <div className="custom-select-wrapper" ref={dropdownZonaRef}>
                <div className="custom-select-trigger" onClick={() => setShowZonaDropdown(!showZonaDropdown)}>
                  <span className="option-text">{zonaWaktuOptions.find(o => o.value === settings.zonaWaktu)?.label}</span>
                  <svg className={`dropdown-arrow ${showZonaDropdown ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {showZonaDropdown && (
                  <div className="custom-select-dropdown">
                    {zonaWaktuOptions.map((option) => (
                      <div key={option.value} className={`custom-option ${settings.zonaWaktu === option.value ? 'selected' : ''}`} onClick={() => { handleChange('zonaWaktu', option.value); setShowZonaDropdown(false); }}>
                        <span className="option-text">{option.label}</span>
                        {settings.zonaWaktu === option.value && (
                          <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Tema</span>
              </div>
              <div className="custom-select-wrapper" ref={dropdownTemaRef}>
                <div className="custom-select-trigger" onClick={() => setShowTemaDropdown(!showTemaDropdown)}>
                  <div className="selected-option">
                    <span className="option-icon-svg">{temaOptions.find(o => o.value === settings.tema)?.iconSvg}</span>
                    <span className="option-text">{temaOptions.find(o => o.value === settings.tema)?.label}</span>
                  </div>
                  <svg className={`dropdown-arrow ${showTemaDropdown ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {showTemaDropdown && (
                  <div className="custom-select-dropdown">
                    {temaOptions.map((option) => (
                      <div key={option.value} className={`custom-option ${settings.tema === option.value ? 'selected' : ''}`} onClick={() => { handleChange('tema', option.value); setShowTemaDropdown(false); }}>
                        <span className="option-icon-svg">{option.iconSvg}</span>
                        <span className="option-text">{option.label}</span>
                        {settings.tema === option.value && (
                          <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Format Tanggal</span>
              </div>
              <div className="custom-select-wrapper" ref={dropdownFormatRef}>
                <div className="custom-select-trigger" onClick={() => setShowFormatDropdown(!showFormatDropdown)}>
                  <div className="selected-option">
                    <span className="option-text">{formatTanggalOptions.find(o => o.value === settings.formatTanggal)?.label}</span>
                    <span className="option-example">{formatTanggalOptions.find(o => o.value === settings.formatTanggal)?.example}</span>
                  </div>
                  <svg className={`dropdown-arrow ${showFormatDropdown ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {showFormatDropdown && (
                  <div className="custom-select-dropdown">
                    {formatTanggalOptions.map((option) => (
                      <div key={option.value} className={`custom-option ${settings.formatTanggal === option.value ? 'selected' : ''}`} onClick={() => { handleChange('formatTanggal', option.value); setShowFormatDropdown(false); }}>
                        <div className="option-content">
                          <span className="option-text">{option.label}</span>
                          <span className="option-example">{option.example}</span>
                        </div>
                        {settings.formatTanggal === option.value && (
                          <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* PRIVASI */}
        <div className="settings-card">
          <div className="card-title">
            <svg className="title-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <div>
              <h2>Privasi & Keamanan</h2>
              <span>Kontrol privasi dan data Anda</span>
            </div>
          </div>

          <div className="settings-items">
            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Tampilkan Profil Publik</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.showProfile} onChange={() => handleToggle('showProfile')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 20V10M6 20V4M18 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Tampilkan Aktivitas</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.showActivity} onChange={() => handleToggle('showActivity')} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-label">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 3V21M21 21V8M7 8V21M11 8V21M15 8V21M19 8V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Izinkan Analytics</span>
              </div>
              <label className="switch">
                <input type="checkbox" checked={settings.allowAnalytics} onChange={() => handleToggle('allowAnalytics')} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* SAVE BUTTON */}
      <div className="save-container">
        <button className="btn-save" onClick={handleSave}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M17 21V13H7V21M7 3V8H15" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Simpan Semua Pengaturan
        </button>
      </div>
    </div>
  )
}

export default Pengaturan
