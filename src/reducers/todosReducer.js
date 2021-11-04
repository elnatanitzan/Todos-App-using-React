const init_state = {
    todos: [
        {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - Learn React',  text:  'Learn React all the morning', date: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(), done: false},
        {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - By food', text:  'by food in market', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), done: false},
        {full_display: false, id: Math.random().toString(36).substr(2, 9), title: '*EXAMPLE* - Pray to God!', text:  'go to fild todo Hidbodedut', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), done: false}
      ],
}

const todosReducer = (state = init_state, action) => {
   
    if ( action.type === 'DELETE_TODO') {
        const new_todos = state.todos.filter(todo => todo.id !== action.todo_id);
        return {
            ...state,
            todos: new_todos, 
        }
    }

    else if (action.type === 'ADD_TODO') {
        const new_arr = [...state.todos];
        new_arr.unshift({
            ...action.new_todo, 
            id: Math.random().toString(36).substr(2, 9), 
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            full_display: false
        });
        return {
            ...state,
            todos: new_arr
        }
    }

    else if (action.type === 'EXPAND_TODO') {
        const expand_todo = [...state.todos];
        const todoExpand = expand_todo.find( ({ id }) => id === action.todo_id );
        todoExpand.full_display = !todoExpand.full_display;
        return {
            ...state,
            todos: expand_todo, 
        }
    }

    else if (action.type === 'RESTORE_TODOS') {
        return {
            ...state,
            todos: action.todos
        }
    }
    
    return state;
}

export default todosReducer;