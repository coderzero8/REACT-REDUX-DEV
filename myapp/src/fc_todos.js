import React from 'react'

const fc_todos = () => {

    const todoList = todos.length ?(
        todos.map(todo=>{
            return(
                <div className="colletion-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ):(
        <p className="center">You have no todos left yay!</p>
    )

    

    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default fc_todos;