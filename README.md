# Studio Lumen

Site vitrine premium d'une agence web spécialisée dans les entreprises locales. Le projet est entièrement statique et ne nécessite ni installation, ni compilation.

## Démonstrations intégrées

La section **Réalisations** donne accès à trois mini-sites complets et responsive :

- `demos/maison-sauge.html` — restaurant gastronomique ;
- `demos/casa-mare.html` — hôtel boutique méditerranéen ;
- `demos/momo-club.html` — café-brunch urbain.

Ces démonstrations partagent `demos/demo.css` et `demos/demo.js`. Elles utilisent des formulaires simulés : aucune donnée n'est transmise.

## Prévisualisation locale

Ouvrez directement `index.html` dans un navigateur ou servez le dossier avec un serveur statique :

```bash
python3 -m http.server 8000
```

Le site est ensuite disponible sur <http://localhost:8000>.

## Déploiement sur Vercel

1. Dans Vercel, choisissez **Add New → Project**.
2. Importez ce dépôt GitHub.
3. Conservez le framework sur **Other** et le dossier racine du projet (`./`).
4. Cliquez sur **Deploy**.

Le fichier `vercel.json` indique à Vercel que le site doit être servi comme un projet statique, sans commande de build. Chaque push sur la branche reliée à Vercel générera ensuite automatiquement un nouveau déploiement.

## Déploiement sur GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` publie automatiquement le site à chaque push sur `main` ou `work`. Il peut également être lancé manuellement depuis l'onglet **Actions**.

Avant le premier déploiement :

1. Ouvrez **Settings → Pages** dans le dépôt GitHub.
2. Dans **Build and deployment**, sélectionnez **GitHub Actions** comme source.
3. Poussez un commit sur `main` ou `work`, ou lancez le workflow **Deploy static site to GitHub Pages**.

Le fichier `.nojekyll` empêche GitHub Pages d'appliquer un traitement Jekyll inutile. Les ressources utilisent des chemins relatifs, le site fonctionne donc également lorsque le dépôt est publié sous une URL du type `https://utilisateur.github.io/nom-du-depot/`.

