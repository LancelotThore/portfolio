# Portfolio — Lancelot Thoré

**[lancelot-thore.fr](https://lancelot-thore.fr)**

Portfolio personnel de Lancelot Thoré, développeur web full-stack, étudiant en Master Architecture & Développement Logiciel à CODA Orléans, en recherche d'alternance.

Site bilingue (FR/EN) en deux pages : le portfolio principal (hero, projets choisis, parcours, compétences, contact) et la liste complète des projets, répartis en formation / personnels / entreprise.

## Fonctionnalités

- Bilingue FR/EN avec routing internationalisé (`/` et `/en`), FR par défaut
- Mobile-first, responsive sur toutes les sections
- Coordonnées de contact obfusquées côté client contre les bots de scraping
- Animation d'apparition au scroll (dégradation gracieuse sans JS, respecte `prefers-reduced-motion`)
- Site 100 % statique (SSG) — aucune base de données, aucun backend
- SEO complet : metadata, Open Graph, `hreflang` FR/EN, sitemap, robots.txt
- Analytics respectueux de la vie privée ([GoatCounter](https://www.goatcounter.com/), sans cookies)
- Lighthouse ~100 sur les quatre catégories (performance, accessibilité, bonnes pratiques, SEO)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [next-intl](https://next-intl.dev) pour le routing internationalisé
- Polices via `next/font` (Instrument Serif + Space Grotesk)

## Déploiement

Auto-hébergé sur un VPS Ubuntu (Nginx en reverse proxy, HTTPS via Let's Encrypt/certbot, l'app tourne comme service `systemd`).

Déploiement continu : chaque push sur `main` déclenche un déploiement automatique via GitHub Actions (`.github/workflows/deploy.yml`) — `git pull`, `npm ci`, `npm run build`, puis redémarrage du service.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande         | Description                    |
| ---------------- | ------------------------------- |
| `npm run dev`    | Serveur de développement        |
| `npm run build`  | Build de production             |
| `npm run start`  | Servir le build de production   |
| `npm run lint`   | Lancer ESLint                   |

## Licence

[MIT](./LICENSE.md)
