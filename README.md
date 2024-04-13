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
4. yarn dev (lancement du projet)
   
### Commandes utilisées pour le fonctionnement du projet

- Pour effectuer les requêtes HTTP: yarn add axios.
- Pour permettre la navigation entre les pages : yarn add.
- Pour rendre le header responsive : utilisation de React Bootstrap:
1. yarn add bootstrap
2. import 'bootstrap/dist/css/bootstrap.min.css' (dans le main.jsx)
3. <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/> (dans le head de index.html)

Pour Boostrap voir https://react-bootstrap.netlify.app/

## Installation du projet en local

1. git clone https://github.com/pricilliaEDOU2/React-Futurama-Front-End.git
2. yarn
3. yarn dev

## Construit avec

### Langages

- HTML
- CSS
- Javascript

### Bibliothèques

- **React**
- **React Bootstrap**
- **Vite.js** : compilateur (bundler) il permet de regrouper plusieurs fichiers source, tels que des fichiers JavaScript, CSS et d'autres types de fichiers, en un seul fichier optimisé pour la production.
- **Axios** : Permet d'effectuer les requêtes HTTP.

### Outils

- **ESLint** : outil populaire utilisé dans le développement de logiciels pour assurer la qualité du code JavaScript



