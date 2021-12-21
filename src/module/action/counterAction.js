export const PLUS_NUM  = "PLUS_NUM";
export const MINUS_NUM = "MINUS_NUM";
export const RESET_NUM = "RESET_NUM";

export const plus_num = () => {
        return {
            type : PLUS_NUM,
            text : "Plus"
        }
}
export const minus_num = () => {
    return {
        type : MINUS_NUM,
        text : "Minus"
    }
}
export const reset_num = () => {
    return {
        type : RESET_NUM,
        text : "Reset"
    }
}