import React, { Component } from 'react';

import ContentSegment from './components/ContentSegment';

class App extends Component {
  render() {
    return (
      <div>
        <ContentSegment />
        <ContentSegment />
        <ContentSegment />
        <ContentSegment />
      </div>
    )
  }
}

export default App;
