import {ingredients} from "../../data/ingredients"
import {recipes} from "../../data/recipes"
import {recipes_has_ingredients} from "../../data/recipes_has_ingredients"

export const getDetailsRecipeFromId = (id) => {
    const recipe = recipes.find(recipe => recipe.id === id)

    const ingredientsList = recipes_has_ingredients
        .filter(ingredient => ingredient.recipes_id === id)
        .map(element => ({
            quantity: element.quantity,
            ingredient: ingredients.find(ingredient => ingredient.id === element.ingredients_id).name,
        }));

    return {
        name: recipe.name,
        ingredients: ingredientsList
    }
}
