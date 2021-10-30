import React, { Component } from 'react';

export class Todos extends Component {

    state = {
        full_display: false
    }
    
    render() {
        const { todos } = this.props;
        // const expandNote = () => {
        //     this.setState({
        //         full_display: !this.state.full_display
        //     })
        // }
        
        const todos_list = todos.map(_todo => {
            return (
                <div key={_todo.id} className='todo' todo={_todo}>
                    <div className="done" onClick={() => this.props.deleteTodo(_todo.id)}></div>
                    <h4>{_todo.title}</h4>
                    <div className="note-container" >
                        <p 
                        className={_todo.full_display === false ? 'note less' : 'note more'}
                        >{_todo.text}</p>
                        {_todo.text.length > 30 &&
                            <button
                            onClick={() => this.props.expandTodo(_todo.id)}
                            className="display-button">{_todo.full_display === false ? 'Expand' : 'Close'}
                            </button>
                        }
                    </div>          
                    <p className="date">{_todo.date} | {_todo.time}</p>
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
