import { all } from "redux-saga/effects";
import cookBookSagas from "../cook book/cookBook.sagas";
import { recipeSagas } from "../Recipe hadnling/recipeForm.sagas";


export default function* RootSaga() {
    yield all([
       ...cookBookSagas,
       ...recipeSagas
    ]);
}
