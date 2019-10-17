import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import projectsReducer from './store/reducers/projects.reducer.js';
import authReducer from "./store/reducers/auth.reducer";
import {BrowserRouter} from "react-router-dom";
import thunk from 'redux-thunk';
import log from "./middleware/log.middleware";

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const rootReducer = combineReducers({
  projects: projectsReducer,
  auth: authReducer
});

const store = createStore( rootReducer, composeEnhancers(
  applyMiddleware(thunk, log)
) );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
