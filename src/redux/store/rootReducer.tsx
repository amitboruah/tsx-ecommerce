import { combineReducers } from "redux";
import productReducers from "../product/reducer"

const rootReducer = combineReducers({prodlist: productReducers})

export default rootReducer