import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  TrendingUp,
  Mail,
  Eye,
  MousePointerClick,
  AlertCircle,
  Calendar,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import Logo from '../../assets/images/logo.png';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<'overview'>('overview');

  const handleLogout = () => {
    navigate('/');
  };

  // Données statiques de démonstration
  const kpis = {
    newLeads: 24,
    totalVisitors: 1243,
    conversionRate: 3.2,
    unreadMessages: 8
  };

  const recentLeads = [
    { id: 1, name: 'Jean Dupont', email: 'jean@entreprise.fr', service: 'IA Solutions', date: '2025-01-15', status: 'new' },
    { id: 2, name: 'Marie Martin', email: 'marie@startup.com', service: 'Web Development', date: '2025-01-14', status: 'contacted' },
    { id: 3, name: 'Pierre Bernard', email: 'p.bernard@tech.fr', service: 'AI Journey', date: '2025-01-14', status: 'new' },
    { id: 4, name: 'Sophie Laurent', email: 'sophie@digital.com', service: 'Web Development', date: '2025-01-13', status: 'negotiation' },
    { id: 5, name: 'Thomas Petit', email: 'thomas@innovation.fr', service: 'IA Solutions', date: '2025-01-13', status: 'new' }
  ];

  const stats30Days = [
    { day: '01', leads: 4 },
    { day: '05', leads: 6 },
    { day: '10', leads: 8 },
    { day: '15', leads: 12 },
    { day: '20', leads: 15 },
    { day: '25', leads: 18 },
    { day: '30', leads: 24 }
  ];

  const topServices = [
    { name: 'IA Solutions', views: 456, percentage: 35 },
    { name: 'Web Development', views: 398, percentage: 30 },
    { name: 'AI Journey', views: 325, percentage: 25 },
    { name: 'Data Analytics', views: 132, percentage: 10 }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <span className="badge badge-info">Nouveau</span>;
      case 'contacted':
        return <span className="badge badge-warning">Contacté</span>;
      case 'negotiation':
        return <span className="badge badge-primary">En négociation</span>;
      case 'signed':
        return <span className="badge badge-success">Signé</span>;
      default:
        return <span className="badge badge-secondary">Inconnu</span>;
    }
  };

  const maxLeads = Math.max(...stats30Days.map(s => s.leads));

  return (
    <div className="admin-dashboard min-vh-100">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header p-4">
          <img src={Logo} alt="Primices Intelligence" className="client-logo" style={{ maxWidth: '140px', background: 'transparent' }} />
        </div>

        <nav className="sidebar-nav px-3">
          <Link to="/admin/dashboard" className="nav-link-admin active">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/leads" className="nav-link-admin">
            <Users size={20} />
            <span>Leads / CRM</span>
          </Link>
          <Link to="/admin/content" className="nav-link-admin">
            <FileText size={20} />
            <span>Contenu (CMS)</span>
          </Link>
          <Link to="/admin/settings" className="nav-link-admin">
            <Settings size={20} />
            <span>Paramètres</span>
          </Link>
        </nav>

        <div className="sidebar-footer p-3">
          <button onClick={handleLogout} className="btn btn-outline-brand btn-sm w-100">
            <LogOut size={16} className="me-2" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h4 fw-bold text-theme-primary mb-1">Tableau de bord</h1>
              <p className="text-theme-secondary small mb-0">Vue d'ensemble de votre activité</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="text-end d-none d-md-block">
                <p className="mb-0 fw-semibold text-theme-primary small">Admin</p>
                <p className="mb-0 text-theme-secondary" style={{ fontSize: '0.75rem' }}>admin@primices.ai</p>
              </div>
              <div className="user-avatar">
                <img
                  src="https://i.pravatar.cc/80?img=60"
                  alt="Admin"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
        </header>

        {/* KPIs Cards */}
        <div className="admin-content">
          <div className="row g-4 mb-4">
            <div className="col-md-6 col-lg-3">
              <div className="kpi-card kpi-primary">
                <div className="kpi-icon">
                  <Mail size={24} />
                </div>
                <div className="kpi-content">
                  <p className="kpi-label">Nouveaux Leads</p>
                  <h3 className="kpi-value">{kpis.newLeads}</h3>
                  <span className="kpi-trend text-success">
                    <TrendingUp size={14} /> +12% ce mois
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="kpi-card kpi-success">
                <div className="kpi-icon">
                  <Eye size={24} />
                </div>
                <div className="kpi-content">
                  <p className="kpi-label">Visiteurs Uniques</p>
                  <h3 className="kpi-value">{kpis.totalVisitors.toLocaleString()}</h3>
                  <span className="kpi-trend text-success">
                    <TrendingUp size={14} /> +8% ce mois
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="kpi-card kpi-warning">
                <div className="kpi-icon">
                  <MousePointerClick size={24} />
                </div>
                <div className="kpi-content">
                  <p className="kpi-label">Taux de Conversion</p>
                  <h3 className="kpi-value">{kpis.conversionRate}%</h3>
                  <span className="kpi-trend text-muted">
                    = 0% ce mois
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="kpi-card kpi-danger">
                <div className="kpi-icon">
                  <AlertCircle size={24} />
                </div>
                <div className="kpi-content">
                  <p className="kpi-label">Messages non lus</p>
                  <h3 className="kpi-value">{kpis.unreadMessages}</h3>
                  <span className="kpi-trend text-danger">
                    Nécessite attention
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts & Tables */}
          <div className="row g-4">
            {/* Graphique d'évolution */}
            <div className="col-lg-8">
              <div className="glass-card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold text-theme-primary mb-0">
                    <BarChart3 size={20} className="me-2" />
                    Évolution des leads (30 derniers jours)
                  </h5>
                  <Calendar size={18} className="text-brand" />
                </div>

                <div className="chart-container">
                  <div className="bar-chart">
                    {stats30Days.map((stat, index) => (
                      <div key={index} className="bar-item">
                        <div className="bar-wrapper">
                          <div
                            className="bar-fill"
                            style={{ height: `${(stat.leads / maxLeads) * 100}%` }}
                            title={`${stat.leads} leads`}
                          >
                            <span className="bar-value">{stat.leads}</span>
                          </div>
                        </div>
                        <span className="bar-label">{stat.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services les plus consultés */}
            <div className="col-lg-4">
              <div className="glass-card p-4 h-100">
                <h5 className="fw-bold text-theme-primary mb-4">
                  <MousePointerClick size={20} className="me-2" />
                  Services populaires
                </h5>

                <div className="service-stats">
                  {topServices.map((service, index) => (
                    <div key={index} className="service-stat-item">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-semibold text-theme-primary">{service.name}</span>
                        <span className="text-theme-secondary small">{service.views} vues</span>
                      </div>
                      <div className="progress-bar-custom">
                        <div
                          className="progress-fill"
                          style={{ width: `${service.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Derniers leads */}
            <div className="col-12">
              <div className="glass-card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold text-theme-primary mb-0">
                    <MessageSquare size={20} className="me-2" />
                    Derniers leads
                  </h5>
                  <Link to="/admin/leads" className="btn btn-outline-brand btn-sm">
                    Voir tous
                  </Link>
                </div>

                <div className="table-responsive">
                  <table className="table admin-table">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Statut</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentLeads.map((lead) => (
                        <tr key={lead.id}>
                          <td className="fw-semibold">{lead.name}</td>
                          <td className="text-theme-secondary">{lead.email}</td>
                          <td>
                            <span className="badge badge-soft-primary">{lead.service}</span>
                          </td>
                          <td className="text-theme-secondary small">{lead.date}</td>
                          <td>{getStatusBadge(lead.status)}</td>
                          <td>
                            <button className="btn btn-sm btn-icon" title="Voir détails">
                              <Eye size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
