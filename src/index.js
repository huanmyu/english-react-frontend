import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import { Route } from 'react-router';
import App from './components/App';
import WordsList from './components/WordsList';
import './index.scss';

const routes = (
  <Route path="/" component={App}>
    <Route path="words" component={WordsList}>
    </Route>
  </Route>
);

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
const reducer = combineReducers({
  router: routerStateReducer,
  //app: rootReducer, //you can combine all your other reducers under a single namespace like so
});

// Compose reduxReactRouter with other store enhancers
// const store = compose(
//   applyMiddleware(m1, m2, m3),
//   reduxReactRouter({
//     routes,
//     createHistory
//   }),
//   devTools()
// )(createStore)(reducer);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
