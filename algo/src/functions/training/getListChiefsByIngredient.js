import { chiefs } from "../../data/chiefs"
import { recipes } from "../../data/recipes"
import { ingredients } from "../../data/ingredients"
import { recipes_has_ingredients } from "../../data/recipes_has_ingredients"

// Afficher le nom de tous les chefs cuisinant des recettes composées d'un ingrédient spécifique ("Riz")
export const getListChiefsByIngredient = (ingredient) => {
    //recup id du riz
    const idIngredient = ingredients.find((ingr) => ingr.name === ingredient).id
    //console.log('idIngredient', idIngredient)
    //recup tous les association ingredients/recettes qui contiennent du riz
    const allRecipeByingredient = recipes_has_ingredients.filter((recipe) => recipe.ingredients_id === idIngredient)
    //console.log(allRecipeByingredient)
    //recup toutes les recettes qui contiennent dut riz
    const recipesByIngredient = allRecipeByingredient.map((recipe) => {
        return recipes.find((recip) => recip.id === recipe.recipes_id)
    })
    //console.log(recipesByIngredient)
    //recup tous les chefs responsables des recettes qui contiennent dut riz
    const allChiefByIngredient = recipesByIngredient.map((item) => {
        const resultat = chiefs.find((chief) => chief.id === item.chief_id)
        return {
            name : resultat.firstname
        }
    })
    return allChiefByIngredient
}
