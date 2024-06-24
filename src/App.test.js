// src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders App component and adds a new to-do item', () => {
  render(<App />);
  
  // Add a new to-do item
  const input = screen.getByPlaceholderText('Enter a new task');
  const addButton = screen.getByText('Add Task');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(addButton);
  
  // Check if the new to-do item is added
  const newItem = screen.getByText('New Task');
  expect(newItem).toBeInTheDocument();
  
  // Delete the to-do item
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  
  // Check if the to-do item is deleted
  expect(newItem).not.toBeInTheDocument();
});
