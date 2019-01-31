import React from 'react';

const fc_Todos = ({prop_todos, prop_deleteTodo}) => {

  const todoList = prop_todos.length ? (
    prop_todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {prop_deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
    ) : (
      <p className="center">You have no todo's left, yay!</p>
    );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default fc_Todos;
