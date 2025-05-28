# Chemins du lien

🛡️ TypeScript . ⚛️ Next.js . 📦 Payload CMS

🔗 [Maquettes Figma](https://www.figma.com/design/lKdSHdWN1PsyFuTJhorYNJ/ACR?node-id=0-1&t=PnL7ZpLJ0yJlfbI5-1)

## Contexte

Ce projet est développé pour une association, dans le cadre d’une refonte de leur plateforme pédagogique.  
Il s’appuie sur Payload CMS pour la gestion de contenu, et sur Next.js pour l’interface web.

L’objectif est double : proposer une base solide pour une application durable, et expérimenter une architecture claire, typée, modulaire.

## Présentation

**Chemins du lien** est une application web permettant la gestion de parcours pédagogiques composés d’exercices.  
Elle propose une interface publique ainsi qu'une interface d’administration via Payload.

🔹 **Exercices** : unités de contenu structurées en blocs (texte, image, etc.)  
🔹 **Cursus** : organisation des exercices en catégories et séquences  
🔹 **Connexion sécurisée** : accès aux contenus réservés via une authentification centralisée

---

### Architecture & conception

🔹 **Payload CMS** : back-office personnalisable avec schémas de collection typés  
🔹 **Next.js App Router** : rendu hybride SSR/CSR optimisé pour l’UX  
🔹 **AuthContext + Server Wrapper** : gestion de l’authentification côté client et serveur  
🔹 **React Hook Form + Yup** : formulaires validés côté client avec contrôle strict  
🔹 **Organisation modulaire** : séparation claire des responsabilités (composants, hooks, styles, validations, types...)



## Installation

```sh
git@github.com:Wagle-Studio/chemins-du-lien.git
cd chemins-du-lien
cp .env.example .env # Configure les variables d’environnement
npm install
npm dev
```

### Liens

🔗 Application web Nextjs : http://localhost:3000

🔗 Administration Payload : http://localhost:3000/admin
