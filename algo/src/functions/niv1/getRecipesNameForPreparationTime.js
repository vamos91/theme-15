import {recipes} from "../../data/recipes"

export const getRecipesNameForPreparationTime = (time) => {
    const filteredResults = recipes.filter(recipe => recipe.preparation_time < time);
    const recipesName = filteredResults.map(recipe => recipe.name);
    return recipesName;
}
