import {chiefs} from "../../data/chiefs"
import {ingredients} from "../../data/ingredients"
import {recipes} from "../../data/recipes"
import {recipes_has_ingredients} from "../../data/recipes_has_ingredients"

export const getRecipesFromSpeciality = (speciality) => {

    const chiefFromSpeciality = chiefs.find(chief => chief.speciality === speciality);

    const recipesByChief = recipes.filter(recipe => recipe.chief_id === chiefFromSpeciality.id)

    const recipesBySpeciality = recipesByChief.map(recipe => {
        const ingredientsList = recipes_has_ingredients
            .filter(ingredient => ingredient.recipes_id === recipe.id)
            .map(element => ({
                ingredient: ingredients.find(ingredient => ingredient.id === element.ingredients_id).name,
            }));
        return {
            name: recipe.name,
            nbpersons: recipe.nb_persons,
            ingredients: ingredientsList
        }
    });

    return recipesBySpeciality;
}
