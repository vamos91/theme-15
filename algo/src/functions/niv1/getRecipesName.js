import {recipes} from "../../data/recipes"

export const getRecipesName = () => {
    return recipes.map(recipe => recipe.name);
}
