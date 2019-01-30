import React, {Component} from 'react'

class AddNinja extends Component{

    state ={
        name :null,
        age :null,
        belt :null   
    }

    fn_handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    fn_handleSubmit = (e) =>{
      e.preventDefault();
        //console.log(this.state)

        this.props.addNinja(this.state);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.fn_handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange = {this.fn_handleChange}/>
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange = {this.fn_handleChange}/>
                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange = {this.fn_handleChange}/>
                    <button >Submit</button>                
                </form>
            </div>
        )
    }
}

export default AddNinja