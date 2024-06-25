// src/App.stories.js
import { Docs } from "@storybook/blocks";
import App from "../App";
import { expect } from "@storybook/test";
import { within, waitFor, userEvent } from "@storybook/testing-library";

export default {
  title: "Page/App",
  component: App,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    parameters: {
      a11y: {
        // Optional selector to inspect
        element: "#storybook-root",
        config: {
          rules: [
            {
              // The autocomplete rule will not run based on the CSS selector provided
              id: "autocomplete-valid",
              selector: '*:not([autocomplete="nope"])',
            },
            {
              // Setting the enabled option to false will disable checks for this particular rule on all stories.
              id: "image-alt",
              enabled: false,
            },
          ],
        },
        // Axe's options parameter
        options: {},
        // Optional flag to prevent the automatic check
        manual: true,
      },
      design: {
        type: 'figma/home page',
        url: 'https://www.figma.com/design/XVWwaVi0D8vZ4DZqPwzOmI/Storybook?node-id=151-97&t=LcXkeyJhgRxhU5ah-4',
      },
    },
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Find the input and button elements
  const input = canvas.getByRole("textbox");

  const addButton = canvas.getByText("Add");

  // Add a new task
  await userEvent.type(input, "New Task");
  await userEvent.click(addButton);

  // Verify the new task is added
  const newItem = await canvas.findByDisplayValue("New Task");
  expect(newItem).toBeInTheDocument();

  const deleteButton = canvas.getByText("x");
  await userEvent.click(deleteButton);

  // Используйте waitFor для ожидания удаления элемента
  await waitFor(() => {
    expect(newItem).not.toBeInTheDocument();
  });

  // Выведите HTML содержимое для отладки
  console.log(canvasElement.innerHTML);
};
