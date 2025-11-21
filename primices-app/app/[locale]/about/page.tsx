'use client';

import { useTranslations } from 'next-intl';
import { Target, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      image: '👤',
    },
    {
      name: 'Alex Chen',
      role: 'CTO',
      image: '👤',
    },
    {
      name: 'Botondey',
      role: 'Lead Developer',
      image: '👤',
    },
    {
      name: 'Mael Invotion',
      role: 'UI/UX Designer',
      image: '👤',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          <div className="text-center px-8 py-6 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">{t('stats.experience')}</div>
          </div>
          <div className="text-center px-8 py-6 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">{t('stats.projects')}</div>
          </div>
        </div>
      </section>

      {/* Driven by Purpose */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('drivenByPurpose.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('drivenByPurpose.text')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-semibold">200+ Years Experience</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-semibold">500+ Complete Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story, Mission & Values */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-4">{t('ourStory.title')}</h3>
            <p className="text-muted-foreground">{t('ourStory.text')}</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('ourMission.title')}</h3>
            <p className="text-muted-foreground">{t('ourMission.text')}</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('values.title')}</h3>
            <p className="text-muted-foreground">{t('values.text')}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/50 dark:bg-black/80 backdrop-blur-sm border border-white/20 hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 text-6xl">
                {member.image}
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
