import React, { Component } from 'react';

export default class Resource extends Component {
    constructor(props) {
      super(props);

      this.state = {
        title: 'my great title',
        url: 'http://yahoo.com',
      }
    }

    render() {
      const title = this.props.title;
      const url = this.props.url;
      return (
        <div>
          <li className="list-group-item">
            <a href={url}>{title}</a>
          </li>
        </div>
      )
    }
}
