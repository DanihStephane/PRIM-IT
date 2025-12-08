import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Veuillez entrer une adresse email valide');
      return;
    }

    // Rediriger vers la page d'inscription avec l'email
    navigate('/client/register', { state: { email } });
  };

  return (
    <footer className='pb-4'>
      <div className="container">
        <div className="row align-items-center gy-4 border-footer justify-content-between pt-4 pb-2 mx-mob-auto">
          <div className="col-md-auto mt-0">
            <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
            <img src={Logo} alt="Primices Intelligence" className="brand-logo img-fluid" />
          </Link>
          </div>
          

          <div className="col-lg-5 m-0">
            <nav className="list-menu text-theme-secondary">
              <Link to="/client/login" className="text-brand fw-semibold">Espace Client</Link>
              <Link to="/" >About US</Link>
              <Link to="/" >Services</Link>
              <Link to="/" >Solutions</Link>
            </nav>
          </div>
          <div className="col-md-auto m-0 newsletter">
            <div className="content">
              <form onSubmit={handleSubscribe} className="d-flex gap-2 align-items-center position-relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="S'abonner et s'inscrire"
                  className="form-control"
                  style={{ background: 'transparent' }}
                  required
                />
                <button
                  type="submit"
                  className="btn-dark"
                >
                  S'abonner
                </button>
                {message && (
                  <small className="text-danger position-absolute" style={{ bottom: '-20px', left: '0' }}>
                    {message}
                  </small>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-4 pb-4 pt-3 text-center small text-theme-secondary border-top">
            <div className='d-flex justify-content-between'>
              <div className="col-lg-auto m-0">
                <nav className="list-menu text-theme-secondary">
                  <Link to="/" >Primices Quiz</Link>
                  <Link to="/" >Locations</Link>
                </nav>
              </div>
              
               <div className="col-md-auto d-flex m-0 sociaux">
                    <button className="btn-socials" aria-label="LinkedIn">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.125 2.97217C3.36561 2.97217 2.75 3.58777 2.75 4.34717V18.0972C2.75 18.8565 3.36561 19.4722 4.125 19.4722H17.875C18.6344 19.4722 19.25 18.8565 19.25 18.0972V4.34717C19.25 3.58777 18.6344 2.97217 17.875 2.97217H4.125ZM7.8107 6.64133C7.81586 7.51789 7.15973 8.05801 6.38113 8.05414C5.64765 8.05027 5.00827 7.46633 5.01214 6.64262C5.01601 5.86789 5.62831 5.24527 6.42367 5.26332C7.23062 5.28137 7.81586 5.87305 7.8107 6.64133ZM11.2564 9.17045H8.9464H8.94511V17.017H11.3866V16.8339C11.3866 16.4857 11.3863 16.1373 11.386 15.7889C11.3853 14.8596 11.3844 13.9293 11.3892 13.0002C11.3905 12.7746 11.4008 12.5401 11.4588 12.3247C11.6766 11.5204 12.3998 11.0009 13.2068 11.1286C13.725 11.2097 14.0678 11.5101 14.2122 11.9987C14.3012 12.3041 14.3412 12.6328 14.345 12.9513C14.3555 13.9116 14.354 14.8719 14.3525 15.8323C14.352 16.1713 14.3514 16.5104 14.3514 16.8494V17.0157H16.8007V16.8275C16.8007 16.4132 16.8005 15.9989 16.8002 15.5847C16.7997 14.5493 16.7992 13.5139 16.8019 12.4782C16.8032 12.0102 16.753 11.5488 16.6382 11.0963C16.4668 10.4234 16.1123 9.86651 15.5361 9.46437C15.1275 9.17818 14.6789 8.99384 14.1774 8.97322C14.1203 8.97084 14.0628 8.96774 14.0049 8.96461C13.7485 8.95075 13.4879 8.93667 13.2428 8.98611C12.5416 9.12661 11.9255 9.44759 11.4601 10.0135C11.406 10.0784 11.3531 10.1443 11.2742 10.2426L11.2564 10.2649V9.17045ZM5.20817 17.0195H7.63805V9.17555H5.20817V17.0195Z" fill="black"/>
                      </svg>

                    </button>
                    <button className="btn-socials" aria-label="Twitter">
                      <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9948 0H15.5248L9.9973 6.21264L16.5 14.6666H11.4085L7.4205 9.53934L2.85746 14.6666H0.32582L6.23807 8.02154L0 0H5.22083L8.8256 4.68657L12.9948 0ZM12.1067 13.1774H13.5087L4.45904 1.41101H2.9546L12.1067 13.1774Z" fill="black"/>
                      </svg>

                    </button>
                    <button className="btn-socials" aria-label="youtube">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z" fill="black"/>
                      </svg>

                    </button>
                    <button className="btn-socials" aria-label="Instagram">
                     <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.333 2.75C6.11759 2.75027 4.95204 3.2332 4.09262 4.09262C3.2332 4.95204 2.75027 6.11759 2.75 7.333V14.667C2.75027 15.8824 3.2332 17.048 4.09262 17.9074C4.95204 18.7668 6.11759 19.2497 7.333 19.25H14.667C15.8824 19.2497 17.048 18.7668 17.9074 17.9074C18.7668 17.048 19.2497 15.8824 19.25 14.667V7.333C19.2497 6.11759 18.7668 4.95204 17.9074 4.09262C17.048 3.2332 15.8824 2.75027 14.667 2.75H7.333ZM16.5 4.583C16.6204 4.583 16.7397 4.60672 16.8509 4.6528C16.9622 4.69889 17.0633 4.76643 17.1484 4.85158C17.2336 4.93673 17.3011 5.03782 17.3472 5.14908C17.3933 5.26033 17.417 5.37958 17.417 5.5C17.417 5.62042 17.3933 5.73967 17.3472 5.85092C17.3011 5.96218 17.2336 6.06327 17.1484 6.14842C17.0633 6.23357 16.9622 6.30111 16.8509 6.3472C16.7397 6.39328 16.6204 6.417 16.5 6.417C16.2568 6.417 16.0236 6.32039 15.8516 6.14842C15.6796 5.97645 15.583 5.7432 15.583 5.5C15.583 5.2568 15.6796 5.02355 15.8516 4.85158C16.0236 4.67961 16.2568 4.583 16.5 4.583ZM11 6.417C11.6076 6.40809 12.2109 6.52008 12.7749 6.74646C13.3388 6.97283 13.8521 7.30908 14.2849 7.73563C14.7177 8.16219 15.0614 8.67054 15.296 9.23112C15.5305 9.79171 15.6513 10.3933 15.6512 11.001C15.6511 11.6087 15.5302 12.2103 15.2956 12.7708C15.0609 13.3313 14.7171 13.8396 14.2842 14.2661C13.8513 14.6925 13.3379 15.0287 12.7739 15.2549C12.21 15.4812 11.6066 15.593 10.999 15.584C9.79511 15.5661 8.6466 15.0752 7.80162 14.2175C6.95665 13.3598 6.48307 12.204 6.4832 11C6.48333 9.79598 6.95717 8.64035 7.80233 7.7828C8.64748 6.92525 9.7961 6.43465 11 6.417ZM11 8.25C10.2707 8.25 9.57118 8.53973 9.05546 9.05546C8.53973 9.57118 8.25 10.2707 8.25 11C8.25 11.7293 8.53973 12.4288 9.05546 12.9445C9.57118 13.4603 10.2707 13.75 11 13.75C11.7293 13.75 12.4288 13.4603 12.9445 12.9445C13.4603 12.4288 13.75 11.7293 13.75 11C13.75 10.2707 13.4603 9.57118 12.9445 9.05546C12.4288 8.53973 11.7293 8.25 11 8.25Z" fill="black"/>
                      </svg>
                    </button>
                    
                </div>
            </div>
        </div>
        <p className="mb-0 text-center text-black mb-5">© 2025 Primices Intelligence. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;