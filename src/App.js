import { useState, useEffect} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.scss';

const initial_todos = [
    {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - Learn React',  text:  'Learn React all the morning', date: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString()},
    {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - By food', text:  'by food in market', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
    {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - Pray to God!', text:  'go to fild todo Hidbodedut', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()}
];

function App() {

    const [todos, setTodos] = useState(() => {
        if (localStorage.getItem('todos')) {
            return [...JSON.parse(localStorage.getItem('todos'))]
        } else { return initial_todos }
    })

    const addTodo = (new_todo) => {
        setTodos([new_todo, ...todos])
    }

    const deleteTodo = (id) => {
        const new_todos = todos.filter(todo => todo.id !== id);
        setTodos([...new_todos])
    }

    const expandTodo = (_id) => {
        const todoExpand = todos.find( ({ id }) => id === _id );
        todoExpand.full_display = !todoExpand.full_display;
        setTodos([...todos])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    })

    return (
        <div className="App">
            <header>
                <h1>Todos-list</h1>
                <AddTodo addTodo={addTodo}/>
            </header>
            <div className="main">
                <Todos todos={todos}
                       deleteTodoApp={deleteTodo}
                        expandTodoApp={expandTodo}
                       />
            </div>
        </div>
    )
}

export default App