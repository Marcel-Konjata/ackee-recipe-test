import Axios from "axios";

const BASE_URL =
    "https://private-anon-cd4b0b73af-cookbook3.apiary-mock.com/api/v1/recipes";

const limitQuery = "?limit="

export function GetRecipes() {
    return Axios.get(`${BASE_URL}${limitQuery}10`);
}

export function GetSingleRecipe(recipeID){
    return  Axios.get(`${BASE_URL}/${recipeID}`);
}

