import React, { useState } from 'react'

const TodoItem = ({todo, dispatch}) => {

    const [done, setDone] = useState(true);

    const handleClick = () => {
        dispatch({type: "markIfTodoDone", payload: todo});
        setDone(!done);
    }

    const completed = done ? "notCompleted" : "complete";

    return (
        <div className="todoDiv">
        <p className={completed}>{todo.desc}</p>
        <div>
            <button className="btn btn-outline-primary m-2" onClick={handleClick}>
                {todo.done ? "Not Done" : "Done"}
            </button>
            <button className="btn btn-outline-danger m-2" onClick={() => dispatch({type: "deleteTodo", payload: todo})}>
                Delete
            </button>
        </div>                       
    </div>
    )
}

export default TodoItem
