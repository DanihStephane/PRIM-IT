import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Lock,
  Bell,
  Globe,
  CreditCard,
  Save,
  Eye,
  EyeOff,
  Upload,
  Mail,
  Phone,
  Building2,
  MapPin,
  Shield,
  LogOut
} from 'lucide-react';
import Logo from '../../assets/images/logo.png';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<'profile' | 'security' | 'notifications' | 'preferences' | 'billing'>('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  // États pour les formulaires
  const [profileData, setProfileData] = useState({
    companyName: 'Entreprise Demo SAS',
    contactName: 'Jean Dupont',
    email: 'contact@demo.com',
    phone: '+33 6 12 34 56 78',
    logo: null as File | null
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    enable2FA: false
  });

  const [notificationData, setNotificationData] = useState({
    emailProjectUpdates: true,
    emailNewDocuments: true,
    emailTeamMessages: true,
    emailWeeklyReport: false,
    emailMarketing: false
  });

  const [preferencesData, setPreferencesData] = useState({
    language: 'fr',
    timezone: 'Europe/Paris',
    dateFormat: 'DD/MM/YYYY'
  });

  const [billingData, setBillingData] = useState({
    address: '123 Avenue des Champs-Élysées',
    city: 'Paris',
    postalCode: '75008',
    country: 'France',
    vatNumber: 'FR12345678901'
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: type === 'file' && files ? files[0] : value
    }));
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSecurityData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handlePreferencesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPreferencesData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profil mis à jour avec succès !');
  };

  const handleSaveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    alert('Paramètres de sécurité mis à jour avec succès !');
    setSecurityData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      enable2FA: securityData.enable2FA
    });
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Préférences de notifications mises à jour !');
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Préférences mises à jour !');
  };

  const handleSaveBilling = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Informations de facturation mises à jour !');
  };

  return (
    <div className="client-dashboard min-vh-100">
      {/* Header */}
      <header className="dashboard-header">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={() => navigate('/client/dashboard')}
                className="btn btn-sm btn-icon"
              >
                <ArrowLeft size={20} />
              </button>
              <Link to="/" className="navbar-brand client-logo">
                <img src={Logo} alt="Primices Intelligence" style={{ maxWidth: '160px', background: 'transparent' }} />
              </Link>
            </div>
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
          {/* Sidebar Navigation */}
          <div className="col-lg-3 mb-4">
            <div className="glass-card p-3">
              <h2 className="h5 fw-bold text-theme-primary mb-3">Paramètres</h2>
              <nav className="settings-nav">
                <button
                  className={`settings-nav-item ${activeSection === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveSection('profile')}
                >
                  <User size={20} />
                  <span>Profil</span>
                </button>
                <button
                  className={`settings-nav-item ${activeSection === 'security' ? 'active' : ''}`}
                  onClick={() => setActiveSection('security')}
                >
                  <Lock size={20} />
                  <span>Sécurité</span>
                </button>
                <button
                  className={`settings-nav-item ${activeSection === 'notifications' ? 'active' : ''}`}
                  onClick={() => setActiveSection('notifications')}
                >
                  <Bell size={20} />
                  <span>Notifications</span>
                </button>
                <button
                  className={`settings-nav-item ${activeSection === 'preferences' ? 'active' : ''}`}
                  onClick={() => setActiveSection('preferences')}
                >
                  <Globe size={20} />
                  <span>Préférences</span>
                </button>
                <button
                  className={`settings-nav-item ${activeSection === 'billing' ? 'active' : ''}`}
                  onClick={() => setActiveSection('billing')}
                >
                  <CreditCard size={20} />
                  <span>Facturation</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="col-lg-9">
            <div className="glass-card p-4">
              {/* Section Profil */}
              {activeSection === 'profile' && (
                <div className="settings-section">
                  <h3 className="h5 fw-bold text-theme-primary mb-4">Informations du profil</h3>
                  <form onSubmit={handleSaveProfile}>
                    {/* Logo entreprise */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Logo de l'entreprise</label>
                      <div className="d-flex align-items-center gap-4">
                        <div className="company-logo-preview">
                          {profileData.logo ? (
                            <img src={URL.createObjectURL(profileData.logo)} alt="Logo" />
                          ) : (
                            <Building2 size={40} className="text-theme-secondary" />
                          )}
                        </div>
                        <div>
                          <input
                            type="file"
                            id="logo"
                            name="logo"
                            className="d-none"
                            accept="image/*"
                            onChange={handleProfileChange}
                          />
                          <label htmlFor="logo" className="btn btn-outline-brand btn-sm">
                            <Upload size={16} className="me-2" />
                            Changer le logo
                          </label>
                          <p className="small text-theme-secondary mb-0 mt-2">PNG, JPG ou SVG (Max. 2MB)</p>
                        </div>
                      </div>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="companyName" className="form-label fw-semibold">
                          Nom de l'entreprise
                        </label>
                        <div className="input-group-icon">
                          <Building2 className="input-icon" size={20} />
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="form-control form-control-glass ps-5"
                            value={profileData.companyName}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="contactName" className="form-label fw-semibold">
                          Nom du contact
                        </label>
                        <div className="input-group-icon">
                          <User className="input-icon" size={20} />
                          <input
                            type="text"
                            id="contactName"
                            name="contactName"
                            className="form-control form-control-glass ps-5"
                            value={profileData.contactName}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-semibold">
                          Email
                        </label>
                        <div className="input-group-icon">
                          <Mail className="input-icon" size={20} />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control form-control-glass ps-5"
                            value={profileData.email}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label fw-semibold">
                          Téléphone
                        </label>
                        <div className="input-group-icon">
                          <Phone className="input-icon" size={20} />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-control form-control-glass ps-5"
                            value={profileData.phone}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-top">
                      <button type="submit" className="btn btn-brand">
                        <Save size={18} className="me-2" />
                        Enregistrer les modifications
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Section Sécurité */}
              {activeSection === 'security' && (
                <div className="settings-section">
                  <h3 className="h5 fw-bold text-theme-primary mb-4">Sécurité du compte</h3>
                  <form onSubmit={handleSaveSecurity}>
                    {/* Changer mot de passe */}
                    <div className="mb-4">
                      <h6 className="fw-semibold text-theme-primary mb-3">Changer le mot de passe</h6>

                      <div className="mb-3">
                        <label htmlFor="currentPassword" className="form-label fw-semibold">
                          Mot de passe actuel
                        </label>
                        <div className="input-group-icon">
                          <Lock className="input-icon" size={20} />
                          <input
                            type={showCurrentPassword ? 'text' : 'password'}
                            id="currentPassword"
                            name="currentPassword"
                            className="form-control form-control-glass ps-5 pe-5"
                            value={securityData.currentPassword}
                            onChange={handleSecurityChange}
                          />
                          <button
                            type="button"
                            className="input-icon-right"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          >
                            {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label fw-semibold">
                          Nouveau mot de passe
                        </label>
                        <div className="input-group-icon">
                          <Lock className="input-icon" size={20} />
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            id="newPassword"
                            name="newPassword"
                            className="form-control form-control-glass ps-5 pe-5"
                            value={securityData.newPassword}
                            onChange={handleSecurityChange}
                          />
                          <button
                            type="button"
                            className="input-icon-right"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                        <small className="text-theme-secondary">
                          Minimum 8 caractères, incluant majuscules, minuscules et chiffres
                        </small>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label fw-semibold">
                          Confirmer le nouveau mot de passe
                        </label>
                        <div className="input-group-icon">
                          <Lock className="input-icon" size={20} />
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-control form-control-glass ps-5 pe-5"
                            value={securityData.confirmPassword}
                            onChange={handleSecurityChange}
                          />
                          <button
                            type="button"
                            className="input-icon-right"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Authentification à deux facteurs */}
                    <div className="mb-4 pb-4 border-bottom">
                      <h6 className="fw-semibold text-theme-primary mb-3">Authentification à deux facteurs (2FA)</h6>
                      <div className="d-flex align-items-center justify-content-between p-3 rounded" style={{ background: 'rgba(188, 194, 243, 0.1)' }}>
                        <div className="d-flex align-items-center gap-3">
                          <Shield size={24} className="text-brand" />
                          <div>
                            <p className="mb-0 fw-semibold">Activez la 2FA pour plus de sécurité</p>
                            <small className="text-theme-secondary">
                              Protégez votre compte avec une couche de sécurité supplémentaire
                            </small>
                          </div>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="enable2FA"
                            name="enable2FA"
                            checked={securityData.enable2FA}
                            onChange={handleSecurityChange}
                            style={{ width: '3rem', height: '1.5rem' }}
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-brand">
                      <Save size={18} className="me-2" />
                      Enregistrer les modifications
                    </button>
                  </form>
                </div>
              )}

              {/* Section Notifications */}
              {activeSection === 'notifications' && (
                <div className="settings-section">
                  <h3 className="h5 fw-bold text-theme-primary mb-4">Préférences de notifications</h3>
                  <form onSubmit={handleSaveNotifications}>
                    <p className="text-theme-secondary mb-4">
                      Choisissez les notifications que vous souhaitez recevoir par email
                    </p>

                    <div className="notification-options">
                      <div className="notification-item">
                        <div>
                          <p className="mb-1 fw-semibold">Mises à jour du projet</p>
                          <small className="text-theme-secondary">
                            Recevoir des notifications sur l'avancement de vos projets
                          </small>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="emailProjectUpdates"
                            name="emailProjectUpdates"
                            checked={notificationData.emailProjectUpdates}
                            onChange={handleNotificationChange}
                          />
                        </div>
                      </div>

                      <div className="notification-item">
                        <div>
                          <p className="mb-1 fw-semibold">Nouveaux documents</p>
                          <small className="text-theme-secondary">
                            Être averti lorsque de nouveaux documents sont disponibles
                          </small>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="emailNewDocuments"
                            name="emailNewDocuments"
                            checked={notificationData.emailNewDocuments}
                            onChange={handleNotificationChange}
                          />
                        </div>
                      </div>

                      <div className="notification-item">
                        <div>
                          <p className="mb-1 fw-semibold">Messages de l'équipe</p>
                          <small className="text-theme-secondary">
                            Recevoir les messages de votre équipe dédiée
                          </small>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="emailTeamMessages"
                            name="emailTeamMessages"
                            checked={notificationData.emailTeamMessages}
                            onChange={handleNotificationChange}
                          />
                        </div>
                      </div>

                      <div className="notification-item">
                        <div>
                          <p className="mb-1 fw-semibold">Rapport hebdomadaire</p>
                          <small className="text-theme-secondary">
                            Recevoir un résumé hebdomadaire de l'activité
                          </small>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="emailWeeklyReport"
                            name="emailWeeklyReport"
                            checked={notificationData.emailWeeklyReport}
                            onChange={handleNotificationChange}
                          />
                        </div>
                      </div>

                      <div className="notification-item">
                        <div>
                          <p className="mb-1 fw-semibold">Communications marketing</p>
                          <small className="text-theme-secondary">
                            Recevoir des nouvelles, conseils et offres promotionnelles
                          </small>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="emailMarketing"
                            name="emailMarketing"
                            checked={notificationData.emailMarketing}
                            onChange={handleNotificationChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-top">
                      <button type="submit" className="btn btn-brand">
                        <Save size={18} className="me-2" />
                        Enregistrer les préférences
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Section Préférences */}
              {activeSection === 'preferences' && (
                <div className="settings-section">
                  <h3 className="h5 fw-bold text-theme-primary mb-4">Préférences générales</h3>
                  <form onSubmit={handleSavePreferences}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label htmlFor="language" className="form-label fw-semibold">
                          Langue
                        </label>
                        <select
                          id="language"
                          name="language"
                          className="form-select form-control-glass"
                          value={preferencesData.language}
                          onChange={handlePreferencesChange}
                        >
                          <option value="fr">Français</option>
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="timezone" className="form-label fw-semibold">
                          Fuseau horaire
                        </label>
                        <select
                          id="timezone"
                          name="timezone"
                          className="form-select form-control-glass"
                          value={preferencesData.timezone}
                          onChange={handlePreferencesChange}
                        >
                          <option value="Europe/Paris">Europe/Paris (GMT+1)</option>
                          <option value="Europe/London">Europe/London (GMT+0)</option>
                          <option value="America/New_York">America/New York (GMT-5)</option>
                          <option value="America/Los_Angeles">America/Los Angeles (GMT-8)</option>
                          <option value="Asia/Tokyo">Asia/Tokyo (GMT+9)</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="dateFormat" className="form-label fw-semibold">
                          Format de date
                        </label>
                        <select
                          id="dateFormat"
                          name="dateFormat"
                          className="form-select form-control-glass"
                          value={preferencesData.dateFormat}
                          onChange={handlePreferencesChange}
                        >
                          <option value="DD/MM/YYYY">DD/MM/YYYY (25/12/2025)</option>
                          <option value="MM/DD/YYYY">MM/DD/YYYY (12/25/2025)</option>
                          <option value="YYYY-MM-DD">YYYY-MM-DD (2025-12-25)</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-top">
                      <button type="submit" className="btn btn-brand">
                        <Save size={18} className="me-2" />
                        Enregistrer les préférences
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Section Facturation */}
              {activeSection === 'billing' && (
                <div className="settings-section">
                  <h3 className="h5 fw-bold text-theme-primary mb-4">Informations de facturation</h3>
                  <form onSubmit={handleSaveBilling}>
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="address" className="form-label fw-semibold">
                          Adresse
                        </label>
                        <div className="input-group-icon">
                          <MapPin className="input-icon" size={20} />
                          <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control form-control-glass ps-5"
                            value={billingData.address}
                            onChange={handleBillingChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="city" className="form-label fw-semibold">
                          Ville
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="form-control form-control-glass"
                          value={billingData.city}
                          onChange={handleBillingChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="postalCode" className="form-label fw-semibold">
                          Code postal
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          className="form-control form-control-glass"
                          value={billingData.postalCode}
                          onChange={handleBillingChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="country" className="form-label fw-semibold">
                          Pays
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          className="form-control form-control-glass"
                          value={billingData.country}
                          onChange={handleBillingChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="vatNumber" className="form-label fw-semibold">
                          Numéro de TVA
                        </label>
                        <input
                          type="text"
                          id="vatNumber"
                          name="vatNumber"
                          className="form-control form-control-glass"
                          value={billingData.vatNumber}
                          onChange={handleBillingChange}
                        />
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-top">
                      <button type="submit" className="btn btn-brand">
                        <Save size={18} className="me-2" />
                        Enregistrer les informations
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
