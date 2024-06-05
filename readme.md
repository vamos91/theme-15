

# Thème - 15

**Gestion des recettes et des ingrédients pour un restaurant**



## Modélisation

#### Niv - 1

Créer un MCD de 4 tables pour répondre au besoin minimal demandé.

> extension vscode : Mermaid Preview / ID: vstirbu.vscode-mermaid-preview
Créer une schématisation sql de votre MCD

> outil:  mysqlworkbench / drawsql / etc..

## Requêtage

#### Niv - 1

Répondre aux différentes demandes présentes sur le fichier : [request/1.md](request/1.md)


## Algo

> manipulation de tableau

#### Niv - 1

Un jeu de données est présent (cf.: algo/src/data)
basé sur ces données, créer pour chaque demande la fonction correspondante :

1. Calculer le montant total d'ingrédients pour chaque recette
```ts
const totalAmountOfIngredientsForEachRecipe = calculateTotalAmountOfIngredientsForEachRecipe(...);
console.log("🚀 ~ result:", totalAmountOfIngredientsForEachRecipe);
```

2. Sélectionner toutes les recettes contenant comme ingrédient des tomates ou du riz
```ts
const recipes = findRecipeContainsIngredients(...)
console.log("🚀 ~ result:", recipes)
```

3. Sélectionner toutes les recettes faites par le Chef Krystof Gill's
```ts
const recipesByChief = findRecipeByChief(...)
console.log("🚀 ~ result:", recipesByChief)
```

4. Calculer le nombre de recettes incluant un ingrédient spécifique (par exemple, "poulet")
```ts
const totalRecipesIncludeIngredient = calculateNumberRecipesIncludeIngredient(...);
console.log("🚀 ~ result:", totalRecipesIncludeIngredient)
```

5. Trouver toutes les recettes ayant un temps de cuisson supérieur à 30 minutes faite par le chef Krystof Gill's
```ts
const recipeIsGrantedByChief = findRecipeIsGrantedByChief(...);
console.log("🚀 ~ result:", recipeIsGrantedByChief)
```



