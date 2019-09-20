import { takeLatest, put, fork, call } from "redux-saga/effects";
import ActionTypes from "./cookBook.action-types";
import { GetRecipes, GetSingleRecipe, sendRecipeRating } from "../../API/api";

const {
    GET_RECIPES_START,
    GET_RECIPES_SUCCESS,
    GET_RECIPES_FAIL,
    GET_SINGLE_RECIPE_FAIL,
    GET_SINGLE_RECIPE_START,
    GET_SINGLE_RECIPE_SUCCESS,
    SET_RECIPE_RATING_FAIL,
    SET_RECIPE_RATING_SUCCES,
    SET_RECIPE_RATING_START
    
} = ActionTypes;

function* getRecipesSaga() {
    try {
        const response = yield call(GetRecipes);
       
        const data = yield response.data


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

  }catch(error){
    yield put({ type: GET_SINGLE_RECIPE_FAIL, payload: error });
  }
}


function* setRecipeRatingSaga(action){
  const {score, recipeId} = action.payload;
  try {
    yield call(sendRecipeRating, score,recipeId)
    yield put({type:SET_RECIPE_RATING_SUCCES, payload:recipeId})
  } catch (error) {
    yield put({type:SET_RECIPE_RATING_FAIL, payload:error})
  }
}


function* setRecipeRatingWatcher(){
  yield takeLatest(SET_RECIPE_RATING_START, setRecipeRatingSaga)
}

function* getSingleRecipeWatcher() {
    yield takeLatest(GET_SINGLE_RECIPE_START, singleRecipeSaga );
}

function* getRecipesWatcher() {
    yield takeLatest(GET_RECIPES_START, getRecipesSaga);
}



const cookBookSagas = [fork(getRecipesWatcher), fork(getSingleRecipeWatcher), fork(setRecipeRatingWatcher)];

export default cookBookSagas;
