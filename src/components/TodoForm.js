import React from "react";
import '../styles/App.css'

class TodoForm extends React.Component {
  todoRef = React.createRef();

  addItemOnList = e => {
    e.preventDefault();
    const todoItem = {
      todo: this.todoRef.current.value,
      isCompleted: false
    };
    this.props.addToDoItems(todoItem);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form id="todoList-form" onSubmit={this.addItemOnList}>
        <label htmlFor="todosTxtbx">Todo Input</label>
        <input type="text" id="todosTxtbx" name="todosTxtbx" ref={this.todoRef} required aria-label="todo input"/>
        <button>Add +</button>
      </form>
    );
  }
}

export default TodoForm;
