import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import RootSaga from './rootSaga';

const SagaMiddleware = createSagaMiddleware();
const MiddleWares = [SagaMiddleware];



const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(...MiddleWares)
    ));

SagaMiddleware.run(RootSaga);



export default store;