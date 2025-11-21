import React from 'react';
import { Settings, Fingerprint, Cpu, BarChart3, Shield, Cloud } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { FaLink } from "react-icons/fa6";

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.webDev'),
      icon: <Settings size={24} />,
      features: ['Storybrand Wireframe', 'Authentic Brand Design', 'Modern Web Applications'],
      descriptions: [
        'Develop ux from stakehave forensic places.',
        'Actionum ex leur French desixisantri demand places.'
      ],
      gradient: 'linear-gradient(135deg, #66BEEF, #BCC2F3)'
    },
    {
      title: t('services.aiSolutions'),
      icon: <Fingerprint size={24} />,
      features: ['Intelligent Systems', 'Seamless AI', 'Modern Manufacturing'],
      descriptions: [
        'Lorem ipsum dolor consectetur ui od non consecutive adipiscing dolor.',
        'Lorem ipsum dolor consectetur amet et adipiscing lorem-meri esso augal.'
      ],
      gradient: 'linear-gradient(135deg, #BCC2F3, #9AA5F5)'
    },
    {
      title: 'Artificial Intelligence Solutions',
      icon: <Cpu size={24} />,
      features: ['Storyboards Develop', 'Mopenmented Develop'],
      descriptions: [
        'Crastro Ippsum dolor consectetur time most talis at lorem & claris achvoltaique ligendvogue.',
        'Exeum ipsums doloris reactivions ranvoci sus als sunt quia inciduut dolor strent fanpourbisue.'
      ],
      gradient: 'linear-gradient(135deg, #9AA5F5, #66BEEF)'
    },
    {
      title: 'Digital Transformation',
      subtitle: 'Data Analytics & Machine Learning',
      icon: <BarChart3 size={24} />,
      features: ['Cloud Services', 'Cybersecurity'],
      descriptions: [
        'Tersin ipsim dolor staurareseret sed adolceate derat posseste ai processe.',
        'Lorem ipsum doloris armoaatam tal vict debastur ai paceat loreanent procat.'
      ],
      gradient: 'linear-gradient(135deg, #66BEEF, #BCC2F3)'
    },
    {
      title: t('services.digitalTransformation'),
      icon: <Shield size={24} />,
      features: ['Cloud Services', 'Cybersecurity'],
      descriptions: [
        'Tefam ipsam dolor Stratewsa thrend ineasyetaysprem pollaritasom ad molesteres.',
        'Exeum ipsums doloris einmariqa ipsm solvevmement.'
      ],
      gradient: 'linear-gradient(135deg, #BCC2F3, #8DB7F9)'
    },
    {
      title: t('services.ongoingSupport'),
      icon: <Cloud size={24} />,
      features: ['Maintenance Updates', 'Scalability & Future-Proofing'],
      descriptions: [
        'Lorem ipsum dolor eu medam post nidnecessitaussa wezt femoumsssens.',
        'Lorem ipsm dulors at matteur vemt lemnaestment.'
      ],
      gradient: 'linear-gradient(135deg, #8DB7F9, #66BEEF)'
    }
  ];

  return (
    <div className="services-page">

      <section className="section-padding services bg-deco top-left-2 mx-90 deco-top-left2-none">
        <div className="container bg-deco center-r">
          <div className="row g-4 position-relative z-2">
            {services.map((service, index) => (
              <div className="col-md-6" key={service.title}>
                <AnimatedSection animation="fadeInUp" delay={index * 120} className="h-100">
                  <div className="service-card border-2-primary-lineaire">
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div>
                        <h3 className="h5 fw-semibold text-theme-primary mb-1">{service.title}</h3>
                        {service.subtitle && (
                          <p className="small text-theme-secondary mb-0">{service.subtitle}</p>
                        )}
                      </div>
                      <div className="service-icon" style={{ background: service.gradient }}>
                        {service.icon}
                      </div>
                    </div>

                    <ul className="list-unstyled gap-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="d-flex align-items-center gap-2">
                          <FaLink size={15} />
                          <span className="text-theme-secondary small">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="column-2">
                      {service.descriptions.map((desc, idx) => (
                        <p key={idx} className="text-theme-secondary small mb-0">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

