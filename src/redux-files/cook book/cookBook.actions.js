import ActionTypes from "./cookBook.action-types";

const {
    GET_RECIPES_FAIL,
    GET_RECIPES_START,
    GET_RECIPES_SUCCESS,
    GET_SINGLE_RECIPE_FAIL,
    GET_SINGLE_RECIPE_START,
    GET_SINGLE_RECIPE_SUCCESS,
    PUT_RECIPES_FAIL,
    PUT_RECIPES_START,
    PUT_RECIPES_SUCCESS,
    SET_RECIPE_RATING_FAIL,
    SET_RECIPE_RATING_SUCCES,
    SET_RECIPE_RATING_START
} = ActionTypes;

export const getRecipesSucces = payload => ({
    type: GET_RECIPES_SUCCESS,
    payload
});
export const getRecipesFailure = payload => ({
    type: GET_RECIPES_FAIL,
    payload
});
export const getRecipesStart = payload => ({
    type: GET_RECIPES_START,
    payload
});
export const getSingleRecipeSucces = payload => ({
    type: GET_SINGLE_RECIPE_SUCCESS,
    payload
});
export const getSingleRecipeFailure = payload => ({
    type: GET_SINGLE_RECIPE_FAIL,
    payload
});
export const getSingleRecipeStart = payload => ({
    type: GET_SINGLE_RECIPE_START,
    payload
});

export const putRecipesSucces = payload => ({
    type: PUT_RECIPES_SUCCESS,
    payload
});
export const putRecipesFailure = payload => ({
    type: PUT_RECIPES_FAIL,
    payload
});
export const putRecipesStart = payload => ({
    type: PUT_RECIPES_START,
    payload
});

export const setRecipeRatingStart = (score, recipeId) => ({
    type: SET_RECIPE_RATING_START,
    payload: { score, recipeId }
});
export const setRecipeRatingSucces = (recipeId) => ({
    type: SET_RECIPE_RATING_SUCCES,
    payload: recipeId
});
export const setRecipeRatingFail = error => ({
    type: SET_RECIPE_RATING_FAIL,
    payload: error
});
