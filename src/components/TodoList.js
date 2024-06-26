// import React from "react";
// import PropTypes from "prop-types";
// import "../styles/App.css";

// class TodoList extends React.Component {
//   handleChange = (event) => {
//     const updateTodo = {
//       ...this.props.todoItems,
//       [event.currentTarget.name]: event.currentTarget.value,
//     };
//     console.log(event.currentTarget.value);
//     this.props.updateTodos(this.props.index, updateTodo);
//   };

//   toggleCheckbox = (event) => {
//     const updateTodo = {
//       ...this.props.todoItems,
//       [event.currentTarget.name]: event.currentTarget.checked,
//     };
//     this.props.updateTodos(this.props.index, updateTodo);
//   };

//   render() {
//     const { todoItems } = this.props;
//     return (
//       <li title="li" className={todoItems.isCompleted ? "done" : null}>
//         <input
//           type="checkbox"
//           name="isCompleted"
//           checked={todoItems.isCompleted}
//           onChange={this.toggleCheckbox}
//         />
//         <input
//           type="text"
//           name="todo"
//           value={todoItems.todo}
//           onChange={this.handleChange}
//         />
//         <button
//           className="del-btn"
//           onClick={() => this.props.removeToDoItem(this.props.index)}
//         >
//           x
//         </button>
//       </li>
//     );
//   }
// }

// TodoList.propTypes = {
//   todoItems: PropTypes.shape({
//     isCompleted: PropTypes.bool,
//     todo: PropTypes.string,
//   }).isRequired,
//   updateTodos: PropTypes.func.isRequired,
//   removeToDoItem: PropTypes.func.isRequired,
//   index: PropTypes.number.isRequired,
// };

// export default TodoList;
