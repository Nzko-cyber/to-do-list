import React from "react";
import TodoList from "../components/TodoList";

export default {
  title: "Components/TodoList",
  component: TodoList,
};

export const Default = {
  args: {
    todoItems: { todo: "Sample Todo", isCompleted: false },
    index: 0,
    updateTodos: (index, updatedTodo) =>
      console.log("Updated Todo:", index, updatedTodo),
    removeToDoItem: (index) => console.log("Removed Todo:", index),
  },
  parameters: {
    design: {
      type: 'figma/to-do list',
      url: 'https://www.figma.com/design/XVWwaVi0D8vZ4DZqPwzOmI/Storybook?node-id=152-175&t=LcXkeyJhgRxhU5ah-4',
    },
  },
};
