import React from "react";
import TodoForm from "../components/TodoForm";

export default {
  title: "Components/TodoForm",
  component: TodoForm,
};

export const Default = {
  args: {
    addToDoItems: (item) => console.log("Added ToDo Item:", item),
  },
  parameters: {
    design: {
      type: 'figma/to-do form',
      url: 'https://www.figma.com/design/XVWwaVi0D8vZ4DZqPwzOmI/Storybook?node-id=151-105&t=LcXkeyJhgRxhU5ah-4',
    },
  },
};
