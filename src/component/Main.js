import React from "react";
import {Link} from "react-router-dom";
import {click_true, click_false} from "../module/mainModule";
import {useSelector,useDispatch} from "react-redux";


const Main = () => {
    const current = useSelector(state => state.mainReducer)
    console.log(useSelector(state => state))
    const dispatch = useDispatch();
    const clickTrue = () => {
        dispatch(click_true());
    };
    const clickFalse = () => {
        dispatch(click_false());
    }
    return (
        <div>
            <h1>메인 화면</h1>
            <h2>현재 상태</h2>
            <br/>
            <h3>{current}</h3>
            {current === "false" ?
            <button onClick={clickFalse}>Change to True?</button>
            :
            <button onClick={clickTrue}>Change to False?</button>
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