import './BentoGrid.css'

const BentoGrid = ({ user }) => {
  return (
    <section className="bento-grid">
      {/* Large Card - Status SPT */}
      <div className="bento-item large">
        <div className="bento-header">
          <h3>Status SPT Tahunan</h3>
          <span className="status-badge pending">Belum Lapor</span>
        </div>
        <div className="bento-content">
          <div className="deadline-info">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="deadline-text">
              <span className="deadline-label">Batas Pelaporan</span>
              <span className="deadline-date">31 Maret 2024</span>
              <span className="deadline-remaining">75 hari lagi</span>
            </div>
          </div>
          <button className="bento-cta">
            Lapor Sekarang
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Medium Card - Tagihan */}
      <div className="bento-item medium">
        <div className="bento-header">
          <h3>Tagihan Pajak</h3>
        </div>
        <div className="bento-content">
          <div className="amount-display">
            <span className="amount-label">Total Tagihan</span>
            <span className="amount-value">Rp 5.250.000</span>
          </div>
          <div className="tagihan-list">
            <div className="tagihan-item">
              <span>PPh Pasal 25</span>
              <span className="tagihan-amount">Rp 3.500.000</span>
            </div>
            <div className="tagihan-item">
              <span>PPN</span>
              <span className="tagihan-amount">Rp 1.750.000</span>
            </div>
          </div>
          <button className="bento-cta secondary">
            Bayar Sekarang
          </button>
        </div>
      </div>

      {/* Small Card - E-Filing Stats */}
      <div className="bento-item small">
        <div className="bento-icon-header" style={{ backgroundColor: '#008bff15', color: '#008bff' }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="stat-content">
          <span className="stat-number">12</span>
          <span className="stat-label">SPT Terlapor</span>
        </div>
      </div>

      {/* Small Card - E-Billing Stats */}
      <div className="bento-item small">
        <div className="bento-icon-header" style={{ backgroundColor: '#22c55e15', color: '#22c55e' }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="stat-content">
          <span className="stat-number">8</span>
          <span className="stat-label">Billing Aktif</span>
        </div>
      </div>

      {/* Medium Card - Riwayat Terakhir */}
      <div className="bento-item medium">
        <div className="bento-header">
          <h3>Aktivitas Terakhir</h3>
          <a href="#history" className="view-all">Lihat Semua</a>
        </div>
        <div className="bento-content">
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon success">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="activity-details">
                <span className="activity-title">SPT Masa Desember</span>
                <span className="activity-time">2 hari yang lalu</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon success">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="activity-details">
                <span className="activity-title">Pembayaran PPh 25</span>
                <span className="activity-time">5 hari yang lalu</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon warning">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="activity-details">
                <span className="activity-title">Draft SPT Tahunan</span>
                <span className="activity-time">1 minggu yang lalu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Card - Chart/Graph */}
      <div className="bento-item wide">
        <div className="bento-header">
          <h3>Ringkasan Pembayaran 2024</h3>
          <div className="chart-legend">
            <span className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#008bff' }}></span>
              Terbayar
            </span>
            <span className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#f59e0b' }}></span>
              Tertunggak
            </span>
          </div>
        </div>
        <div className="bento-content">
          <div className="chart-container">
            <div className="chart-bars">
              {[
                { month: 'Jan', paid: 80, pending: 20 },
                { month: 'Feb', paid: 90, pending: 10 },
                { month: 'Mar', paid: 70, pending: 30 },
                { month: 'Apr', paid: 85, pending: 15 },
                { month: 'Mei', paid: 95, pending: 5 },
                { month: 'Jun', paid: 75, pending: 25 }
              ].map((data, index) => (
                <div key={index} className="chart-bar-group">
                  <div className="chart-bar-container">
                    <div 
                      className="chart-bar paid" 
                      style={{ height: `${data.paid}%` }}
                    ></div>
                    <div 
                      className="chart-bar pending" 
                      style={{ height: `${data.pending}%` }}
                    ></div>
                  </div>
                  <span className="chart-label">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
