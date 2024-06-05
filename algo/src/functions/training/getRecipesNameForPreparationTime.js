import { recipes } from "../../data/recipes"

export const getRecipesNameForPreparationTime = () => {
    return recipes.filter((recipe) => recipe.preparation_time < 30)
}