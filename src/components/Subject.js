import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Event Handlers

  render() {
    return (
      <p>{this.props.subject}</p>
    )
  }
}
