import {getRecipesName} from "./functions/training/getRecipesName";
import {getDetailsChiefs} from "./functions/training/getDetailsChiefs";
import {getRecipesNameForPreparationTime} from "./functions/training/getRecipesNameForPreparationTime";
import {getDetailsRecipeFromId} from "./functions/training/getDetailsRecipeFromId";
import { getRecipesFromSpeciality } from "./functions/training/getRecipesFromSpeciality";
import { getListChiefsByIngredient } from "./functions/training/getListChiefsByIngredient";

const logNested = (name, data) => {
    console.log(name, JSON.stringify(data, null, 2));
}

// Afficher tous les noms des différentes recettes
const recipesName = getRecipesName();
//console.log('🚀 ~ recipesName', recipesName);

// Afficher le prénom et la spécialité de tous les chefs
const detailsChiefs = getDetailsChiefs();
//console.log('🚀 ~ detailsChiefs', detailsChiefs);

// Afficher le nom de toutes les recettes ayant un temps de préparation inférieur à 30 minutes
const recipesNameForPreparationTime = getRecipesNameForPreparationTime(30);
//console.log('🚀 ~ recipesNameForPreparationTime', recipesNameForPreparationTime);

// Afficher le nom d'une recette spécifique avec tous ses ingrédients grâce à son id
const detailsRecipeFromId = getDetailsRecipeFromId(2);
//console.log('🚀 ~ detailsRecipeFromId', detailsRecipeFromId);

// Afficher le nom et le nombre de personnes, des recettes ainsi que les ingrédients de tous les chefs qui ont une spécialité spécifique
const recipesFromSpeciality = getRecipesFromSpeciality("Cuisine méditerranéenne");
//console.log("🚀 ~ recipesFromSpeciality", recipesFromSpeciality);

// Afficher le nom de tous les chefs cuisinant des recettes composées d'un ingrédient spécifique ("Riz")
const listChiefsByIngredient = getListChiefsByIngredient("riz");
console.log("🚀 ~ listChiefsByIngredient", listChiefsByIngredient);
