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
    // design: {
    //   // name: "Wireframe",
    //   type: 'figma',
    //   url: 'https://www.figma.com/design/HflEwuvYPccr7xSFobduyh/Phoenix?node-id=17-1797&t=lGrMITCPVqmVIgUz-4',
    // },

    design: [
      {
        name: "Foo",
        type: "figma",
        url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
      },
      {
        name: "Bar",
        type: "link",
        url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
      },
      {
        type: "link",
        url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
      },
    ],
  },
};
