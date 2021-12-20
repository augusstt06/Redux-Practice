import React from "react";

import {useDispatch} from "react-redux";

import * as S from "./TodoItem.style";
import {delete_todo} from "../redux/actios";

const TodoItem = ({todo}) => {
    // Todo를 삭제하는  DELTE action을 dispatch 한다.
    const dispatch = useDispatch();
    const { id, title, isComplete } = todo;

    const handleClick = () => {
        dispatch(delete_todo(id));
    };

    return (
        <S.Container>
            <S.TextColumn>
                <div>
                    <S.Text>{title}</S.Text>
                </div>
                <S.X onClick={handleClick}>
                    {isComplete || "X"}
                </S.X>
            </S.TextColumn>
        </S.Container>
    )
};
export default TodoItem;