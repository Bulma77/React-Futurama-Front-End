# React FUTURAMA

## Résumé

Création du Front-End responsive React avec Vite.js de Futurama en utilisant l'API : https://www.sampleapis.com/api-list/futurama.

Méthode HTTP : GET

L'utilsateur a la possibilité de naviguer entre les pages suivantes :

- Une page home (Affiche de la série Fururama).
  
- Une page infos affichant les informations (Synopsis, noms des créateurs et dates de parution) : https://api.sampleapis.com/futurama/info.
  
- Une page characters affichant l'ensemble des personnages et les citations de chacun d'entre eux : https://api.sampleapis.com/futurama/characters.

  Présentation des personnages avec la possibilité d'avoir les citations d'un personnage en cliquant sur celui-ci.
  
- Une page affichant les épisodes : https://api.sampleapis.com/futurama/episodes.

  Liste des épisodes avec pagination afin de présenter 5 épisodes par pages (26 pages au total).
  
## Pré-requis

Environnement de développement intégré utilisé : Visual Studio Code

### Commandes utilisées pour créer et lancer le projet

- Utilisation du package **yarn** = npm install -g yarn. Attention, il faudra prendre soin  de toujours installer les dépendances avec la commande **yarn add** et non pas avec npm install afinn d'éviter des conflits.
  
- Initialisation du projet React avec vite.js :
1. yarn create vite React-Futurama-Front-End --template react
2. cd React-Futurama-Front-End
3. yarn (installation des dépendances listées dans package.json)
4. 
- 








This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
