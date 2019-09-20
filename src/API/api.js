import Axios from "axios";
//mockup server
const BASE_URL =
    "https://private-anon-cd4b0b73af-cookbook3.apiary-mock.com/api/v1/recipes";

 // production server   
const PRODUCTION_URL = "https://cookbook.ack.ee/api/v1/recipes";

const limitQuery = "?limit=";

//test with mockup server
//metody s mockupem fungují
export function GetRecipes() {
    return Axios.get(`${BASE_URL}${limitQuery}10`, {
        headers: { "Access-Control-Allow-Origin": "*" , 'Access-Control-Allow-Credentials':true}, 
    });
    
}


export function GetSingleRecipe(recipeID) {
    return Axios.get(`${BASE_URL}/${recipeID}`);
}

export function postRecipe(body) {
    return Axios({
        method: "POST",
        url: BASE_URL,
        data: { ...body }
        // withCredentials: true
    });
}

export function sendRecipeRating(score, recipeId) {
    return Axios({
        method: "POST",
        url: `${BASE_URL}/${recipeId}/ratings`,
        data: { score }
        // withCredentials: true
    });
}

// note : I will check the CORS later, this slows me down a lot tbh
// edit: zaboha nemůžu přijít na to proč mi CORS neberou ani headers fetche ani axios
