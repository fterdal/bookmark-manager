import React, { Component } from 'react';

export default class NewSubject extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      newSubject: "",
    };
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

  handleSubmit(e) {
    e.preventDefault();
    const newSubject = {
      subject: this.state.newSubject,
      resources: [],
    }
    this.props.addSubject(newSubject);
  }

  render() {

    return (
      <div>
        <form>
          <label htmlFor="newSubject">New Subject:</label>
          <input
            name="newSubject"
            onChange={this.handleInputChange}
            value={this.state.newSubject}
          />
          <br/>
          <button onClick={this.handleSubmit}>Add New Subject</button>
        </form>
      </div>
    )
  }
}
