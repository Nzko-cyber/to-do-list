import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoForm from './TodoForm';

test('добавляет новый элемент в список', () => {
  const addToDoItems = jest.fn();
  const { getByRole, getByLabelText } = render(<TodoForm addToDoItems={addToDoItems} />);
  
  const input = getByLabelText('todo input');
  const button = getByRole('button', { name: /add \+/i });

  fireEvent.change(input, { target: { value: 'новый элемент' } });
  fireEvent.click(button);

  expect(addToDoItems).toHaveBeenCalledTimes(1);
  expect(addToDoItems).toHaveBeenCalledWith({
    todo: 'новый элемент',
    isCompleted: false
  });
});

test('очищает поле ввода после добавления', () => {
  const addToDoItems = jest.fn();
  const { getByRole, getByLabelText } = render(<TodoForm addToDoItems={addToDoItems} />);
  
  const input = getByLabelText('todo input');
  const button = getByRole('button', { name: /add \+/i });

  fireEvent.change(input, { target: { value: 'новый элемент' } });
  fireEvent.click(button);

  expect(input.value).toBe('');
});
