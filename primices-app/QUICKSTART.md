# Guide de Démarrage Rapide - Primices Intelligence

## Installation et Lancement

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer en mode développement
```bash
npm run dev
```

L'application sera accessible sur **http://localhost:3000**

- 🇫🇷 Version française : http://localhost:3000/fr
- 🇬🇧 Version anglaise : http://localhost:3000/en

### 3. Compiler pour la production
```bash
npm run build
```

### 4. Lancer en production
```bash
npm start
```

## Fonctionnalités Principales

### 🌐 Internationalisation (FR/EN)
- Switcher de langue dans le header (boutons FR/EN)
- Toutes les pages sont traduites
- Modifier les traductions dans `messages/en.json` et `messages/fr.json`

### 🌓 Mode Sombre/Clair
- Toggle dans le header (icône soleil/lune)
- Changement automatique entre les thèmes
- Préférence sauvegardée dans le navigateur

### 📱 Design Responsive
- Optimisé pour mobile, tablette et desktop
- Menu hamburger sur mobile (icône menu)
- Layout adaptatif

### 🎨 Design Moderne
- Arrière-plan géométrique animé
- Effets de verre (glass morphism)
- Animations fluides
- Palette de couleurs cyan/purple

## Structure des Pages

- **/** → Redirige vers /fr
- **/[locale]** → Page d'accueil (Home)
- **/[locale]/about** → À propos
- **/[locale]/services** → Services
- **/[locale]/solutions** → Solutions
- **/[locale]/contact** → Contact

## Personnalisation

### Modifier les Couleurs

Éditez `app/globals.css` :

```css
@theme {
  --color-primary: #00bcd4;        /* Couleur principale */
  --color-primary-light: #4dd0e1;  /* Variante claire */
  --color-primary-dark: #0097a7;   /* Variante foncée */
}
```

### Modifier les Traductions

**Fichier français** : `messages/fr.json`
```json
{
  "nav": {
    "aboutUs": "À Propos",
    "services": "Services",
    ...
  }
}
```

**Fichier anglais** : `messages/en.json`
```json
{
  "nav": {
    "aboutUs": "About Us",
    "services": "Services",
    ...
  }
}
```

### Modifier le Logo

Le logo se trouve dans `components/header.tsx` :
- L'icône actuelle est `Brain` de lucide-react
- Pour utiliser un logo image, remplacez par `<Image src="/logo.png" ... />`

### Ajouter une Nouvelle Page

1. Créer le dossier : `app/[locale]/nouvelle-page/`
2. Créer le fichier : `app/[locale]/nouvelle-page/page.tsx`
3. Ajouter le lien dans `components/header.tsx`
4. Ajouter les traductions dans `messages/fr.json` et `messages/en.json`

## Commandes Utiles

```bash
# Développement
npm run dev          # Démarre le serveur de dev

# Production
npm run build        # Compile l'application
npm start            # Lance l'application compilée

# Qualité du code
npm run lint         # Vérifie le code avec ESLint

# Dépendances
npm install          # Installe les dépendances
npm update           # Met à jour les dépendances
```

## Technologies Utilisées

- ⚡️ **Next.js 16** - Framework React avec App Router
- 🎯 **TypeScript** - Typage statique
- 🎨 **Tailwind CSS 4** - Framework CSS
- 🌐 **next-intl** - Internationalisation
- 🌓 **next-themes** - Gestion du thème
- 🎭 **lucide-react** - Bibliothèque d'icônes

## Résolution de Problèmes

### Le serveur ne démarre pas
```bash
# Supprimez les fichiers de cache et node_modules
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Erreur de build
```bash
# Vérifiez TypeScript
npm run lint
# Recompilez
npm run build
```

### Les traductions ne s'affichent pas
- Vérifiez que les fichiers `messages/fr.json` et `messages/en.json` sont valides
- Redémarrez le serveur de développement

## Déploiement

### Vercel (Recommandé)
1. Poussez votre code sur GitHub
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. Importez votre repository
4. Déployez automatiquement

### Netlify
```bash
npm run build
# Déployez le dossier .next
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Support

Pour toute question ou problème :
- 📖 Documentation Next.js : https://nextjs.org/docs
- 🌐 Documentation next-intl : https://next-intl-docs.vercel.app
- 🎨 Documentation Tailwind : https://tailwindcss.com/docs

---

**© 2024 Primices Intelligence - Tous droits réservés**
