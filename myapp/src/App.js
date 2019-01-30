import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
// class based component
class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]


  }

  fn_addninja = (ninja) => { //(ninja) is the parameter passed.
      console.log(ninja)
      ninja.id = Math.random();

      let copyninjas = [...this.state.ninjas,ninja] // .. is a spread operator

      this.setState({
          // ninja:this.ninjas.push(ninja) bad practice 
          // copy the state and push then re-set all i think.
          ninjas:copyninjas
      })
  }

  fn_deleteNinja = (id) => {
    let new_arr_ninja_out = this.state.ninjas.filter( new_array_ninja_in => {
      return new_array_ninja_in.id !==id
    })
    this.setState({
      ninjas:new_arr_ninja_out
    })
    console.log(id)
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
        <h1>My first React app</h1>
        <Ninjas prop_deleteninja={this.fn_deleteNinja} ninjas={this.state.ninjas}  />
        <AddNinja addNinja={this.fn_addninja}/>
      </div>
    );
  }
}

export default App;
