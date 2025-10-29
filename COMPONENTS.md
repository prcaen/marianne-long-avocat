# Documentation des Composants

## Vue d'ensemble

Tous les composants sont des composants React fonctionnels écrits en TypeScript, utilisant Framer Motion pour les animations et Tailwind CSS pour le styling.

## Architecture Modulaire

Chaque composant est indépendant et réutilisable. Ils utilisent des interfaces TypeScript pour typer leurs props.

---

## 1. Hero (`Hero.tsx`)

**Rôle** : Section principale de landing, première impression.

**Fonctionnalités** :
- Présentation du nom et du titre professionnel
- Description du positionnement unique
- Deux CTAs : Contact et Prise de RDV (Calendly)
- Logo conceptuel illustratif
- Animations d'apparition au chargement

**État local** :
- `showContactForm: boolean` - Contrôle l'affichage du formulaire de contact
- `showCalendly: boolean` - Contrôle l'affichage du widget Calendly

**Modals** :
- Intégration conditionnelle de `ContactForm` et `CalendlyWidget`

**Styles** :
- Gradient de fond avec palette de couleurs
- Logo conceptuel avec pattern SVG
- Responsive design avec grid

---

## 2. ContactForm (`ContactForm.tsx`)

**Rôle** : Formulaire de contact avec validation côté client.

**Props** :
```typescript
interface ContactFormProps {
  onClose: () => void
}
```

**État local** :
- `formData` - Données du formulaire (name, email, phone, message)
- `errors` - Erreurs de validation
- `isSubmitting` - État de soumission
- `isSubmitted` - État de succès

**Validation** :
- Nom : requis (non vide)
- Email : requis et format valide (regex)
- Message : requis (non vide)
- Téléphone : optionnel

**Comportement** :
- Modal avec backdrop
- Animation d'entrée/sortie (Framer Motion)
- Message de succès après soumission
- Réinitialisation automatique après 3 secondes

**Intégration API** :
- Actuellement : simulation avec setTimeout
- À compléter : intégration backend réelle

---

## 3. CalendlyWidget (`CalendlyWidget.tsx`)

**Rôle** : Intégration Calendly via iframe.

**Props** :
```typescript
interface CalendlyWidgetProps {
  onClose: () => void
}
```

**Configuration** :
- URL Calendly à configurer dans le composant
- Remplacez `YOUR_CALENDLY_USERNAME` par l'identifiant réel

**Comportement** :
- Modal plein écran responsive
- Fermeture via bouton X ou clic sur backdrop
- Animation d'entrée/sortie

---

## 4. ProfessionalTimeline (`ProfessionalTimeline.tsx`)

**Rôle** : Affichage du parcours professionnel avec timeline interactive.

**Données** :
```typescript
interface TimelineItem {
  company: string
  duration: string
  role: string
  description: string
  highlights?: string[]
}
```

**Fonctionnalités** :
- Timeline verticale avec ligne de connexion
- Alternance gauche/droite sur desktop
- Points de timeline avec animations
- Section formations en bas
- Animations au scroll (viewport)

**Responsive** :
- Desktop : alternance gauche/droite
- Mobile : alignement à gauche

---

## 5. ExpertiseGrid (`ExpertiseGrid.tsx`)

**Rôle** : Grille des domaines d'expertise avec effets hover.

**Données** :
```typescript
interface Expertise {
  title: string
  description: string
  icon: string
}
```

**Fonctionnalités** :
- Grid responsive (1 col mobile, 2 cols tablet, 3 cols desktop)
- Effet hover : scale + lift
- Gradient de fond au hover
- Icônes emoji
- Animations d'apparition séquentielles

**Styles** :
- Cartes blanches avec shadow
- Décoration de coin au hover
- Transition fluide sur toutes les propriétés

---

## 6. ApproachSection (`ApproachSection.tsx`)

**Rôle** : Section mettant en avant l'approche différenciante.

**Contenu** :
- Titre principal : "L'avocate qui comprend les deux côtés"
- Description du positionnement unique
- 4 points différenciants avec icônes :
  - Vision 360°
  - Approche Pragmatique
  - Accompagnement Stratégique
  - Accessibilité

**Styles** :
- Fond sombre (#805050) avec pattern SVG
- Texte clair en contraste
- Cartes semi-transparentes avec backdrop-blur
- CTA en bas de section

---

## 7. TestimonialsCarousel (`TestimonialsCarousel.tsx`)

**Rôle** : Carrousel de témoignages clients.

**Données** :
```typescript
interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}
```

**Fonctionnalités** :
- Carrousel avec navigation (précédent/suivant)
- Indicateurs de points cliquables
- Animation de transition (fade + slide)
- Avatar généré automatiquement (initiales)
- Boucle infinie

**Navigation** :
- Flèches gauche/droite
- Points indicateurs
- Animations Framer Motion

---

## Principes de Design

### Animations
- **Entrée** : Fade + translation pour chaque composant
- **Hover** : Scale et lift pour les éléments interactifs
- **Transitions** : Durée standard de 300ms

### Couleurs
- Utilisation cohérente de la palette définie
- Contraste vérifié pour l'accessibilité

### Responsive
- Approche mobile-first
- Breakpoints Tailwind standards (sm, md, lg, xl)
- Grilles adaptatives

### Accessibilité
- Labels ARIA sur les boutons iconiques
- Structure sémantique HTML
- Contraste de couleurs suffisant

---

## Ajouter une Nouvelle Section

1. Créer le composant dans `src/components/`
2. Définir les interfaces TypeScript si nécessaire
3. Importer dans `src/App.tsx`
4. Ajouter dans le rendu
5. Documenter dans ce fichier

Exemple :
```typescript
// src/components/NewSection.tsx
import React from 'react'
import { motion } from 'framer-motion'

const NewSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      {/* Contenu */}
    </section>
  )
}

export default NewSection
```

