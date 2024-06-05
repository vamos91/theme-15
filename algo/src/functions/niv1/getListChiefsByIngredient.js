import {chiefs} from "../../data/chiefs"
import {ingredients} from "../../data/ingredients"
import {recipes} from "../../data/recipes"
import {recipes_has_ingredients} from "../../data/recipes_has_ingredients"

export const getListChiefsByIngredient = (value) => {

    const recipeIngredientSpecifique = recipes_has_ingredients.filter(recipeIngredient => {
        return recipeIngredient.ingredients_id === ingredients.find(ingredient => ingredient.name === value.toLowerCase()).id;
    });

    const chiefByIngredient = recipeIngredientSpecifique.map(recipe => {
        return chiefs.find(chef => chef.id === recipes.find(recipeItem => recipeItem.id === recipe.recipes_id).chief_id).firstname;
    });

    return chiefByIngredient;

}
