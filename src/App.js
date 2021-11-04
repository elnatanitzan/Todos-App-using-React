import React, { Component } from 'react'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { connect } from 'react-redux';
import { delete_todo_action, add_todo_action, expand_todo_action, restore_todos_a} from './reducers/actions'
import './App.scss';

export class App extends Component {
  
  state = {
  }

  componentDidMount() {
    if (localStorage.getItem('todos')) {
      const restoreTodos = [...JSON.parse(localStorage.getItem('todos'))]
      this.props.restore_todos(restoreTodos);
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.props.todos))
  }

  addTodo = (new_todo) => {
    const newTodo = {
      ...new_todo,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      full_display: false
    }
   this.props.add_todo(newTodo);
  }

  deleteTodo = (_id) => {
   this.props.delete_todo(_id);
  }

  expandTodo = (_id) => {
   this.props.expand_todo(_id);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todos-list</h1>
          <AddTodo addTodo={this.addTodo}/>
        </header>
        <div className="main">
          <Todos todos={this.props.todos} 
          deleteTodo={this.deleteTodo}
          expandTodo={this.expandTodo}/>
        </div>
      </div>
    )
  }
}

const reducerToApp = (reducerState, appProps) => {
  return {
    ...appProps,
    todos: reducerState.todos
  };
}

const dispatchFunc = (dispatch) => {
  return {
    delete_todo: id => dispatch(delete_todo_action(id)),
    add_todo: new_todo => dispatch(add_todo_action(new_todo)),
    expand_todo: id => dispatch(expand_todo_action(id)),
    restore_todos: todos => dispatch(restore_todos_a(todos))
  }
}

export default connect(reducerToApp, dispatchFunc)(App);