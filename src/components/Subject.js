import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isClicked: false,
      inputText: 'Type Here',
      title: '',
      url: '',
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(e) {
    this.setState({[e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newResource = {
      title: this.state.title,
      url: this.state.url,
    }
    this.props.addResource(this.props.index, newResource);
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
      listContent = null;
    }

    return (
      <div>
        <div>
        <h3>{this.props.items.subject}</h3>
        <br />
        <label htmlFor="title">Title</label>
        <input name="title" onChange={this.handleTyping.bind(this)} value={this.state.title} />
        <br />
        <label htmlFor="url">URL</label>
        <input name="url" onChange={this.handleTyping.bind(this)} value={this.state.url} />
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
