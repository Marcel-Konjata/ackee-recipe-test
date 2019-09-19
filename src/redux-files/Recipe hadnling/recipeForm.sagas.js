import { put, fork, takeLatest, call } from "redux-saga/effects";
import actionTypes from "./recipeForm.actionTypes";
import { postRecipe } from "../../API/api";

const {
    POST_RECIPE_START,
    POST_RECIPE_FAILURE,
    POST_RECIPE_SUCCES
} = actionTypes;

function* postRecipeSaga(action) {
    const data = action.payload;
    try {
        yield call(postRecipe, data);
        yield put({ type: POST_RECIPE_SUCCES, payload: "success" });
    } catch (error) {
        console.log(error)
        yield put({ type: POST_RECIPE_FAILURE, payload: error });
    }
}

function* postRecipeWatcher() {
    yield takeLatest(POST_RECIPE_START, postRecipeSaga);
}

export const recipeSagas = [fork(postRecipeWatcher)];
