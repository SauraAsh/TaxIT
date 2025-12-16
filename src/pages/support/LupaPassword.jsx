import { useState } from 'react'
import './SupportPages.css'

const LupaPassword = ({ onBack, onBackToLogin }) => {
  const [step, setStep] = useState(1) // 1: input identifier, 2: verify code, 3: reset password
  const [formData, setFormData] = useState({
    identifier: '',
    identifierType: 'npwp', // npwp or nik
    verificationCode: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSendCode = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
      alert('Kode verifikasi telah dikirim ke email Anda!')
    }, 1500)
  }

  const handleVerifyCode = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      setStep(3)
    }, 1500)
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Password tidak cocok!')
      return
    }
    
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      alert('Password berhasil direset! Silakan login dengan password baru.')
      onBackToLogin()
    }, 1500)
  }

  return (
    <div className="support-page">
      <div className="support-container narrow">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Kembali
        </button>

        <div className="support-header">
          <div className="header-icon" style={{ backgroundColor: '#f59e0b20', color: '#f59e0b' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Lupa Password</h1>
          <p>Ikuti langkah-langkah berikut untuk mereset password Anda</p>
        </div>

        {/* Progress Steps */}
        <div className="reset-progress">
          <div className={`progress-dot ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <span>{step > 1 ? '' : '1'}</span>
          </div>
          <div className={`progress-line ${step > 1 ? 'active' : ''}`}></div>
          <div className={`progress-dot ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <span>{step > 2 ? '' : '2'}</span>
          </div>
          <div className={`progress-line ${step > 2 ? 'active' : ''}`}></div>
          <div className={`progress-dot ${step >= 3 ? 'active' : ''}`}>
            <span>3</span>
          </div>
        </div>

        <div className="reset-content">
          {/* Step 1: Input Identifier */}
          {step === 1 && (
            <div className="reset-step">
              <h2>Verifikasi Identitas</h2>
              <p className="step-description">Masukkan NPWP atau NIK Anda untuk verifikasi</p>
              
              <form onSubmit={handleSendCode} className="reset-form">
                <div className="form-group">
                  <label>Pilih tipe identitas</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="identifierType"
                        value="npwp"
                        checked={formData.identifierType === 'npwp'}
                        onChange={handleInputChange}
                      />
                      <span>NPWP</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="identifierType"
                        value="nik"
                        checked={formData.identifierType === 'nik'}
                        onChange={handleInputChange}
                      />
                      <span>NIK</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="identifier">
                    {formData.identifierType === 'npwp' ? 'NPWP' : 'NIK'} *
                  </label>
                  <input
                    type="text"
                    id="identifier"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleInputChange}
                    placeholder={formData.identifierType === 'npwp' ? 'XX.XXX.XXX.X-XXX.XXX' : '16 digit NIK'}
                    required
                  />
                </div>

                <button type="submit" className="btn-submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      Memproses...
                    </>
                  ) : (
                    <>
                      Kirim Kode Verifikasi
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Verify Code */}
          {step === 2 && (
            <div className="reset-step">
              <h2>Masukkan Kode Verifikasi</h2>
              <p className="step-description">
                Kami telah mengirimkan kode verifikasi ke email yang terdaftar
              </p>
              
              <form onSubmit={handleVerifyCode} className="reset-form">
                <div className="form-group">
                  <label htmlFor="verificationCode">Kode Verifikasi *</label>
                  <input
                    type="text"
                    id="verificationCode"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleInputChange}
                    placeholder="Masukkan 6 digit kode"
                    maxLength="6"
                    required
                  />
                  <small>Kode verifikasi berlaku selama 10 menit</small>
                </div>

                <button type="submit" className="btn-submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      Memverifikasi...
                    </>
                  ) : (
                    <>
                      Verifikasi Kode
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <button type="button" className="btn-secondary" onClick={() => alert('Kode verifikasi telah dikirim ulang!')}>
                  Kirim Ulang Kode
                </button>
              </form>
            </div>
          )}

          {/* Step 3: Reset Password */}
          {step === 3 && (
            <div className="reset-step">
              <h2>Buat Password Baru</h2>
              <p className="step-description">Masukkan password baru untuk akun Anda</p>
              
              <form onSubmit={handleResetPassword} className="reset-form">
                <div className="form-group">
                  <label htmlFor="newPassword">Password Baru *</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Minimal 8 karakter"
                      minLength="8"
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

                <div className="form-group">
                  <label htmlFor="confirmPassword">Konfirmasi Password Baru *</label>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Ulangi password baru"
                      minLength="8"
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
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

                <div className="password-requirements">
                  <p><strong>Password harus memenuhi:</strong></p>
                  <ul>
                    <li>Minimal 8 karakter</li>
                    <li>Kombinasi huruf dan angka</li>
                    <li>Minimal 1 huruf kapital</li>
                  </ul>
                </div>

                <button type="submit" className="btn-submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      Memproses...
                    </>
                  ) : (
                    <>
                      Reset Password
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LupaPassword
