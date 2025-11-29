import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import Logo from '../../assets/images/logo.png';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation - En mode statique, on redirige directement vers le dashboard
    navigate('/client/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="client-login-page min-vh-100 d-flex">
      {/* Section Gauche - Illustration */}
      <div className="login-visual-section d-none d-lg-flex flex-column justify-content-center align-items-center p-5">
        <div className="brain-network-container mb-4">
          <div className="brain-network-glow"></div>
          <div className="brain-network is-animated">
            <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
              {/* Liens du réseau */}
              <line className="brain-link" x1="40" y1="40" x2="100" y2="75" stroke="url(#gradient1)" strokeWidth="2" />
              <line className="brain-link" x1="160" y1="40" x2="100" y2="75" stroke="url(#gradient1)" strokeWidth="2" />
              <line className="brain-link" x1="40" y1="110" x2="100" y2="75" stroke="url(#gradient1)" strokeWidth="2" />
              <line className="brain-link" x1="160" y1="110" x2="100" y2="75" stroke="url(#gradient1)" strokeWidth="2" />
              <line className="brain-link" x1="40" y1="40" x2="40" y2="110" stroke="url(#gradient1)" strokeWidth="1.5" />
              <line className="brain-link" x1="160" y1="40" x2="160" y2="110" stroke="url(#gradient1)" strokeWidth="1.5" />

              {/* Nœuds du réseau */}
              <circle className="brain-node" cx="40" cy="40" r="8" fill="url(#gradient2)" />
              <circle className="brain-node" cx="160" cy="40" r="8" fill="url(#gradient2)" />
              <circle className="brain-node" cx="40" cy="110" r="8" fill="url(#gradient2)" />
              <circle className="brain-node" cx="160" cy="110" r="8" fill="url(#gradient2)" />
              <circle className="brain-node" cx="100" cy="75" r="12" fill="url(#gradient3)" />

              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0095e6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#bf8ced" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8dd4fb" />
                  <stop offset="100%" stopColor="#0095e6" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bf8ced" />
                  <stop offset="100%" stopColor="#0095e6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <h2 className="text-white fw-bold mb-3">Bienvenue dans votre espace client</h2>
        <p className="text-white-50 text-center px-4">
          Suivez l'avancement de vos projets en temps réel et accédez à tous vos documents
        </p>
      </div>

      {/* Section Droite - Formulaire */}
      <div className="login-form-section d-flex flex-column justify-content-center align-items-center p-4 p-md-5">
        <div className="login-form-container w-100">
          <div className="text-center mb-4">
            <Link to="/" className="d-inline-block mb-3 client-logo">
              <img src={Logo} alt="Primices Intelligence" style={{ maxWidth: '200px', background: 'transparent' }} />
            </Link>
            <h1 className="h3 fw-bold text-theme-primary mb-2">Connexion Client</h1>
            <p className="text-theme-secondary">Accédez à votre espace personnel sécurisé</p>
          </div>

          <div className="glass-form-card p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-semibold text-theme-primary">
                  Email professionnel
                </label>
                <div className="input-group-icon">
                  <Mail className="input-icon" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-glass ps-5"
                    placeholder="nom@entreprise.com"
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
              <div className="d-flex justify-content-between align-items-center mb-4">
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
                    Se souvenir de moi
                  </label>
                </div>
                <Link to="/client/forgot-password" className="text-brand text-decoration-none fw-semibold">
                  Mot de passe oublié ?
                </Link>
              </div>

              {/* Bouton de connexion */}
              <button type="submit" className="btn btn-brand w-100 py-3 mb-4">
                Se connecter
              </button>

              {/* SSO Options */}
              <div className="position-relative mb-4">
                <hr className="my-4" />
                <span className="divider-text px-3 bg-white text-theme-secondary">Ou se connecter avec</span>
              </div>

              <div className="row g-3">
                <div className="col-6">
                  <button type="button" className="btn btn-outline-brand w-100 py-2">
                    <svg className="me-2" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                      <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853"/>
                      <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                      <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-outline-brand w-100 py-2">
                    <svg className="me-2" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M16.67 0H1.33C.597 0 0 .597 0 1.33v15.34C0 17.403.597 18 1.33 18h15.34c.733 0 1.33-.597 1.33-1.33V1.33C18 .597 17.403 0 16.67 0zM5.339 15.337H2.667V6.75h2.672v8.587zM4.003 5.574a1.548 1.548 0 110-3.097 1.548 1.548 0 010 3.097zM15.338 15.337h-2.669V11.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H6.999V6.75h2.562v1.174h.037c.356-.676 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.71h.011z" fill="#0077B5"/>
                    </svg>
                    LinkedIn
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Sécurité Badge */}
          <div className="text-center mt-4">
            <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill security-badge">
              <ShieldCheck size={18} className="text-success" />
              <span className="text-theme-secondary small">Espace sécurisé SSL 256-bit</span>
            </div>
          </div>

          {/* Lien inscription */}
          <div className="text-center mt-4">
            <p className="text-theme-secondary mb-2">
              Vous n'avez pas encore de compte ?{' '}
              <Link to="/client/register" className="text-brand fw-semibold text-decoration-none">
                Activer mon compte
              </Link>
            </p>
          </div>

          {/* Lien retour */}
          <div className="text-center mt-3">
            <Link to="/" className="text-theme-secondary text-decoration-none">
              ← Retour au site principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
