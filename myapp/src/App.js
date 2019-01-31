import React, { Component } from 'react';
// class based component
class App extends Component {
  state = {
    array1: [
    
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

      </div>
    );
  }
}

export default App;
