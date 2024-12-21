# Introduction à storybook

## Prérequis

- HTML
- CSS
- Typescript (Javascript)
- React

## Installation

1. Télécharger et installer [Node Js](https://nodejs.org/en)
2. Ouvrir un terminal à la racine du projet et taper la commande `npm i`.
   1. Sous vscode (windows), `ctrl + j` lance le terminal
3. L'installation est terminée! 🙂

## Lancer Storybook

- En ouvrant un terminal et en tapant `npm run storybook`
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

5. Pour tester votre composant avec `vite`, importer le composant dans `App.tsx` qui se trouve à la racine de `./src`

```typescript
//... Autres import
import { MyComponent } from "./components/MyComponent/MyComponent";

export function App(){
  return <div className={styles.App}>
   {/* Autres composants */}
    <MyComponent />
  </div>
}
```
6. [Lancer l'application vite](#lancer-lapplication-vite-optionel)
7. `"My component works!"` devrait apparaître à l'écran
