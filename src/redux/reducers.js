import React from "react";
import {ADD_TODO, DELETE_TODO} from "./actios";


// 초기 state를 정의한다.
const initialState = {
    todos : []
};

// reducer 작성
export const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TODO :
            return {
                todos : [...state.todos, action.todo]
            };
            break;
        case DELETE_TODO :
            return {
                todos : [...state.todos.filter((todo) => todo.id !== action.id)]
            };
            break;
        default :
            return state;
            break;
    }
}