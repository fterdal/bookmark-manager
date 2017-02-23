import React, { Component } from 'react';
import Resource from './Resource';

export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeResource = this.removeResource.bind(this);

    this.state = {
      isClicked: false,
      resources: this.props.items.resources
      // inputText: 'Type Here',
      // title: '',
      // url: '',
    };
  }

  removeResource(index) {
    const tempState = this.state;
    const resources = tempState.resources;
    resources.splice(index, 1);
    this.setState(tempState);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(e) {
    debugger;
    this.setState({[e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newResource = {
      title: this.state.title,
      url: this.state.url,
    }
    console.log("I exist!!!");
    debugger;
    this.props.addResource(this.props.index, newResource);
  }

  render() {
    let buttonText = null;
    if (this.state.isClicked === true) {
      buttonText = 'Show'; }
    else {
      buttonText = 'Hide'; }

    let listContent = null;
    if (this.state.isClicked === false) {
      listContent =
          <ul className="list-group">
            {this.state.resources.map((resource, index) => {
                return(
                  <Resource
                    title={resource.title}
                    url={resource.url}
                    removeResource={this.removeResource}
                    index={index}
                  />
                )
            })}
          </ul>;
    }
    else {
      listContent = null;
    }

    return (
      <div>
        <div>
        <h3>{this.props.items.subject}</h3>
        <br />
        <form >
          <label htmlFor="title">Title</label>
          <input name="title" onChange={this.handleTyping.bind(this)} value={this.state.title} />
          <br />
          <label htmlFor="url">URL</label>
          <input name="url" onChange={this.handleTyping.bind(this)} value={this.state.url} />
          <br />
          <button onClick={this.handleSubmit}>Add Resource</button>
        </form>
        </div>

        <button className="btn btn-primary"
                onClick={() => this.handleClick()}>
          {buttonText}
        </button>
        {listContent}
      </div>
    )
  }
}
