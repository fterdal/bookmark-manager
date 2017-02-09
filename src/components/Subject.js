import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
    // setTimeout(() =>
    //   console.log('isClicked: ' + this.state.isClicked), 250);
  }

  render() {
    let buttonText = null;
    if (this.state.isClicked == true) {
      buttonText = 'Show'; }
    else {
      buttonText = 'Hide'; }

    let listContent = null;
    if (this.state.isClicked == false) {
      listContent =
          <ul className="list-group">
            {this.props.items.resources.map((resource) => {
                return(
                  <li className="list-group-item">
                    <a href={resource.url}>{resource.title}</a>
                  </li>
                )
            })}
          </ul>;
    }
    else {
      listContent = ''; }

    return (
      <div>
        <div>
        <h3>{this.props.items.subject}</h3>
        <button className="btn btn-primary"
                onClick={() => this.handleClick()}>
          {buttonText}
        </button>
        </div>
        {listContent}
      </div>
    )
  }
}
