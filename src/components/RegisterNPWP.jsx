import { useState } from 'react'

const RegisterNPWP = ({ onBackToNPWP, onNavigateToSupport, onNavigateToTerms }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Data Pribadi
    nik: '',
    nama: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    
    // Step 2: Alamat
    alamat: '',
    rt: '',
    rw: '',
    kelurahan: '',
    kecamatan: '',
    kota: '',
    provinsi: '',
    kodePos: '',
    
    // Step 3: Kontak & Password
    email: '',
    nomorHP: '',
    password: '',
    confirmPassword: '',
    
    // Agreement
    agreeTnC: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      console.log('Register data:', formData)
      alert('Pendaftaran berhasil! Silakan cek email untuk aktivasi. (Demo)')
    }, 2000)
  }

  const formatNIK = (value) => {
    const numbers = value.replace(/\D/g, '')
    return numbers.slice(0, 16)
  }

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '')
    return numbers.slice(0, 13)
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

        <div className="login-illustration" style={{ background: '#8b5cf6' }}>
          <div className="illustration-bg">
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
            <div className="bg-shape shape-3"></div>
          </div>
          <div className="illustration-content">
            <div className="illustration-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>Daftar NPWP Baru</h2>
            <p>Proses pendaftaran mudah dan cepat secara online</p>
          </div>
        </div>

        <div className="login-features">
          {/* Progress Steps */}
          <div className="progress-steps">
            <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="step-number">{step > 1 ? '' : '1'}</div>
              <div className="step-label">Data Pribadi</div>
            </div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="step-number">{step > 2 ? '' : '2'}</div>
              <div className="step-label">Alamat</div>
            </div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Verifikasi</div>
            </div>
          </div>

          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Gratis & Mudah',
              description: 'Pendaftaran NPWP tidak dipungut biaya'
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Proses Cepat',
              description: 'NPWP akan dikirim ke email dalam 1x24 jam'
            }
          ].map((feature, index) => (
            <div key={index} className="feature-item" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
              <div className="feature-icon" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
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
            Sudah punya NPWP? Login
          </button>

          <div className="login-header">
            <h2>Daftar NPWP Baru</h2>
            <p>Langkah {step} dari 3 - {step === 1 ? 'Data Pribadi' : step === 2 ? 'Alamat' : 'Verifikasi'}</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form register-form">
            {/* Step 1: Data Pribadi */}
            {step === 1 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="nik">NIK (Nomor Induk Kependudukan) *</label>
                  <input
                    type="text"
                    id="nik"
                    name="nik"
                    value={formData.nik}
                    onChange={(e) => setFormData(prev => ({ ...prev, nik: formatNIK(e.target.value) }))}
                    placeholder="16 digit NIK"
                    required
                    maxLength="16"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="nama">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    placeholder="Sesuai KTP"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="tempatLahir">Tempat Lahir *</label>
                    <input
                      type="text"
                      id="tempatLahir"
                      name="tempatLahir"
                      value={formData.tempatLahir}
                      onChange={handleInputChange}
                      placeholder="Kota lahir"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tanggalLahir">Tanggal Lahir *</label>
                    <input
                      type="date"
                      id="tanggalLahir"
                      name="tanggalLahir"
                      value={formData.tanggalLahir}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Jenis Kelamin *</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="L"
                        checked={formData.jenisKelamin === 'L'}
                        onChange={handleInputChange}
                        required
                      />
                      <span>Laki-laki</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="P"
                        checked={formData.jenisKelamin === 'P'}
                        onChange={handleInputChange}
                        required
                      />
                      <span>Perempuan</span>
                    </label>
                  </div>
                </div>

                <button type="button" className="btn-submit" onClick={handleNext} style={{ backgroundColor: '#8b5cf6' }}>
                  Lanjutkan
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}

            {/* Step 2: Alamat */}
            {step === 2 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="alamat">Alamat Lengkap *</label>
                  <textarea
                    id="alamat"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleInputChange}
                    placeholder="Jalan, nomor rumah, dll"
                    required
                    rows="3"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="rt">RT *</label>
                    <input
                      type="text"
                      id="rt"
                      name="rt"
                      value={formData.rt}
                      onChange={handleInputChange}
                      placeholder="001"
                      required
                      maxLength="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rw">RW *</label>
                    <input
                      type="text"
                      id="rw"
                      name="rw"
                      value={formData.rw}
                      onChange={handleInputChange}
                      placeholder="001"
                      required
                      maxLength="3"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="kodePos">Kode Pos *</label>
                    <input
                      type="text"
                      id="kodePos"
                      name="kodePos"
                      value={formData.kodePos}
                      onChange={handleInputChange}
                      placeholder="12345"
                      required
                      maxLength="5"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="kelurahan">Kelurahan *</label>
                  <input
                    type="text"
                    id="kelurahan"
                    name="kelurahan"
                    value={formData.kelurahan}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="kecamatan">Kecamatan *</label>
                    <input
                      type="text"
                      id="kecamatan"
                      name="kecamatan"
                      value={formData.kecamatan}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="kota">Kota/Kabupaten *</label>
                    <input
                      type="text"
                      id="kota"
                      name="kota"
                      value={formData.kota}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="provinsi">Provinsi *</label>
                  <input
                    type="text"
                    id="provinsi"
                    name="provinsi"
                    value={formData.provinsi}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="button-group">
                  <button type="button" className="btn-secondary" onClick={handleBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Kembali
                  </button>
                  <button type="button" className="btn-submit" onClick={handleNext} style={{ backgroundColor: '#8b5cf6' }}>
                    Lanjutkan
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Verifikasi */}
            {step === 3 && (
              <div className="form-step">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    required
                  />
                  <small>NPWP akan dikirim ke email ini</small>
                </div>

                <div className="form-group">
                  <label htmlFor="nomorHP">Nomor HP *</label>
                  <input
                    type="tel"
                    id="nomorHP"
                    name="nomorHP"
                    value={formData.nomorHP}
                    onChange={(e) => setFormData(prev => ({ ...prev, nomorHP: formatPhone(e.target.value) }))}
                    placeholder="08xxxxxxxxxx"
                    required
                    maxLength="13"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Minimal 8 karakter"
                      required
                      minLength="8"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Konfirmasi Password *</label>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Ulangi password"
                      required
                      minLength="8"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeTnC"
                      checked={formData.agreeTnC}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">
                      Saya menyetujui <a href="#tnc" onClick={(e) => { e.preventDefault(); onNavigateToTerms(); }}>syarat dan ketentuan</a> yang berlaku
                    </span>
                  </label>
                </div>

                <div className="button-group">
                  <button type="button" className="btn-secondary" onClick={handleBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Kembali
                  </button>
                  <button type="submit" className="btn-submit" disabled={isLoading} style={{ backgroundColor: '#8b5cf6' }}>
                    {isLoading ? (
                      <>
                        <div className="spinner"></div>
                        Memproses...
                      </>
                    ) : (
                      <>
                        Daftar Sekarang
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="login-footer">
            <p>Butuh bantuan? <a href="#help" onClick={(e) => { e.preventDefault(); onNavigateToSupport(); }}>Hubungi Support</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterNPWP
