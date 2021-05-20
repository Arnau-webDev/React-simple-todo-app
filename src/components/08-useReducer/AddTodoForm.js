import React from 'react'

const AddTodoForm = ({handleTodoSubmit, handleChange, value}) => {
    return (
        <>
          <form onSubmit={handleTodoSubmit}>
                <input 
                    type="text" 
                    name="description" 
                    value={value} 
                    onChange={handleChange} 
                    autoComplete="off"
                    placeholder=" Todo description"
                />
                <button type="submit" className="btn btn-primary" > Add Todo </button>
            </form>  
        </>
    )
}

export default AddTodoForm
