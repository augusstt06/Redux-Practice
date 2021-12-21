const CLICK_TRUE = "CLICK_TRUE";
const CLICK_FALSE = "CLICK_FALSE";

export const click_true = () => {
    return {
        type : CLICK_TRUE,
        data : {
            text : "false"
        }
    }
};
export const click_false = () => {
    return {
        type : CLICK_FALSE,
        data : {
            text : "true"
        }
    }
};

const initialState = "false";

const mainReducer = (state=initialState, action) => {
    switch (action.type){
        case CLICK_TRUE :
            return "false"
        case CLICK_FALSE :
            return "true"
        default :
            return state
    }
};
export default mainReducer;