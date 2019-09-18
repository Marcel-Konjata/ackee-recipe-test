import ActionTypes from "./cookBook.action-types";

const {
    GET_RECIPES_FAIL,
    GET_RECIPES_START,
    GET_RECIPES_SUCCESS,
    PUT_RECIPES_FAIL,
    PUT_RECIPES_START,
    PUT_RECIPES_SUCCESS
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
