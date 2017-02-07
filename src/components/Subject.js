import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Event Handlers

  render() {
    return (
      <div>
        <h2>{this.props.items.subject}</h2>
        <ul className="list-group">
          {this.props.items.resources.map((resource) => {
              return(
                <li className="list-group-item">
                  <a href={resource.url}>{resource.title}</a>
                </li>
              )
          })}
        </ul>
      </div>
    )
  }
}
