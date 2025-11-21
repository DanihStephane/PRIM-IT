import React, { useState } from 'react';
import { Settings, Cpu, Fingerprint } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';
import AnimatedButton from '../components/AnimatedButton';
import { useLanguage } from '../contexts/LanguageContext';
import { TbMessageCog } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";
import { TbCloudUpload } from "react-icons/tb";
import { PiCodeBold } from "react-icons/pi";
import Avatar1  from "../assets/images/pm.jpg";
import Avatar2 from "../assets/images/pf.jpg";
import ImgTech from "../assets/images/tech0.png";

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="home-page">
      

      <section className="section-padding process">
        <div className="container bg-deco center-r">
          <div className="row g-4">
            <div className="col-sm-6 col-lg-3 item">
              <AnimatedSection animation="fadeInUp" delay={0} className="h-100">
                <FloatingCard className="h-100">
                   <h3 className="h6 fw-semibold text-theme-primary mb-2">{t('home.whyChoose')}</h3>
                  <div className="feature-icon mb-3 border">
                    <TbMessageCog size={22} />
                  </div>
                 
                  <p className="text-theme-secondary small mb-0">
                    Vision webcam au lieu un advanced portent impares.
                  </p>
                </FloatingCard>
              </AnimatedSection>
            </div>

            <div className="col-sm-6 col-lg-3 item">
              <AnimatedSection animation="fadeInUp" delay={150} className="h-100">
                <FloatingCard className="h-100">
                   <h3 className="h6 fw-semibold text-theme-primary mb-2">{t('home.whyPriceless')}</h3>
                  <div className="feature-icon feature-icon-alt mb-3">
                    <Settings size={22} />
                  </div>
                  
                  <p className="text-theme-secondary small mb-0">
                    AI omnibus & fonctions, al specialise ai presis.
                  </p>
                </FloatingCard>
              </AnimatedSection>
            </div>

            <div className="col-sm-6 col-lg-3 item">
              <AnimatedSection animation="fadeInUp" delay={300} className="h-100">
                <FloatingCard className="h-100">
                  <h3 className="h6 fw-semibold text-theme-primary mb-2">{t('home.destleeIllitsei')}</h3>
                  <div className="feature-icon feature-icon-accent mb-3">
                    <Cpu size={22} />
                  </div>
                  
                  <p className="text-theme-secondary small mb-0">
                    EI Immer attract ai obetrinet locvati.
                  </p>
                </FloatingCard>
              </AnimatedSection>
            </div>

            <div className="col-sm-6 col-lg-3 item">
              <AnimatedSection animation="fadeInUp" delay={450} className="h-100">
                <FloatingCard className="h-100">
                   <h3 className="h6 fw-semibold text-theme-primary mb-2">{t('home.testReimmai')}</h3>
                  <div className="feature-icon mb-3">
                    <Fingerprint size={22} />
                  </div>
                  <p className="text-theme-secondary small mb-0">
                    Vision livrent sociétal ai tut tympanum italia keri tenaissant.
                  </p>
                </FloatingCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding ourProcess">
        <div className="container bg-deco deco-r-bottom">
           <div className="col-12">
              <AnimatedSection animation="fadeInUp">
                <h2 className="text-start fw-bold text-theme-primary mb-0">{t('home.process')}</h2>
              </AnimatedSection>
             
            </div>
            <div className="content-ourProcess">
              <div className="g-4 process-step">
                <div className="item">
                  <AnimatedSection animation="scaleIn">
                        <TfiSearch size={50} />
                      <h3 className="h6 fw-semibold text-theme-primary mb-2">{t('home.discover')}</h3>
                  </AnimatedSection>
                </div>
                <span className="transition"></span>
                <div className="item">
                  <AnimatedSection animation="scaleIn" delay={200}>
                        <TbCloudUpload size={60} />
                      <h3 className="h6 fw-semibold text-theme-primary mb-2">{t('home.design')}</h3>
                  </AnimatedSection>
                </div>
                <div className="eclipse-title">
                  <span className="transition"></span>
                </div>
                <div className="item">
                  <AnimatedSection animation="scaleIn" delay={350}>
                        <PiCodeBold size={50} />
                      <h3 className="h6 fw-semibold text-theme-primary mb-2">{t('home.deploy')}</h3>
                  </AnimatedSection>
                </div>
              </div>

              <div className="avis">
                  <AnimatedSection animation="fadeInLeft">
                     <div className="testimonial-card">
                        <div className="img">
                          <img src={Avatar1} alt="profile" />
                        </div>
                        <div className='desc'>
                          <p className="text-theme-secondary small mb-2">
                            Lorem ipsum at characteristicnise spoertedenuis steers tempate talar adipiscende.
                          </p>
                          <span className="small fw-semibold text-theme-primary">Client Review</span>
                        </div>
                      </div>
                  </AnimatedSection>
                    <AnimatedSection animation="fadeInRight" delay={200}>
                      <div className="testimonial-card">
                        <div className="img">
                          <img src={Avatar2} alt="profile" />
                        </div>
                        <div className='desc'>
                          <p className="text-theme-secondary small mb-2">
                            Lorem ipsum at characteristicnise spoertedenuis steers tempate talar adipiscende.
                          </p>
                          <span className="small fw-semibold text-theme-primary">Client Review</span>
                        </div>
                      </div>
                    </AnimatedSection>
                 
              </div>
          </div>
        </div>
      </section>

      <section className="section-padding formulaire bg-deco top-left-2 mx-90 ">
        <div className="container p-0 ">
         
          <div className="content border-content ">
            <div className="img">
              <img src={ImgTech} alt="" />
            </div>
             <AnimatedSection className='form' animation="scaleIn" delay={200}>
              <form onSubmit={handleSubmit} className="contact-form mx-auto">
                 <AnimatedSection animation="fadeInUp">
                  <h2 className="fw-bold text-theme-primary">{t('home.startJourney')}</h2>
                </AnimatedSection>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder={t('home.form.name')}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('home.form.email')}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={t('home.form.company')}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder=  {t('home.form.details')}
                      value={formData.details}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <AnimatedButton type="submit" className="mt-2">
                      {t('home.form.submit')}
                    </AnimatedButton>
                  </div>
                </div>
              </form>
          </AnimatedSection>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Home;

