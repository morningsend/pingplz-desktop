
import React, { Component } from 'react';

export default class App extends Component {
  props = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
