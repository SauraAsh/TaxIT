import React, { useState } from 'react';
import { 
  FileText, 
  CreditCard, 
  Clock, 
  TrendingUp,
  DollarSign,
  Calendar,
  Bell,
  Download,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import './DashboardWajibPajak.css';

const DashboardWajibPajak = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Data dummy untuk dashboard
  const taxSummary = {
    totalPaid: 15750000,
    totalDue: 2500000,
    upcomingPayment: 2500000,
    lastPayment: '15 November 2024'
  };

  const recentTransactions = [
    { id: 1, type: 'PPh 21', amount: 5250000, date: '2024-11-15', status: 'paid' },
    { id: 2, type: 'PPN', amount: 10500000, date: '2024-10-20', status: 'paid' },
    { id: 3, type: 'PPh 23', amount: 2500000, date: '2024-12-25', status: 'pending' }
  ];

  const quickActions = [
    { icon: CreditCard, label: 'Bayar Pajak', color: 'blue', link: '/payment' },
    { icon: FileText, label: 'Laporan', color: 'green', link: '/reports' },
    { icon: Download, label: 'Bukti Bayar', color: 'purple', link: '/receipts' },
    { icon: Calendar, label: 'Jadwal', color: 'orange', link: '/schedule' }
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard Wajib Pajak</h1>
          <p>Selamat datang kembali! Kelola pajak Anda dengan mudah.</p>
        </div>
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
      </div>

      {/* Magic Bento Grid */}
      <div className="bento-grid">
        {/* Card 1: Status Summary */}
        <div className="bento-card card-large">
          <div className="card-header">
            <h3>Ringkasan Pajak</h3>
            <TrendingUp className="card-icon" />
          </div>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-label">Total Dibayar</span>
              <span className="stat-value success">
                Rp {taxSummary.totalPaid.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total Tertunggak</span>
              <span className="stat-value warning">
                Rp {taxSummary.totalDue.toLocaleString('id-ID')}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Pembayaran Mendatang</span>
              <span className="stat-value info">
                Rp {taxSummary.upcomingPayment.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Quick Actions */}
        <div className="bento-card card-actions">
          <h3>Aksi Cepat</h3>
          <div className="dock-container">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`dock-item ${action.color}`}
                onClick={() => setSelectedCard(action.label)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <action.icon size={24} />
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Card 3: Recent Transactions */}
        <div className="bento-card card-wide">
          <div className="card-header">
            <h3>Transaksi Terbaru</h3>
            <FileText className="card-icon" />
          </div>
          <div className="transactions-list">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-info">
                  {transaction.status === 'paid' ? (
                    <CheckCircle className="status-icon success" size={20} />
                  ) : (
                    <AlertCircle className="status-icon warning" size={20} />
                  )}
                  <div>
                    <p className="transaction-type">{transaction.type}</p>
                    <span className="transaction-date">{transaction.date}</span>
                  </div>
                </div>
                <div className="transaction-amount">
                  <span className={transaction.status}>
                    Rp {transaction.amount.toLocaleString('id-ID')}
                  </span>
                  <span className={`status-badge ${transaction.status}`}>
                    {transaction.status === 'paid' ? 'Lunas' : 'Menunggu'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: Upcoming Deadlines */}
        <div className="bento-card card-medium">
          <div className="card-header">
            <h3>Jatuh Tempo</h3>
            <Clock className="card-icon" />
          </div>
          <div className="deadline-list">
            <div className="deadline-item urgent">
              <Calendar size={20} />
              <div>
                <p>PPh Pasal 23</p>
                <span>5 hari lagi</span>
              </div>
            </div>
            <div className="deadline-item normal">
              <Calendar size={20} />
              <div>
                <p>PPN Masa Desember</p>
                <span>15 hari lagi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Statistics */}
        <div className="bento-card card-stats">
          <div className="card-header">
            <h3>Statistik</h3>
            <DollarSign className="card-icon" />
          </div>
          <div className="stats-chart">
            <div className="chart-bar" style={{ height: '60%' }}>
              <span>Jan</span>
            </div>
            <div className="chart-bar" style={{ height: '80%' }}>
              <span>Feb</span>
            </div>
            <div className="chart-bar" style={{ height: '45%' }}>
              <span>Mar</span>
            </div>
            <div className="chart-bar" style={{ height: '90%' }}>
              <span>Apr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWajibPajak;
