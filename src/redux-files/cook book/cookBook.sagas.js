import { takeLatest, put, fork, call } from "redux-saga/effects";
import ActionTypes from "./cookBook.action-types";
import { GetRecipes, GetSingleRecipe } from "../../API/api";

const {
    GET_RECIPES_START,
    GET_RECIPES_SUCCESS,
    GET_RECIPES_FAIL,
    GET_SINGLE_RECIPE_FAIL,
    GET_SINGLE_RECIPE_START,
    GET_SINGLE_RECIPE_SUCCESS,
    
} = ActionTypes;

function* getRecipesSaga() {
    try {
        const response = yield call(GetRecipes);
        const data = yield response.data;
        yield put({ type: GET_RECIPES_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: GET_RECIPES_FAIL, payload: error });
    }
}


function* singleRecipeSaga(action) {
  const id = action.payload;
  try{
    const response = yield call(GetSingleRecipe, id);
    const data = yield response.data;
    yield put({ type: GET_SINGLE_RECIPE_SUCCESS, payload: data });
    console.log(id)
  }catch(error){
    yield put({ type: GET_SINGLE_RECIPE_FAIL, payload: error });
  }
}




function* getSingleRecipeWatcher() {
    yield takeLatest(GET_SINGLE_RECIPE_START, singleRecipeSaga );
}

function* getRecipesWatcher() {
    yield takeLatest(GET_RECIPES_START, getRecipesSaga);
}



const cookBookSagas = [fork(getRecipesWatcher), fork(getSingleRecipeWatcher)];

export default cookBookSagas;
