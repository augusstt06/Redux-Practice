import {combineReducers} from "redux";
import counterReducer from "./counterModule";
import mainReducer from "./mainModule";

const rootReducer = combineReducers({
    counterReducer,
    mainReducer

});
export default rootReducer;

