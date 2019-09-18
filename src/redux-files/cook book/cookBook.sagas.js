import {takeLatest, put, fork, call} from 'redux-saga/effects';
import ActionTypes from "./cookBook.action-types";
import { GetRecipes } from '../../API/api';

const {GET_RECIPES_START, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL} = ActionTypes;



function* getRecipeSaga(){
    try {
      const response = yield call(GetRecipes)
        const data = yield response.data;
        yield put({type: GET_RECIPES_SUCCESS, payload: data})
    } catch (error) {
      yield put({type: GET_RECIPES_FAIL, payload: error }) 
    }
}

function* getRecipesWatcher(){
   yield takeLatest(GET_RECIPES_START, getRecipeSaga);
}

const cookBookSagas = [
    fork(getRecipesWatcher),

]


export default cookBookSagas;