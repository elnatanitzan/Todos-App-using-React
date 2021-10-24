import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        new_todo: {
            title: null,
            text: null,
            date: null, 
            done: false
        },
    }

    handleChange = (e) => {
        const really_new_todo = {...this.state.new_todo};
        really_new_todo[e.target.id] = e.target.value;
        this.setState({ new_todo: really_new_todo })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.new_todo);
        const emty_todo = {title: null, text: null, date: null, done: false}
        this.setState({ new_todo:  emty_todo})
        e.target.reset()
        
    }
    render() {
        
        return (
            <div>
                <h3>Add new Task:</h3>
                <form className="form-class" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" maxLength="30"/>
                    <label htmlFor="text">Note:</label>
                    <input type="text"  id="text" maxLength="300" required/>
                    <button >Add</button>
                </form>  
            </div>
        )
    }
}

export default AddTodo;