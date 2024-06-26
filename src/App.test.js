import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from './hygenComponents/molecules/TodoForm/TodoForm';
import TodoList from './hygenComponents/molecules/TodoList/TodoList';

test('Render to do', () => {
  render(<TodoForm addToDoItems={() => { }} />);
  const input = screen.getByPlaceholderText(/text/i);
  expect(input).toBeInTheDocument();
});

test('Updates input value on change', () => {
  render(<TodoForm addToDoItems={() => { }} />);
  const input = screen.getByPlaceholderText(/text/i);
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});

test('Calls addToDoItems on form submission', () => {
  const mockAddToDoItems = jest.fn();
  render(<TodoForm addToDoItems={mockAddToDoItems} />);
  const input = screen.getByPlaceholderText(/text/i);
  const submitButton = screen.getByText(/Add/i);
  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.click(submitButton);
  expect(mockAddToDoItems).toHaveBeenCalled();
  expect(mockAddToDoItems).toHaveBeenCalledWith({
    todo: 'test',
    isCompleted: false
  });
});

test('Check display value', () => {
  const todoItems = { todo: 'test', isCompleted: false };
  render(<TodoList todoItems={todoItems} index={item1} updateTodos={() => { }} removeToDoItem={() => { }} />);
  const valueCheck = screen.getByDisplayValue('test');
  expect(valueCheck).toBeInTheDocument();
});