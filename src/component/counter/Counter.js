import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {plus_num, minus_num, reset_num} from "../../module/action/counterAction";

const Counter = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.counterReducer.number);
    const current = useSelector(state => state.mainReducer)
    const clickPlus = () => {
        dispatch(plus_num())
    };
    const clickMinus = () => {
        dispatch(minus_num())
    };
    const clickReset = () => {
        dispatch(reset_num())
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{current}</h2>
            <h2>{number}</h2>
            <h1 onClick={clickPlus}>+</h1>
            <h1 onClick={clickReset}>Reset</h1>
            <h1 onClick={clickMinus}>-</h1>
        </div>
    )
};

export default Counter;