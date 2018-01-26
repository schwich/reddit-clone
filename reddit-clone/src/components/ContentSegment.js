import React from 'react';

export default class ContentSegment extends React.Component {

  state = {
    text: 'Hello World!'
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    )
  }
}