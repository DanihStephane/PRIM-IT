import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users as UsersIcon,
  FileText,
  Settings,
  LogOut,
  Save,
  Plus,
  Edit,
  Trash2,
  Upload,
  Home,
  Briefcase,
  Target
} from 'lucide-react';
import Logo from '../../assets/images/logo.png';

type ContentSection = 'hero' | 'services' | 'team' | 'process';

const AdminContent: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<ContentSection>('hero');

  const handleLogout = () => {
    navigate('/');
  };

  const handleSave = () => {
    alert('Modifications enregistrées ! (Mode statique)');
  };

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
          <Link to="/admin/leads" className="nav-link-admin">
            <UsersIcon size={20} />
            <span>Leads / CRM</span>
          </Link>
          <Link to="/admin/content" className="nav-link-admin active">
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
              <h1 className="h4 fw-bold text-theme-primary mb-1">Gestion du Contenu (CMS)</h1>
              <p className="text-theme-secondary small mb-0">Administrez votre site sans toucher au code</p>
            </div>
            <button onClick={handleSave} className="btn btn-brand btn-sm">
              <Save size={16} className="me-2" />
              Enregistrer
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="admin-content">
          {/* Section Tabs */}
          <div className="glass-card p-3 mb-4">
            <div className="btn-group w-100" role="group">
              <button
                className={`btn ${activeSection === 'hero' ? 'btn-brand' : 'btn-outline-brand'}`}
                onClick={() => setActiveSection('hero')}
              >
                <Home size={16} className="me-2" />
                Page d'accueil
              </button>
              <button
                className={`btn ${activeSection === 'services' ? 'btn-brand' : 'btn-outline-brand'}`}
                onClick={() => setActiveSection('services')}
              >
                <Briefcase size={16} className="me-2" />
                Services
              </button>
              <button
                className={`btn ${activeSection === 'team' ? 'btn-brand' : 'btn-outline-brand'}`}
                onClick={() => setActiveSection('team')}
              >
                <UsersIcon size={16} className="me-2" />
                Équipe
              </button>
              <button
                className={`btn ${activeSection === 'process' ? 'btn-brand' : 'btn-outline-brand'}`}
                onClick={() => setActiveSection('process')}
              >
                <Target size={16} className="me-2" />
                Processus
              </button>
            </div>
          </div>

          {/* Hero Section */}
          {activeSection === 'hero' && (
            <div className="glass-card p-4">
              <h5 className="fw-bold text-theme-primary mb-4">Section Hero (Page d'accueil)</h5>

              <div className="mb-4">
                <label className="form-label fw-semibold">Titre principal</label>
                <input
                  type="text"
                  className="form-control form-control-glass"
                  defaultValue="Shaping the Future with AI & Web Innovation"
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Sous-titre</label>
                <textarea
                  className="form-control form-control-glass"
                  rows={3}
                  defaultValue="Des solutions sur mesure pour transformer votre vision en réalité digitale"
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Texte du bouton CTA</label>
                  <input
                    type="text"
                    className="form-control form-control-glass"
                    defaultValue="Explorez nos services"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Lien du bouton</label>
                  <input
                    type="text"
                    className="form-control form-control-glass"
                    defaultValue="/services"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Services Section */}
          {activeSection === 'services' && (
            <div className="glass-card p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold text-theme-primary mb-0">Gestion des Services</h5>
                <button className="btn btn-brand btn-sm">
                  <Plus size={16} className="me-2" />
                  Ajouter un service
                </button>
              </div>

              <div className="service-list">
                {['Web Development', 'IA Solutions', 'Data Analytics', 'Cloud Services'].map((service, index) => (
                  <div key={index} className="service-item p-3 mb-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="flex-grow-1">
                        <h6 className="fw-semibold text-theme-primary mb-2">{service}</h6>
                        <p className="text-theme-secondary small mb-2">
                          Description du service qui sera affichée sur le site...
                        </p>
                        <div className="d-flex gap-2">
                          <span className="badge badge-soft-primary">Frontend</span>
                          <span className="badge badge-soft-primary">Backend</span>
                          <span className="badge badge-soft-primary">Database</span>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-icon" title="Modifier">
                          <Edit size={16} />
                        </button>
                        <button className="btn btn-sm btn-icon text-danger" title="Supprimer">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team Section */}
          {activeSection === 'team' && (
            <div className="glass-card p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold text-theme-primary mb-0">Gestion de l'Équipe</h5>
                <button className="btn btn-brand btn-sm">
                  <Plus size={16} className="me-2" />
                  Ajouter un membre
                </button>
              </div>

              <div className="row g-4">
                {[
                  { name: 'John Doe', role: 'Founder & CEO', img: 'https://i.pravatar.cc/150?img=33' },
                  { name: 'Jane Smith', role: 'Lead Developer', img: 'https://i.pravatar.cc/150?img=47' },
                  { name: 'Mike Johnson', role: 'AI Engineer', img: 'https://i.pravatar.cc/150?img=12' }
                ].map((member, index) => (
                  <div key={index} className="col-md-4">
                    <div className="team-item-admin">
                      <img src={member.img} alt={member.name} className="team-avatar-admin" />
                      <h6 className="fw-semibold text-theme-primary mt-3 mb-1">{member.name}</h6>
                      <p className="text-theme-secondary small mb-3">{member.role}</p>
                      <div className="d-flex gap-2 justify-content-center">
                        <button className="btn btn-sm btn-icon" title="Modifier">
                          <Edit size={16} />
                        </button>
                        <button className="btn btn-sm btn-icon text-danger" title="Supprimer">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Section */}
          {activeSection === 'process' && (
            <div className="glass-card p-4">
              <h5 className="fw-bold text-theme-primary mb-4">Notre Processus & Why Choose Us</h5>

              <div className="mb-5">
                <h6 className="fw-semibold text-theme-primary mb-3">Étapes du processus</h6>
                {['Découverte', 'Design', 'Développement', 'Déploiement'].map((step, index) => (
                  <div key={index} className="process-step-admin mb-3 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="flex-grow-1">
                        <label className="form-label fw-semibold small mb-2">Étape {index + 1}</label>
                        <input
                          type="text"
                          className="form-control form-control-glass"
                          defaultValue={step}
                        />
                      </div>
                      <button className="btn btn-sm btn-icon ms-3" title="Changer l'icône">
                        <Upload size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h6 className="fw-semibold text-theme-primary mb-3">Why Choose Us</h6>
                {['Sécurisé', 'Innovant', 'Expertise', 'Support 24/7'].map((reason, index) => (
                  <div key={index} className="mb-3">
                    <label className="form-label fw-semibold small">Carte {index + 1}</label>
                    <input
                      type="text"
                      className="form-control form-control-glass"
                      defaultValue={reason}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminContent;
