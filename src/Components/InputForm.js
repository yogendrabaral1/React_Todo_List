import React from 'react';
import './InputForm.css';

function InputForm(props) {
    return (
        <div className="inputForm">
            <form onSubmit={props.handleSubmit}>
                <input type="text" className="inputTodo" onChange={props.handleChange} name="input-todo" placeholder="Add todo" value={props.item} />
                <input type="submit" className="submit" name="submit" value="Submit" />
            </form>
        </div>
    )
}

export default InputForm;
