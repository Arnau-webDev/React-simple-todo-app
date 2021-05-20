
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case "addTodo":
            return [...state, action.payload]
        
        case "markIfTodoDone":
            return state.map((el) => {
                if(el.id === action.payload.id) {
                    return {
                        ...el,
                        done: !el.done
                    }
                }
                return el;
            })
        case "deleteTodo":
            return state.filter((el) => {
                return el.id !== action.payload.id;
            })
        default:
            return state;
    }
}