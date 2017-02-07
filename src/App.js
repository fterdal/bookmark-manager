import React, { Component } from 'react';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state =  {
      stuff: [
      {
        subject: "Functional Programming Basics",
        resources: [
          {
            title: "How it feels to learn Javascript in 2016",
            url: "https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.olyvd43o1",
            date_added: "2017-02-1",
          },
          {
            title: "Var, Let, or Const",
            url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae",
            date_added: "2017-02-1",
          },
          {
            title: "ES6 Interactive Guide",
            url: "http://stack.formidable.com/es6-interactive-guide/#/",
            date_added: "2017-02-1",
          },
        ]
      },
      {
        subject: "Learning How To Learn React",
        resources: [
          {
            title: "How it feels to learn Javascript in 2016",
            url: "https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.olyvd43o1",
            date_added: "2017-02-1",
          },
          {
            title: "Var, Let, or Const",
            url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae",
            date_added: "2017-02-1",
          },
          {
            title: "ES6 Interactive Guide",
            url: "http://stack.formidable.com/es6-interactive-guide/#/",
            date_added: "2017-02-1",
          },
        ]
      }
    ]
  }
  };
  render() {
    return (
      <div>
        Parent Component
        {console.log(this.state)}
        <Subject subject={this.state.stuff[0].subject}/>
        <Subject subject={this.state.stuff[1].subject}/>
      </div>
    );
  }
}

export default App;
