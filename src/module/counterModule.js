const PLUS_NUM = "PLUS_NUM";
const MINUS_NUM = "MINUS_NUM";
const RESET_NUM = "RESET_NUM";

export const plus_num = () => {
    return {
        type : PLUS_NUM,
        data : {
            text : "plus"
        }
    }
};
export const minus_num = () => {
    return {
        type : MINUS_NUM,
        data : {
            text : "minus"
        }
    }
};
export const reset_num = () => {
    return {
        type : RESET_NUM,
        data : {
            text : "reset"
        }
    }
};

const initialState = {
    number : 0
};
const counterReducer = (state=initialState, action) => {
    switch (action.type){
        case PLUS_NUM :
            return {
                ...state,
                number : state.number + 1
            };
        case MINUS_NUM :
            return {
                ...state,
                number : state.number - 1
            };
        case RESET_NUM :
            return {
                ...state,
                number : 0
            }
        default :
            return state
    }
};
export default counterReducer;