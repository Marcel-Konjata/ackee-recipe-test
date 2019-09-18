import actionTypes from "./cookBook.action-types";

const {GET_RECIPES_FAIL, GET_RECIPES_SUCCESS} = actionTypes;

const initialState = {
    recipes: [],
    singleRecipe: null,
    getRecipesError: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_RECIPES_SUCCESS:
        return { ...state, recipes: payload, getRecipesError: null }
    case GET_RECIPES_FAIL:
        return { ...state,  getRecipesError: payload }

    default:
        return state
    }
}
