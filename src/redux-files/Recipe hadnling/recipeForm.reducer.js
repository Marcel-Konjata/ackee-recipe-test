import actionTypes from "./recipeForm.actionTypes";
const {
    POST_RECIPE_SUCCES,
    POST_RECIPE_FAILURE,
    RECIPE_REDUCER_RESET
} = actionTypes;

const INITIAL_STATE = {
    postSuccess: false,
    postError: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case POST_RECIPE_SUCCES:
            return { ...state, postSuccess: true, postError: null };
        case POST_RECIPE_FAILURE:
            return { ...state, postSuccess: false, postError: payload };
        case RECIPE_REDUCER_RESET:
            return { ...state, postError: null, postSuccess: false };
        default:
            return state;
    }
};
