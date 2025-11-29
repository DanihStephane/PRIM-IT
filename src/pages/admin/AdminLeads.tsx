import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  Search,
  Download,
  Eye,
  Filter,
  X,
  Mail,
  Phone,
  Building2
} from 'lucide-react';
import Logo from '../../assets/images/logo.png';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  type: 'contact' | 'ai-journey';
  date: string;
  status: 'new' | 'contacted' | 'negotiation' | 'signed' | 'rejected';
}

const AdminLeads: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const handleLogout = () => {
    navigate('/');
  };

  // Données statiques de démonstration
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean@entreprise.fr',
      phone: '+33 6 12 34 56 78',
      company: 'Tech Innov SAS',
      service: 'IA Solutions',
      message: 'Nous cherchons à intégrer de l\'IA dans notre processus de production...',
      type: 'contact',
      date: '2025-01-15 14:30',
      status: 'new'
    },
    {
      id: 2,
      name: 'Marie Martin',
      email: 'marie@startup.com',
      phone: '+33 6 23 45 67 89',
      company: 'Startup Digitale',
      service: 'Web Development',
      message: 'Besoin d\'un site web moderne avec intégration e-commerce...',
      type: 'contact',
      date: '2025-01-14 16:45',
      status: 'contacted'
    },
    {
      id: 3,
      name: 'Pierre Bernard',
      email: 'p.bernard@tech.fr',
      company: 'Innovation Tech',
      service: 'AI Journey',
      message: 'Projet de transformation digitale avec IA. Budget: 50k€...',
      type: 'ai-journey',
      date: '2025-01-14 11:20',
      status: 'new'
    },
    {
      id: 4,
      name: 'Sophie Laurent',
      email: 'sophie@digital.com',
      phone: '+33 6 45 67 89 01',
      company: 'Digital Solutions',
      service: 'Web Development',
      message: 'Refonte complète du site corporate avec CMS headless...',
      type: 'contact',
      date: '2025-01-13 09:15',
      status: 'negotiation'
    },
    {
      id: 5,
      name: 'Thomas Petit',
      email: 'thomas@innovation.fr',
      phone: '+33 6 56 78 90 12',
      company: 'Innovation Labs',
      service: 'IA Solutions',
      message: 'Développement d\'un chatbot IA pour le support client...',
      type: 'contact',
      date: '2025-01-13 14:00',
      status: 'signed'
    },
    {
      id: 6,
      name: 'Claire Dubois',
      email: 'claire@startup.io',
      company: 'Startup AI',
      service: 'AI Journey',
      message: 'Accompagnement sur notre stratégie IA et data science...',
      type: 'ai-journey',
      date: '2025-01-12 10:30',
      status: 'new'
    }
  ]);

  const handleStatusChange = (leadId: number, newStatus: Lead['status']) => {
    setLeads(prev => prev.map(lead =>
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    ));
  };

  const handleExportCSV = () => {
    alert('Export CSV - Fonctionnalité à implémenter avec un vrai backend');
  };

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
      case 'rejected':
        return <span className="badge badge-danger">Rejeté</span>;
      default:
        return <span className="badge badge-secondary">Inconnu</span>;
    }
  };

  const getTypeBadge = (type: string) => {
    return type === 'contact'
      ? <span className="badge badge-soft-primary">Contact</span>
      : <span className="badge badge-soft-accent">AI Journey</span>;
  };

  // Filtrage
  const filteredLeads = leads.filter(lead => {
    const matchSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       lead.company?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === 'all' || lead.status === filterStatus;
    const matchType = filterType === 'all' || lead.type === filterType;
    return matchSearch && matchStatus && matchType;
  });

  return (
    <div className="admin-dashboard min-vh-100">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header p-4">
          <img src={Logo} alt="Primices Intelligence" className="client-logo" style={{ maxWidth: '140px', background: 'transparent' }} />
        </div>

        <nav className="sidebar-nav px-3">
          <Link to="/admin/dashboard" className="nav-link-admin">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/leads" className="nav-link-admin active">
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
              <h1 className="h4 fw-bold text-theme-primary mb-1">Gestion des Leads</h1>
              <p className="text-theme-secondary small mb-0">CRM léger pour suivre vos prospects</p>
            </div>
            <button onClick={handleExportCSV} className="btn btn-brand btn-sm">
              <Download size={16} className="me-2" />
              Exporter CSV
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="admin-content">
          {/* Filtres */}
          <div className="glass-card p-4 mb-4">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="input-group-icon">
                  <Search className="input-icon" size={20} />
                  <input
                    type="text"
                    className="form-control form-control-glass ps-5"
                    placeholder="Rechercher un lead..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-3">
                <select
                  className="form-select form-control-glass"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">Tous les statuts</option>
                  <option value="new">Nouveau</option>
                  <option value="contacted">Contacté</option>
                  <option value="negotiation">En négociation</option>
                  <option value="signed">Signé</option>
                  <option value="rejected">Rejeté</option>
                </select>
              </div>

              <div className="col-md-3">
                <select
                  className="form-select form-control-glass"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">Tous les types</option>
                  <option value="contact">Contact</option>
                  <option value="ai-journey">AI Journey</option>
                </select>
              </div>

              <div className="col-md-2 text-end">
                <span className="badge badge-soft-primary fs-6">
                  {filteredLeads.length} lead(s)
                </span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="glass-card p-4">
            <div className="table-responsive">
              <table className="table admin-table">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Contact</th>
                    <th>Entreprise</th>
                    <th>Service</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td className="fw-semibold">{lead.name}</td>
                      <td className="text-theme-secondary small">
                        <div className="d-flex flex-column gap-1">
                          <span className="d-flex align-items-center gap-1">
                            <Mail size={12} /> {lead.email}
                          </span>
                          {lead.phone && (
                            <span className="d-flex align-items-center gap-1">
                              <Phone size={12} /> {lead.phone}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="text-theme-secondary">{lead.company || '-'}</td>
                      <td>
                        <span className="badge badge-soft-primary">{lead.service}</span>
                      </td>
                      <td>{getTypeBadge(lead.type)}</td>
                      <td className="text-theme-secondary small">{lead.date}</td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                          style={{ minWidth: '140px' }}
                        >
                          <option value="new">Nouveau</option>
                          <option value="contacted">Contacté</option>
                          <option value="negotiation">En négociation</option>
                          <option value="signed">Signé</option>
                          <option value="rejected">Rejeté</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-icon"
                          onClick={() => setSelectedLead(lead)}
                          title="Voir détails"
                        >
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
      </main>

      {/* Modal détails lead */}
      {selectedLead && (
        <div className="modal-overlay" onClick={() => setSelectedLead(null)}>
          <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-custom">
              <h5 className="fw-bold text-theme-primary mb-0">Détails du lead</h5>
              <button className="btn-close-custom" onClick={() => setSelectedLead(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body-custom">
              <div className="row g-3">
                <div className="col-12">
                  <h6 className="fw-semibold text-theme-primary mb-2">Informations de contact</h6>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Nom</span>
                      <span className="info-value">{selectedLead.name}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email</span>
                      <span className="info-value">{selectedLead.email}</span>
                    </div>
                    {selectedLead.phone && (
                      <div className="info-item">
                        <span className="info-label">Téléphone</span>
                        <span className="info-value">{selectedLead.phone}</span>
                      </div>
                    )}
                    {selectedLead.company && (
                      <div className="info-item">
                        <span className="info-label">Entreprise</span>
                        <span className="info-value">{selectedLead.company}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <h6 className="fw-semibold text-theme-primary mb-2">Demande</h6>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Service</span>
                      <span className="info-value">{selectedLead.service}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Type</span>
                      <span className="info-value">{getTypeBadge(selectedLead.type)}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Date</span>
                      <span className="info-value">{selectedLead.date}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Statut</span>
                      <span className="info-value">{getStatusBadge(selectedLead.status)}</span>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <h6 className="fw-semibold text-theme-primary mb-2">Message</h6>
                  <div className="message-box">
                    {selectedLead.message}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer-custom">
              <button className="btn btn-outline-brand" onClick={() => setSelectedLead(null)}>
                Fermer
              </button>
              <a href={`mailto:${selectedLead.email}`} className="btn btn-brand">
                <Mail size={16} className="me-2" />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLeads;
