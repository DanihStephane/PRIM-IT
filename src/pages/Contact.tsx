import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedButton from '../components/AnimatedButton';
import { useLanguage } from '../contexts/LanguageContext';
import { GrServices } from "react-icons/gr";
const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">

      <section className="section-padding bg-deco top-left-2 mx-90 deco-top-left2-none">
        <div className="container">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-theme-primary mb-5">{t('contact.teamTitle')}</h2>
          </AnimatedSection>

          <div className="row g-5 align-items-start position-relative z-3 bg-deco center-r deco-blue">
            <div className="col-lg-7 deco-l deco-ligne">
              <AnimatedSection animation="fadeInLeft" delay={120}>
                <form onSubmit={handleSubmit} className="contact-form border-2-primary shadow-none">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder= {t('contact.form.fullName')}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder={t('contact.form.email')}
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder={t('contact.form.phone')}
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        id="company"
                        type="text"
                        name="company"
                        placeholder= {t('contact.form.company')}
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder={t('contact.form.subject')}
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label text-theme-secondary small text-uppercase">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 text-center">
                      <AnimatedButton type="submit" className="mt-2">
                        {t('contact.form.send')}
                      </AnimatedButton>
                    </div>
                  </div>
                </form>
              </AnimatedSection>
            </div>

            <div className="col-lg-5">
              <div className="d-flex flex-column gap-4 border-2-primary shadow-none p-3">
                <h3 className="h6 fw-semibold text-theme-primary mb-4">Want Batne Potorem</h3>
                <AnimatedSection animation="fadeInRight" delay={200}>
                  <div className="info-card bg-transparent border-0 info-card-adress p-0 m-0">
                    
                    <div className="row g-4 border-2-primary p-3 m-0">
                      <div className="col-sm-6 mt-0">

                        <div className="d-flex align-items-center gap-3 mb-2">
                          <div className="info-icon">
                            <Mail size={20} />
                          </div>
                           <h4 className="fw-semibold text-theme-primary mb-1">{t('contact.info.email')}</h4>
                          
                        </div>
                        <div className='desc'>
                            <p className="text-theme-secondary small mb-0">contact@prnelligence.com</p>
                        </div>
                      </div>
                      <div className="col-sm-6 border-left-primary mt-0">
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <div className="info-icon">
                            <GrServices size={20} />
                          </div>
                           <h4 className="fw-semibold text-theme-primary mb-1">Servicer</h4>
                        </div>
                         <div className='desc'>
                            <p className="text-theme-secondary small mb-0">
                              D'omiliens Haux Qilive
                              <br />
                              Gity Al 6790
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={320} className='info-card-adress'>
                  <div className="info-card p-0 bg-transparent border-0  border-2-primary p-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div className="info-icon">
                        <MapPin size={20} />
                      </div>
                      <h4 className="fw-semibold text-theme-primary mb-2">{t('contact.info.office')}</h4>
                      
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                        
                        <p className="text-theme-secondary small">
                          123 Tech Drive
                          <br />
                          Innovation City Al 6730
                        </p>
                        <div className="rounded-3 border border-secondary-subtle bg-light text-theme-secondary small py-4 text-center map">
                          <span>Map View</span>
                        </div>
                      </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
          <div className="clone-border-content">
            <div className="col-md-4 d-flex sociaux">
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
            <div className="border-content"></div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Contact;

