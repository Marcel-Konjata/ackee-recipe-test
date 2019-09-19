import Axios from "axios";

const BASE_URL =
    "https://private-anon-cd4b0b73af-cookbook3.apiary-mock.com/api/v1/recipes";

 const PRODUCTION_URL = "https://cookbook.ack.ee/api/v1/recipes";   
 const origin = {"Access-Control-Allow-Origin": "http://localhost:3000"}

const limitQuery = "?limit="



//test with mockup server
//metody s mockupem fungují
export function GetRecipes() {
    return Axios.get(`${BASE_URL}${limitQuery}10`);
}

export function GetSingleRecipe(recipeID){
    return  Axios.get(`${BASE_URL}/${recipeID}`);
}

export function postRecipe(body){
    return Axios({
        method: 'POST',
        url: BASE_URL,
        data: {...body},
        // withCredentials: true
    }, )
}





// note : I will check the CORS later, this slows me down a lot tbh