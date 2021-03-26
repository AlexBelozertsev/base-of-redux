import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

// const initialStore = { counterValue: 0 };
// const initialStore = {
//   counter: {
//     value: 10,
//     step: 2,
//   }
// };
// const reducer = (state = initialStore, {type, payload}) => {
//   // console.log('action in reducer', action); // action={type, payload}
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state, //распыление предыдущего state если counter - не единственное свойство
//         counter: {
//           ...state.counter, //распыление предыдущего state.counter если value - не единственное свойство
//            value: state.counter.value + payload
//         }
//        };

//     case 'counter/Decrement':
//       return {
//         ...state, //распыление предыдущего state если counter - не единственное свойство
//         counter: {
//           ...state.counter, //распыление предыдущего state.counter если value - не единственное свойство
//            value: state.counter.value - payload
//         }
//       };

//     default:
//       return state;
//   }
// };

//
// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state, //распыление предыдущего state если value - не единственное свойство
//         value: state.value + payload,
//       };
//     case 'counter/Decrement':
//       return {
//         ...state, //распыление предыдущего state если value - не единственное свойство
//         value: state.value - payload,
//       };
//     default:
//       return state;
//   }
// };

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return state + payload;
//     case 'counter/Decrement':
//       return state - payload;
//     default:
//       return state;
//   }
// };
// const stepReduser = (state = 2, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReduser,
// });

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: {
//     items: [],
//     filter: '',
//   }
// });

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
