export const CLICK_GOTRUE = "CLICK_GOTRUE";
export const CLICK_GOFALSE = "CLICK_GOFALSE";

export const click_goTrue = () => {
    return {
        type : CLICK_GOTRUE,
        text : "true"
    }
};
export const click_goFalse = () => {
    return {
        type : CLICK_GOFALSE,
        text : "false"
    }
}