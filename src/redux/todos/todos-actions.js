import shortid from 'shortid';
// import types from './todos-types';

import { createAction } from '@reduxjs/toolkit';

// const addTodo = text => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// });

// const addTodo = createAction(types.ADD, text => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       text,
//       completed: false,
//     },
//   }
// });
const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));

// console.log(addTodo('test addTodo'));

// const deleteTodo = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

// const deleteTodo = createAction(types.DELETE);
const deleteTodo = createAction('todos/delete');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// const changeFilter = createAction(types.CHANGE_FILTER);
const changeFilter = createAction('todos/changeFilter');
const toggleCompleted = createAction('todos/toggleCompleted');

export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
