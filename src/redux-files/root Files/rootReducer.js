import {combineReducers} from 'redux'
import cookBookReducer from '../cook book/cookBook.reducer'
import recipeFormReducer from '../Recipe hadnling/recipeForm.reducer'




const rootReducer = combineReducers({
    cookBook: cookBookReducer,
    recipeForm: recipeFormReducer
})


export default rootReducer;