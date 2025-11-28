import React from 'react';
import { Settings } from 'lucide-react';
import { IoDiamondSharp } from "react-icons/io5";
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { useLanguage } from '../contexts/LanguageContext';
import { GiTechnoHeart } from "react-icons/gi";

const About: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    { name: 'Sarah Martin', role: 'CEO & Fondatrice', avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2' },
    { name: 'Marc Dubois', role: 'CTO & Architecte', avatar: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2' },
    { name: 'Julie Renard', role: 'Designer UI/UX', avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2' },
    { name: 'Thomas Leroy', role: 'Lead Developer IA', avatar: 'https://images.pexels.com/photos/4307678/pexels-photo-4307678.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2' }
  ];

  return (
    <div className="about-page">

      <section className="section-padding">
        <div className="container bg-deco center-r">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 mt-0">
              <AnimatedSection animation="fadeInLeft" className='border-default'>
                <h2 className="fw-bold text-theme-primary mb-3">{t('about.drivenByPurpose')}</h2>
                <p className="text-theme-secondary">
                  Chez Primices Intelligence, nous croyons que la technologie doit être au service de l'humain.
                  Notre mission est d'accompagner les entreprises dans leur transformation digitale en créant des solutions
                  web et IA innovantes, performantes et adaptées à leurs besoins réels. Nous combinons expertise technique,
                  créativité et engagement pour livrer des projets qui font la différence.
                </p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 mt-0 ">
              <div className="custome-liste-stat">
                <AnimatedSection animation="fadeInRight" delay={150} className="list-item-stat">
                  <div className="item-stat-card h-100 text-center">
                    <div className="text-theme-primary w-80">
                      <p>2019 <small>Création de l'agence</small></p>
                       <span className="transition"></span>
                    </div>
                    <div className="fill-secondary">
                      <IoDiamondSharp size={50} />
                    </div>
                    
                  </div>
                  <div className="item-stat-card h-100 text-center">
                    <div className="text-theme-primary w-80">
                      <p>2020 <small>Premiers projets IA</small></p>
                      <span className="transition"></span>
                    </div>
                    <div>
                      <Settings size={50} />
                    </div>
                  </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" delay={300} className=" list-item-stat list-item-stat-custome">
                  <div className="item-stat-card h-100 text-center">
                      <div className="text-theme-primary w-80">
                        <p>2023 <small>Expansion internationale</small></p>
                        <span className="transition"></span>
                      </div>
                      <div className="fill-primary -bm-2">
                        <MdOutlineSettingsInputAntenna size={50} />
                      </div>
                    </div> 
             </AnimatedSection>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding story">
        <div className="container bg-deco deco-r-bottom">
          <div className="row g-4">
            <div className="col-md-6">
              <AnimatedSection animation="fadeInUp" className='border-default h-100'>
                <FloatingCard className='bg-transparent'>
                  <h3 className="h5 fw-semibold text-theme-primary mb-3">{t('about.story')}</h3>
                  <p className="text-theme-secondary small mb-0">
                    Fondée en 2019, Primices Intelligence est née de la volonté de démocratiser l'accès aux technologies
                    de pointe. Nous avons débuté avec une petite équipe passionnée et un objectif clair : créer des solutions
                    digitales qui transforment réellement les entreprises. Aujourd'hui, nous accompagnons des dizaines de
                    clients dans leurs projets web et IA, avec toujours la même exigence de qualité et d'innovation.
                  </p>
                </FloatingCard>
              </AnimatedSection>
            </div>
            <div className="col-md-3">
              <AnimatedSection animation="fadeInUp" delay={150}className='border-default h-100' >
                <FloatingCard className="text-center bg-transparent">
                   <h3 className="h6 text-start fw-semibold text-theme-primary mb-3">{t('about.mission')}</h3>
                  <div className="mb-3">
                    <GiTechnoHeart size={55} />
                  </div>
                 
                  <p className="text-theme-secondary small mb-0">
                    Démocratiser l'accès aux technologies innovantes en créant des solutions sur mesure,
                    performantes et évolutives pour nos clients.
                  </p>
                </FloatingCard>
              </AnimatedSection>
            </div>
            <div className="col-md-3">
              <AnimatedSection animation="fadeInUp" delay={300} className='border-default h-100'>
                <FloatingCard className="text-center  bg-transparent">
                   <h3 className="h6 text-start fw-semibold text-theme-primary mb-3">{t('about.values')}</h3>
                  <div className="mb-3">
                    <GrTechnology size={55} />
                  </div>
                 
                  <p className="text-theme-secondary small mb-0">
                    Excellence, innovation, transparence et engagement envers la réussite de chaque projet client.
                  </p>
                </FloatingCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-deco top-left-2 mx-90'>
      <div className="section-padding pt-3 bg-team position-relative container">
        {/* <div className="blur position-absolute z-1"></div> */}
        <div className="container border-content position-relative z-2 ">
          <div className="row g-4 p-4">
            {teamMembers.map((member, index) => (
              <div className="col-6 col-md-3" key={index}>
                <AnimatedSection animation="fadeInUp" delay={index * 120}>
                  <div className="team-card">
                    <div className="team-avatar" style={{ borderColor: index % 2 === 0 ? '#66BEEF' : '#e065c7' }}>
                      <img src={member.avatar} alt={member.name} className="w-100 h-100 object-fit-cover" />
                    </div>
                    <h3 className="fw-semibold text-theme-primary">{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default About;

