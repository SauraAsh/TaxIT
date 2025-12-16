import { useState } from 'react'
import Navbar from '../components/Navbar'
import './LandingPage.css'

const LandingPage = ({ onNavigateToLogin }) => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'E-Filing',
      description: 'Lapor SPT Tahunan secara online dengan mudah dan cepat',
      color: '#008bff'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'E-Billing',
      description: 'Buat kode billing dan bayar pajak dengan praktis',
      color: '#22c55e'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'E-Bukpot',
      description: 'Kelola bukti pemotongan pajak secara elektronik',
      color: '#f59e0b'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Registrasi NPWP',
      description: 'Daftar NPWP online tanpa perlu ke kantor pajak',
      color: '#8b5cf6'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Riwayat Pajak',
      description: 'Lihat histori pembayaran dan pelaporan pajak Anda',
      color: '#ec4899'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Bantuan',
      description: 'Dapatkan panduan dan dukungan untuk semua layanan',
      color: '#06b6d4'
    }
  ]

  const stats = [
    { number: '50M+', label: 'Wajib Pajak Terdaftar' },
    { number: '99.9%', label: 'Uptime System' },
    { number: '24/7', label: 'Layanan Tersedia' },
    { number: '100K+', label: 'Transaksi Harian' }
  ]

  return (
    <div className="landing-page">
      <Navbar onLoginClick={onNavigateToLogin} />
      
      {/* Hero Section */}
      <section className="hero" id="beranda">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span>Sistem Perpajakan Terpercaya</span>
            </div>
            <h1 className="hero-title">
              Layanan Pajak Digital<br />
              <span className="highlight">Mudah, Cepat, & Aman</span>
            </h1>
            <p className="hero-description">
              Portal resmi Direktorat Jenderal Pajak untuk kemudahan pelaporan dan pembayaran pajak online. 
              Kelola kewajiban perpajakan Anda kapan saja, di mana saja.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={onNavigateToLogin}>
                Mulai Sekarang
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="btn-secondary"
                onClick={() => window.open('https://youtu.be/xMHJGd3wwZk?si=qrHlhdhzUicA_BZV', '_blank')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
                </svg>
                Lihat Demo
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid">
              <div className="visual-item item-1">
                <div className="visual-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>E-Filing</span>
              </div>
              <div className="visual-item item-2">
                <div className="visual-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span>E-Billing</span>
              </div>
              <div className="visual-item item-3">
                <div className="visual-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>E-Bukpot</span>
              </div>
              <div className="visual-item item-4">
                <div className="visual-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Riwayat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section with Card Nav - Inspired by ReactBits */}
      <section className="services" id="layanan">
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-description">
              Berbagai layanan perpajakan yang dapat Anda akses dengan mudah
            </p>
          </div>
          <div className="card-nav-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`card-nav-item ${hoveredService === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-nav-glow" style={{ backgroundColor: service.color }}></div>
                <div className="card-nav-content">
                  <div className="service-icon" style={{ 
                    color: service.color,
                    backgroundColor: `${service.color}15`
                  }}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button className="service-link" style={{ color: service.color }}>
                    Akses Sekarang
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Siap untuk Memulai?</h2>
            <p className="cta-description">
              Bergabunglah dengan jutaan wajib pajak yang telah mempercayai layanan kami
            </p>
            <button className="btn-cta" onClick={onNavigateToLogin}>
              Masuk ke Akun Anda
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-title">E-Pajak</h4>
              <p className="footer-text">
                Portal resmi Direktorat Jenderal Pajak untuk kemudahan layanan perpajakan online
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Layanan</h4>
              <ul className="footer-links">
                <li><a href="#efiling">E-Filing</a></li>
                <li><a href="#ebilling">E-Billing</a></li>
                <li><a href="#ebukpot">E-Bukpot</a></li>
                <li><a href="#registrasi">Registrasi NPWP</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Informasi</h4>
              <ul className="footer-links">
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="#peraturan">Peraturan</a></li>
                <li><a href="#berita">Berita</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Kontak</h4>
              <ul className="footer-links">
                <li>Email: info@pajak.go.id</li>
                <li>Telepon: 1500-200</li>
                <li>Kring Pajak: 1500-200</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Direktorat Jenderal Pajak. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
