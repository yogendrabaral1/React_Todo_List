import React from 'react';
import './TodoList.css';

function TodoList(props) {
    const handleClick = (e, item, index) => {
        e.stopPropagation();
        if (props.list === "todoList") {
            props.addCompleted(item, index);
        } else {
            props.updateTodo(item, index);
        }
    }

    const handleClear = (e) => {
        e.preventDefault();
        props.clearCompleted();
    }

    const handleEditItem = (e, item, index) => {
        e.stopPropagation();
        if (props.list === "todoList") {
            props.handleEdit(item, index);
        }
    }

    return (
        <div className="todoList">
            {props.todoList.length > 0 ? props.list === "Completed List" && <h5>{props.list}</h5> : ''}
            <ul className="list">
                {props.todoList.length > 0 ?
                    props.todoList.map((item, index) => (
                        <li key={index}><span className="checkBox"><input type="checkbox" onClick={(e) => handleClick(e, item, index)} checked={props.checked} /></span><span onClick={(e) => handleEditItem(e, item, index)}>{item}</span></li>
                    )) : ''}
            </ul>
            {props.todoList.length > 0 ? props.list === "Completed List" && <input type="button" className="clearBtn" onClick={handleClear} value="Clear all completed" /> : ''}
        </div>
    )
}

export default TodoList;
