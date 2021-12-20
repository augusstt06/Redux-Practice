import React, {useState} from "react";
import {useDispatch} from "react-redux";

import * as S from "./InputForm.styles"
import {add_todo} from "../../../redux/actions";

const InputForm = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const handleChange = (e) => {
        const {value} = e.target;
        setText(value);
    };

    // Add를 클릭했을때 reducer를 호출하여 state를 변경한다.
    const handleClick = () => {
        const todo = {
            title     : text,
            isComplete: false
        };
        dispatch(add_todo(todo));
        setText('');
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            handleClick();
        }
    };

    return (
        <S.Container>
            <S.InputBox type        = 'text'
                        placeholder = 'Typing your TODO'
                        onChange    = {handleChange}
                        value       = {text}
                        onKeyDown   = {handleKeyPress}/>

            <S.Button onClick = {handleClick}>Add</S.Button>
        </S.Container>
    )

};
export default InputForm;