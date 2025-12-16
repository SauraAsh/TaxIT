import { useState } from 'react'
import './QuickActions.css'

const QuickActions = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const actions = [
    {
      id: 'efiling',
      title: 'E-Filing',
      description: 'Lapor SPT Tahunan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#008bff'
    },
    {
      id: 'ebilling',
      title: 'E-Billing',
      description: 'Buat Kode Billing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: '#22c55e'
    },
    {
      id: 'ebukpot',
      title: 'E-Bukpot',
      description: 'Upload Bukti Potong',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#f59e0b'
    },
    {
      id: 'history',
      title: 'Riwayat',
      description: 'Lihat Aktivitas',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#8b5cf6'
    }
  ]

  return (
    <section className="quick-actions">
      <div className="section-header-small">
        <h2>Aksi Cepat</h2>
        <p>Akses fitur yang sering digunakan</p>
      </div>

      <div className="actions-grid">
        {actions.map((action, index) => (
          <div
            key={action.id}
            className={`action-card ${hoveredCard === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Glow Effect */}
            <div 
              className="action-glow" 
              style={{ backgroundColor: action.color }}
            ></div>

            <div className="action-content">
              <div 
                className="action-icon"
                style={{ 
                  color: action.color,
                  backgroundColor: `${action.color}15`
                }}
              >
                {action.icon}
              </div>
              <div className="action-text">
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </div>
              <button 
                className="action-button"
                style={{ color: action.color }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuickActions
