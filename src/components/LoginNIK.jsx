import { useState } from 'react'

const LoginNIK = ({ onBackToNPWP, onNavigateToSupport, onNavigateToForgotPassword }) => {
  const [formData, setFormData] = useState({
    nik: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      console.log('Login NIK data:', formData)
      alert('Login berhasil! (Demo)')
    }, 1500)
  }

  const formatNIK = (value) => {
    // NIK is 16 digits
    const numbers = value.replace(/\D/g, '')
    return numbers.slice(0, 16)
  }

  const handleNIKChange = (e) => {
    const formatted = formatNIK(e.target.value)
    setFormData(prev => ({ ...prev, nik: formatted }))
  }

  return (
    <>
      <div className="login-left">
        <div className="login-brand">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="brand-text">
            <h1>E-Pajak</h1>
            <p>Direktorat Jenderal Pajak</p>
          </div>
        </div>

        <div className="login-illustration" style={{ background: '#22c55e' }}>
          <div className="illustration-bg">
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
            <div className="bg-shape shape-3"></div>
          </div>
          <div className="illustration-content">
            <div className="illustration-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h2>Login dengan NIK</h2>
            <p>Gunakan Nomor Induk Kependudukan untuk akses cepat</p>
          </div>
        </div>

        <div className="login-features">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Login Cepat',
              description: 'Akses langsung dengan NIK tanpa perlu NPWP'
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Terintegrasi Dukcapil',
              description: 'Data terverifikasi langsung dari sistem kependudukan'
            }
          ].map((feature, index) => (
            <div key={index} className="feature-item" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
              <div className="feature-icon" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                {feature.icon}
              </div>
              <div className="feature-text">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <button 
            className="back-to-login"
            onClick={onBackToNPWP}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Kembali ke Login NPWP
          </button>

          <div className="login-header">
            <h2>Masuk dengan NIK</h2>
            <p>Silakan masukkan NIK dan password Anda</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="nik">NIK (Nomor Induk Kependudukan)</label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <input
                  type="text"
                  id="nik"
                  name="nik"
                  value={formData.nik}
                  onChange={handleNIKChange}
                  placeholder="16 digit NIK"
                  required
                  maxLength="16"
                />
              </div>
              <small style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem', display: 'block' }}>
                Masukkan 16 digit NIK sesuai KTP Anda
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Masukkan password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-text">Ingat saya</span>
              </label>
              <a href="#forgot" className="forgot-link" onClick={(e) => { e.preventDefault(); onNavigateToForgotPassword(); }}>Lupa password?</a>
            </div>

            <button type="submit" className="btn-submit" disabled={isLoading} style={{ backgroundColor: '#22c55e' }}>
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Memproses...
                </>
              ) : (
                <>
                  Masuk dengan NIK
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="info-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div>
              <strong>Belum pernah login dengan NIK?</strong>
              <p>Untuk login pertama kali dengan NIK, Anda perlu mengaktifkan akun terlebih dahulu melalui kantor pajak terdekat atau hubungi Kring Pajak 1500-200.</p>
            </div>
          </div>

          <div className="login-footer">
            <p>Butuh bantuan? <a href="#help" onClick={(e) => { e.preventDefault(); onNavigateToSupport(); }}>Hubungi Support</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginNIK
