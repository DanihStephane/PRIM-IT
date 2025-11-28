import React from 'react';
import { ShoppingCart, Database, MessageSquare, BarChart2, Briefcase, Brain } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { FaLink } from "react-icons/fa6";

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t('solutions.ecommerce'),
      icon: <ShoppingCart size={24} />,
      features: ['Payment Integration', 'Inventory Management', 'Customer Portal'],
      descriptions: [
        'Complete e-commerce platforms with seamless payment processing and real-time inventory tracking.',
        'Custom shopping experiences with AI-powered recommendations and automated order fulfillment.'
      ],
      gradient: 'linear-gradient(135deg, #66BEEF, #BCC2F3)'
    },
    {
      title: t('solutions.saas'),
      icon: <Database size={24} />,
      features: ['Multi-tenant Architecture', 'Subscription Management', 'API Integration'],
      descriptions: [
        'Scalable SaaS platforms built with modern cloud infrastructure and robust security.',
        'Complete user management systems with billing, analytics, and custom integrations.'
      ],
      gradient: 'linear-gradient(135deg, #BCC2F3, #9AA5F5)'
    },
    {
      title: t('solutions.chatbot'),
      icon: <MessageSquare size={24} />,
      features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support'],
      descriptions: [
        'Intelligent chatbots powered by advanced AI to handle customer inquiries automatically.',
        'Seamless integration with existing systems and continuous learning from interactions.'
      ],
      gradient: 'linear-gradient(135deg, #9AA5F5, #66BEEF)'
    },
    {
      title: t('solutions.analytics'),
      icon: <BarChart2 size={24} />,
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports'],
      descriptions: [
        'Advanced data analytics platforms that transform raw data into actionable insights.',
        'Machine learning models for forecasting, trend analysis, and business intelligence.'
      ],
      gradient: 'linear-gradient(135deg, #66BEEF, #BCC2F3)'
    },
    {
      title: t('solutions.erp'),
      icon: <Briefcase size={24} />,
      features: ['Resource Planning', 'Process Automation', 'Workflow Management'],
      descriptions: [
        'Enterprise resource planning systems tailored to your business processes.',
        'Integrated solutions for finance, HR, supply chain, and operations management.'
      ],
      gradient: 'linear-gradient(135deg, #BCC2F3, #8DB7F9)'
    },
    {
      title: t('solutions.aiCustom'),
      icon: <Brain size={24} />,
      features: ['Computer Vision', 'Predictive Models', 'Custom AI Integration'],
      descriptions: [
        'Bespoke AI solutions including image recognition, natural language processing, and predictive analytics.',
        'Custom machine learning models trained on your data for specific business outcomes.'
      ],
      gradient: 'linear-gradient(135deg, #8DB7F9, #66BEEF)'
    }
  ];

  return (
    <div className="solutions-page">

      <section className="section-padding solutions bg-deco top-left-2 mx-90 deco-top-left2-none">
        <div className="container bg-deco center-r">
          <div className="row g-5 position-relative z-2">
            {solutions.map((solution, index) => (
              <div className="col-md-6" key={solution.title}>
                <AnimatedSection animation="fadeInUp" delay={index * 120} className="h-100">
                  <div className="service-card border-2-primary-lineaire">
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div>
                        <h3 className="h5 fw-semibold text-theme-primary mb-1">{solution.title}</h3>
                      </div>
                      <div className="service-icon" style={{ background: solution.gradient }}>
                        {solution.icon}
                      </div>
                    </div>

                    <ul className="list-unstyled mb-4">
                      {solution.features.map((feature) => (
                        <li key={feature} className="d-flex align-items-start gap-3">
                          <FaLink size={14} className="mt-1 flex-shrink-0" />
                          <span className="text-theme-secondary small">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="column-2">
                      {solution.descriptions.map((desc, idx) => (
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

export default Solutions;