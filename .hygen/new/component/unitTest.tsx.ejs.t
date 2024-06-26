---
to: <%= absPath %>/unit_tests/<%= component_name %>.test.js
---
import  <%= component_name %>  from '../<%= component_name %>';
import React from 'react';
import { render } from '@testing-library/react';

test( ' component should be defined', () => {
  expect(<%= component_name %> ).toBeDefined();
});
