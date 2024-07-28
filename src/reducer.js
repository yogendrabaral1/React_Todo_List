const task = {
    todoList: [],
    completedList: []
};

const ADD_TODO = "ADD_TODO";
const ADD_COMPLETED = "ADD_COMPLETED";
const UPDATE_TODO = "UPDATE_TODO";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

const TodoReducer = (state = task, action) => {
    switch (action.type) {
        case ADD_TODO:
            if (action.data.pos === '') {
                return {
                    ...state,
                    todoList: [...state.todoList, action.data.task]
                }
            } else {
                let newList = [...state.todoList];
                newList.splice(action.data.pos, 1);
                newList.splice(action.data.pos, 0, action.data.task);
                return {
                    ...state,
                    todoList: newList
                }
            }

        case ADD_COMPLETED:
            let list = [...state.todoList];
            list.splice(action.data.pos, 1);
            return {
                ...state,
                todoList: list,
                completedList: [...state.completedList, action.data.task]
            }

        case UPDATE_TODO:
            let comlist = [...state.completedList];
            comlist.splice(action.data.pos, 1);
            return {
                ...state,
                todoList: [...state.todoList, action.data.task],
                completedList: comlist
            }

        case CLEAR_COMPLETED:
            return {
                ...state,
                completedList: []
            }

        default:
            return {
                ...state
            }
    }
}

export default TodoReducer;