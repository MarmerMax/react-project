import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import projectsReducer from './store/reducers/projects.reducer.js';
import authReducer from "./store/reducers/auth.reducer";
import uiReducer from "./store/reducers/ui.reducer";
import log from "./middleware/log.middleware";
import {localstorageMiddleware} from "./middleware/localstorage.middleware";
import {getItem} from "./utils/localstorage.utils";

// import './index.css';
import App from './App';


const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const rootReducer = combineReducers({
  projects: projectsReducer,
  auth: authReducer,
  ui: uiReducer
});

const authData = getItem("auth");
const projectsData = getItem("projects");

const store = createStore(
  rootReducer,
  ...[{auth: authData, projects: projectsData}],
  composeEnhancers(applyMiddleware(thunk, log, localstorageMiddleware))
);

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
