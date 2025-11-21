'use client';

import { useTranslations } from 'next-intl';
import { Brain, Users, Target, Headphones, Search, Cloud, Code } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const t = useTranslations('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('hero.subtitle')}
            </p>
            <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              {t('hero.cta')}
            </button>
          </div>

          <div className="relative">
            <svg className="w-full h-auto" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00BCD4" />
                  <stop offset="100%" stopColor="#667eea" />
                </linearGradient>
              </defs>
              {/* Brain network visualization */}
              <circle cx="200" cy="200" r="120" fill="none" stroke="url(#brain-gradient)" strokeWidth="2" opacity="0.2" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="url(#brain-gradient)" strokeWidth="2" opacity="0.3" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="url(#brain-gradient)" strokeWidth="2" opacity="0.4" />

              {/* Nodes */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x = 200 + 120 * Math.cos(angle);
                const y = 200 + 120 * Math.sin(angle);
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="8" fill="url(#brain-gradient)" />
                    <line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="url(#brain-gradient)"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                  </g>
                );
              })}
              <circle cx="200" cy="200" r="20" fill="url(#brain-gradient)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('whyChoose.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Brain, key: 'item1' },
            { icon: Users, key: 'item2' },
            { icon: Target, key: 'item3' },
            { icon: Headphones, key: 'item4' },
          ].map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t(`whyChoose.items.${key}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`whyChoose.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('process.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Search, step: 'step1' },
            { icon: Cloud, step: 'step2' },
            { icon: Code, step: 'step3' },
          ].map(({ icon: Icon, step }, index) => (
            <div key={step} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{t(`process.${step}`)}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t('form.title')}
            </h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder={t('form.name')}
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t('form.email')}
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('form.phone')}
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="text"
                name="company"
                placeholder={t('form.company')}
                value={formData.company}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:col-span-2"
              >
                <option value="">{t('form.service')}</option>
                <option value="web">Web Development</option>
                <option value="ai">AI Solutions</option>
                <option value="digital">Digital Transformation</option>
              </select>
              <textarea
                name="message"
                placeholder={t('form.message')}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 md:col-span-2"
              />
              <button
                type="submit"
                className="md:col-span-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                {t('form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
