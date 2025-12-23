import { useState, useEffect, useRef } from 'react'
import './Bantuan.css'

const Bantuan = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomorHP: '',
    kategori: '',
    pesan: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showKategoriDropdown, setShowKategoriDropdown] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowKategoriDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Pesan Anda telah terkirim! Tim kami akan menghubungi Anda segera.')
      console.log('Support form:', formData)
    }, 1500)
  }

  const kategoriOptions = [
    { 
      value: 'teknis', 
      label: 'Masalah Teknis', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3C15.1 5.9 15.1 5.3 14.7 4.9C14.3 4.5 13.7 4.5 13.3 4.9L8.7 9.5C8.3 9.9 8.3 10.5 8.7 10.9L13.3 15.5C13.7 15.9 14.3 15.9 14.7 15.5C15.1 15.1 15.1 14.5 14.7 14.1L11.4 10.7L14.7 7.3C14.9 7.1 15 6.9 15 6.7C15 6.5 14.9 6.3 14.7 6.1V6.3Z" fill="currentColor"/>
          <path d="M21.6 10.7L17 6.1C16.6 5.7 16 5.7 15.6 6.1C15.2 6.5 15.2 7.1 15.6 7.5L19.2 11.1L15.6 14.7C15.2 15.1 15.2 15.7 15.6 16.1C16 16.5 16.6 16.5 17 16.1L21.6 11.5C22 11.1 22 10.5 21.6 10.1V10.7Z" fill="currentColor"/>
          <path d="M9 19H4C3.4 19 3 18.6 3 18V6C3 5.4 3.4 5 4 5H9C9.6 5 10 4.6 10 4C10 3.4 9.6 3 9 3H4C2.3 3 1 4.3 1 6V18C1 19.7 2.3 21 4 21H9C9.6 21 10 20.6 10 20C10 19.4 9.6 19 9 19Z" fill="currentColor"/>
        </svg>
      ),
      color: '#f59e0b' 
    },
    { 
      value: 'akun', 
      label: 'Masalah Akun', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#8b5cf6' 
    },
    { 
      value: 'npwp', 
      label: 'Pendaftaran NPWP', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#06b6d4' 
    },
    { 
      value: 'efiling', 
      label: 'E-Filing', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15L12 12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#22c55e' 
    },
    { 
      value: 'lainnya', 
      label: 'Lainnya', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#ec4899' 
    }
  ]

  const handleKategoriSelect = (value, label) => {
    setFormData(prev => ({ ...prev, kategori: value }))
    setShowKategoriDropdown(false)
  }

  const getSelectedKategori = () => {
    const selected = kategoriOptions.find(opt => opt.value === formData.kategori)
    return selected || null
  }

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email',
      value: 'support@pajak.go.id',
      description: 'Kirim email untuk pertanyaan detail'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Kring Pajak',
      value: '1500-200',
      description: 'Layanan telepon 24/7'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Kantor Pajak',
      value: 'Cari kantor terdekat',
      description: 'Kunjungi kantor pajak terdekat'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'FAQ',
      value: 'Pertanyaan Umum',
      description: 'Temukan jawaban cepat'
    }
  ]

  const faqItems = [
    {
      question: 'Bagaimana cara mendaftar NPWP online?',
      answer: 'Anda dapat mendaftar NPWP secara online melalui menu "Daftar NPWP Baru" di halaman login.'
    },
    {
      question: 'Berapa lama proses pembuatan NPWP?',
      answer: 'Proses pembuatan NPWP secara online biasanya memakan waktu 1x24 jam. NPWP akan dikirimkan ke email yang terdaftar.'
    },
    {
      question: 'Bagaimana cara melaporkan SPT Tahunan?',
      answer: 'Anda dapat melaporkan SPT Tahunan melalui fitur E-Filing setelah login ke sistem.'
    },
    {
      question: 'Apakah layanan ini berbayar?',
      answer: 'Tidak, semua layanan perpajakan online ini gratis dan tidak dipungut biaya apapun.'
    }
  ]

  return (
    <div className="support-page">
      <div className="support-container">
        <div className="support-header">
          <div className="header-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Bantuan</h1>
          <p>Kami siap membantu Anda dengan pertanyaan atau kendala yang Anda alami</p>
        </div>

        <div className="support-content">
          {/* Contact Methods */}
          <div className="contact-methods">
            <h2>Cara Menghubungi Kami</h2>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <div key={index} className="method-card">
                  <div className="method-icon">{method.icon}</div>
                  <h3>{method.title}</h3>
                  <p className="method-value">{method.value}</p>
                  <p className="method-description">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nama">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
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
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nomorHP">Nomor HP *</label>
                  <input
                    type="tel"
                    id="nomorHP"
                    name="nomorHP"
                    value={formData.nomorHP}
                    onChange={handleInputChange}
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="kategori">Kategori *</label>
                  <div className="custom-select-wrapper" ref={dropdownRef}>
                    <div 
                      className="custom-select-trigger"
                      onClick={() => setShowKategoriDropdown(!showKategoriDropdown)}
                    >
                      {getSelectedKategori() ? (
                        <div className="selected-option">
                          <span className="option-icon" style={{ color: getSelectedKategori().color }}>
                            {getSelectedKategori().icon}
                          </span>
                          <span className="option-text">{getSelectedKategori().label}</span>
                        </div>
                      ) : (
                        <span className="placeholder">Pilih kategori</span>
                      )}
                      <svg 
                        className={`dropdown-arrow ${showKategoriDropdown ? 'open' : ''}`}
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {showKategoriDropdown && (
                      <div className="custom-select-dropdown">
                        {kategoriOptions.map((option) => (
                          <div
                            key={option.value}
                            className={`custom-option ${formData.kategori === option.value ? 'selected' : ''}`}
                            onClick={() => handleKategoriSelect(option.value, option.label)}
                          >
                            <span className="option-icon" style={{ color: option.color }}>
                              {option.icon}
                            </span>
                            <span className="option-text">{option.label}</span>
                            {formData.kategori === option.value && (
                              <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              <div className="form-group">
                <label htmlFor="pesan">Pesan *</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  placeholder="Jelaskan kendala atau pertanyaan Anda"
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2>Pertanyaan yang Sering Diajukan (FAQ)</h2>
            <div className="faq-list">
              {faqItems.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bantuan
