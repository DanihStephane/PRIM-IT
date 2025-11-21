# Primices Intelligence Website

Application web moderne construite avec Next.js 15, TypeScript, Tailwind CSS et shadcn/ui.

## Fonctionnalités

- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **shadcn/ui** pour les composants UI
- **next-intl** pour l'internationalisation (FR/EN)
- **next-themes** pour le mode sombre/clair
- **Responsive Design** optimisé pour mobile, tablette et desktop
- **Arrière-plan géométrique animé** inspiré de l'IA

## Pages

- **Home** (`/`) - Page d'accueil avec hero, avantages, processus et formulaire
- **About** (`/about`) - À propos de l'entreprise avec mission, valeurs et équipe
- **Services** (`/services`) - Services offerts avec cartes détaillées
- **Solutions** (`/solutions`) - Solutions digitales proposées
- **Contact** (`/contact`) - Formulaire de contact et informations

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

## Structure du Projet

```
primices-app/
├── app/
│   ├── [locale]/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── solutions/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── footer.tsx
│   ├── geometric-background.tsx
│   ├── header.tsx
│   ├── language-switcher.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── i18n.ts
│   └── utils.ts
├── messages/
│   ├── en.json
│   └── fr.json
└── public/
```

## Technologies Utilisées

- **Next.js 15** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utility-first
- **next-intl** - Internationalisation
- **next-themes** - Gestion du thème
- **lucide-react** - Icônes
- **class-variance-authority** - Variantes de composants
- **tailwind-merge** - Fusion de classes Tailwind
- **tailwindcss-animate** - Animations Tailwind

## Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    DEFAULT: '#00BCD4',
    light: '#4DD0E1',
    dark: '#0097A7',
  },
}
```

### Traductions

Les traductions sont stockées dans `messages/en.json` et `messages/fr.json`. Modifiez ces fichiers pour personnaliser le contenu.

### Mode Sombre

Le mode sombre est géré automatiquement via `next-themes`. Les utilisateurs peuvent basculer entre les thèmes clair et sombre.

## Développement

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

- Page d'accueil FR: [http://localhost:3000/fr](http://localhost:3000/fr)
- Page d'accueil EN: [http://localhost:3000/en](http://localhost:3000/en)

## Licence

© 2024 Primices Intelligence. Tous droits réservés.
