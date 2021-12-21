import {combineReducers} from "redux";
import {counterReducer} from "./reducer/counterReducer";
import {mainReducer} from "./reducer/mainReducer";

const rootReducer = combineReducers({
    counterReducer,
    mainReducer
});
export default rootReducer;

