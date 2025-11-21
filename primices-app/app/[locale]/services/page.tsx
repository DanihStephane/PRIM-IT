'use client';

import { useTranslations } from 'next-intl';
import { Code, Palette, Smartphone, Brain, Cpu, Zap, Cloud, Shield, Wrench, TrendingUp } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    {
      title: t('webDev.title'),
      icon: Code,
      gradient: 'from-blue-400 to-cyan-400',
      items: [
        { icon: Palette, text: t('webDev.items.item1') },
        { icon: Smartphone, text: t('webDev.items.item2') },
        { icon: Code, text: t('webDev.items.item3') },
      ],
    },
    {
      title: t('aiSolutions.title'),
      icon: Brain,
      gradient: 'from-purple-400 to-pink-400',
      items: [
        { icon: Brain, text: t('aiSolutions.items.item1') },
        { icon: Cpu, text: t('aiSolutions.items.item2') },
        { icon: Zap, text: t('aiSolutions.items.item3') },
      ],
    },
    {
      title: t('aiSolutions.title'),
      icon: Cpu,
      gradient: 'from-indigo-400 to-purple-400',
      items: [
        { icon: Brain, text: t('aiSolutions.items.item1') },
        { icon: Cpu, text: t('aiSolutions.items.item2') },
        { icon: Zap, text: t('aiSolutions.items.item3') },
      ],
    },
    {
      title: t('digitalTransform.title'),
      icon: Cloud,
      gradient: 'from-pink-400 to-rose-400',
      items: [
        { icon: Cloud, text: t('digitalTransform.items.item1') },
        { icon: Shield, text: t('digitalTransform.items.item2') },
      ],
    },
    {
      title: t('digitalTransform.title'),
      icon: TrendingUp,
      gradient: 'from-cyan-400 to-blue-400',
      items: [
        { icon: Cloud, text: t('digitalTransform.items.item1') },
        { icon: Shield, text: t('digitalTransform.items.item2') },
      ],
    },
    {
      title: t('support.title'),
      icon: Wrench,
      gradient: 'from-violet-400 to-purple-400',
      items: [
        { icon: Wrench, text: t('support.items.item1') },
        { icon: TrendingUp, text: t('support.items.item2') },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border-2 border-white/20 hover:border-primary/50 transition-all hover:shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mt-2">{service.title}</h3>
              </div>

              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
