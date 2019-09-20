import actionTypes from "./cookBook.action-types";

const {
    GET_RECIPES_FAIL,
    GET_RECIPES_SUCCESS,
    GET_SINGLE_RECIPE_SUCCESS,
    GET_SINGLE_RECIPE_FAIL,
    SET_RECIPE_RATING_SUCCES,
    SET_RECIPE_RATING_FAIL
} = actionTypes;

const initialState = {
    recipes: [],
    singleRecipe: null,
    getRecipesError: null,
    getSingleRecipeError: null,
    ratedRecipes: [],
    rateRecipeError: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_RECIPES_SUCCESS:
            return { ...state, recipes: payload, getRecipesError: null };
        case GET_RECIPES_FAIL:
            return { ...state, getRecipesError: payload };
        case GET_SINGLE_RECIPE_SUCCESS:
            return {
                ...state,
                singleRecipe: payload,
                getSingleRecipesError: null
            };
        case GET_SINGLE_RECIPE_FAIL:
            return { ...state, getSingleRecipesError: payload };
        case SET_RECIPE_RATING_FAIL:
            return { ...state, rateRecipeError: payload };

         case SET_RECIPE_RATING_SUCCES:
                return setRatedRecipeHelper(state, payload);
        default:
            return state;
    }
};

function setRatedRecipeHelper(state, payload){
    const newValue = state.ratedRecipes.concat([payload]);

    return {...state, ratedRecipes: newValue, rateRecipeError: null}
}