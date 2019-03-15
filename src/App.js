import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyAge from './Components/MyAge'
import MyChildAge from './Components/MyChildAge'
import MyBrotherAge from './Components/MyBrotherAge'

class App extends Component {

  render() {
    return (
      <div className="App">
        <MyAge/>
        <br/>
        <MyChildAge/>
        <br/>
        <MyBrotherAge/>
        <br/>
      </div>
    );
  }
}

export default App;
