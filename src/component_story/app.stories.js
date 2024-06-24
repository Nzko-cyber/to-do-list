// src/App.stories.js
import { Primary } from '@storybook/blocks';
import App from '../App';
import { expect } from '@storybook/addon-jest';
import { within,waitFor, userEvent } from '@storybook/testing-library';

export default {
  title: 'Page/App',
  component: App,
};

export const Default = 
{
args: {
  
},}



Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Find the input and button elements
  const input = canvas.getByRole('textbox');
  const addButton = canvas.getByText('Add +');

  // Add a new task
  await userEvent.type(input, 'New Task');
  await userEvent.click(addButton);


  const newItem = await canvas.findByDisplayValue('New Task');
  expect(newItem).toBeInTheDocument();
  
  const deleteButton = canvas.getByText('x');
  await userEvent.click(deleteButton);

  // Используйте waitFor для ожидания удаления элемента
  await waitFor(() => {
    expect(newItem).not.toBeInTheDocument();
  });

  // Выведите HTML содержимое для отладки
  console.log(canvasElement.innerHTML);
};
