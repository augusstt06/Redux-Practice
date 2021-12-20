import React from "react";
import * as S from "./Todo.styles";

import InputForm from "./InputComponents/InputForm";
import TodoList from "./TodoComponents/TodoList";

const TodoContainer = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <h2>Redux Tutorial</h2>
                <InputForm/>
                <TodoList/>
            </S.Wrapper>
        </S.Container>
    )
};
export default TodoContainer;