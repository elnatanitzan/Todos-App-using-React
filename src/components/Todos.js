import React, { Component } from 'react';

export class Todos extends Component {

    state = {
        is_appear: false,
    }
    
    
    render() {
        const isAppear = this.state.is_appear;
        const { todos } = this.props

        const todos_list = todos.map(_todo => {
            return (
                <div key={_todo.id} className={isAppear === false ? 'todo appear' : 'todo disappear'}>
                    <div className="button" onClick={() => this.props.deleteTodo(_todo.id)}></div>
                    <h3>{_todo.title}</h3>
                    <p className="note">{_todo.text}</p>
                    <div className="date">
                        <p>{_todo.date} | {_todo.time}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className="todos" >
                {todos_list} 
            </div>
        )
    }
}

export default Todos;
