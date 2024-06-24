import React from 'react';
import { render, screen } from '@testing-library/react';
import { Atom } from '../';

test('renders component successfully', () => {
  render(<Atom  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
