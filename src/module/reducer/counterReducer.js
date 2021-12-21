import {PLUS_NUM, MINUS_NUM, RESET_NUM} from "../action/counterAction";

const initialState = {
    number : 0
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case PLUS_NUM :
            return {
                ...state,
                number: state.number + 1
            }
        case MINUS_NUM :
            return {
                ...state,
                number : state.number - 1
            }
        case RESET_NUM :
            return {
                ...state,
                number : 0
            }
        default :
            return state
    }
};