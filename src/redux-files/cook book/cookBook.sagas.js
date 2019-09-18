import {takeLatest, put, fork, call} from 'redux-saga/effects';






function* getRecipesWatcher(){
   yield takeLatest();
}

const cookBookSagas = [
    fork(getRecipesWatcher),

]


export default cookBookSagas;