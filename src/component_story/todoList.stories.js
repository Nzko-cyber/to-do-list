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
      type: 'figma',
      url: 'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
    },
  },
};
