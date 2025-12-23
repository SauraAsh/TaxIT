import { useState } from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import AnimatedSidebar from '../../components/dashboard/AnimatedSidebar'
import TopBar from '../../components/dashboard/TopBar'
import BentoGrid from '../../components/dashboard/BentoGrid'
import QuickActions from '../../components/dashboard/QuickActions'
import EFiling from './efiling/EFiling'
import EBilling from './ebilling/EBilling'
import EBukpot from './ebukpot/EBukpot'
import Profile from './profile/Profile'
import Pengaturan from './pengaturan/Pengaturan'
import Bantuan from './bantuan/Bantuan'
import './Dashboard.css'

const Dashboard = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState('dashboard') // 'dashboard', 'efiling', 'ebilling', 'ebukpot', etc
  const [efilingTab, setEfilingTab] = useState('efiling-new') // efiling submenu state
  const [ebillingTab, setEbillingTab] = useState('ebilling-new') // ebilling submenu state
  const [ebukpotTab, setEbukpotTab] = useState('upload') // ebukpot submenu state
  const [sidebarOpen, setSidebarOpen] = useState(false) // mobile sidebar state
  const [useAnimatedSidebar, setUseAnimatedSidebar] = useState(true) // toggle between normal and animated sidebar
  const [user] = useState({
    name: 'Chello Arta',
    npwp: '11.111.111.1-111.111',
    email: 'chello.arta@email.com',
    avatar: null
  })

  // Handle navigation from sidebar
  const handleNavigation = (view, submenu) => {
    setCurrentView(view)
    setSidebarOpen(false) // Close sidebar on mobile after navigation
    if (submenu) {
      // Map submenu IDs to tab names for E-Filing
      const efilingTabMap = {
        'efiling-new': 'baru',
        'efiling-draft': 'draft',
        'efiling-history': 'riwayat'
      }
      // Map submenu IDs to tab names for E-Billing
      const ebillingTabMap = {
        'ebilling-new': 'baru',
        'ebilling-check': 'cek',
        'ebilling-history': 'riwayat'
      }
      // Map submenu IDs to tab names for E-Bukpot
      const ebukpotTabMap = {
        'ebukpot-upload': 'upload',
        'ebukpot-list': 'list'
      }
      
      if (efilingTabMap[submenu]) {
        setEfilingTab(efilingTabMap[submenu])
      } else if (ebillingTabMap[submenu]) {
        setEbillingTab(ebillingTabMap[submenu])
      } else if (ebukpotTabMap[submenu]) {
        setEbukpotTab(ebukpotTabMap[submenu])
      }
    }
  }

  return (
    <div className="dashboard-page">
      {useAnimatedSidebar ? (
        <AnimatedSidebar 
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={handleNavigation}
          activeView={currentView}
        />
      ) : (
        <Sidebar 
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={handleNavigation}
          activeView={currentView}
        />
      )}
      
      <div className="dashboard-main sidebar-open">
        <TopBar 
          user={user} 
          onLogout={onLogout}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
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
          {currentView === 'ebilling' && <EBilling initialTab={ebillingTab} />}
          {currentView === 'ebukpot' && <EBukpot initialTab={ebukpotTab} />}
          {currentView === 'profile' && <Profile />}
          {currentView === 'pengaturan' && <Pengaturan />}
          {currentView === 'help' && <Bantuan />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
