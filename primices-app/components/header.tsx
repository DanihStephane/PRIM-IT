'use client';

import { Link } from '@/lib/navigation';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-lg leading-tight">PRIMICES</div>
            <div className="text-xs text-primary leading-tight">
              INTELLIGENCE
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('aboutUs')}
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('services')}
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('solutions')}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t('contact')}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-primary" />
            ) : (
              <Menu className="h-5 w-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('aboutUs')}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('services')}
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('solutions')}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
