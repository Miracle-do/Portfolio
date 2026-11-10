# Portfolio — Miracle LOHOUNME

Portfolio personnel en **React + Vite** : profil, compétences et réalisations (SaaS, plateformes éducatives, sites clients).

## Développement

```bash
npm install
npm run dev      # http://localhost:5173/Portfolio/
npm run build    # génère dist/
```

## Ajouter un projet

Éditer `src/data/projects.js` (titre, catégorie, stack, liens `live` / `repo`).

## Déploiement

Le workflow `.github/workflows/deploy.yml` publie automatiquement sur GitHub Pages à chaque push sur `main`.
Dans **Settings → Pages**, choisir **Source : GitHub Actions**.
