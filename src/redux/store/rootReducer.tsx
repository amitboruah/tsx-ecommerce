import { combineReducers } from "redux";
import authReducer from "../auth/reducer";
import productReducers from "../product/reducer"


const rootReducer = combineReducers({prodlist: productReducers,authReducer})

export default rootReducer