import { useState, useEffect } from 'react'
import './EFiling.css'

const EFiling = ({ initialTab = 'baru' }) => {
  const [activeTab, setActiveTab] = useState(initialTab)

  // Sync with initialTab from sidebar
  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])
  const [selectedYear, setSelectedYear] = useState('2024')
  const [draftList, setDraftList] = useState([
    {
      id: 1,
      type: 'SPT 1770S',
      year: '2024',
      lastEdit: '2024-12-10',
      progress: 65,
      status: 'draft'
    },
    {
      id: 2,
      type: 'SPT 1770',
      year: '2023',
      lastEdit: '2024-11-28',
      progress: 30,
      status: 'draft'
    }
  ])

  const [historyList] = useState([
    {
      id: 1,
      type: 'SPT 1770S',
      year: '2023',
      submitDate: '2024-03-20',
      status: 'approved',
      buktiPenerimaan: 'BPE-2023-001234'
    },
    {
      id: 2,
      type: 'SPT 1770S',
      year: '2022',
      submitDate: '2023-03-15',
      status: 'approved',
      buktiPenerimaan: 'BPE-2022-005678'
    },
    {
      id: 3,
      type: 'SPT 1770S',
      year: '2021',
      submitDate: '2022-03-10',
      status: 'approved',
      buktiPenerimaan: 'BPE-2021-009012'
    }
  ])

  const sptTypes = [
    {
      id: 'spt-1770',
      title: 'SPT Tahunan 1770',
      description: 'Untuk Wajib Pajak yang mempunyai penghasilan dari usaha/pekerjaan bebas, dengan penghasilan bruto lebih dari Rp60 juta per tahun',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#3b82f6',
      bgColor: '#eff6ff',
      deadline: '31 Maret 2025'
    },
    {
      id: 'spt-1770s',
      title: 'SPT Tahunan 1770S',
      description: 'Untuk Wajib Pajak yang mempunyai penghasilan dari satu atau lebih pemberi kerja dengan penghasilan bruto tidak lebih dari Rp60 juta',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2"/>
          <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#10b981',
      bgColor: '#f0fdf4',
      deadline: '31 Maret 2025'
    },
    {
      id: 'spt-1770ss',
      title: 'SPT Tahunan 1770SS',
      description: 'Untuk Wajib Pajak dengan penghasilan bruto tidak lebih dari Rp60 juta setahun dan hanya dari satu pemberi kerja',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#f59e0b',
      bgColor: '#fffbeb',
      deadline: '31 Maret 2025'
    }
  ]

  // Fungsi untuk memulai pelaporan SPT
  const handleStartSPT = (sptType) => {
    alert(`Memulai pelaporan ${sptType.title} untuk tahun pajak ${selectedYear}.\n\nFitur pengisian formulir akan segera tersedia.`)
  }

  // Fungsi untuk melihat info lengkap SPT
  const handleShowInfo = (sptType) => {
    alert(`Informasi ${sptType.title}:\n\n${sptType.description}\n\nBatas waktu pelaporan: ${sptType.deadline}`)
  }

  // Fungsi untuk melanjutkan draft
  const handleContinueDraft = (draft) => {
    alert(`Melanjutkan pengisian ${draft.type} tahun ${draft.year}.\n\nProgress saat ini: ${draft.progress}%`)
  }

  // Fungsi untuk menghapus draft
  const handleDeleteDraft = (draftId) => {
    if (confirm('Apakah Anda yakin ingin menghapus draft ini?')) {
      setDraftList(draftList.filter(draft => draft.id !== draftId))
      alert('Draft berhasil dihapus!')
    }
  }

  // Fungsi untuk melihat detail riwayat
  const handleViewDetail = (item) => {
    alert(`Detail Pelaporan:\n\nJenis: ${item.type}\nTahun Pajak: ${item.year}\nTanggal Lapor: ${new Date(item.submitDate).toLocaleDateString('id-ID')}\nStatus: Diterima\nBukti Penerimaan: ${item.buktiPenerimaan}`)
  }

  // Fungsi untuk download bukti penerimaan
  const handleDownloadBPE = (item) => {
    alert(`Mengunduh Bukti Penerimaan Elektronik:\n\nNomor: ${item.buktiPenerimaan}\nJenis SPT: ${item.type}\nTahun Pajak: ${item.year}\n\nFile akan diunduh dalam format PDF.`)
  }

  // Fungsi untuk panduan memilih SPT
  const handleShowGuide = () => {
    alert('Panduan Memilih Jenis SPT:\n\n1. SPT 1770SS: Untuk penghasilan di bawah Rp60 juta/tahun dari satu pemberi kerja\n\n2. SPT 1770S: Untuk penghasilan di bawah Rp60 juta/tahun dari satu atau lebih pemberi kerja\n\n3. SPT 1770: Untuk penghasilan di atas Rp60 juta/tahun atau memiliki usaha/pekerjaan bebas\n\nJika masih ragu, hubungi support kami.')
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      draft: { 
        label: 'Draft', 
        color: '#64748b', 
        bgColor: '#f1f5f9',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      },
      approved: { 
        label: 'Diterima', 
        color: '#22c55e', 
        bgColor: '#f0fdf4',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      },
      pending: { 
        label: 'Diproses', 
        color: '#f59e0b', 
        bgColor: '#fffbeb',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      }
    }
    return statusConfig[status] || statusConfig.draft
  }

  const calculateDaysLeft = () => {
    const deadline = new Date('2025-03-31')
    const today = new Date()
    const diffTime = deadline - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="efiling-page">
      {/* Header Section */}
      <div className="efiling-header">
        <div className="header-content-wrapper">
          <div className="header-title-section">
            <h1>E-Filing SPT Tahunan</h1>
            <p>Laporkan SPT Tahunan Anda secara online dengan mudah, cepat, dan aman</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-cards-compact">
            <div className="stat-card-mini primary">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <span className="stat-value-mini">{calculateDaysLeft()}</span>
                <span className="stat-label-mini">Hari</span>
              </div>
            </div>

            <div className="stat-card-mini success">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="stat-value-mini">{historyList.length}</span>
                <span className="stat-label-mini">Terlapor</span>
              </div>
            </div>

            <div className="stat-card-mini warning">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <span className="stat-value-mini">{draftList.length}</span>
                <span className="stat-label-mini">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Tab: Lapor SPT Baru */}
        {activeTab === 'baru' && (
          <div className="tab-panel">
            {/* Year Selector */}
            <div className="year-selector-section">
              <div className="section-label">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Pilih Tahun Pajak</span>
              </div>
              <div className="year-buttons">
                {['2024', '2023', '2022'].map(year => (
                  <button
                    key={year}
                    className={`year-button ${selectedYear === year ? 'active' : ''}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* SPT Types Grid */}
            <div className="spt-types-grid">
              {sptTypes.map((spt, index) => (
                <div 
                  key={spt.id} 
                  className="spt-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="spt-card-header" style={{ backgroundColor: spt.bgColor }}>
                    <div className="spt-icon" style={{ color: spt.color }}>
                      {spt.icon}
                    </div>
                    <div className="spt-badge" style={{ backgroundColor: `${spt.color}20`, color: spt.color }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>{spt.deadline}</span>
                    </div>
                  </div>

                  <div className="spt-card-body">
                    <h3>{spt.title}</h3>
                    <p>{spt.description}</p>
                  </div>

                  <div className="spt-card-footer">
                    <button 
                      className="btn-primary" 
                      style={{ backgroundColor: spt.color }}
                      onClick={() => handleStartSPT(spt)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Mulai Lapor
                    </button>
                    <button 
                      className="btn-secondary"
                      onClick={() => handleShowInfo(spt)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Info Lengkap
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Help Section */}
            <div className="help-section">
              <div className="help-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="help-content">
                <h3>Tidak yakin jenis SPT yang harus dilaporkan?</h3>
                <p>Gunakan panduan kami untuk mengetahui jenis formulir SPT yang sesuai dengan situasi perpajakan Anda</p>
                <button className="btn-help" onClick={handleShowGuide}>
                  <span>Panduan Memilih SPT</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Draft */}
        {activeTab === 'draft' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>SPT Draft</h2>
                <p>Lanjutkan pengisian SPT yang belum selesai</p>
              </div>
            </div>

            {draftList.length > 0 ? (
              <div className="draft-list">
                {draftList.map((draft, index) => (
                  <div 
                    key={draft.id} 
                    className="draft-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="draft-main">
                      <div className="draft-header">
                        <div className="draft-info">
                          <h3>{draft.type}</h3>
                          <span className="draft-meta">Tahun Pajak {draft.year}</span>
                        </div>
                        <div 
                          className="status-badge" 
                          style={{ 
                            backgroundColor: getStatusBadge(draft.status).bgColor,
                            color: getStatusBadge(draft.status).color 
                          }}
                        >
                          {getStatusBadge(draft.status).icon}
                          <span>{getStatusBadge(draft.status).label}</span>
                        </div>
                      </div>

                      <div className="draft-progress">
                        <div className="progress-header">
                          <span className="progress-label">Progress Pengisian</span>
                          <span className="progress-value">{draft.progress}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${draft.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="draft-footer">
                        <div className="last-edit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Terakhir diedit: {new Date(draft.lastEdit).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="draft-actions">
                          <button 
                            className="btn-action continue"
                            onClick={() => handleContinueDraft(draft)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Lanjutkan
                          </button>
                          <button 
                            className="btn-action delete"
                            onClick={() => handleDeleteDraft(draft.id)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6H21M19 6L18.4 20.2C18.3 21.2 17.4 22 16.4 22H7.6C6.6 22 5.7 21.2 5.6 20.2L5 6M8 6V4C8 3.4 8.4 3 9 3H15C15.6 3 16 3.4 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Tidak ada draft tersimpan</h3>
                <p>Draft SPT yang Anda simpan akan muncul di sini</p>
              </div>
            )}
          </div>
        )}

        {/* Tab: Riwayat */}
        {activeTab === 'riwayat' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Riwayat Pelaporan SPT</h2>
                <p>Lihat semua SPT yang telah Anda laporkan</p>
              </div>
            </div>

            <div className="history-list">
              {historyList.map((item, index) => (
                <div 
                  key={item.id} 
                  className="history-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="history-main">
                    <div className="history-header">
                      <div className="history-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="history-info">
                        <h3>{item.type}</h3>
                        <span className="history-meta">Tahun Pajak {item.year}</span>
                      </div>
                      <div 
                        className="status-badge" 
                        style={{ 
                          backgroundColor: getStatusBadge(item.status).bgColor,
                          color: getStatusBadge(item.status).color 
                        }}
                      >
                        {getStatusBadge(item.status).icon}
                        <span>{getStatusBadge(item.status).label}</span>
                      </div>
                    </div>

                    <div className="history-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Tanggal Lapor: {new Date(item.submitDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>Bukti: {item.buktiPenerimaan}</span>
                        </div>
                      </div>
                    </div>

                    <div className="history-actions">
                      <button 
                        className="btn-action view"
                        onClick={() => handleViewDetail(item)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Lihat Detail
                      </button>
                      <button 
                        className="btn-action download"
                        onClick={() => handleDownloadBPE(item)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M7 10L12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Download BPE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EFiling
