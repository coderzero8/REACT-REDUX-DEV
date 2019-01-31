import React, { Component } from 'react';
import FcTodos from './fc_Todos'
import CbTodos from './cb_AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  fn_deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  fn_addTodo =(todo)=>{
    todo.id=Math.random();
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <FcTodos prop_todos={this.state.todos} prop_deleteTodo={this.fn_deleteTodo} /> 
        <CbTodos prop_todos={this.fn_addTodo} /> 
      </div>
    );
  }
}

export default App;
