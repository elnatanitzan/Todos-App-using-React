import * as React from 'react';
import { Component } from 'react';

class AddTodo extends Component {

    state = {
        show_input: false,
        new_todo: {
            title: null,
            text: null,
            date: null,
            time: null,
            done: false,
            full_display: false
        },
    }

    handleChange = (e) => {
        const really_new_todo = {...this.state.new_todo};
        really_new_todo[e.target.id] = e.target.value;
        this.setState({ new_todo: really_new_todo })
    }


    handleSubmit = (e) => {
        this.setState({ show_input: !this.state.show_input });
        e.preventDefault();
        this.props.addTodo(this.state.new_todo);
        const emty_todo = {title: null, text: null, date: null, done: false};
        this.setState({ new_todo:  emty_todo});
        e.target.reset()   
    }

    render() {
        return (
            <div>
                { this.state.show_input === false &&
                    <i className="fas fa-plus-circle"
                    onClick={() => this.setState({ show_input: !this.state.show_input })}>
                    </i>
                }
                
                {this.state.show_input === true &&
                        <>
                        <form className="form-class" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                            <label htmlFor="title"></label>
                            <input type="text" id="title" maxLength="19" placeholder="Title..."/>
                            <label htmlFor="text"></label>
                            <input className="note" type="text"  id="text" maxLength="300" required placeholder="task..."/>
                            <button className="fas fa-plus-circle"></button>
                        </form>
                        </>
                }
                
            </div>
        )
    }
}

export default AddTodo;