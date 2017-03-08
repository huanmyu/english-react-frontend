// @flow
import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { push } from 'redux-router';

connect(
  // Use a selector to subscribe to state
  state => ({ routerState: state.router }),
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ourself english learn App</h2>
        </div>
        <div className="App-intro">
          <p>Essential Links</p>
          <ul>
            <li><a href="https://github.com/bowenchen6" target="_blank">Github</a></li>
            <li><a href="http://git.oschina.net/bwn" target="_blank">码云</a></li>
            <li><a href="https://twitter.com/Bowen30318500" target="_blank">Twitter</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
