import React from 'react';
import Chrono from './Chrono';
import ImgPresent from "../assets/images/presente.png"
import technoIa from "../assets/images/techno-ia.jpg"

interface ModalChronoProps {
  open: boolean;
  onClose: () => void;
}

const ModalChrono: React.FC<ModalChronoProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal d-block modal-lg" tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content position-relative">
            <button type="button" className="btn p-0 cursor-pointer btn-fermer" onClick={onClose}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="14" fill="white" fillOpacity="0.55"/>
              <path d="M18.4897 10.4004L15.0229 13.8672L18.4897 17.334L17.3341 18.4896L13.8673 15.0228L10.4005 18.4896L9.24487 17.334L12.7117 13.8672L9.24487 10.4004L10.4005 9.2448L13.8673 12.7116L17.3341 9.2448L18.4897 10.4004Z" fill="black"/>
              </svg>
            </button>
            <div className="modal-body text-center p-0">
                <div className="row">
                  <div className="col-lg-6 p-4">
                    <div className="img w-100 ">
                      <img src={ImgPresent} alt="" className='mx-auto d-block' />
                    </div>
                    <h5 className="modal-title">The Ultimate Guide to AI-Powered Web Development</h5>
                    <p>Unlock smarter, faster, and more scalable digital solutions with practical insights you can apply immediately.</p>
                    <Chrono />
                    <form action="">
                      <div className="newsletter-sub">
                        <input type="text" placeholder='Enter your email address' className='form-control'/>
                        <button type='submit' className='btn btn-brand'>Get the gifts</button>
                      </div>                
                    
                    </form>
                  </div>
                  <div className="col-lg-6 d-none-mob ">
                    <div className="img techno-ia h-100">
                      <img src={technoIa} alt="techno-ia" className='w-100 h-100' />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalChrono;
