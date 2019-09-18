import { all } from "redux-saga/effects";
import cookBookSagas from "../cook book/cookBook.sagas";


export default function* RootSaga() {
    yield all([
       ...cookBookSagas
    ]);
}
