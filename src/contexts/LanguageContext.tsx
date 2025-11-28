import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Navigation
  'nav.aboutUs': { fr: 'À Propos', en: 'About Us' },
  'nav.services': { fr: 'Services', en: 'Services' },
  'nav.solutions': { fr: 'Solutions', en: 'Solutions' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },

  // Home Page
  'home.hero.title': { fr: 'Transformez Votre Vision en Réalité Digitale', en: 'Transform Your Vision into Digital Reality' },
  'home.hero.subtitle': { fr: 'Nous concevons des solutions web et IA intelligentes, sécurisées et ultra-rapides qui propulsent votre entreprise vers l\'avenir. De l\'idée à la mise en production, nous créons l\'innovation qui fait la différence.', en: 'We design intelligent, secure, and lightning-fast web and AI solutions that propel your business into the future. From concept to deployment, we create the innovation that makes the difference.' },
  'home.hero.cta': { fr: 'Démarrer Votre Projet', en: 'Start Your Project' },
  'home.whyChoose': { fr: 'Pourquoi Choisir', en: 'Why Choose' },
  'home.expertise': { fr: 'Expertise Technique', en: 'Technical Expertise' },
  'home.innovation': { fr: 'Innovation Continue', en: 'Continuous Innovation' },
  'home.support': { fr: 'Support Dédié', en: 'Dedicated Support' },
  'home.process': { fr: 'Notre Processus', en: 'Our Process' },
  'home.discover': { fr: 'Découvrir & Analyser', en: 'Discover & Analyze' },
  'home.design': { fr: 'Concevoir & Développer', en: 'Design & Develop' },
  'home.deploy': { fr: 'Déployer & Intégrer', en: 'Deploy & Integrate' },
  'home.startJourney': { fr: 'Commencez Votre Parcours IA', en: 'Start Your AI Journey' },
  'home.form.name': { fr: 'Nom', en: 'Name' },
  'home.form.email': { fr: 'Email', en: 'Email' },
  'home.form.company': { fr: 'Entreprise', en: 'Company' },
  'home.form.details': { fr: 'Détails du Projet', en: 'Project Details' },
  'home.form.submit': { fr: 'Commencer Votre Parcours IA', en: 'Start Your AI Journey' },

  // About Page
  'about.hero.title': { fr: 'Façonner l\'Avenir, Ensemble', en: 'Shaping the Future, Together' },
  'about.hero.subtitle': { fr: 'Notre Parcours dans les Solutions Web', en: 'Our Journey in Web Solutions' },
  'about.drivenByPurpose': { fr: 'Guidés par un Objectif', en: 'Driven by Purpose' },
  'about.story': { fr: 'Notre Histoire', en: 'Our Story' },
  'about.mission': { fr: 'Notre Mission', en: 'Our Mission' },
  'about.values': { fr: 'Mission & Valeurs', en: 'Mission & Values' },

  // Services Page
  'services.hero.title': { fr: 'Nos Solutions pour un Avenir Numérique', en: 'Our Solutions for a Digital Future' },
  'services.hero.subtitle': { fr: 'Innover. Développer. Prospérer.', en: 'Innovate. Develop. Thrive.' },
  'services.hero.cta': { fr: 'Contacter Notre Équipe', en: 'Contact Our Team' },
  'services.webDev': { fr: 'Développement Web & Design', en: 'Web Development & Design' },
  'services.aiSolutions': { fr: 'Solutions d\'Intelligence Artificielle', en: 'Artificial Intelligence Solutions' },
  'services.digitalTransformation': { fr: 'Transformation Numérique', en: 'Digital Transformation' },
  'services.ongoingSupport': { fr: 'Support Continu & Évolution', en: 'Ongoing Support & Evolution' },

  // Solutions Page
  'solutions.ecommerce': { fr: 'Solutions E-commerce', en: 'E-commerce Solutions' },
  'solutions.saas': { fr: 'Plateformes SaaS', en: 'SaaS Platforms' },
  'solutions.chatbot': { fr: 'Chatbots Intelligents', en: 'Intelligent Chatbots' },
  'solutions.analytics': { fr: 'Analyse de Données & BI', en: 'Data Analytics & BI' },
  'solutions.erp': { fr: 'Systèmes de Gestion ERP', en: 'ERP Management Systems' },
  'solutions.aiCustom': { fr: 'IA Sur Mesure', en: 'Custom AI Solutions' },

  // Contact Page
  'contact.hero.title': { fr: 'Construisons Quelque Chose de Formidable Ensemble', en: 'Let\'s Build Something Great Together' },
  'contact.hero.cta': { fr: 'Démarrer Votre Projet', en: 'Start Your Project' },
  'contact.teamTitle': { fr: 'Notre Équipe Dédiée', en: 'Our Dedicated Team' },
  'contact.form.fullName': { fr: 'Nom Complet', en: 'Full Name' },
  'contact.form.email': { fr: 'Email', en: 'Email' },
  'contact.form.phone': { fr: 'Téléphone', en: 'Phone Address' },
  'contact.form.company': { fr: 'Organisation', en: 'Company Organization' },
  'contact.form.subject': { fr: 'Sujet d\'Intérêt', en: 'Subject of Interest' },
  'contact.form.message': { fr: 'Votre Message', en: 'Your Message' },
  'contact.form.send': { fr: 'Envoyer le Message', en: 'Send Message' },
  'contact.info.email': { fr: 'Email', en: 'Email' },
  'contact.info.office': { fr: 'Bureau', en: 'Office' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};