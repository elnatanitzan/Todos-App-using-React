import React, { Component } from 'react'

export class Todos extends Component {

    
    render() {
        console.log(this.props);
        const { todos } = this.props

        const todos_list = todos.map(_todo => {
            return (
                <div key={_todo.id} className="todo">
                    <h3>{_todo.title}</h3>
                    <p>{_todo.text}</p>
                    <span>
                        <p>created in {_todo.date}</p>
                        <button onClick={() => this.props.deleteTodo(_todo.id)}>Done</button>
                    </span>
                </div>
            )
        })

        return (
            <div className="todos">
                {todos_list} 
            </div>
        )
    }
}

export default Todos
