import React, { Component } from 'react';

export default class NewSubject extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      newSubject: "New Amazing Subject",
    };
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
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
          <button onClick={this.handleSubmit}>Add New Subject</button>
        </form>
      </div>
    )
  }
}



{/* <div>
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
{listContent} */}
