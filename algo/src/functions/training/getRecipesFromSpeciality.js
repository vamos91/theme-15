import { recipes } from "../../data/recipes"
import { ingredients } from "../../data/ingredients"
import { recipes_has_ingredients } from "../../data/recipes_has_ingredients"
import { chiefs } from "../../data/chiefs"
// Afficher le nom et le nombre de personnes, des recettes ainsi que les ingrédients de tous les chefs qyant une spécialité spécifique

export const getRecipesFromSpeciality = (speciality) => {
    //recup l'id du chef "Cuisine méditerranéenne"
    const idSpec = chiefs.find((chief) => chief.speciality === speciality)
    //console.log(idSpec.id)
    //recup les recettes type "Cuisine méditerranéenne"
    const recipesBySpec = recipes.filter((recipe) => recipe.chief_id === idSpec.id)
    //console.log(recipesBySpec)
    const recipe_ingredients = recipesBySpec.map((recipeBySpec) => {
        return {
            name: recipeBySpec.name,
            nb_persons : recipeBySpec.nb_persons,
            ingredientId: recipes_has_ingredients.filter((item) => item.recipes_id === recipeBySpec.id)
        }
    })
   // console.log(recipe_ingredients)
    //recup les ingrédients des recettes
    const resultat = recipe_ingredients.map((recipe_ingredient) => {
        return {
            name: recipe_ingredient.name,
            nb_persons: recipe_ingredient.nb_persons,
            ingredients: recipe_ingredient.ingredientId.map((r_ingr) => {
                const res = ingredients.find((ingredient) => ingredient.id === r_ingr.ingredients_id)
                return JSON.stringify(res)
            })
        } 
    })

    return resultat
}