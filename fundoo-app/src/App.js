import React, { Component } from 'react';
import './App.css';
import Router from '../src/AppRoute'
import {Provider} from 'react-redux'
import store from '../src/redux/Store'



class App extends Component {

  render() {
  
    return (
      
      <Provider store = {store}>
        <Router/>
        </Provider>
    );
  }
}

export default App;
