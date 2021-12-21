import React from "react";
import {Link} from "react-router-dom";
import {click_goTrue, click_goFalse} from "../module/action/mainAction";
import {useSelector,useDispatch} from "react-redux";


const Main = () => {
    const current = useSelector(state => state.mainReducer)
    console.log(current)
    const dispatch = useDispatch();
    const clickTrue = () => {
        dispatch(click_goTrue());
    };
    const clickFalse = () => {
        dispatch(click_goFalse());
    }
    return (
        <div>
            <h1>메인 화면</h1>
            <h2>현재 상태</h2>
            <br/>
            <h3>{current}</h3>
            {current === "false" ?
            <button onClick={clickTrue}>Click!</button>
            :
            <button onClick={clickFalse}>Click!</button>
            }
            <br/><br/>
            <Link to ='/counter'>
                Counter
            </Link>
            <br/><br/>
            <Link to ='/list'>
                List
            </Link>
            <br/><br/>
        </div>
    )
};

export default Main;