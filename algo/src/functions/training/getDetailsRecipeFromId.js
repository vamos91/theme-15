import { recipes } from "../../data/recipes"
import { ingredients } from "../../data/ingredients"
import { recipes_has_ingredients } from "../../data/recipes_has_ingredients"


// Afficher le nom d'une recette spécifique avec tous ses ingrédients grâce à son id

export const getDetailsRecipeFromId = (id) => {
    const recipeName = recipes.find((recipe) => recipe.id === id)

    //const ingredientsIds = recipes_has_ingredients.filter((ids) => ids.recipes_id === id)
    const recipeIngrdients = recipes_has_ingredients.filter((ids) => ids.recipes_id === id).map((ingredientsId) => {
        return ingredients.find((ingredient) => ingredient.id === ingredientsId.ingredients_id)
    })
    return {
        recipeName,
        recipeIngrdients
    }
}