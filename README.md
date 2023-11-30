
# Netciné

## À propos de Netciné

Netciné est une application web dédiée aux amateurs de films et de séries. Elle permet aux utilisateurs de parcourir, 
de rechercher et de découvrir une large gamme de films et de séries télévisées. Avec Netciné, les utilisateurs peuvent 
obtenir des détails sur leurs films et séries préférés, les ajouter à leurs favoris, et explorer différentes catégories.

## Fonctionnalités Principales

- **Explorer par Catégories** : Parcourez des films et des séries classés par genres et catégories.
- **Recherche** : Trouvez facilement des films et des séries en utilisant la fonction de recherche intégrée.
- **Informations Détailées** : Accédez à des informations détaillées sur chaque film et série, y compris la bande-annonce, 
les acteurs principaux, la note, et le synopsis.
- **Gestion des Favoris** : Ajoutez vos films et séries préférés à une liste de favoris pour un accès rapide et facile.

## Technologies Utilisées

- React.js
- Context API de React pour la gestion d'état
- Axios pour les requêtes API
- The Movie Database (TMDB) API pour les données de films et de séries
- SCSS pour le style

## Structure de l'Application

- `components/` : Répertoire contenant les composants React réutilisables.
- `context/` : Répertoire pour les contextes de React (par exemple, `FavoritesContext`).
- `hooks/` : Répertoire pour les hooks personnalisés de React.
- `assets/` : Images, icônes, et autres ressources statiques.
- `styles/` : Feuilles de style SCSS.

## Démarrage Rapide

Pour lancer l'application en local :

1. Clonez le dépôt Git :
   ```bash
   git clone https://github.com/votre-username/netcine.git
   ```
2. Installez les dépendances :
   ```bash
   cd netcine
   npm install
   ```
3. Lancez l'application :
   ```bash
   npm start
   ```

## Contribuer

Les contributions à Netciné sont toujours les bienvenues. Que ce soit pour des corrections de bugs, des améliorations de fonctionnalités 
ou des suggestions de nouvelles fonctionnalités, n'hésitez pas à créer une issue ou une pull request.

## Licence

Netciné est sous licence MIT.
