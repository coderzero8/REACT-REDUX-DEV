// cd_ means class based 

import React, {Component} from 'react'

class cb_AddTodo extends Component {
    state={
            content:''
    }

    fn_handleChange = (e) =>{

        console.log(e)
        this.setState({
            content:e.target.value
        })
    }

    fn_handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();     
        this.props.prop_todos(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.fn_handleSubmit}>              
                    <label htmlFor="">Add new todo:</label>
                    <input type="text" onChange={this.fn_handleChange}/>
                </form>
            </div>
        )
    }


}

export default cb_AddTodo