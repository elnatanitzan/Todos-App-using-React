export const delete_todo_action = id => {
    return {
        type: 'DELETE_TODO',
        todo_id: id
    }
}

export const add_todo_action = new_todo => {
    return {
        type: 'ADD_TODO',
        new_todo: new_todo
    }
}

export const expand_todo_action = id => {
    return {
        type: 'EXPAND_TODO',
        todo_id: id
    }
}

export const restore_todos_a = todos => {
    return {
        type: 'RESTORE_TODOS',
        todos: todos
    }
}