# Introduction à storybook

## Prérequis

- HTML
- CSS
- Typescript (Javascript)
- React

## Installation

### En téléchargeant le zip via github

1. Télécharger et installer [Node Js](https://nodejs.org/en)
2. Ouvrir un terminal à la racine du projet et taper la commande `npm i`.
   1. Sous vscode (windows), `ctrl + j` lance le terminal
3. L'installation est terminée! 🙂

### En utilisant git

1. Assurez-vous d'avoir installé Git sur votre machine (inclu dans Mac visiblement)
2. Lancez la commande `git clone https://github.com/Nanges/ifapme-dinant-2024.git` dans le répertoire de votre choix. La commande va vous créer un sous répertoire `ifapme-dinant-2024`.
3. Installez les packages nodes (Indispensables pour faire tourner storybook)
   - Soit via le terminal. 
     1. Naviguer dans le répertoire `test-sb` via la commande `cd`. Ex: `cd C:/COURS/ifapme-dinant-2024/test-sb` (Dans l'exemple, l'emplacement se trouve sur le disque C, dans le répertoire COURS).
     2. Taper la commande `npm i`
   - Soit via vscode si vous ouvrez le projet `test-sb`.
     1. `ctrl + j` lance le terminal dans vscode
     2. Taper la commande `npm i`

## Lancer Storybook

- En ouvrant un terminal et en tapant `npm run storybook`. ⚠ Assurez-vous de lancer la commande dans le bon répertoire (`./test-sb`) au risque d'avoir un message d'erreur comme quoi la commande est introuvable
- Via le fichier [package.json](./package.json) dans la partie `scripts`. En survolant `storybook`, un menu contextuel apparaît, cliquer sur `Run script`

### Lancer l'application vite (optionel)

cf la section [Lancer Storybook](#lancer-storybook) mais en remplaçant `storybook` par `dev`

## Créer un composant

<blockquote>
   <p>
      Un composant, c’est un bout d’UI (User Interface, donc interface utilisateur) avec son comportement et son apparence propres.<br/>
      Un composant peut être aussi petit qu’un bouton, ou aussi grand qu’une page entière.
   </p>
   <cite><a href="https://fr.react.dev/learn#components">React - Créer et imbriquer des composants</a></cite>
</blockquote>

### Démarche

1. Créer un dossier dans le répertoire `./src`. Nommer le dossier en utilisant le nom de votre composant. Par ex `MyComponent`
2. Créer le fichier `MyComponent.tsx` dans le répertoire créé à l'étape 1. Ce fichier va contenir toute la logique du composant
3. Si vous voulez lier une feuille de style à votre composant, créer un fichier `MyComponent.module.css` dans le répertoire créé à l'étape 1.
Vous devrez l'importer ensuite dans le fichier `MyComponent.tsx`.
```typescript
import styles from "./MyComponent.module.css"
```
4. Un composant react est une fonction qui retourne de l'html (TSX). Dans notre exemple, le code ci-dessous devrait faire l'affaire

```typescript
export function MyComponent(){
   return <p>My component works!</p>
}
```

1. Pour tester votre composant avec `vite`, remplacez le contenu de `App.tsx` par le bout de code suivant:

```typescript
import styles from "./App.module.css";
import { MyComponent } from "./components/MyComponent/MyComponent";

export function App(){
  return <div className={styles.App}>
    <MyComponent />
  </div>
}
```
6. [Lancer l'application vite](#lancer-lapplication-vite-optionel)
7. `"My component works!"` devrait apparaître à l'écran
