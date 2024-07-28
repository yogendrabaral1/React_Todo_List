import React, { useState } from 'react';
import './App.css';
import InputForm from './Components/InputForm';
import TodoList from './Components/TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCompleted, updateTodo, clearCompleted, addTodo } from './actions';

function App(props) {
  const [item, setItem] = useState('');
  const [index, setIndex] = useState('');

  const handleEdit = (task, i) => {
    setItem(task);
    setIndex(i);
  }

  const handleChange = (e) => {
    const input = e.target.value;
    setItem(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(item, index);
    setItem('');
  }

  return (
    <div className="App">
      <InputForm handleChange={handleChange} handleSubmit={handleSubmit} item={item} />
      <TodoList todoList={props.todoList} list="todoList" addCompleted={props.addCompleted} handleEdit={handleEdit} checked={false} />
      <TodoList todoList={props.completedList} list="Completed List" updateTodo={props.updateTodo} clearCompleted={props.clearCompleted} checked={true} />
    </div>
  );
}

export default connect(
  state => ({ todoList: state.todoList, completedList: state.completedList }),
  dispatch => ({
    addCompleted: bindActionCreators(addCompleted, dispatch),
    updateTodo: bindActionCreators(updateTodo, dispatch),
    clearCompleted: bindActionCreators(clearCompleted, dispatch),
    addTodo: bindActionCreators(addTodo, dispatch)
  })
)(App);
