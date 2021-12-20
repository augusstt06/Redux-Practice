import React from "react";

import * as S from "./TodoList.style"

import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

const TodoList = () => {
    // useSelector를 이용하여 state를 가져온다.
    const todos = useSelector((state) => state.todos);

    return (
        <S.Container>
            {todos.map(data => (
                <TodoItem key = {data.id} todo = {data}/>
            ))}
        </S.Container>
    )
};

export default TodoList;