import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  Save,
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  Shield
} from 'lucide-react';
import Logo from '../../assets/images/logo.png';

const AdminSettings: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleSave = () => {
    alert('Paramètres sauvegardés ! (Mode statique)');
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
            <Users size={20} />
            <span>Leads / CRM</span>
          </Link>
          <Link to="/admin/content" className="nav-link-admin">
            <FileText size={20} />
            <span>Contenu (CMS)</span>
          </Link>
          <Link to="/admin/settings" className="nav-link-admin active">
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
              <h1 className="h4 fw-bold text-theme-primary mb-1">Paramètres</h1>
              <p className="text-theme-secondary small mb-0">Informations entreprise & configuration</p>
            </div>
            <button onClick={handleSave} className="btn btn-brand btn-sm">
              <Save size={16} className="me-2" />
              Enregistrer
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="admin-content">
          <div className="row g-4">
            {/* Coordonnées */}
            <div className="col-lg-6">
              <div className="glass-card p-4 h-100">
                <h5 className="fw-bold text-theme-primary mb-4">Coordonnées</h5>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <Mail size={16} className="me-2" />
                    Email de contact
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-glass"
                    defaultValue="contact@primices.ai"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <Phone size={16} className="me-2" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-glass"
                    defaultValue="+33 1 23 45 67 89"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <MapPin size={16} className="me-2" />
                    Adresse physique
                  </label>
                  <textarea
                    className="form-control form-control-glass"
                    rows={3}
                    defaultValue="123 Tech Drive, Innovation Park&#10;75001 Paris, France"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <Clock size={16} className="me-2" />
                    Horaires d'ouverture
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-glass"
                    defaultValue="Lun-Ven: 9h-18h | Sam-Dim: Fermé"
                  />
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="col-lg-6">
              <div className="glass-card p-4 h-100">
                <h5 className="fw-bold text-theme-primary mb-4">Réseaux Sociaux</h5>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <Linkedin size={16} className="me-2" />
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    className="form-control form-control-glass"
                    placeholder="https://linkedin.com/company/..."
                    defaultValue="https://linkedin.com/company/primices"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <Twitter size={16} className="me-2" />
                    Twitter / X
                  </label>
                  <input
                    type="url"
                    className="form-control form-control-glass"
                    placeholder="https://twitter.com/..."
                    defaultValue="https://twitter.com/primices_ai"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <Instagram size={16} className="me-2" />
                    Instagram
                  </label>
                  <input
                    type="url"
                    className="form-control form-control-glass"
                    placeholder="https://instagram.com/..."
                    defaultValue="https://instagram.com/primices.ai"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <Globe size={16} className="me-2" />
                    Site Web
                  </label>
                  <input
                    type="url"
                    className="form-control form-control-glass"
                    defaultValue="https://primices.ai"
                  />
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="col-lg-6">
              <div className="glass-card p-4">
                <h5 className="fw-bold text-theme-primary mb-4">Carte & Localisation</h5>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <MapPin size={16} className="me-2" />
                    Lien Google Maps
                  </label>
                  <input
                    type="url"
                    className="form-control form-control-glass"
                    placeholder="https://maps.google.com/..."
                  />
                  <small className="text-theme-secondary">
                    Coller le lien "Partager" depuis Google Maps
                  </small>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Latitude</label>
                    <input
                      type="text"
                      className="form-control form-control-glass"
                      defaultValue="48.8566"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Longitude</label>
                    <input
                      type="text"
                      className="form-control form-control-glass"
                      defaultValue="2.3522"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SEO & Sécurité */}
            <div className="col-lg-6">
              <div className="glass-card p-4">
                <h5 className="fw-bold text-theme-primary mb-4">SEO & Sécurité</h5>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Meta Title (Défaut)</label>
                  <input
                    type="text"
                    className="form-control form-control-glass"
                    defaultValue="Primices Intelligence - AI & Web Innovation"
                  />
                  <small className="text-theme-secondary">60 caractères max recommandé</small>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Meta Description (Défaut)</label>
                  <textarea
                    className="form-control form-control-glass"
                    rows={3}
                    defaultValue="Agence spécialisée en développement web et solutions IA sur mesure. Transformez votre vision digitale en réalité."
                  />
                  <small className="text-theme-secondary">160 caractères max recommandé</small>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold d-flex align-items-center gap-2">
                    <Shield size={16} />
                    Clé ReCaptcha (Site Key)
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-glass"
                    placeholder="6Lc..."
                  />
                  <small className="text-theme-secondary">
                    Pour protéger les formulaires contre le spam
                  </small>
                </div>
              </div>
            </div>

            {/* Administration */}
            <div className="col-12">
              <div className="glass-card p-4">
                <h5 className="fw-bold text-theme-primary mb-4">Gestion des Administrateurs</h5>

                <div className="table-responsive">
                  <table className="table admin-table">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Rôle</th>
                        <th>Dernière connexion</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-semibold">Super Admin</td>
                        <td className="text-theme-secondary">admin@primices.ai</td>
                        <td><span className="badge badge-danger">Super Admin</span></td>
                        <td className="text-theme-secondary small">Aujourd'hui à 14:30</td>
                        <td>
                          <span className="text-theme-secondary small">Vous</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">Marie Éditrice</td>
                        <td className="text-theme-secondary">marie@primices.ai</td>
                        <td><span className="badge badge-info">Éditeur</span></td>
                        <td className="text-theme-secondary small">12 Jan 2025</td>
                        <td>
                          <button className="btn btn-sm btn-outline-brand">Modifier</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button className="btn btn-brand btn-sm mt-3">
                  Ajouter un administrateur
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
