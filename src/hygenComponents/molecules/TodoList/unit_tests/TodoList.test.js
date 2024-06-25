import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../../../../components/TodoList';

test('рендерит компонент без сбоев', () => {
  const todoItems = { isCompleted: false, todo: 'Задача' };
  const updateTodos = jest.fn();
  const removeToDoItem = jest.fn();
  render(
    <TodoList
      todoItems={todoItems}
      updateTodos={updateTodos}
      removeToDoItem={removeToDoItem}
      index={0}
    />
  );
  const listItem = screen.getByTitle('li');
  expect(listItem).toBeInTheDocument();
});
