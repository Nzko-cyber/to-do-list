---
to: <%= absPath %>/unit_tests/<%= component_name %>.test.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import  <%= component_name %>  from '../../../../components/<%= component_name %>';

test('renders component successfully', () => {
  render(<<%= component_name %>  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
