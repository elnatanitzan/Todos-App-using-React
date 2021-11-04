import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todosReducer from './reducers/todosReducer';

const todosStore = createStore(todosReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={todosStore}> <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
