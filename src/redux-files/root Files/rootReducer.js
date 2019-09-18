import {combineReducers} from 'redux'
import cookBookReducer from '../cook book/cookBook.reducer'




const rootReducer = combineReducers({
    cookBook: cookBookReducer
})


export default rootReducer;