// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

// import { combineReducers } from 'redux';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// console.log(process.env);
// console.log(getDefaultMiddleware());
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: persistReducer(todosPersistConfig, todosReducer),
// });
// const persistedReducer = persistReducer(todosPersistConfig, rootReducer);

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    todos: persistReducer(todosPersistConfig, todosReducer),
  }),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

export default { store, persistor };
