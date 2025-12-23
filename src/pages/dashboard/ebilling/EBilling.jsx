import { useState, useEffect, useRef } from 'react'
import './EBilling.css'

const EBilling = ({ initialTab = 'baru' }) => {
  const [activeTab, setActiveTab] = useState(initialTab)

  // Sync with initialTab from sidebar
  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  const [jenisSetoran, setJenisSetoran] = useState('')
  const [masaPajak, setMasaPajak] = useState('')
  const [tahunPajak, setTahunPajak] = useState('2024')
  const [jumlahSetor, setJumlahSetor] = useState('')
  const [nomorBilling, setNomorBilling] = useState('')
  const [showJenisSetoranDropdown, setShowJenisSetoranDropdown] = useState(false)
  const [showMasaPajakDropdown, setShowMasaPajakDropdown] = useState(false)
  const [showTahunPajakDropdown, setShowTahunPajakDropdown] = useState(false)
  const dropdownJenisRef = useRef(null)
  const dropdownMasaRef = useRef(null)
  const dropdownTahunRef = useRef(null)

  const [billingList, setBillingList] = useState([
    {
      id: 1,
      kodeBilling: '1234567890123456',
      jenisSetoran: 'PPh Pasal 21',
      deskripsi: 'Pajak Penghasilan Pasal 21 - Gaji Karyawan',
      masaPajak: 'Desember 2024',
      jumlah: 'Rp 5.000.000',
      tanggalBuat: '2024-12-15',
      expired: '2024-12-17',
      status: 'active',
      kodeAkun: '411121',
      kodeJenisSetoran: '100',
      metodePembayaran: 'Bank Transfer / ATM / Mobile Banking',
      penanggungJawab: 'PT Maju Bersama Indonesia'
    },
    {
      id: 2,
      kodeBilling: '9876543210987654',
      jenisSetoran: 'PPN',
      deskripsi: 'Pajak Pertambahan Nilai - Barang/Jasa',
      masaPajak: 'November 2024',
      jumlah: 'Rp 10.500.000',
      tanggalBuat: '2024-11-20',
      expired: '2024-11-22',
      status: 'paid',
      kodeAkun: '411211',
      kodeJenisSetoran: '411',
      metodePembayaran: 'Bank BCA',
      penanggungJawab: 'PT Maju Bersama Indonesia',
      ntpn: 'ABC123456789DEF0123'
    },
    {
      id: 3,
      kodeBilling: '5678901234567890',
      jenisSetoran: 'PPh Pasal 23',
      deskripsi: 'Pajak Penghasilan Pasal 23 - Jasa Konsultan',
      masaPajak: 'Desember 2024',
      jumlah: 'Rp 3.750.000',
      tanggalBuat: '2024-12-18',
      expired: '2024-12-20',
      status: 'active',
      kodeAkun: '411124',
      kodeJenisSetoran: '104',
      metodePembayaran: 'Bank Transfer / ATM / Mobile Banking',
      penanggungJawab: 'PT Maju Bersama Indonesia'
    },
    {
      id: 4,
      kodeBilling: '3456789012345678',
      jenisSetoran: 'PPh Pasal 25',
      deskripsi: 'PPh Pasal 25 - Angsuran Pajak Bulanan',
      masaPajak: 'November 2024',
      jumlah: 'Rp 8.200.000',
      tanggalBuat: '2024-11-25',
      expired: '2024-11-27',
      status: 'paid',
      kodeAkun: '411126',
      kodeJenisSetoran: '300',
      metodePembayaran: 'Bank Mandiri',
      penanggungJawab: 'PT Maju Bersama Indonesia',
      ntpn: 'XYZ987654321ABC9876'
    }
  ])

  const [historyList] = useState([
    {
      id: 1,
      kodeBilling: '1111222233334444',
      jenisSetoran: 'PPh Pasal 21',
      deskripsi: 'Pajak Penghasilan Pasal 21 - Gaji Karyawan',
      masaPajak: 'Oktober 2024',
      jumlah: 'Rp 4.500.000',
      tanggalBayar: '2024-11-05',
      ntpn: 'ABCD1234567890EF1234',
      status: 'paid',
      kodeAkun: '411121',
      kodeJenisSetoran: '100',
      metodePembayaran: 'Bank BCA',
      penanggungJawab: 'PT Maju Bersama Indonesia'
    },
    {
      id: 2,
      kodeBilling: '5555666677778888',
      jenisSetoran: 'PPN',
      deskripsi: 'Pajak Pertambahan Nilai - Barang/Jasa',
      masaPajak: 'September 2024',
      jumlah: 'Rp 8.750.000',
      tanggalBayar: '2024-10-10',
      ntpn: 'WXYZ9876543210AB5678',
      status: 'paid',
      kodeAkun: '411211',
      kodeJenisSetoran: '411',
      metodePembayaran: 'Bank Mandiri',
      penanggungJawab: 'PT Maju Bersama Indonesia'
    },
    {
      id: 3,
      kodeBilling: '2222333344445555',
      jenisSetoran: 'PPh Pasal 23',
      deskripsi: 'Pajak Penghasilan Pasal 23 - Jasa Konsultan',
      masaPajak: 'September 2024',
      jumlah: 'Rp 3.200.000',
      tanggalBayar: '2024-10-08',
      ntpn: 'QRST5678901234UVWX',
      status: 'paid',
      kodeAkun: '411124',
      kodeJenisSetoran: '104',
      metodePembayaran: 'Bank BNI',
      penanggungJawab: 'PT Maju Bersama Indonesia'
    },
    {
      id: 4,
      kodeBilling: '7777888899990000',
      jenisSetoran: 'PPh Pasal 25',
      deskripsi: 'PPh Pasal 25 - Angsuran Pajak Bulanan',
      masaPajak: 'Agustus 2024',
      jumlah: 'Rp 7.800.000',
      tanggalBayar: '2024-09-15',
      ntpn: 'EFGH1234567890IJKL',
      status: 'paid',
      kodeAkun: '411126',
      kodeJenisSetoran: '300',
      metodePembayaran: 'Bank BRI',
      penanggungJawab: 'PT Maju Bersama Indonesia'
    }
  ])

  const jenisSetoranOptions = [
    { 
      value: 'pph21', 
      label: 'PPh Pasal 21 - Pajak Penghasilan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#3b82f6'
    },
    { 
      value: 'pph23', 
      label: 'PPh Pasal 23 - Pajak atas Modal',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#8b5cf6'
    },
    { 
      value: 'pph25', 
      label: 'PPh Pasal 25 - Angsuran Pajak',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#f59e0b'
    },
    { 
      value: 'ppn', 
      label: 'PPN - Pajak Pertambahan Nilai',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: '#22c55e'
    },
    { 
      value: 'ppnbm', 
      label: 'PPnBM - Pajak Penjualan Barang Mewah',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#ec4899'
    }
  ]

  const masaPajakOptions = [
    { value: 'Januari', label: 'Januari', color: '#3b82f6' },
    { value: 'Februari', label: 'Februari', color: '#8b5cf6' },
    { value: 'Maret', label: 'Maret', color: '#ec4899' },
    { value: 'April', label: 'April', color: '#f59e0b' },
    { value: 'Mei', label: 'Mei', color: '#22c55e' },
    { value: 'Juni', label: 'Juni', color: '#06b6d4' },
    { value: 'Juli', label: 'Juli', color: '#3b82f6' },
    { value: 'Agustus', label: 'Agustus', color: '#8b5cf6' },
    { value: 'September', label: 'September', color: '#ec4899' },
    { value: 'Oktober', label: 'Oktober', color: '#f59e0b' },
    { value: 'November', label: 'November', color: '#22c55e' },
    { value: 'Desember', label: 'Desember', color: '#06b6d4' }
  ]

  const tahunPajakOptions = [
    { value: '2024', label: '2024', color: '#3b82f6' },
    { value: '2023', label: '2023', color: '#8b5cf6' },
    { value: '2022', label: '2022', color: '#22c55e' }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownJenisRef.current && !dropdownJenisRef.current.contains(event.target)) {
        setShowJenisSetoranDropdown(false)
      }
      if (dropdownMasaRef.current && !dropdownMasaRef.current.contains(event.target)) {
        setShowMasaPajakDropdown(false)
      }
      if (dropdownTahunRef.current && !dropdownTahunRef.current.contains(event.target)) {
        setShowTahunPajakDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getSelectedJenisSetoran = () => {
    return jenisSetoranOptions.find(opt => opt.value === jenisSetoran) || null
  }

  const getSelectedMasaPajak = () => {
    return masaPajakOptions.find(opt => opt.value === masaPajak) || null
  }

  const getSelectedTahunPajak = () => {
    return tahunPajakOptions.find(opt => opt.value === tahunPajak) || null
  }

  const handleJenisSetoranSelect = (value) => {
    setJenisSetoran(value)
    setShowJenisSetoranDropdown(false)
  }

  const handleMasaPajakSelect = (value) => {
    setMasaPajak(value)
    setShowMasaPajakDropdown(false)
  }

  const handleTahunPajakSelect = (value) => {
    setTahunPajak(value)
    setShowTahunPajakDropdown(false)
  }

  const handleBuatBilling = (e) => {
    e.preventDefault()
    
    if (!jenisSetoran || !masaPajak || !tahunPajak || !jumlahSetor) {
      alert('Mohon lengkapi semua data!')
      return
    }

    const newBilling = {
      id: billingList.length + 1,
      kodeBilling: Math.random().toString().slice(2, 18),
      jenisSetoran: jenisSetoranOptions.find(j => j.value === jenisSetoran)?.label || jenisSetoran,
      masaPajak: `${masaPajak} ${tahunPajak}`,
      jumlah: new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0 
      }).format(jumlahSetor),
      tanggalBuat: new Date().toISOString().split('T')[0],
      expired: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'active'
    }

    setBillingList([newBilling, ...billingList])
    
    alert(`Kode Billing berhasil dibuat!\n\nKode Billing: ${newBilling.kodeBilling}\n\nSimpan kode billing ini untuk melakukan pembayaran.`)
    
    // Reset form
    setJenisSetoran('')
    setMasaPajak('')
    setJumlahSetor('')
  }

  const handleCekStatus = (e) => {
    e.preventDefault()
    
    if (!nomorBilling) {
      alert('Masukkan nomor billing!')
      return
    }

    const billing = billingList.find(b => b.kodeBilling === nomorBilling)
    
    if (billing) {
      alert(`Status Kode Billing:\n\nKode Billing: ${billing.kodeBilling}\nJenis: ${billing.jenisSetoran}\nJumlah: ${billing.jumlah}\nStatus: ${billing.status === 'active' ? 'Belum Dibayar' : 'Sudah Dibayar'}\nExpired: ${new Date(billing.expired).toLocaleDateString('id-ID')}`)
    } else {
      alert('Kode billing tidak ditemukan!')
    }
  }

  const handleBayar = (billing) => {
    alert(`Membuka portal pembayaran untuk:\n\nKode Billing: ${billing.kodeBilling}\nJumlah: ${billing.jumlah}\n\nAnda akan diarahkan ke bank untuk pembayaran.`)
  }

  const handleCetak = (billing) => {
    alert(`Mencetak kode billing:\n\n${billing.kodeBilling}\n\nFile PDF akan diunduh.`)
  }

  const handleDownloadNTPN = (item) => {
    alert(`Mengunduh Bukti Penerimaan Negara:\n\nNTPN: ${item.ntpn}\nKode Billing: ${item.kodeBilling}\n\nFile PDF akan diunduh.`)
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: {
        label: 'Belum Dibayar',
        color: '#f59e0b',
        bgColor: '#fffbeb',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      paid: {
        label: 'Sudah Dibayar',
        color: '#22c55e',
        bgColor: '#f0fdf4',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      }
    }
    return statusConfig[status] || statusConfig.active
  }

  const calculateDaysLeft = (expiredDate) => {
    const today = new Date()
    const expired = new Date(expiredDate)
    const diffTime = expired - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  return (
    <div className="ebilling-page">
      {/* Header Section */}
      <div className="ebilling-header">
        <div className="header-content-wrapper">
          <div className="header-title-section">
            <h1>E-Billing Pajak</h1>
            <p>Buat kode billing dan bayar pajak Anda dengan mudah secara online</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-cards-compact">
            <div className="stat-card-mini warning">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <span className="stat-value-mini">{billingList.filter(b => b.status === 'active').length}</span>
                <span className="stat-label-mini">Aktif</span>
              </div>
            </div>

            <div className="stat-card-mini success">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="stat-value-mini">{historyList.length}</span>
                <span className="stat-label-mini">Terbayar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Tab: Buat Kode Billing */}
        {activeTab === 'baru' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Buat Kode Billing Baru</h2>
                <p>Isi formulir berikut untuk membuat kode billing pajak</p>
              </div>
            </div>

            <div className="billing-form-card">
              <form onSubmit={handleBuatBilling}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="jenisSetoran">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Jenis Setoran
                    </label>
                    <div className="custom-select-wrapper" ref={dropdownJenisRef}>
                      <div 
                        className="custom-select-trigger"
                        onClick={() => setShowJenisSetoranDropdown(!showJenisSetoranDropdown)}
                      >
                        {getSelectedJenisSetoran() ? (
                          <div className="selected-option">
                            <span className="option-icon" style={{ color: getSelectedJenisSetoran().color }}>
                              {getSelectedJenisSetoran().icon}
                            </span>
                            <span className="option-text">{getSelectedJenisSetoran().label}</span>
                          </div>
                        ) : (
                          <span className="placeholder">Pilih jenis setoran</span>
                        )}
                        <svg 
                          className={`dropdown-arrow ${showJenisSetoranDropdown ? 'open' : ''}`}
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {showJenisSetoranDropdown && (
                        <div className="custom-select-dropdown">
                          {jenisSetoranOptions.map((option) => (
                            <div
                              key={option.value}
                              className={`custom-option ${jenisSetoran === option.value ? 'selected' : ''}`}
                              onClick={() => handleJenisSetoranSelect(option.value)}
                            >
                              <span className="option-icon" style={{ color: option.color }}>
                                {option.icon}
                              </span>
                              <span className="option-text">{option.label}</span>
                              {jenisSetoran === option.value && (
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

                  <div className="form-group">
                    <label htmlFor="masaPajak">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Masa Pajak
                    </label>
                    <div className="custom-select-wrapper" ref={dropdownMasaRef}>
                      <div 
                        className="custom-select-trigger"
                        onClick={() => setShowMasaPajakDropdown(!showMasaPajakDropdown)}
                      >
                        {getSelectedMasaPajak() ? (
                          <div className="selected-option">
                            <span className="option-dot" style={{ backgroundColor: getSelectedMasaPajak().color }}></span>
                            <span className="option-text">{getSelectedMasaPajak().label}</span>
                          </div>
                        ) : (
                          <span className="placeholder">Pilih masa pajak</span>
                        )}
                        <svg 
                          className={`dropdown-arrow ${showMasaPajakDropdown ? 'open' : ''}`}
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {showMasaPajakDropdown && (
                        <div className="custom-select-dropdown">
                          {masaPajakOptions.map((option) => (
                            <div
                              key={option.value}
                              className={`custom-option ${masaPajak === option.value ? 'selected' : ''}`}
                              onClick={() => handleMasaPajakSelect(option.value)}
                            >
                              <span className="option-dot" style={{ backgroundColor: option.color }}></span>
                              <span className="option-text">{option.label}</span>
                              {masaPajak === option.value && (
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

                  <div className="form-group">
                    <label htmlFor="tahunPajak">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Tahun Pajak
                    </label>
                    <div className="custom-select-wrapper" ref={dropdownTahunRef}>
                      <div 
                        className="custom-select-trigger"
                        onClick={() => setShowTahunPajakDropdown(!showTahunPajakDropdown)}
                      >
                        {getSelectedTahunPajak() ? (
                          <div className="selected-option">
                            <span className="option-dot" style={{ backgroundColor: getSelectedTahunPajak().color }}></span>
                            <span className="option-text">{getSelectedTahunPajak().label}</span>
                          </div>
                        ) : (
                          <span className="placeholder">Pilih tahun pajak</span>
                        )}
                        <svg 
                          className={`dropdown-arrow ${showTahunPajakDropdown ? 'open' : ''}`}
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {showTahunPajakDropdown && (
                        <div className="custom-select-dropdown">
                          {tahunPajakOptions.map((option) => (
                            <div
                              key={option.value}
                              className={`custom-option ${tahunPajak === option.value ? 'selected' : ''}`}
                              onClick={() => handleTahunPajakSelect(option.value)}
                            >
                              <span className="option-dot" style={{ backgroundColor: option.color }}></span>
                              <span className="option-text">{option.label}</span>
                              {tahunPajak === option.value && (
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

                  <div className="form-group">
                    <label htmlFor="jumlahSetor">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Jumlah Setoran (Rp)
                    </label>
                    <input 
                      type="number"
                      id="jumlahSetor"
                      value={jumlahSetor}
                      onChange={(e) => setJumlahSetor(e.target.value)}
                      placeholder="Masukkan jumlah setoran"
                      required
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Buat Kode Billing
                  </button>
                  <button type="button" className="btn-secondary" onClick={() => {
                    setJenisSetoran('')
                    setMasaPajak('')
                    setJumlahSetor('')
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H21M19 6L18.4 20.2C18.3 21.2 17.4 22 16.4 22H7.6C6.6 22 5.7 21.2 5.6 20.2L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Reset Form
                  </button>
                </div>
              </form>

              <div className="info-box">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h4>Informasi Penting</h4>
                  <ul>
                    <li>Kode billing berlaku selama 48 jam (2 hari)</li>
                    <li>Simpan kode billing untuk melakukan pembayaran</li>
                    <li>Pembayaran dapat dilakukan melalui bank, kantor pos, atau ATM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Cek Status */}
        {activeTab === 'cek' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Cek Status Billing</h2>
                <p>Masukkan nomor kode billing untuk mengecek status pembayaran</p>
              </div>
            </div>

            <div className="cek-status-card">
              <form onSubmit={handleCekStatus} className="cek-form">
                <div className="form-group-inline">
                  <label htmlFor="nomorBilling">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Nomor Kode Billing
                  </label>
                  <div className="input-button-group">
                    <input 
                      type="text"
                      id="nomorBilling"
                      value={nomorBilling}
                      onChange={(e) => setNomorBilling(e.target.value)}
                      placeholder="Masukkan 16 digit kode billing"
                      maxLength="16"
                      required
                    />
                    <button type="submit" className="btn-primary">
                      Cek Status
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Billing List */}
            <div className="section-header" style={{ marginTop: '3rem' }}>
              <div className="header-title">
                <h2>Daftar Kode Billing</h2>
                <p>Kode billing yang telah Anda buat</p>
              </div>
            </div>

            {billingList.length > 0 ? (
              <div className="billing-list">
                {billingList.map((billing, index) => (
                  <div 
                    key={billing.id} 
                    className="billing-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="billing-header">
                      <div className="billing-info">
                        <div className="billing-code">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span className="code-number">{billing.kodeBilling}</span>
                        </div>
                        <h3>{billing.jenisSetoran}</h3>
                        <span className="billing-meta">{billing.masaPajak}</span>
                      </div>
                      <div 
                        className="status-badge" 
                        style={{ 
                          backgroundColor: getStatusBadge(billing.status).bgColor,
                          color: getStatusBadge(billing.status).color 
                        }}
                      >
                        {getStatusBadge(billing.status).icon}
                        <span>{getStatusBadge(billing.status).label}</span>
                      </div>
                    </div>

                    <div className="billing-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Jumlah: <strong>{billing.jumlah}</strong></span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Dibuat: {new Date(billing.tanggalBuat).toLocaleDateString('id-ID')}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Expired: {new Date(billing.expired).toLocaleDateString('id-ID')} ({calculateDaysLeft(billing.expired)} hari lagi)</span>
                        </div>
                      </div>
                    </div>

                    <div className="billing-actions">
                      {billing.status === 'active' && (
                        <>
                          <button 
                            className="btn-action bayar"
                            onClick={() => handleBayar(billing)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                              <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            Bayar Sekarang
                          </button>
                          <button 
                            className="btn-action cetak"
                            onClick={() => handleCetak(billing)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9V2H18V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <rect x="6" y="14" width="12" height="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Cetak
                          </button>
                        </>
                      )}
                      {billing.status === 'paid' && (
                        <div className="paid-badge">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Pembayaran Berhasil</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Belum ada kode billing</h3>
                <p>Buat kode billing baru untuk melakukan pembayaran pajak</p>
              </div>
            )}
          </div>
        )}

        {/* Tab: Riwayat */}
        {activeTab === 'riwayat' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Riwayat Pembayaran</h2>
                <p>Lihat semua pembayaran pajak yang telah Anda lakukan</p>
              </div>
            </div>

            <div className="history-list">
              {historyList.map((item, index) => (
                <div 
                  key={item.id} 
                  className="history-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="history-header">
                    <div className="history-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="history-info">
                      <h3>{item.jenisSetoran}</h3>
                      <span className="history-meta">{item.masaPajak}</span>
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
                          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>Kode Billing: {item.kodeBilling}</span>
                      </div>
                      <div className="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Jumlah: <strong>{item.jumlah}</strong></span>
                      </div>
                      <div className="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>Tanggal Bayar: {new Date(item.tanggalBayar).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                      <div className="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>NTPN: {item.ntpn}</span>
                      </div>
                    </div>
                  </div>

                  <div className="history-actions">
                    <button 
                      className="btn-action download"
                      onClick={() => handleDownloadNTPN(item)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M7 10L12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Download BPN
                    </button>
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

export default EBilling
