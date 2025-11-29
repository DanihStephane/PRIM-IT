import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import Logo from '../../assets/images/logo.png';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mode statique - redirection directe vers le dashboard admin
    navigate('/admin/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="admin-login-page min-vh-100 d-flex align-items-center justify-content-center">
      <div className="admin-login-container">
        <div className="text-center mb-5">
          <img src={Logo} alt="Primices Intelligence" className="mb-4 client-logo" style={{ maxWidth: '200px', background: 'transparent' }} />
          <div className="admin-badge mb-3">
            <ShieldCheck size={24} className="text-warning" />
          </div>
          <h1 className="h3 fw-bold text-theme-primary mb-2">Administration</h1>
          <p className="text-theme-secondary">Accès réservé aux administrateurs</p>
        </div>

        <div className="glass-form-card p-4 p-md-5">
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-semibold text-theme-primary">
                Email administrateur
              </label>
              <div className="input-group-icon">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-glass ps-5"
                  placeholder="admin@primices.ai"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold text-theme-primary">
                Mot de passe
              </label>
              <div className="input-group-icon">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="form-control form-control-glass ps-5 pe-5"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="input-icon-right"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="form-check-input"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <label htmlFor="remember" className="form-check-label text-theme-secondary">
                  Rester connecté
                </label>
              </div>
            </div>

            {/* Bouton de connexion */}
            <button type="submit" className="btn btn-brand w-100 py-3">
              Accéder au back-office
            </button>
          </form>
        </div>

        {/* Sécurité Badge */}
        <div className="text-center mt-4">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill security-badge">
            <Lock size={16} className="text-warning" />
            <span className="text-theme-secondary small">Connexion sécurisée SSL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
