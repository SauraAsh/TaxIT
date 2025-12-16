import './SupportPages.css'

const SyaratKetentuan = ({ onBack }) => {
  const sections = [
    {
      title: '1. Ketentuan Umum',
      content: [
        'Dengan mengakses dan menggunakan layanan E-Pajak, Anda menyetujui untuk terikat dengan syarat dan ketentuan yang berlaku.',
        'Layanan ini disediakan oleh Direktorat Jenderal Pajak Republik Indonesia untuk memfasilitasi kewajiban perpajakan Wajib Pajak.',
        'Pengguna bertanggung jawab untuk menjaga kerahasiaan informasi akun dan password mereka.'
      ]
    },
    {
      title: '2. Pendaftaran dan Akun',
      content: [
        'Pengguna wajib memberikan informasi yang akurat, lengkap, dan terkini saat melakukan pendaftaran.',
        'Setiap akun bersifat pribadi dan tidak dapat dipindahtangankan kepada pihak lain.',
        'Pengguna bertanggung jawab penuh atas segala aktivitas yang terjadi dalam akun mereka.',
        'Direktorat Jenderal Pajak berhak menangguhkan atau menutup akun yang melanggar ketentuan.'
      ]
    },
    {
      title: '3. Penggunaan Layanan',
      content: [
        'Layanan E-Pajak hanya dapat digunakan untuk keperluan perpajakan yang sah dan sesuai dengan peraturan perundang-undangan yang berlaku.',
        'Pengguna dilarang menggunakan layanan ini untuk tujuan yang melanggar hukum atau merugikan pihak lain.',
        'Pengguna dilarang mencoba mengakses sistem secara tidak sah atau mengganggu operasional layanan.',
        'Segala bentuk penyalahgunaan sistem dapat dikenakan sanksi sesuai peraturan yang berlaku.'
      ]
    },
    {
      title: '4. Privasi dan Keamanan Data',
      content: [
        'Data pribadi pengguna akan dilindungi sesuai dengan peraturan perundang-undangan tentang perlindungan data pribadi.',
        'Informasi yang dikumpulkan hanya akan digunakan untuk keperluan administrasi perpajakan.',
        'Direktorat Jenderal Pajak menerapkan langkah-langkah keamanan untuk melindungi data pengguna.',
        'Pengguna bertanggung jawab untuk menjaga kerahasiaan password dan informasi akun mereka.'
      ]
    },
    {
      title: '5. Kewajiban Pengguna',
      content: [
        'Pengguna wajib melaporkan SPT Tahunan sesuai dengan ketentuan dan batas waktu yang berlaku.',
        'Pengguna wajib memberikan informasi yang benar dan lengkap dalam setiap pelaporan pajak.',
        'Pengguna wajib menyimpan bukti pelaporan dan pembayaran pajak sesuai ketentuan yang berlaku.',
        'Pengguna wajib segera memperbarui data jika terjadi perubahan informasi pribadi atau perpajakan.'
      ]
    },
    {
      title: '6. Hak Kekayaan Intelektual',
      content: [
        'Seluruh konten, logo, merek dagang, dan hak kekayaan intelektual lainnya dalam layanan ini adalah milik Direktorat Jenderal Pajak.',
        'Pengguna dilarang menyalin, memodifikasi, atau mendistribusikan konten tanpa izin tertulis.',
        'Penggunaan materi dari layanan ini hanya diperbolehkan untuk keperluan pribadi yang sah.'
      ]
    },
    {
      title: '7. Pembatasan Tanggung Jawab',
      content: [
        'Direktorat Jenderal Pajak tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan input data oleh pengguna.',
        'Layanan dapat mengalami gangguan sementara untuk keperluan pemeliharaan atau perbaikan.',
        'Direktorat Jenderal Pajak tidak bertanggung jawab atas kerugian yang disebabkan oleh force majeure.',
        'Pengguna bertanggung jawab penuh atas keputusan yang diambil berdasarkan informasi dari layanan ini.'
      ]
    },
    {
      title: '8. Perubahan Syarat dan Ketentuan',
      content: [
        'Direktorat Jenderal Pajak berhak mengubah syarat dan ketentuan ini sewaktu-waktu.',
        'Perubahan akan diberitahukan melalui situs web resmi atau email terdaftar.',
        'Penggunaan layanan setelah perubahan dianggap sebagai persetujuan terhadap syarat dan ketentuan yang baru.',
        'Pengguna disarankan untuk memeriksa halaman ini secara berkala.'
      ]
    },
    {
      title: '9. Hukum yang Berlaku',
      content: [
        'Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia.',
        'Setiap perselisihan yang timbul akan diselesaikan melalui musyawarah terlebih dahulu.',
        'Jika musyawarah tidak tercapai, penyelesaian dilakukan melalui jalur hukum yang berlaku di Indonesia.',
        'Yurisdiksi pengadilan adalah pengadilan yang berwenang di wilayah Republik Indonesia.'
      ]
    },
    {
      title: '10. Hubungi Kami',
      content: [
        'Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, silakan hubungi:',
        'Email: support@pajak.go.id',
        'Telepon: Kring Pajak 1500-200',
        'Website: www.pajak.go.id'
      ]
    }
  ]

  return (
    <div className="support-page">
      <div className="support-container">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Kembali
        </button>

        <div className="support-header">
          <div className="header-icon" style={{ backgroundColor: '#8b5cf620', color: '#8b5cf6' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Syarat dan Ketentuan</h1>
          <p>Harap membaca dengan seksama sebelum menggunakan layanan E-Pajak</p>
        </div>

        <div className="tnc-content">
          <div className="tnc-intro">
            <p>
              Selamat datang di layanan E-Pajak Direktorat Jenderal Pajak Republik Indonesia. 
              Dengan mengakses dan menggunakan layanan ini, Anda menyetujui untuk terikat dengan 
              syarat dan ketentuan berikut. Mohon membaca dengan seksama.
            </p>
            <p className="update-date">
              <strong>Terakhir diperbarui:</strong> 1 Januari 2024
            </p>
          </div>

          <div className="tnc-sections">
            {sections.map((section, index) => (
              <div key={index} className="tnc-section">
                <h2>{section.title}</h2>
                <ul>
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="tnc-acceptance">
            <div className="acceptance-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h3>Penting</h3>
                <p>
                  Dengan melanjutkan menggunakan layanan E-Pajak, Anda dianggap telah membaca, 
                  memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku di atas.
                </p>
              </div>
            </div>
          </div>

          <div className="tnc-footer">
            <p>
              Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, 
              silakan hubungi tim support kami melalui email <a href="mailto:support@pajak.go.id">support@pajak.go.id</a> 
              atau Kring Pajak <strong>1500-200</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SyaratKetentuan
