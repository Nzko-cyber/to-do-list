import React from 'react';
import { render, screen } from '@testing-library/react';
import  TodoList  from '../../../../components/TodoList';

test('renders component successfully', () => {
  render(<TodoList  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
