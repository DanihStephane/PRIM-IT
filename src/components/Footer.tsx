import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='position-relative z-2 '>
      <div className="container deco-b-l">
        <div className="row align-items-center gy-4 border-footer">

          <div className="col-md-4 d-flex m-0 sociaux">
            <button className="btn-social" aria-label="LinkedIn">
              <Linkedin size={24} />
            </button>
            <button className="btn-social" aria-label="Twitter">
              <Twitter size={24} />
            </button>
            <button className="btn-social" aria-label="Instagram">
              <Instagram size={24} />
            </button>
          </div>

          <div className="col-md-8 m-0">
            <nav className="list-menu text-theme-secondary">
              <Link to="/" >Mentions légales</Link>
              <Link to="/" >Cookies</Link>
              <Link to="/" >Terms</Link>
              <Link to="/" >Politiques</Link>
               <Link to="/" >Privacy Policy</Link>
            </nav>
          </div>
        </div>

        <div className="mt-4 pb-4 pt-3 text-center small text-theme-secondary">
          <p className="mb-0">© 2025 Primices Intelligence. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;