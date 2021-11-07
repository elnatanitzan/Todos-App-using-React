import Todo from "./Todo";

export default function Todos({ todos, deleteTodoApp, expandTodoApp }) {

    const deleteTodo = (id) => {
        deleteTodoApp(id);
    }

    const expandTodo = (id) => {
        expandTodoApp(id);
    }

    return (
        <div className="todos">
            {todos.map(todo => (
                <Todo key={todo.id}
                      todo={todo}
                      deleteTodo={deleteTodo}
                      expandTodo={expandTodo}
                />
            ))}
        </div>
    )
}