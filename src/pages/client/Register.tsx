import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Building2, Phone, Upload, CheckCircle, Eye, EyeOff } from 'lucide-react';
import Logo from '../../assets/images/logo.png';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Étape 1 - Définition du mot de passe
    password: '',
    confirmPassword: '',
    // Étape 2 - Profil entreprise
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    logo: null as File | null,
    // Étape 3 - Facturation
    billingAddress: '',
    billingCity: '',
    billingPostalCode: '',
    billingCountry: '',
    // Étape 4 - Acceptation
    acceptTerms: false,
    acceptNDA: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: target.files ? target.files[0] : null
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation - En mode statique, on redirige vers le login
    navigate('/client/login');
  };

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <div className="client-register-page min-vh-100">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            {/* Header */}
            <div className="text-center mb-5">
              <Link to="/" className="d-inline-block mb-4 client-logo">
                <img src={Logo} alt="Primices Intelligence" style={{ maxWidth: '200px', background: 'transparent' }} />
              </Link>
              <h1 className="h3 fw-bold text-theme-primary mb-2">Activation de votre compte</h1>
              <p className="text-theme-secondary">Finalisez votre dossier client en quelques étapes</p>
            </div>

            {/* Progress Bar */}
            <div className="progress-container mb-5">
              <div className="progress-bar-custom">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="progress-steps d-flex justify-content-between mt-3">
                <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
                  <div className="step-circle">{currentStep > 1 ? <CheckCircle size={20} /> : '1'}</div>
                  <span className="step-label d-none d-md-block">Mot de passe</span>
                </div>
                <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
                  <div className="step-circle">{currentStep > 2 ? <CheckCircle size={20} /> : '2'}</div>
                  <span className="step-label d-none d-md-block">Profil</span>
                </div>
                <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
                  <div className="step-circle">{currentStep > 3 ? <CheckCircle size={20} /> : '3'}</div>
                  <span className="step-label d-none d-md-block">Facturation</span>
                </div>
                <div className={`progress-step ${currentStep >= 4 ? 'active' : ''}`}>
                  <div className="step-circle">4</div>
                  <span className="step-label d-none d-md-block">Validation</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="glass-form-card p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                {/* Étape 1 - Définition du mot de passe */}
                {currentStep === 1 && (
                  <div className="step-content">
                    <h2 className="h4 fw-bold text-theme-primary mb-4">Définissez votre mot de passe</h2>

                    <div className="mb-4">
                      <label htmlFor="password" className="form-label fw-semibold">
                        Nouveau mot de passe
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
                      <small className="text-theme-secondary">
                        Minimum 8 caractères, incluant majuscules, minuscules et chiffres
                      </small>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="form-label fw-semibold">
                        Confirmer le mot de passe
                      </label>
                      <div className="input-group-icon">
                        <Lock className="input-icon" size={20} />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          id="confirmPassword"
                          name="confirmPassword"
                          className="form-control form-control-glass ps-5 pe-5"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
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
                )}

                {/* Étape 2 - Profil entreprise */}
                {currentStep === 2 && (
                  <div className="step-content">
                    <h2 className="h4 fw-bold text-theme-primary mb-4">Complétez votre profil</h2>

                    <div className="mb-4">
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
                          placeholder="Votre Entreprise SAS"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="contactName" className="form-label fw-semibold">
                        Contact technique principal
                      </label>
                      <div className="input-group-icon">
                        <User className="input-icon" size={20} />
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          className="form-control form-control-glass ps-5"
                          placeholder="Jean Dupont"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email professionnel
                      </label>
                      <div className="input-group-icon">
                        <Mail className="input-icon" size={20} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-glass ps-5"
                          placeholder="contact@entreprise.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
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
                          placeholder="+33 1 23 45 67 89"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="logo" className="form-label fw-semibold">
                        Logo de l'entreprise (optionnel)
                      </label>
                      <div className="file-upload-area">
                        <input
                          type="file"
                          id="logo"
                          name="logo"
                          className="file-input"
                          accept="image/*"
                          onChange={handleChange}
                        />
                        <label htmlFor="logo" className="file-upload-label">
                          <Upload size={24} className="mb-2" />
                          <span className="d-block fw-semibold">
                            {formData.logo ? formData.logo.name : 'Cliquez pour télécharger'}
                          </span>
                          <small className="text-theme-secondary">PNG, JPG ou SVG (Max. 2MB)</small>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 3 - Facturation */}
                {currentStep === 3 && (
                  <div className="step-content">
                    <h2 className="h4 fw-bold text-theme-primary mb-4">Adresse de facturation</h2>

                    <div className="mb-4">
                      <label htmlFor="billingAddress" className="form-label fw-semibold">
                        Adresse
                      </label>
                      <textarea
                        id="billingAddress"
                        name="billingAddress"
                        className="form-control form-control-glass"
                        rows={3}
                        placeholder="123 Avenue des Champs-Élysées"
                        value={formData.billingAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="billingCity" className="form-label fw-semibold">
                          Ville
                        </label>
                        <input
                          type="text"
                          id="billingCity"
                          name="billingCity"
                          className="form-control form-control-glass"
                          placeholder="Paris"
                          value={formData.billingCity}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label htmlFor="billingPostalCode" className="form-label fw-semibold">
                          Code postal
                        </label>
                        <input
                          type="text"
                          id="billingPostalCode"
                          name="billingPostalCode"
                          className="form-control form-control-glass"
                          placeholder="75008"
                          value={formData.billingPostalCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="billingCountry" className="form-label fw-semibold">
                        Pays
                      </label>
                      <input
                        type="text"
                        id="billingCountry"
                        name="billingCountry"
                        className="form-control form-control-glass"
                        placeholder="France"
                        value={formData.billingCountry}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Étape 4 - Validation */}
                {currentStep === 4 && (
                  <div className="step-content">
                    <h2 className="h4 fw-bold text-theme-primary mb-4">Signature légale</h2>

                    <div className="legal-section mb-4 p-4">
                      <div className="form-check mb-3">
                        <input
                          type="checkbox"
                          id="acceptTerms"
                          name="acceptTerms"
                          className="form-check-input"
                          checked={formData.acceptTerms}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="acceptTerms" className="form-check-label">
                          J'accepte les{' '}
                          <a href="#" className="text-brand fw-semibold">
                            Conditions Générales de Vente (CGV)
                          </a>
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="acceptNDA"
                          name="acceptNDA"
                          className="form-check-input"
                          checked={formData.acceptNDA}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="acceptNDA" className="form-check-label">
                          J'accepte l'{' '}
                          <a href="#" className="text-brand fw-semibold">
                            Accord de Confidentialité (NDA)
                          </a>
                        </label>
                      </div>
                    </div>

                    <div className="alert alert-info-custom d-flex align-items-start gap-3">
                      <CheckCircle size={24} className="text-brand flex-shrink-0 mt-1" />
                      <div>
                        <h6 className="fw-bold mb-1">Presque terminé !</h6>
                        <p className="mb-0 small">
                          En validant, vous aurez accès à votre espace client personnalisé et pourrez suivre
                          l'avancement de vos projets en temps réel.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between mt-5 pt-4 border-top">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="btn btn-outline-brand px-4"
                    >
                      ← Précédent
                    </button>
                  )}
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn btn-brand px-4 ms-auto"
                    >
                      Suivant →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-brand px-4 ms-auto"
                    >
                      Activer mon compte
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="text-theme-secondary">
                Vous avez déjà un compte ?{' '}
                <Link to="/client/login" className="text-brand fw-semibold text-decoration-none">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
