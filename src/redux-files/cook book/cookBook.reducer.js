import actionTypes from "./cookBook.action-types";

const {GET_RECIPES_FAIL, GET_RECIPES_SUCCESS, GET_SINGLE_RECIPE_SUCCESS, GET_SINGLE_RECIPE_FAIL} = actionTypes;

const initialState = {
    recipes: [],
    singleRecipe: null,
    getRecipesError: null,
    getSingleRecipeError: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_RECIPES_SUCCESS:
        return { ...state, recipes: payload, getRecipesError: null }
    case GET_RECIPES_FAIL:
        return { ...state,  getRecipesError: payload }
    case GET_SINGLE_RECIPE_SUCCESS:
        return { ...state, singleRecipe: payload, getSingleRecipesError: null }
    case GET_SINGLE_RECIPE_FAIL:
        return { ...state,  getSingleRecipesError: payload }

    default:
        return state
    }
}
