import React, { Component } from 'react';
import fc_todos from './fc_todos';
// class based component
class App extends Component {
  state = {
    todos: [ //property array
      {id:1, content:"buy some milk"},
      {id:2, content:"play mario cart"},
    ]
  }

  componentDidMount(){ //hooks component method default
    console.log('component did mount')
  }

  componentDidUpdate(prevProps,preveState){ //hooks component method default
    console.log("component updated")
    console.log(prevProps,preveState)
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>  
          <fc_todos prop_todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
