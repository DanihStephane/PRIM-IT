import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, User } from 'lucide-react';
import Logo from '../assets/images/logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import AnimatedButton from './AnimatedButton';
import Imgia from '../assets/images/ia.png';


const Header: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const navigation = [
    { path: '/about', label: 'nav.aboutUs' },
    { path: '/services', label: 'nav.services' },
    { path: '/solutions', label: 'nav.solutions' },
    { path: '/contact', label: 'nav.contact' }
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header className={`site-header border-0 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container position-relative p-0-mobile">
        <span className="lg-deco"></span>
        <div className="col-lg-8 ms-auto w-100-1200">
        <nav className="navbar navbar-expand-lg px-3 py-2 position-relative">
          <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
            <img src={Logo} alt="Primices Intelligence" className="brand-logo img-fluid" />
          </Link>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label="Basculer la navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="toggler-bar" />
            <span className="toggler-bar" />
            <span className="toggler-bar" />
          </button>

          <div
            id="primary-navigation"
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          >
            <ul className="navbar-nav ms-lg-auto align-items-lg-center gap-lg-3">
              {navigation.map(({ path, label }) => (
                <li className="nav-item" key={path}>
                  <Link
                    to={path}
                    className={`nav-link ${isActive(path) ? 'active fw-semibold' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(label)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-2 ms-lg-4 mt-3 mt-lg-0">
              <Globe size={18} className="text-brand" />
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary dropdown-toggle"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language === 'fr' ? 'FR' : 'EN'}
                </button>
                <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end" aria-labelledby="languageDropdown">
                  <li>
                    <button
                      type="button"
                      onClick={() => setLanguage('fr')}
                      className={`dropdown-item ${language === 'fr' ? 'active' : ''}`}
                    >
                      <span className="fi fi-fr"></span> Français
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setLanguage('en')}
                      className={`dropdown-item ${language === 'en' ? 'active' : ''}`}
                    >
                      {/* https://flagicons.lipis.dev/ liste des icone flag*/}
                      <span className="fi fi-gb-eng"></span> English
                    </button>
                  </li>
                </ul>
              </div>
              <Link
                to="/client/login"
                className="client-area-avatar ms-2"
                title={language === 'fr' ? 'Espace Client' : 'Client Area'}
              >
                <User size={20} />
              </Link>
            </div>
          </div>
        </nav>
        </div>
      </div>
    </header>
    <section className="section-padding banner pt-0 deco-l deco-r">
        <div className="container">
          <div className="row align-items-center gy-5 flex-revers-mobile">
            <div className="col-lg-7">
              <AnimatedSection animation="fadeInLeft">
                <span className="badge-soft mb-3">{t('home.whyChoose')}</span>
                <h1 className="hero-title mb-3">{t('home.hero.title')}</h1>
                <p className="hero-subtitle mb-4">{t('home.hero.subtitle')}</p>
                <AnimatedButton>{t('home.hero.cta')}</AnimatedButton>
              </AnimatedSection>
            </div>
            <div className="col-lg-5 text-center">
              <img src={Imgia} alt="IA" />
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
};

export default Header;