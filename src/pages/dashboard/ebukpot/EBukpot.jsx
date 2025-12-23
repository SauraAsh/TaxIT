import { useState, useEffect } from 'react'
import './EBukpot.css'

const EBukpot = ({ initialTab = 'upload' }) => {
  const [activeTab, setActiveTab] = useState(initialTab)

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  const [jenisPajak, setJenisPajak] = useState('')
  const [masaPajak, setMasaPajak] = useState('')
  const [tahunPajak, setTahunPajak] = useState('2024')
  const [nomorBukpot, setNomorBukpot] = useState('')
  const [pemotong] = useState({
    nama: 'PT MAJU JAYA SEJAHTERA',
    npwp: '01.234.567.8-901.000',
    alamat: 'Jl. Sudirman No. 123, Jakarta Pusat'
  })

  const [wpDipotong, setWpDipotong] = useState('')
  const [npwpDipotong, setNpwpDipotong] = useState('')
  const [jumlahBruto, setJumlahBruto] = useState('')
  const [tarifPajak, setTarifPajak] = useState('')
  const [pphDipotong, setPphDipotong] = useState('')

  const [bukpotList, setBukpotList] = useState([
    {
      id: 1,
      nomorBukpot: '1.2-12.34.56789012-20241201',
      jenisPajak: 'PPh Pasal 21',
      namaPenerima: 'John Doe',
      npwpPenerima: '12.345.678.9-012.000',
      masaPajak: 'Desember 2024',
      jumlahBruto: 'Rp 15.000.000',
      pphDipotong: 'Rp 750.000',
      tanggalBuat: '2024-12-15',
      status: 'terbit'
    },
    {
      id: 2,
      nomorBukpot: '1.2-12.34.56789012-20241101',
      jenisPajak: 'PPh Pasal 23',
      namaPenerima: 'PT SEJAHTERA ABADI',
      npwpPenerima: '98.765.432.1-098.000',
      masaPajak: 'November 2024',
      jumlahBruto: 'Rp 50.000.000',
      pphDipotong: 'Rp 1.000.000',
      tanggalBuat: '2024-11-20',
      status: 'terbit'
    }
  ])

  const [draftList, setDraftList] = useState([
    {
      id: 1,
      jenisPajak: 'PPh Pasal 21',
      namaPenerima: 'Jane Smith',
      masaPajak: 'Desember 2024',
      jumlahBruto: 'Rp 12.000.000',
      lastEdit: '2024-12-17'
    }
  ])

  const [uploadedFile, setUploadedFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const jenisPajakOptions = [
    { value: 'pph21', label: 'PPh Pasal 21 - Penghasilan Karyawan', tarif: 5 },
    { value: 'pph23', label: 'PPh Pasal 23 - Jasa dan Modal', tarif: 2 },
    { value: 'pph26', label: 'PPh Pasal 26 - Wajib Pajak Luar Negeri', tarif: 20 },
    { value: 'pph4(2)', label: 'PPh Pasal 4 Ayat 2 - Final', tarif: 10 }
  ]

  const masaPajakOptions = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ]

  useEffect(() => {
    if (jumlahBruto && tarifPajak) {
      const bruto = parseFloat(jumlahBruto)
      const tarif = parseFloat(tarifPajak)
      const pph = (bruto * tarif) / 100
      setPphDipotong(pph.toString())
    }
  }, [jumlahBruto, tarifPajak])

  const handleJenisPajakChange = (value) => {
    setJenisPajak(value)
    const selected = jenisPajakOptions.find(opt => opt.value === value)
    if (selected) {
      setTarifPajak(selected.tarif.toString())
    }
  }

  const handleBuatBukpot = (e) => {
    e.preventDefault()
    
    if (!jenisPajak || !masaPajak || !wpDipotong || !npwpDipotong || !jumlahBruto) {
      alert('Mohon lengkapi semua data!')
      return
    }

    const nomorBukpotBaru = `1.2-${pemotong.npwp.replace(/\./g, '').replace(/-/g, '')}-${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}01`
    
    const newBukpot = {
      id: bukpotList.length + 1,
      nomorBukpot: nomorBukpotBaru,
      jenisPajak: jenisPajakOptions.find(j => j.value === jenisPajak)?.label || jenisPajak,
      namaPenerima: wpDipotong,
      npwpPenerima: npwpDipotong,
      masaPajak: `${masaPajak} ${tahunPajak}`,
      jumlahBruto: new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0 
      }).format(jumlahBruto),
      pphDipotong: new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0 
      }).format(pphDipotong),
      tanggalBuat: new Date().toISOString().split('T')[0],
      status: 'terbit'
    }

    setBukpotList([newBukpot, ...bukpotList])
    
    alert(`Bukti Potong berhasil dibuat!\n\nNomor Bukti Potong: ${nomorBukpotBaru}\n\nBukti potong dapat diunduh dalam format PDF.`)
    
    setJenisPajak('')
    setMasaPajak('')
    setWpDipotong('')
    setNpwpDipotong('')
    setJumlahBruto('')
    setTarifPajak('')
    setPphDipotong('')
  }

  const handleSimpanDraft = () => {
    if (!jenisPajak || !wpDipotong) {
      alert('Minimal isi jenis pajak dan nama penerima!')
      return
    }

    const newDraft = {
      id: draftList.length + 1,
      jenisPajak: jenisPajakOptions.find(j => j.value === jenisPajak)?.label || jenisPajak,
      namaPenerima: wpDipotong,
      masaPajak: masaPajak ? `${masaPajak} ${tahunPajak}` : '-',
      jumlahBruto: jumlahBruto ? new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0 
      }).format(jumlahBruto) : '-',
      lastEdit: new Date().toISOString().split('T')[0]
    }

    setDraftList([newDraft, ...draftList])
    alert('Draft berhasil disimpan!')
  }

  const handleCekBukpot = (e) => {
    e.preventDefault()
    
    if (!nomorBukpot) {
      alert('Masukkan nomor bukti potong!')
      return
    }

    const bukpot = bukpotList.find(b => b.nomorBukpot === nomorBukpot)
    
    if (bukpot) {
      alert(`Status Bukti Potong:\n\nNomor: ${bukpot.nomorBukpot}\nJenis: ${bukpot.jenisPajak}\nPenerima: ${bukpot.namaPenerima}\nJumlah Bruto: ${bukpot.jumlahBruto}\nPPh Dipotong: ${bukpot.pphDipotong}\nStatus: Terbit`)
    } else {
      alert('Nomor bukti potong tidak ditemukan!')
    }
  }

  const handleDownloadPDF = (bukpot) => {
    alert(`Mengunduh Bukti Potong PDF:\n\nNomor: ${bukpot.nomorBukpot}\nPenerima: ${bukpot.namaPenerima}\n\nFile PDF akan diunduh.`)
  }

  const handleEditDraft = (draft) => {
    alert(`Membuka draft untuk diedit:\n\nPenerima: ${draft.namaPenerima}\nJenis: ${draft.jenisPajak}`)
  }

  const handleDeleteDraft = (draftId) => {
    if (window.confirm('Hapus draft ini?')) {
      setDraftList(draftList.filter(d => d.id !== draftId))
      alert('Draft berhasil dihapus!')
    }
  }

  const handleKirimEmail = (bukpot) => {
    alert(`Mengirim Bukti Potong via Email:\n\nKepada: ${bukpot.namaPenerima}\nNomor: ${bukpot.nomorBukpot}\n\nEmail akan dikirim ke alamat terdaftar.`)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Validasi tipe file
    const allowedTypes = ['.csv', '.xlsx', '.xls', '.pdf']
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase()
    
    if (!allowedTypes.includes(fileExtension)) {
      alert('Format file tidak didukung! Gunakan format CSV, Excel, atau PDF.')
      return
    }

    // Validasi ukuran file (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Ukuran file terlalu besar! Maksimal 5MB.')
      return
    }

    setUploadedFile(file)
    setIsUploading(true)
    setUploadProgress(0)

    // Simulasi upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          
          // Simulasi parsing data dari file
          setTimeout(() => {
            const newBukpots = [
              {
                id: bukpotList.length + 1,
                nomorBukpot: `1.2-${pemotong.npwp.replace(/\./g, '').replace(/-/g, '')}-20241215`,
                jenisPajak: 'PPh Pasal 21',
                namaPenerima: 'Data Import 1',
                npwpPenerima: '11.111.111.1-111.000',
                masaPajak: 'Desember 2024',
                jumlahBruto: 'Rp 10.000.000',
                pphDipotong: 'Rp 500.000',
                tanggalBuat: new Date().toISOString().split('T')[0],
                status: 'terbit'
              },
              {
                id: bukpotList.length + 2,
                nomorBukpot: `1.2-${pemotong.npwp.replace(/\./g, '').replace(/-/g, '')}-20241216`,
                jenisPajak: 'PPh Pasal 23',
                namaPenerima: 'Data Import 2',
                npwpPenerima: '22.222.222.2-222.000',
                masaPajak: 'Desember 2024',
                jumlahBruto: 'Rp 25.000.000',
                pphDipotong: 'Rp 500.000',
                tanggalBuat: new Date().toISOString().split('T')[0],
                status: 'terbit'
              }
            ]
            
            setBukpotList([...newBukpots, ...bukpotList])
            alert(`Berhasil mengimpor ${newBukpots.length} bukti potong dari file ${file.name}`)
          }, 500)
          
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleFileUpload({ target: { files: [files[0]] } })
    }
  }

  const handleRemoveFile = () => {
    setUploadedFile(null)
    setUploadProgress(0)
  }

  return (
    <div className="ebukpot-page">
      <div className="ebukpot-header">
        <div className="header-content-wrapper">
          <div className="header-title-section">
            <h1>E-Bukti Potong Pajak</h1>
            <p>Buat dan kelola bukti pemotongan pajak secara digital dengan mudah</p>
          </div>

          <div className="stats-cards-compact">
            <div className="stat-card-mini primary">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <span className="stat-value-mini">{bukpotList.length}</span>
                <span className="stat-label-mini">Terbit</span>
              </div>
            </div>

            <div className="stat-card-mini warning">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2H15L22 9V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H9Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <span className="stat-value-mini">{draftList.length}</span>
                <span className="stat-label-mini">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'upload' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Upload Bukti Potong</h2>
                <p>Import bukti potong dari file Excel atau CSV</p>
              </div>
            </div>

            <div className="upload-container">
              <div 
                className={`upload-dropzone ${uploadedFile ? 'has-file' : ''}`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {!uploadedFile ? (
                  <>
                    <div className="upload-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M17 8L12 3L7 8M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>Drag & Drop file disini</h3>
                    <p>atau</p>
                    <label htmlFor="file-upload" className="upload-button">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Pilih File
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".csv,.xlsx,.xls,.pdf"
                      onChange={handleFileUpload}
                      style={{ display: 'none' }}
                    />
                    <p className="upload-note">Format yang didukung: CSV, Excel (.xlsx, .xls), PDF (Max 5MB)</p>
                  </>
                ) : (
                  <>
                    <div className="file-preview">
                      <div className="file-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="file-info">
                        <p className="file-name">{uploadedFile.name}</p>
                        <p className="file-size">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                      </div>
                      {!isUploading && (
                        <button className="remove-file-btn" onClick={handleRemoveFile}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {isUploading && (
                      <div className="upload-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                        <p className="progress-text">{uploadProgress}% Complete</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="upload-instructions">
                <h4>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Panduan Upload
                </h4>
                <ul>
                  <li>Format file yang didukung: CSV, Excel (.xlsx, .xls), atau PDF</li>
                  <li>Ukuran maksimal file: 5 MB</li>
                  <li>Pastikan data sudah sesuai format template</li>
                  <li>Kolom yang diperlukan: NPWP, Nama WP, Jenis Pajak, Jumlah Bruto, Tarif, PPh Dipotong</li>
                </ul>
                <button className="btn-secondary download-template">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 10L12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download Template
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'list' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Daftar Bukti Potong</h2>
                <p>Semua bukti potong yang telah diterbitkan</p>
              </div>
            </div>

            {bukpotList.length > 0 ? (
              <div className="bukpot-list">
                {bukpotList.map((bukpot, index) => (
                  <div 
                    key={bukpot.id} 
                    className="bukpot-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bukpot-header">
                      <div className="bukpot-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="bukpot-info">
                        <h3>{bukpot.jenisPajak}</h3>
                        <p className="bukpot-number">{bukpot.nomorBukpot}</p>
                      </div>
                      <div className="status-badge terbit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Terbit</span>
                      </div>
                    </div>

                    <div className="bukpot-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>Penerima: <strong>{bukpot.namaPenerima}</strong></span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>NPWP: {bukpot.npwpPenerima}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Masa Pajak: {bukpot.masaPajak}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Jumlah Bruto: <strong>{bukpot.jumlahBruto}</strong></span>
                        </div>
                        <div className="detail-item highlight">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>PPh Dipotong: <strong>{bukpot.pphDipotong}</strong></span>
                        </div>
                      </div>
                    </div>

                    <div className="bukpot-actions">
                      <button 
                        className="btn-action download"
                        onClick={() => handleDownloadPDF(bukpot)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M7 10L12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Download PDF
                      </button>
                      <button 
                        className="btn-action email"
                        onClick={() => handleKirimEmail(bukpot)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Kirim Email
                      </button>
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
                <h3>Belum ada bukti potong</h3>
                <p>Upload file atau buat bukti potong baru untuk memulai</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'buat' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Buat Bukti Potong Baru</h2>
                <p>Isi formulir berikut untuk membuat bukti pemotongan pajak</p>
              </div>
            </div>

            <div className="pemotong-info-card">
              <div className="pemotong-header">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3>Pemotong Pajak</h3>
              </div>
              <div className="pemotong-details">
                <div className="detail-item">
                  <span className="label">Nama:</span>
                  <span className="value">{pemotong.nama}</span>
                </div>
                <div className="detail-item">
                  <span className="label">NPWP:</span>
                  <span className="value">{pemotong.npwp}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Alamat:</span>
                  <span className="value">{pemotong.alamat}</span>
                </div>
              </div>
            </div>

            <div className="bukpot-form-card">
              <form onSubmit={handleBuatBukpot}>
                <div className="form-section">
                  <h4>Data Pajak</h4>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="jenisPajak">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Jenis Pajak
                      </label>
                      <select 
                        id="jenisPajak"
                        value={jenisPajak}
                        onChange={(e) => handleJenisPajakChange(e.target.value)}
                        required
                      >
                        <option value="">Pilih jenis pajak</option>
                        {jenisPajakOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="masaPajak">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Masa Pajak
                      </label>
                      <select 
                        id="masaPajak"
                        value={masaPajak}
                        onChange={(e) => setMasaPajak(e.target.value)}
                        required
                      >
                        <option value="">Pilih masa pajak</option>
                        {masaPajakOptions.map(bulan => (
                          <option key={bulan} value={bulan}>{bulan}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="tahunPajak">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Tahun Pajak
                      </label>
                      <select 
                        id="tahunPajak"
                        value={tahunPajak}
                        onChange={(e) => setTahunPajak(e.target.value)}
                        required
                      >
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Wajib Pajak Yang Dipotong</h4>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="wpDipotong">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Nama Wajib Pajak
                      </label>
                      <input 
                        type="text"
                        id="wpDipotong"
                        value={wpDipotong}
                        onChange={(e) => setWpDipotong(e.target.value)}
                        placeholder="Masukkan nama wajib pajak yang dipotong"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="npwpDipotong">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        NPWP
                      </label>
                      <input 
                        type="text"
                        id="npwpDipotong"
                        value={npwpDipotong}
                        onChange={(e) => setNpwpDipotong(e.target.value)}
                        placeholder="00.000.000.0-000.000"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Perhitungan Pajak</h4>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="jumlahBruto">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Jumlah Bruto (Rp)
                      </label>
                      <input 
                        type="number"
                        id="jumlahBruto"
                        value={jumlahBruto}
                        onChange={(e) => setJumlahBruto(e.target.value)}
                        placeholder="Masukkan jumlah bruto"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tarifPajak">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                        Tarif Pajak (%)
                      </label>
                      <input 
                        type="number"
                        id="tarifPajak"
                        value={tarifPajak}
                        onChange={(e) => setTarifPajak(e.target.value)}
                        placeholder="Tarif pajak"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="pphDipotong">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        PPh Dipotong (Rp)
                      </label>
                      <input 
                        type="number"
                        id="pphDipotong"
                        value={pphDipotong}
                        readOnly
                        placeholder="Otomatis dihitung"
                        className="readonly-input"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Buat Bukti Potong
                  </button>
                  <button type="button" className="btn-secondary" onClick={handleSimpanDraft}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M17 21V13H7V21M7 3V8H15" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Simpan Draft
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'cek' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Cek Bukti Potong</h2>
                <p>Masukkan nomor bukti potong untuk mengecek status</p>
              </div>
            </div>

            <div className="cek-bukpot-card">
              <form onSubmit={handleCekBukpot} className="cek-form">
                <div className="form-group-inline">
                  <label htmlFor="nomorBukpot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Nomor Bukti Potong
                  </label>
                  <div className="input-button-group">
                    <input 
                      type="text"
                      id="nomorBukpot"
                      value={nomorBukpot}
                      onChange={(e) => setNomorBukpot(e.target.value)}
                      placeholder="Contoh: 1.2-12.34.56789012-20241201"
                      required
                    />
                    <button type="submit" className="btn-primary">
                      Cek Status
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="section-header" style={{ marginTop: '3rem' }}>
              <div className="header-title">
                <h2>Daftar Bukti Potong</h2>
                <p>Bukti potong yang telah diterbitkan</p>
              </div>
            </div>

            {bukpotList.length > 0 ? (
              <div className="bukpot-list">
                {bukpotList.map((bukpot, index) => (
                  <div 
                    key={bukpot.id} 
                    className="bukpot-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bukpot-header">
                      <div className="bukpot-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="bukpot-info">
                        <h3>{bukpot.jenisPajak}</h3>
                        <p className="bukpot-number">{bukpot.nomorBukpot}</p>
                      </div>
                      <div className="status-badge terbit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Terbit</span>
                      </div>
                    </div>

                    <div className="bukpot-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>Penerima: <strong>{bukpot.namaPenerima}</strong></span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>NPWP: {bukpot.npwpPenerima}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Masa Pajak: {bukpot.masaPajak}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Jumlah Bruto: <strong>{bukpot.jumlahBruto}</strong></span>
                        </div>
                        <div className="detail-item highlight">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>PPh Dipotong: <strong>{bukpot.pphDipotong}</strong></span>
                        </div>
                      </div>
                    </div>

                    <div className="bukpot-actions">
                      <button 
                        className="btn-action download"
                        onClick={() => handleDownloadPDF(bukpot)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M7 10L12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Download PDF
                      </button>
                      <button 
                        className="btn-action email"
                        onClick={() => handleKirimEmail(bukpot)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Kirim Email
                      </button>
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
                <h3>Belum ada bukti potong</h3>
                <p>Buat bukti potong baru untuk memulai</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'draft' && (
          <div className="tab-panel">
            <div className="section-header">
              <div className="header-title">
                <h2>Draft Bukti Potong</h2>
                <p>Kelola draft bukti potong yang belum selesai</p>
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
                    <div className="draft-header">
                      <div className="draft-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 2H15L22 9V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H9Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="draft-info">
                        <h3>{draft.jenisPajak}</h3>
                        <p>Penerima: {draft.namaPenerima}</p>
                      </div>
                      <div className="status-badge draft-status">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>Draft</span>
                      </div>
                    </div>

                    <div className="draft-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Masa Pajak: {draft.masaPajak}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Jumlah: {draft.jumlahBruto}</span>
                        </div>
                        <div className="detail-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Terakhir diedit: {new Date(draft.lastEdit).toLocaleDateString('id-ID')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="draft-actions">
                      <button 
                        className="btn-action edit"
                        onClick={() => handleEditDraft(draft)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Edit
                      </button>
                      <button 
                        className="btn-action delete"
                        onClick={() => handleDeleteDraft(draft.id)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6H21M19 6L18.4 20.2C18.3 21.2 17.4 22 16.4 22H7.6C6.6 22 5.7 21.2 5.6 20.2L5 6M8 6V4C8 3.4 8.4 3 9 3H15C15.6 3 16 3.4 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2H15L22 9V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H9Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Belum ada draft</h3>
                <p>Simpan bukti potong sebagai draft untuk melanjutkan nanti</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default EBukpot
