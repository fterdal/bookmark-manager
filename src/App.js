import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      resources: [
        {
          title: "How it feels to learn Javascript in 2016",
          url: "https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.olyvd43o1",
        },
        {
          title: "Var, Let, or Const",
          url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae",
        },
        {
          title: "ES6 Interactive Guide",
          url: "http://stack.formidable.com/es6-interactive-guide/#/",
        },
        {
          title: "Thinking in React",
          url: "https://facebook.github.io/react/docs/thinking-in-react.html",
        },
        {
          title: "What is React?",
          url: "https://www.youtube.com/watch?v=JPT3bFIwJYA",
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.resources.map (
          resource => <a href={resource.url}>{resource.title}</a>
        )}
      </div>
    );
  }
}

export default App;
