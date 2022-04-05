import { combineReducers } from "redux";
import productReducer from "./produtReducer"

const rootReducer = combineReducers({prodlist: productReducer})

export default rootReducer