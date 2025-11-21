'use client';

import { useTranslations } from 'next-intl';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    fullName: '',
    fullEmail: '',
    email: '',
    phoneAddress: '',
    company: '',
    reason: '',
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
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/50 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6">{t('form.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder={t('form.fullName')}
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <input
                type="email"
                name="fullEmail"
                placeholder={t('form.fullEmail')}
                value={formData.fullEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t('form.email')}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="tel"
                name="phoneAddress"
                placeholder={t('form.phoneAddress')}
                value={formData.phoneAddress}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="text"
                name="company"
                placeholder={t('form.company')}
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">{t('form.reason')}</option>
                <option value="consultation">Consultation</option>
                <option value="project">New Project</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder={t('form.message')}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/90 border border-white/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                {t('form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6">{t('info.title')}</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-black/70 border border-primary/20">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('info.email.label')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('info.email.value')}
                    </p>
                  </div>
                </div>

                {/* Servicer */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-black/70 border border-primary/20">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('info.servicer.label')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('info.servicer.value')}
                    </p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-black/70 border border-primary/20">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('info.office.label')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('info.office.value')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <MapPin className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
