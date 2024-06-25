import React from 'react';
import { render, screen } from '@testing-library/react';
import  TodoForm  from '../../../../components/TodoForm';

test('renders component successfully', () => {
  render(<TodoForm  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
