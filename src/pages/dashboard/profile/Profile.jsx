import { useState } from 'react'
import './Profile.css'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [verifyPassword, setVerifyPassword] = useState('')
  const [isDataUnlocked, setIsDataUnlocked] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  
  const [profileData, setProfileData] = useState({
    nama: 'Chello Arta',
    nik: '3578012345670001',
    npwp: '11.111.111.1-111.111',
    email: 'chello.arta@email.com',
    telepon: '+62 812-3456-7890',
    alamat: 'Jl. Raya Darmo No. 123, Surabaya',
    jenisWP: 'Orang Pribadi',
    statusPerkawinan: 'Belum Kawin',
    pekerjaan: 'Karyawan Swasta',
    tempatLahir: 'Surabaya',
    tanggalLahir: '1995-05-15'
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotif: true,
    smsNotif: false,
    pushNotif: true,
    transaksiNotif: true,
    promoNotif: false,
    reminderNotif: true
  })

  const activityHistory = [
    {
      id: 1,
      action: 'Login ke sistem',
      timestamp: '2024-12-19 14:30:00',
      device: 'Chrome - Windows',
      ip: '192.168.1.1',
      status: 'success'
    },
    {
      id: 2,
      action: 'Upload Bukti Potong',
      timestamp: '2024-12-19 13:15:00',
      device: 'Chrome - Windows',
      ip: '192.168.1.1',
      status: 'success'
    },
    {
      id: 3,
      action: 'Download SPT',
      timestamp: '2024-12-18 16:45:00',
      device: 'Mobile App - Android',
      ip: '192.168.1.100',
      status: 'success'
    },
    {
      id: 4,
      action: 'Ubah Password',
      timestamp: '2024-12-15 10:20:00',
      device: 'Chrome - Windows',
      ip: '192.168.1.1',
      status: 'success'
    }
  ]

  const handleUnlockData = (e) => {
    e.preventDefault()
    if (verifyPassword === '') {
      alert('Masukkan password Anda')
      return
    }
    // Simulasi verifikasi password
    setIsDataUnlocked(true)
    setShowPasswordModal(false)
    setVerifyPassword('')
    alert('Data pribadi berhasil dibuka')
  }

  const handleLockData = () => {
    setIsDataUnlocked(false)
    setIsEditing(false)
    alert('Data pribadi dikunci kembali')
  }

  const handleEditToggle = () => {
    if (!isDataUnlocked) {
      setShowPasswordModal(true)
    } else {
      setIsEditing(!isEditing)
    }
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    alert('Profil berhasil diperbarui!')
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  const handleProfileChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value })
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Password baru dan konfirmasi password tidak cocok!')
      return
    }
    if (passwordData.newPassword.length < 8) {
      alert('Password minimal 8 karakter!')
      return
    }
    alert('Password berhasil diubah!')
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  const handleNotificationToggle = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting]
    })
  }

  return (
    <div className="profile-page">
      {/* Password Modal */}
      {showPasswordModal && (
        <div className="modal-overlay" onClick={() => setShowPasswordModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Verifikasi Password</h3>
              <button className="modal-close" onClick={() => setShowPasswordModal(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <form onSubmit={handleUnlockData}>
              <p className="modal-description">
                Masukkan password Anda untuk mengakses dan mengedit data pribadi
              </p>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  placeholder="Masukkan password"
                  autoFocus
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowPasswordModal(false)}>
                  Batal
                </button>
                <button type="submit" className="btn-primary">
                  Verifikasi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="profile-header">
        <div className="container">
          <div className="profile-header-content">
            <div className="profile-avatar">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="profile-header-info">
              <h1>{profileData.nama}</h1>
              <p className="profile-subtitle">NPWP: {profileData.npwp}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-nav">
        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Ringkasan
            </button>
            <button 
              className={`nav-tab ${activeTab === 'data' ? 'active' : ''}`}
              onClick={() => setActiveTab('data')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Data Pribadi
            </button>
            <button 
              className={`nav-tab ${activeTab === 'keamanan' ? 'active' : ''}`}
              onClick={() => setActiveTab('keamanan')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Keamanan
            </button>
            <button 
              className={`nav-tab ${activeTab === 'notifikasi' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifikasi')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Notifikasi
            </button>
            <button 
              className={`nav-tab ${activeTab === 'aktivitas' ? 'active' : ''}`}
              onClick={() => setActiveTab('aktivitas')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Aktivitas
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="overview-grid">
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="info-card-content">
                    <h3>Informasi Akun</h3>
                    <p>Kelola data pribadi dan informasi akun Anda</p>
                    <button className="btn-link" onClick={() => setActiveTab('data')}>
                      Lihat Detail →
                    </button>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="info-card-content">
                    <h3>Keamanan</h3>
                    <p>Ubah password dan kelola keamanan akun</p>
                    <button className="btn-link" onClick={() => setActiveTab('keamanan')}>
                      Kelola Keamanan →
                    </button>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="info-card-content">
                    <h3>Notifikasi</h3>
                    <p>Atur preferensi pemberitahuan Anda</p>
                    <button className="btn-link" onClick={() => setActiveTab('notifikasi')}>
                      Atur Notifikasi →
                    </button>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="info-card-content">
                    <h3>Aktivitas Terkini</h3>
                    <p>Pantau riwayat aktivitas akun Anda</p>
                    <button className="btn-link" onClick={() => setActiveTab('aktivitas')}>
                      Lihat Riwayat →
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="stats-section">
                <h2>Statistik Akun</h2>
                <div className="stats-grid">
                  <div className="stat-box">
                    <div className="stat-value">24</div>
                    <div className="stat-label">Total Transaksi</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-value">8</div>
                    <div className="stat-label">Bukti Potong</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-value">12</div>
                    <div className="stat-label">SPT Terlapor</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-value">4</div>
                    <div className="stat-label">E-Billing Aktif</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Pribadi Tab */}
          {activeTab === 'data' && (
            <div className="tab-content">
              <div className="content-card">
                <div className="card-header-flex">
                  <div>
                    <h2>Data Pribadi</h2>
                    <p>Informasi pribadi Anda dilindungi dengan password</p>
                  </div>
                  {isDataUnlocked && (
                    <div className="header-actions">
                      {!isEditing ? (
                        <>
                          <button className="btn-secondary" onClick={handleEditToggle}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2"/>
                              <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            Edit Data
                          </button>
                          <button className="btn-secondary" onClick={handleLockData}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            Kunci Data
                          </button>
                        </>
                      ) : null}
                    </div>
                  )}
                </div>

                {!isDataUnlocked ? (
                  <div className="locked-state">
                    <div className="locked-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h3>Data Pribadi Terkunci</h3>
                    <p>Masukkan password Anda untuk melihat dan mengedit data pribadi</p>
                    <button className="btn-primary" onClick={() => setShowPasswordModal(true)}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="16" r="1" fill="currentColor"/>
                      </svg>
                      Buka dengan Password
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="data-view">
                      <div className="data-row">
                        <div className="data-item">
                          <label>Nama Lengkap</label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={profileData.nama}
                              onChange={(e) => handleProfileChange('nama', e.target.value)}
                            />
                          ) : (
                            <div className="data-value">{profileData.nama}</div>
                          )}
                        </div>
                        <div className="data-item">
                          <label>NIK</label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={profileData.nik}
                              onChange={(e) => handleProfileChange('nik', e.target.value)}
                            />
                          ) : (
                            <div className="data-value">{profileData.nik}</div>
                          )}
                        </div>
                      </div>

                      <div className="data-row">
                        <div className="data-item">
                          <label>NPWP</label>
                          <div className="data-value readonly">{profileData.npwp}</div>
                          <small>NPWP tidak dapat diubah</small>
                        </div>
                        <div className="data-item">
                          <label>Email</label>
                          {isEditing ? (
                            <input
                              type="email"
                              value={profileData.email}
                              onChange={(e) => handleProfileChange('email', e.target.value)}
                            />
                          ) : (
                            <div className="data-value">{profileData.email}</div>
                          )}
                        </div>
                      </div>

                      <div className="data-row">
                        <div className="data-item">
                          <label>Nomor Telepon</label>
                          {isEditing ? (
                            <input
                              type="tel"
                              value={profileData.telepon}
                              onChange={(e) => handleProfileChange('telepon', e.target.value)}
                            />
                          ) : (
                            <div className="data-value">{profileData.telepon}</div>
                          )}
                        </div>
                        <div className="data-item">
                          <label>Jenis Wajib Pajak</label>
                          <div className="data-value readonly">{profileData.jenisWP}</div>
                        </div>
                      </div>

                      <div className="data-row">
                        <div className="data-item">
                          <label>Tempat Lahir</label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={profileData.tempatLahir}
                              onChange={(e) => handleProfileChange('tempatLahir', e.target.value)}
                            />
                          ) : (
                            <div className="data-value">{profileData.tempatLahir}</div>
                          )}
                        </div>
                        <div className="data-item">
                          <label>Tanggal Lahir</label>
                          {isEditing ? (
                            <input
                              type="date"
                              value={profileData.tanggalLahir}
                              onChange={(e) => handleProfileChange('tanggalLahir', e.target.value)}
                            />
                          ) : (
                            <div className="data-value">{new Date(profileData.tanggalLahir).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                          )}
                        </div>
                      </div>

                      <div className="data-row">
                        <div className="data-item">
                          <label>Status Perkawinan</label>
                          {isEditing ? (
                            <select
                              value={profileData.statusPerkawinan}
                              onChange={(e) => handleProfileChange('statusPerkawinan', e.target.value)}
                            >
                              <option value="Belum Kawin">Belum Kawin</option>
                              <option value="Kawin">Kawin</option>
                              <option value="Cerai">Cerai</option>
                            </select>
                          ) : (
                            <div className="data-value">{profileData.statusPerkawinan}</div>
                          )}
                        </div>
                        <div className="data-item">
                          <label>Pekerjaan</label>
                          {isEditing ? (
                            <input
                              type="text"
                              value={profileData.pekerjaan}
                              onChange={(e) => handleProfileChange('pekerjaan', e.target.value)}
                            />
                          ) : (
                            <div className="data-value">{profileData.pekerjaan}</div>
                          )}
                        </div>
                      </div>

                      <div className="data-row single">
                        <div className="data-item">
                          <label>Alamat</label>
                          {isEditing ? (
                            <textarea
                              value={profileData.alamat}
                              onChange={(e) => handleProfileChange('alamat', e.target.value)}
                              rows="3"
                            />
                          ) : (
                            <div className="data-value">{profileData.alamat}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="form-actions">
                        <button className="btn-secondary" onClick={handleCancelEdit}>
                          Batal
                        </button>
                        <button className="btn-primary" onClick={handleSaveProfile}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Simpan Perubahan
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Keamanan Tab */}
          {activeTab === 'keamanan' && (
            <div className="tab-content">
              <div className="content-card">
                <div className="card-header">
                  <h2>Ubah Password</h2>
                  <p>Pastikan password Anda kuat dan aman</p>
                </div>

                <form onSubmit={handlePasswordChange} className="password-form">
                  <div className="form-group">
                    <label>Password Saat Ini</label>
                    <input
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                      placeholder="Masukkan password saat ini"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Password Baru</label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      placeholder="Minimal 8 karakter"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Konfirmasi Password Baru</label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                      placeholder="Ulangi password baru"
                      required
                    />
                  </div>

                  <div className="password-requirements">
                    <h4>Persyaratan Password:</h4>
                    <ul>
                      <li className={passwordData.newPassword.length >= 8 ? 'valid' : ''}>
                        Minimal 8 karakter
                      </li>
                      <li className={/[A-Z]/.test(passwordData.newPassword) ? 'valid' : ''}>
                        Mengandung huruf besar
                      </li>
                      <li className={/[a-z]/.test(passwordData.newPassword) ? 'valid' : ''}>
                        Mengandung huruf kecil
                      </li>
                      <li className={/[0-9]/.test(passwordData.newPassword) ? 'valid' : ''}>
                        Mengandung angka
                      </li>
                    </ul>
                  </div>

                  <button type="submit" className="btn-primary">
                    Update Password
                  </button>
                </form>
              </div>

              <div className="content-card">
                <div className="card-header">
                  <h2>Autentikasi Dua Faktor</h2>
                  <p>Tingkatkan keamanan akun Anda</p>
                </div>

                <div className="two-factor-section">
                  <div className="two-factor-info">
                    <div className="two-factor-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <h3>Belum Aktif</h3>
                      <p>Aktifkan autentikasi dua faktor untuk keamanan ekstra</p>
                    </div>
                  </div>
                  <button className="btn-secondary">
                    Aktifkan 2FA
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notifikasi Tab */}
          {activeTab === 'notifikasi' && (
            <div className="tab-content">
              <div className="content-card">
                <div className="card-header">
                  <h2>Pengaturan Notifikasi</h2>
                  <p>Kelola bagaimana Anda menerima pemberitahuan</p>
                </div>

                <div className="notification-settings">
                  <div className="setting-group">
                    <h3>Saluran Notifikasi</h3>
                    
                    <div className="setting-item">
                      <div className="setting-info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <div>
                          <h4>Email</h4>
                          <p>Terima notifikasi via email</p>
                        </div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailNotif}
                          onChange={() => handleNotificationToggle('emailNotif')}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <div>
                          <h4>SMS</h4>
                          <p>Terima notifikasi via SMS</p>
                        </div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notificationSettings.smsNotif}
                          onChange={() => handleNotificationToggle('smsNotif')}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <div>
                          <h4>Push Notification</h4>
                          <p>Terima notifikasi di browser/app</p>
                        </div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notificationSettings.pushNotif}
                          onChange={() => handleNotificationToggle('pushNotif')}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>

                  <div className="setting-group">
                    <h3>Jenis Notifikasi</h3>
                    
                    <div className="setting-item">
                      <div className="setting-info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2"/>
                          <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <div>
                          <h4>Transaksi</h4>
                          <p>Pemberitahuan tentang transaksi pajak</p>
                        </div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notificationSettings.transaksiNotif}
                          onChange={() => handleNotificationToggle('transaksiNotif')}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <div>
                          <h4>Promosi & Penawaran</h4>
                          <p>Info tentang fitur baru dan promo</p>
                        </div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notificationSettings.promoNotif}
                          onChange={() => handleNotificationToggle('promoNotif')}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>

                    <div className="setting-item">
                      <div className="setting-info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <div>
                          <h4>Pengingat</h4>
                          <p>Reminder batas waktu pelaporan</p>
                        </div>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={notificationSettings.reminderNotif}
                          onChange={() => handleNotificationToggle('reminderNotif')}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Riwayat Aktivitas Tab */}
          {activeTab === 'aktivitas' && (
            <div className="tab-content">
              <div className="content-card">
                <div className="card-header">
                  <h2>Riwayat Aktivitas</h2>
                  <p>Log aktivitas terkini pada akun Anda</p>
                </div>

                <div className="activity-list">
                  {activityHistory.map((activity) => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-icon">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="activity-content">
                        <h4>{activity.action}</h4>
                        <div className="activity-meta">
                          <span>{activity.timestamp}</span>
                          <span>•</span>
                          <span>{activity.device}</span>
                          <span>•</span>
                          <span>{activity.ip}</span>
                        </div>
                      </div>
                      <div className="activity-status success">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
