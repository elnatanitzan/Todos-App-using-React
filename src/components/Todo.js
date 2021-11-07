export default function Todo({ todo, deleteTodo, expandTodo }) {

    return (
        <div className='todo'>
            <i className="fas fa-clipboard-check" 
                data-text="Mark as Done!" 
                onClick={() => deleteTodo(todo.id)}>
            </i>
            <h4>{todo.title}</h4>
            <div className="note-container" >
                <p className={todo.full_display === false ? 'note less' : 'note more'}>{todo.text}</p>
                
                {todo.text.length > 30 &&
                    <button
                    onClick={() => expandTodo(todo.id)}
                    className="display-button">{todo.full_display === false ? 'Expand' : 'Close'}
                    </button>
                }

            </div>          
            <p className="date">{todo.date} | {todo.time}</p>
        </div>
      );
    
}