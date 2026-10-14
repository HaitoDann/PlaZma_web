# PlaZma — Site vitrine

Site public du club esport **PlaZma** (League of Legends). Vitrine grand public :
roster, staff, palmarès, actualités, recrutement et contact.

> À ne pas confondre avec **ARCHI** (dépôt `PlaZma`), l'outil interne de gestion
> de l'équipe. Ici, c'est la vitrine publique.

## Stack

- **[Astro](https://astro.build/)** — site statique, zéro JS inutile, excellent SEO/perf.
- HTML/CSS natifs + quelques `<script>` légers (menu, révélation au scroll).
- Déploiement automatique sur **GitHub Pages** (voir `.github/workflows/deploy.yml`).

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:4321/PlaZma_web
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Modifier le contenu

Tout le contenu est dans des fichiers de données, sans toucher au design :

| Fichier | Contenu |
|---|---|
| `src/data/site.ts` | Nom, description, réseaux sociaux, recrutement, email |
| `src/data/content.ts` | Roster, staff, palmarès, actualités |
| `public/logo-plazma.svg` | **Logo** (remplacer par le vrai logo violet) |
| `public/roster/` | Photos des joueurs/staff (optionnel) |

### Ajouter un joueur
Dans `src/data/content.ts`, ajoute une entrée au tableau `roster` :
```ts
{ pseudo: 'MonPseudo', role: 'Mid', name: 'Prénom Nom', country: '🇫🇷',
  photo: 'monpseudo.jpg', twitter: 'https://x.com/...' }
```
Les photos vont dans `public/roster/` (format portrait 4:5 conseillé).

### Ajouter une actu / un résultat
Même principe dans les tableaux `news` et `results`.

## Identité visuelle

Palette **violet / esport premium** (voir `src/styles/theme.css`). Règles
anti-« look IA » héritées d'ARCHI : un seul accent de marque (violet, en aplat),
surfaces opaques, typo affirmée (Sora + Inter), la couleur signifie, elle ne
décore pas. **Jamais** de dégradé cyan→violet.

## Déploiement

Pousser sur `main` déclenche le build et la mise en ligne via GitHub Pages.
Penser à activer **Settings → Pages → Source : GitHub Actions** sur le dépôt.

URL de production (project page) : `https://haitodann.github.io/PlaZma_web/`
Pour un domaine personnalisé, voir les commentaires dans `astro.config.mjs`.
