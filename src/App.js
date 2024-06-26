import React, { Component } from "react";
import "./styles/App.css";
import TodoForm from "./hygenComponents/molecules/TodoForm/TodoForm";
import TodoList from "./hygenComponents/molecules/TodoList/TodoList";
class App extends Component {
  state = {
    todoItems: {}
  };

  addToDoItems = item => {
    const items = { ...this.state.todoItems };
    console.log(items);
    items[`item${Date.now()}`] = item;
    this.setState({
      todoItems: items
    });
  };

  removeToDoItem = item => {
    const todos = { ...this.state.todoItems };
    delete todos[item];
    this.setState({ todoItems: todos });
  };

  updateTodos = (key, updatedTodo) => {
    const todos = { ...this.state.todoItems };
    todos[key] = updatedTodo;
    this.setState({ todoItems: todos });
  };

  render() {
    return (
      <div className="App">
        <TodoForm addToDoItems={this.addToDoItems} />
        <ul>
          {Object.keys(this.state.todoItems).map(key => (
            <TodoList
              key={key}
              index={key}
              todoItems={this.state.todoItems[key]}
              removeToDoItem={this.removeToDoItem}
              updateTodos={this.updateTodos}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
