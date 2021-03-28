import { combineReducers } from 'redux';
// import types from './todos-types';

import { createReducer } from '@reduxjs/toolkit';
import todoActions from './todos-actions';

// const items = (state = [], action) => {
//   return state;
// }
// const filter = (state = '', action) => {
//   return state;
// }

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       // return state.filter(todo => todo.id !== payload);
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const items = createReducer([], {
//   [types.ADD]: (state, action) => [...state, action.payload],
//   [types.DELETE]: (state, {payload})=> state.filter(({ id }) => id !== payload),
// })
// const items = createReducer([], {
//   'todos/add': (state, action) => [...state, action.payload],
//   'todos/delete': (state, {payload})=> state.filter(({ id }) => id !== payload),
// })
const items = createReducer([], {
  [todoActions.addTodo]: (state, action) => [...state, action.payload],
  [todoActions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [todoActions.toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const filter = createReducer('', {
//   [todoActions.changeFilter]: (state, {payload})=> payload,
// })
const filter = createReducer('', {
  [todoActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
