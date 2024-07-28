export const addTodo = (task, pos) => {
    return {
        type: 'ADD_TODO',
        data: {
            task: task,
            pos: pos
        }
    }
};

export const addCompleted = (task, pos) => {
    return {
        type: 'ADD_COMPLETED',
        data: {
            task: task,
            pos: pos
        }
    }
};

export const updateTodo = (task, pos) => {
    return {
        type: 'UPDATE_TODO',
        data: {
            task: task,
            pos: pos
        }
    }
};

export const clearCompleted = () => {
    return {
        type: 'CLEAR_COMPLETED'
    }
};