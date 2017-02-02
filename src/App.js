import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      resource: "http://hatchoregon.com",
    };
  }
  render() {
    return (
      <a href={this.state.resource}>Best thing ever.</a>
    );
  }
}

export default App;
