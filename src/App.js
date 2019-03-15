import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {myage: 30}
    this.handleAge = this.handleAge.bind(this)
    this.handleChildAge = this.handleChildAge.bind(this)
    this.handleBrotherAge = this.handleBrotherAge.bind(this)
  }

  handleAge(e){
    this.setState({myage: e.target.value})
  }

  handleChildAge(e){
    this.setState({myage: Number(e.target.value) + 20})
  }

  handleBrotherAge(e){
    this.setState({myage: Number(e.target.value) - 5})
  }

  render() {
    return (
      <div className="App">
        My Age: <input type='text' value={this.state.myage} onChange={this.handleAge}/>
        <br/>
        My Child Age: <input type='text' value={ Number(this.state.myage) - 20} onChange={this.handleChildAge}/> (myage - 20)
        <br/>
        My BrotherAge: <input type='text' value={ Number(this.state.myage) + 5} onChange={this.handleBrotherAge}/> (myage + 5)
        <br/>
      </div>
    );
  }
}

export default App;
