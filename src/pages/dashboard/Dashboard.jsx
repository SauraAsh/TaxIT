import { useState } from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import TopBar from '../../components/dashboard/TopBar'
import BentoGrid from '../../components/dashboard/BentoGrid'
import QuickActions from '../../components/dashboard/QuickActions'
import EFiling from './efiling/EFiling'
import './Dashboard.css'

const Dashboard = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState('dashboard') // 'dashboard', 'efiling', etc
  const [efilingTab, setEfilingTab] = useState('efiling-new') // submenu state
  const [user] = useState({
    name: 'Chello Arta',
    npwp: '11.111.111.1-111.111',
    email: 'chello.arta@email.com',
    avatar: null
  })

  // Handle navigation from sidebar
  const handleNavigation = (view, submenu) => {
    setCurrentView(view)
    if (submenu) {
      // Map submenu IDs to tab names
      const tabMap = {
        'efiling-new': 'baru',
        'efiling-draft': 'draft',
        'efiling-history': 'riwayat'
      }
      setEfilingTab(tabMap[submenu] || 'baru')
    }
  }

  return (
    <div className="dashboard-page">
      <Sidebar 
        isOpen={true}
        onNavigate={handleNavigation}
        activeView={currentView}
      />
      
      <div className="dashboard-main sidebar-open">
        <TopBar user={user} onLogout={onLogout} />
        
        <div className="dashboard-content">
          {currentView === 'dashboard' && (
            <>
              {/* Welcome Section */}
              <div className="welcome-section">
                <div className="welcome-text">
                  <h1>Selamat Datang, <span className="user-name">{user.name}</span></h1>
                  <p>Kelola semua urusan perpajakan Anda dengan mudah</p>
                </div>
                <div className="welcome-stats">
                  <div className="stat-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    SPT Terlapor
                  </div>
                  <div className="stat-badge success">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Status Aktif
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <QuickActions />

              {/* Bento Grid */}
              <BentoGrid user={user} />
            </>
          )}

          {currentView === 'efiling' && <EFiling initialTab={efilingTab} />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
