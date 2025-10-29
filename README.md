# Marianne Long - Landing Page

Landing page moderne et professionnelle pour Marianne Long, Avocat spécialisé en IT / Data / IA / Cybersécurité.

## 🚀 Technologies

- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Validation de formulaires** côté client

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Hero.tsx                 # Section hero avec CTAs
│   ├── ContactForm.tsx          # Formulaire de contact avec validation
│   ├── CalendlyWidget.tsx      # Intégration Calendly
│   ├── ProfessionalTimeline.tsx # Timeline du parcours professionnel
│   ├── ExpertiseGrid.tsx       # Grille des domaines d'expertise
│   ├── ApproachSection.tsx     # Section approche différenciante
│   └── TestimonialsCarousel.tsx # Carrousel de témoignages
├── App.tsx                      # Composant principal
├── main.tsx                     # Point d'entrée
└── index.css                    # Styles globaux Tailwind
```

## 🎨 Palette de Couleurs

- **Primary**: `#CE8F8A` (Rose corail)
- **Light**: `#FBF0E9` (Beige clair)
- **Dark**: `#805050` (Marron foncé)
- **Accent**: `#D4C2A1` (Beige doré)
- **Neutral**: `#AD9C92` (Gris beige)

## 🛠️ Installation

```bash
npm install
```

## 📝 Scripts

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Linter le code

## 🔧 Configuration Calendly

Pour intégrer Calendly, modifiez l'URL dans `src/components/CalendlyWidget.tsx` :

```typescript
const calendlyUrl = 'https://calendly.com/VOTRE_USERNAME'
```

## 📄 Documentation des Composants

### Hero
Section principale avec présentation et deux CTAs (Contact et RDV Calendly).

**Props**: Aucune

### ContactForm
Formulaire de contact avec validation côté client.

**Props**:
- `onClose: () => void` - Fonction de fermeture du modal

**Validation**:
- Nom requis
- Email requis et valide
- Message requis
- Téléphone optionnel

### CalendlyWidget
Widget Calendly en iframe avec modal.

**Props**:
- `onClose: () => void` - Fonction de fermeture du modal

### ProfessionalTimeline
Timeline interactive du parcours professionnel avec animations.

**Données**: Voir `src/components/ProfessionalTimeline.tsx` pour la structure des données.

### ExpertiseGrid
Grille des domaines d'expertise avec effets hover.

**Données**: Voir `src/components/ExpertiseGrid.tsx` pour la structure des données.

### ApproachSection
Section mettant en avant l'approche différenciante avec points clés.

**Props**: Aucune

### TestimonialsCarousel
Carrousel de témoignages avec navigation et animations.

**Données**: Voir `src/components/TestimonialsCarousel.tsx` pour la structure des données.

## 🎯 Objectifs de Conversion

- ✅ Crédibilité via parcours prestigieux (Timeline)
- ✅ Prise de RDV directe sans barrière (Calendly)
- ✅ Image moderne et accessible (Design + Formulaires)
- ✅ Architecture modulaire pour extensions futures

## 📱 Responsive Design

Le site est entièrement responsive avec une approche mobile-first. Tous les composants s'adaptent aux différentes tailles d'écran.

## 🚀 Déploiement

Le projet peut être déployé sur n'importe quel service d'hébergement statique :
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`.

## 🔄 Extension Future

L'architecture modulaire permet d'ajouter facilement de nouvelles sections :
1. Créer un nouveau composant dans `src/components/`
2. L'importer dans `src/App.tsx`
3. L'ajouter dans le rendu principal

