import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Calendar,
  Download,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Clock,
  FileCode,
  User,
  Mail,
  Phone
} from 'lucide-react';
import Logo from '../../assets/images/logo.png';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'support'>('overview');

  const handleLogout = () => {
    navigate('/');
  };

  // Données statiques de démonstration
  const projectProgress = 70;
  const currentPhase = 'Développement des modèles IA';
  const nextDeadline = '15 Mars 2025';

  const phases = [
    { name: 'Briefing', completed: true },
    { name: 'Wireframing', completed: true },
    { name: 'Développement', completed: false, current: true, progress: 70 },
    { name: 'Intégration IA', completed: false },
    { name: 'Tests', completed: false },
    { name: 'Livraison', completed: false }
  ];

  const documents = {
    administrative: [
      { name: 'Devis signé - Projet IA', type: 'PDF', date: '12 Jan 2025', size: '245 KB' },
      { name: 'Facture #2025-001', type: 'PDF', date: '15 Jan 2025', size: '128 KB' }
    ],
    technical: [
      { name: 'Maquettes UI/UX', type: 'Figma', date: '20 Jan 2025', link: 'https://figma.com' },
      { name: 'Site de pré-production', type: 'Web', date: '25 Fév 2025', link: 'https://staging.example.com' },
      { name: 'Documentation API v1.2', type: 'PDF', date: '28 Fév 2025', size: '1.2 MB' }
    ]
  };

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Chef de projet',
      avatar: 'https://i.pravatar.cc/150?img=33',
      email: 'alex.chen@primices.ai',
      phone: '+33 6 12 34 56 78'
    },
    {
      name: 'Sophie Martin',
      role: 'Lead Developer',
      avatar: 'https://i.pravatar.cc/150?img=47',
      email: 'sophie.martin@primices.ai',
      phone: '+33 6 23 45 67 89'
    },
    {
      name: 'Lucas Bernard',
      role: 'AI Engineer',
      avatar: 'https://i.pravatar.cc/150?img=12',
      email: 'lucas.bernard@primices.ai',
      phone: '+33 6 34 56 78 90'
    }
  ];

  const tickets = [
    { id: '#T-001', title: 'Ajustement de la palette de couleurs', status: 'resolved', date: '10 Fév 2025' },
    { id: '#T-002', title: 'Optimisation du temps de réponse API', status: 'in_progress', date: '25 Fév 2025' },
    { id: '#T-003', title: 'Nouvelle fonctionnalité: Export Excel', status: 'pending', date: '28 Fév 2025' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <span className="badge badge-success"><CheckCircle size={14} className="me-1" /> Résolu</span>;
      case 'in_progress':
        return <span className="badge badge-warning"><Clock size={14} className="me-1" /> En cours</span>;
      case 'pending':
        return <span className="badge badge-info"><AlertCircle size={14} className="me-1" /> En attente</span>;
      default:
        return null;
    }
  };

  return (
    <div className="client-dashboard min-vh-100">
      {/* Header Dashboard */}
      <header className="dashboard-header">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center py-3">
            <Link to="/" className="navbar-brand client-logo">
              <img src={Logo} alt="Primices Intelligence" style={{ maxWidth: '160px', background: 'transparent' }} />
            </Link>
            <div className="d-flex align-items-center gap-3">
              <div className="user-info d-none d-md-block text-end">
                <p className="mb-0 fw-semibold text-theme-primary">Entreprise Demo SAS</p>
                <p className="mb-0 small text-theme-secondary">contact@demo.com</p>
              </div>
              <div className="user-avatar">
                <img
                  src="https://i.pravatar.cc/80?img=8"
                  alt="User"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </div>
              <button className="btn btn-sm btn-outline-brand" onClick={handleLogout} title="Déconnexion">
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container-fluid px-4 py-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 mb-4">
            <div className="dashboard-sidebar glass-card p-3">
              <nav className="nav flex-column gap-2">
                <button
                  className={`nav-link-dashboard ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <LayoutDashboard size={18} />
                  <span>Vue d'ensemble</span>
                </button>
                <button
                  className={`nav-link-dashboard ${activeTab === 'documents' ? 'active' : ''}`}
                  onClick={() => setActiveTab('documents')}
                >
                  <FileText size={18} />
                  <span>Documents</span>
                </button>
                <button
                  className={`nav-link-dashboard ${activeTab === 'support' ? 'active' : ''}`}
                  onClick={() => setActiveTab('support')}
                >
                  <Users size={18} />
                  <span>Support</span>
                </button>
                <hr className="my-2" />
                <Link to="/client/settings" className="nav-link-dashboard text-decoration-none">
                  <Settings size={18} />
                  <span>Paramètres</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-lg-10">
            {/* Tab: Vue d'ensemble */}
            {activeTab === 'overview' && (
              <>
                {/* Timeline & Progrès */}
                <div className="glass-card p-4 mb-4">
                  <h2 className="h5 fw-bold text-theme-primary mb-4">
                    Avancement de votre projet
                  </h2>

                  {/* Barre de progression globale */}
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-semibold text-theme-primary">Progression globale</span>
                      <span className="text-brand fw-bold">{projectProgress}%</span>
                    </div>
                    <div className="progress-bar-dashboard">
                      <div
                        className="progress-fill-dashboard"
                        style={{ width: `${projectProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Statut actuel */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="status-card">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <Clock size={20} className="text-brand" />
                          <span className="text-theme-secondary small">Phase actuelle</span>
                        </div>
                        <p className="mb-0 fw-bold text-theme-primary">{currentPhase}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="status-card">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <Calendar size={20} className="text-brand" />
                          <span className="text-theme-secondary small">Prochaine échéance</span>
                        </div>
                        <p className="mb-0 fw-bold text-theme-primary">{nextDeadline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline des phases */}
                  <div className="timeline-phases">
                    {phases.map((phase, index) => (
                      <div
                        key={index}
                        className={`timeline-phase ${phase.completed ? 'completed' : ''} ${
                          phase.current ? 'current' : ''
                        }`}
                      >
                        <div className="phase-icon">
                          {phase.completed ? (
                            <CheckCircle size={20} />
                          ) : phase.current ? (
                            <Clock size={20} />
                          ) : (
                            <div className="phase-dot"></div>
                          )}
                        </div>
                        <div className="phase-content">
                          <h6 className="mb-1">{phase.name}</h6>
                          {phase.current && phase.progress && (
                            <div className="mini-progress">
                              <div
                                className="mini-progress-fill"
                                style={{ width: `${phase.progress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Livrables & Documents rapides */}
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="glass-card p-4 h-100">
                      <h3 className="h6 fw-bold text-theme-primary mb-3">
                        <FileText size={20} className="me-2" />
                        Derniers documents
                      </h3>
                      <div className="document-list">
                        {documents.technical.slice(0, 3).map((doc, index) => (
                          <div key={index} className="document-item">
                            <div className="d-flex align-items-center gap-3">
                              <div className="document-icon">
                                <FileCode size={20} />
                              </div>
                              <div className="flex-grow-1">
                                <p className="mb-0 fw-semibold">{doc.name}</p>
                                <small className="text-theme-secondary">{doc.date}</small>
                              </div>
                              {doc.link ? (
                                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-icon">
                                  <ExternalLink size={16} />
                                </a>
                              ) : (
                                <button className="btn btn-sm btn-icon">
                                  <Download size={16} />
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="btn btn-outline-brand btn-sm w-100 mt-3"
                        onClick={() => setActiveTab('documents')}
                      >
                        Voir tous les documents
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="glass-card p-4 h-100">
                      <h3 className="h6 fw-bold text-theme-primary mb-3">
                        <Users size={20} className="me-2" />
                        Votre équipe dédiée
                      </h3>
                      <div className="team-list">
                        {teamMembers.map((member, index) => (
                          <div key={index} className="team-member-item">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="team-member-avatar"
                            />
                            <div className="flex-grow-1">
                              <p className="mb-0 fw-semibold">{member.name}</p>
                              <small className="text-theme-secondary">{member.role}</small>
                            </div>
                            <button className="btn btn-sm btn-icon">
                              <MessageSquare size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Tab: Documents */}
            {activeTab === 'documents' && (
              <div className="glass-card p-4">
                <h2 className="h5 fw-bold text-theme-primary mb-4">Livrables & Documents</h2>

                {/* Documents administratifs */}
                <div className="mb-5">
                  <h3 className="h6 fw-semibold text-theme-primary mb-3">Documents administratifs</h3>
                  <div className="documents-grid">
                    {documents.administrative.map((doc, index) => (
                      <div key={index} className="document-card">
                        <div className="document-card-icon">
                          <FileText size={32} />
                        </div>
                        <h4 className="document-card-title">{doc.name}</h4>
                        <div className="document-card-meta">
                          <span className="badge badge-soft-primary">{doc.type}</span>
                          <span className="text-theme-secondary small">{doc.size}</span>
                        </div>
                        <p className="document-card-date">
                          <Calendar size={14} className="me-1" />
                          {doc.date}
                        </p>
                        <button className="btn btn-brand btn-sm w-100">
                          <Download size={16} className="me-2" />
                          Télécharger
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents techniques */}
                <div>
                  <h3 className="h6 fw-semibold text-theme-primary mb-3">Livrables techniques</h3>
                  <div className="documents-grid">
                    {documents.technical.map((doc, index) => (
                      <div key={index} className="document-card">
                        <div className="document-card-icon">
                          <FileCode size={32} />
                        </div>
                        <h4 className="document-card-title">{doc.name}</h4>
                        <div className="document-card-meta">
                          <span className="badge badge-soft-primary">{doc.type}</span>
                          {doc.size && <span className="text-theme-secondary small">{doc.size}</span>}
                        </div>
                        <p className="document-card-date">
                          <Calendar size={14} className="me-1" />
                          {doc.date}
                        </p>
                        {doc.link ? (
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-brand btn-sm w-100"
                          >
                            <ExternalLink size={16} className="me-2" />
                            Ouvrir
                          </a>
                        ) : (
                          <button className="btn btn-brand btn-sm w-100">
                            <Download size={16} className="me-2" />
                            Télécharger
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Support */}
            {activeTab === 'support' && (
              <>
                {/* Interlocuteurs dédiés */}
                <div className="glass-card p-4 mb-4">
                  <h2 className="h5 fw-bold text-theme-primary mb-4">Votre équipe dédiée</h2>
                  <div className="row g-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="col-md-4">
                        <div className="team-card-detail text-center">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="team-card-avatar mb-3"
                          />
                          <h3 className="h6 fw-bold text-theme-primary mb-1">{member.name}</h3>
                          <p className="text-theme-secondary small mb-3">{member.role}</p>
                          <div className="contact-info text-start">
                            <div className="contact-info-item">
                              <Mail size={16} />
                              <span>{member.email}</span>
                            </div>
                            <div className="contact-info-item">
                              <Phone size={16} />
                              <span>{member.phone}</span>
                            </div>
                          </div>
                          <button className="btn btn-brand btn-sm w-100 mt-3">
                            <MessageSquare size={16} className="me-2" />
                            Contacter
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tickets & Demandes */}
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="glass-card p-4">
                      <h2 className="h5 fw-bold text-theme-primary mb-4">Historique des demandes</h2>
                      <div className="ticket-list">
                        {tickets.map((ticket, index) => (
                          <div key={index} className="ticket-item">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <div>
                                <span className="ticket-id text-theme-secondary">{ticket.id}</span>
                                <h4 className="ticket-title mb-1">{ticket.title}</h4>
                                <p className="ticket-date text-theme-secondary small mb-0">
                                  <Calendar size={14} className="me-1" />
                                  {ticket.date}
                                </p>
                              </div>
                              {getStatusBadge(ticket.status)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="glass-card p-4">
                      <h3 className="h6 fw-bold text-theme-primary mb-3">Nouvelle demande</h3>
                      <form>
                        <div className="mb-3">
                          <label htmlFor="requestType" className="form-label fw-semibold">
                            Type de demande
                          </label>
                          <select id="requestType" className="form-select form-control-glass">
                            <option value="">Sélectionnez...</option>
                            <option value="bug">Signaler un bug</option>
                            <option value="feature">Demander une évolution</option>
                            <option value="question">Question technique</option>
                            <option value="other">Autre</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="requestMessage" className="form-label fw-semibold">
                            Description
                          </label>
                          <textarea
                            id="requestMessage"
                            className="form-control form-control-glass"
                            rows={5}
                            placeholder="Décrivez votre demande en détail..."
                          />
                        </div>
                        <button type="submit" className="btn btn-brand w-100">
                          Envoyer
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
