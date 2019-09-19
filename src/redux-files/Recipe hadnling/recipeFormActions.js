import actionTypes from './recipeForm.actionTypes';


const {POST_RECIPE_SUCCES,POST_RECIPE_FAILURE, POST_RECIPE_START,RECIPE_REDUCER_RESET } = actionTypes;


export const postRecipeStart = (data) => ({
    type: POST_RECIPE_START,
    payload: data
})
export const postRecipeSuccess = () => ({
    type: POST_RECIPE_SUCCES
   
})
export const actionName = (payload) => ({
    type: POST_RECIPE_FAILURE,
    payload
})

export const recipeReducerReset =()=>({
    type: RECIPE_REDUCER_RESET
})