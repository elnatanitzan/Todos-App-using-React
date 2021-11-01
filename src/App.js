import React, { Component } from 'react'
import './App.scss';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export class App extends Component {
  
  state = {
    todos: [
      {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - Learn React',  text:  'Learn React all the morning', date: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(), done: false},
      {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - By food', text:  'by food in market', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), done: false},
      {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - Pray to God!', text:  'go to fild todo Hidbodedut', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), done: false}
    ],
  }

  componentDidMount() {
    if (localStorage.getItem('todos')) {
      this.setState({
        todos: [...JSON.parse(localStorage.getItem('todos'))],
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  addTodo = (new_todo) => {
    const new_arr = [...this.state.todos];
    new_arr.push({
      ...new_todo, 
      id: Math.random().toString(36).substr(2, 9), 
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    });
    this.setState({ todos: new_arr })
  }

  deleteTodo = (_id) => {
    const new_todos = this.state.todos.filter(todo => todo.id !== _id);
    this.setState({ todos: new_todos, })
  }

  expandTodo = (_id) => {
    const expand_todo = [...this.state.todos];
    const todoExpand = expand_todo.find( ({ id }) => id === _id );
    todoExpand.full_display = !todoExpand.full_display;
    this.setState({ todos: expand_todo, })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Todos-list</h1>
          <AddTodo addTodo={this.addTodo}/>
        </header>
        <div className="main">
          <Todos todos={this.state.todos} 
          deleteTodo={this.deleteTodo}
          expandTodo={this.expandTodo}/>
        </div>
      </div>
    )
  }
}

export default App;