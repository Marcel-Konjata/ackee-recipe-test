import Axios from 'axios';

const BASE_URL = "https://private-anon-cd4b0b73af-cookbook3.apiary-mock.com/api/v1/recipes"


 export function GetRecipes() {
    (async()=>{
        const response = await Axios.get(`${BASE_URL}`);
        const recipes = response.data;
        console.log(recipes)
    })()
}