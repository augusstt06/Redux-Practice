
// action 정의
export const ADD_TODO    = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

let id = 1;

// action 생성함수 정의
// 생성 시에는 매개변수로 받은 todo 객체를  reducer에게 반환
export const add_todo = (todo) => {
    return {
        type : ADD_TODO,
        todo : {
            id         : id++,
            title      : todo.title,
            isComplete : todo.isComplete
        },
    };
};

// 삭제시에는 삭제하려는 todo의 id 반환
export const delete_todo = (id) => {
    return {
        type : DELETE_TODO,
        id
    }
}