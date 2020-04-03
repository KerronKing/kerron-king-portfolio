import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import projectsReducer from './reducers/projectsReducer';
import Root from './components/root';

const store = createStore(projectsReducer);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
