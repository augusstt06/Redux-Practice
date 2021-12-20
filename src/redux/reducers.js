import {ADD_TODO, DELETE_TODO} from "./actions";


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
        case DELETE_TODO :
            return {
                todos : [...state.todos.filter((todo) => todo.id !== action.id)]
            };
        default :
            return state;
    }
}