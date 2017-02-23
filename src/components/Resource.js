import React, { Component } from 'react';

export default class Resource extends Component {
    constructor(props) {
      super(props);

      this.handleRemoveClick = this.handleRemoveClick.bind(this);

      this.state = {
        title: 'my great title',
        url: 'http://yahoo.com',
      }
    }

    handleRemoveClick(e) {
      e.preventDefault();
      this.props.removeResource(this.props.index);
    }

    render() {
      const title = this.props.title;
      const url = this.props.url;
      return (
        <div>
          <li className="list-group-item">
            <a href={url}>{title}</a>
            <button className="btn btn-sm btn-danger pull-right"
                    onClick={this.handleRemoveClick}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </li>
        </div>
      )
    }
}
