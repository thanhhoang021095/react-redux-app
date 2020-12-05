import { combineReducers } from "redux";
import productReducer from "./product";

const reducer = combineReducers({
    product: productReducer,
})
export default reducer;