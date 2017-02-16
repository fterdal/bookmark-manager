import React, { Component } from 'react';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state =  {
      resources: [
        {
          subject: "Let's... get... functional, functional!",
          resources: [
            {
              title: "Higher Order Functions",
              url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84",
              date_added: "2017-01-23",
            },
            {
              title: "Arrow Functions in Javascript",
              url: "https://www.youtube.com/watch?v=6sQDTgOqh-I",
              date_added: "2017-01-23",
            },
            {
              title: "Var, Let, or Const",
              url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae",
              date_added: "2017-01-23",
            },
          ]
        },
        {
          subject: "ES6: Javascript Gets a Makeover",
          resources: [
            {
              title: "ES6 Overview",
              url: "https://www.youtube.com/watch?v=CozSF5abcTA",
              date_added: "2017-01-25",
            },
            {
              title: "Interactive ES5 -> ES6 Conversion Guide",
              url: "http://stack.formidable.com/es6-interactive-guide/#/",
              date_added: "2017-01-25",
            },
            {
              title: "Var, Let, and Const -- Revisited",
              url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.68e6cm3mh",
              date_added: "2017-01-25",
            },
            {
              title: "ES6 Cheat Sheet Compilation - Part 1",
              url: "https://www.youtube.com/watch?v=AfWYO8t7ed4",
              date_added: "2017-01-25",
            },
            {
              title: "ES6 Cheat Sheet Compilation - Part 2",
              url: "https://www.youtube.com/watch?v=LmL0Gh193M0",
              date_added: "2017-01-25",
            },
            {
              title: "ES6 New Features - Tutorial",
              url: "https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt",
              date_added: "2017-01-25",
            },
            {
              title: "ES6 Course (on EggHead.io)",
              url: "https://egghead.io/courses/learn-es6-ecmascript-2015",
              date_added: "2017-01-25",
            },
            {
              title: "ES6 - The Basics",
              url: "https://www.youtube.com/watch?v=IEf1KAcK6A8",
              date_added: "2017-01-25",
            },
          ]
        },
        {
          subject: "Learning How To Learn React",
          resources: [
            {
              title: "How it feels to learn Javascript in 2016",
              url: "https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.olyvd43o1",
              date_added: "2017-01-30",
            },
          ]
        },
        {
          subject: "What is React, anyway?",
          resources: [
            {
              title: "Thinking in React",
              url: "https://facebook.github.io/react/docs/thinking-in-react.html",
              date_added: "2017-01-30",
            },
            {
              title: "What is React?",
              url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS",
              date_added: "2017-01-30",
            },
            {
              title: "Rendering and Components",
              url: "https://youtu.be/fd2Cayhez58",
              date_added: "2017-01-30",
            },
          ]
        },
        {
          subject: "Events, State, and the Virtual DOM",
          resources: [
            {
              title: "Handling Events",
              url: "https://facebook.github.io/react/docs/handling-events.html",
              date_added: "2017-02-06",
            },
            {
              title: "Benefits of Stateless Components",
              url: "https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.ja8sx927g",
              date_added: "2017-02-06",
            },
            {
              title: "Events and ReactJS",
              url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8",
              date_added: "2017-02-06",
            },
            {
              title: "Understanding Javascript's .bind()",
              url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/",
              date_added: "2017-02-06",
            },
            {
              title: "Javascript Events and Data Changes in React",
              url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be",
              date_added: "2017-02-06",
            },
          ]
        },
      ]
    }
    this.addNewResource.bind(this);

  };

  addNewResource(subject, resource) {
    const tempState = this.state;
    tempState.resources[subject].resources.push(resource);
    console.log('Hello, World!');
    this.setState(tempState);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          {this.state.resources.map( (resource, index) => {
            return (
              <Subject index={index} addResource={this.addNewResource} items={resource} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
