import React from "react";
import * as S from "./App.styles";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";



function App() {
  return (
    <S.Container>
        <S.Wrapper>
            <h2>Redux Tutorial</h2>
            <InputForm/>
            <TodoList/>
        </S.Wrapper>
    </S.Container>
  );
}

export default App;
