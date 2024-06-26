import  TodoList  from '../TodoList';
import React from 'react';
import { render } from '@testing-library/react';

test( 'Todolist component should be defined', () => {
  expect(TodoList ).toBeDefined();
});
