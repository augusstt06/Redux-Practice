import {CLICK_GOTRUE,CLICK_GOFALSE} from "../action/mainAction";

const initialState = "false";

export const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case CLICK_GOTRUE :
            return "true"
        case CLICK_GOFALSE :
            return "false"
        default :
            return state
    }
};