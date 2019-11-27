import React, { Component } from 'react';
import SignInContainer from '../src/Components/SignInContainer'
import './App.css';
import Router from '../src/AppRoute'
import { Provider } from 'react-redux'
import { createStore } from "redux";


const store = createStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
  <Router/>
  </Provider>
    );
  }
}

export default App;
