// src/App.stories.js
import { Primary } from '@storybook/blocks';
import App from '../App';
import { within, userEvent } from '@storybook/testing-library';

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

  // Verify the new task is added
  const newItem = canvas.getByText('New Task');
  expect(newItem).toBeInTheDocument();

  // Remove the task
  const deleteButton = canvas.getByText('Delete');
  await userEvent.click(deleteButton);

  // Verify the task is removed
  expect(newItem).not.toBeInTheDocument();
};
