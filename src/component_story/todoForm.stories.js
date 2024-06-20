import React from 'react';
import TodoForm from '../components/TodoForm';

export default {
  title: 'Components/TodoForm',
  component: TodoForm,
};


export const Default = 
{
args: {
  addToDoItems: (item) => console.log('Added ToDo Item:', item),
  
},
};