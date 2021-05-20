import React, { useEffect, useReducer, useState } from 'react'
import "./styles.css";
import { todoReducer } from './todoReducer';
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

const TodoApp = () => {

    const [inputValue, setInputValue] = useState("");

    // const initialState = [{
    //         id: uuidv4(),
    //         desc: "Learn React",
    //         done: false
    //     },
    //     {
    //         id: uuidv4(),
    //         desc: "Learn Mongo DB",
    //         done: false
    //     },
    //     {
    //         id: uuidv4(),
    //         desc: "Learn Vue JS",
    //         done: false
    //     }
    // ]

    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    }

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleTodoSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: uuidv4(),
            desc: inputValue,
            done: false
        }

        if(inputValue.length > 2) {
            dispatch({type: "addTodo", payload: newTodo});
            setInputValue("");
        }
    }


    return (
        <div>
            <h1>Todo App ( {todos.length} )</h1>
            <hr />

            <AddTodoForm handleTodoSubmit={handleTodoSubmit} handleChange={handleChange} value={inputValue} />

            {todos.length < 1? <div>Seems you have nothing to do! :)</div> : <small></small>}

            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}

export default TodoApp
