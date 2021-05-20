
const initialState = [{
    id: 1,
    todo: "buy milk",
    done: false
}];

const todoReducer = (state = initialState, action) => {

    // console.log(action);

    if(action?.type === "Agregar") {
        return [...state, action.payload]
    }


    return state
}


let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "buy cereal",
    done: false
}

const addTodoAction = {
    type: "Agregar",
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);