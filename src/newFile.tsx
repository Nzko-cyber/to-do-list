import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoForm from './components/TodoForm';

test('Updates input value on change', () => {
  render(<TodoForm addToDoItems={() => { }} />);
  const input = screen.getByPlaceholderText(/text/i);
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});
