import React, { Component } from 'react';

import ContentSegment from './components/segments/ContentSegment';

import Content from './components/content/Content';

class App extends Component {
  render() {

    // todo delete
    let numArray = [];
    for (let i = 0; i < 50; i++) {
      numArray.push(i);
    }

    // all data should be passed from "front page" into each component
    return (
      <div className='container'>
        {numArray.map((index) => (<Content isOdd={index % 2 === 0 ? true : false} />))}
      </div>
    )
  }
}

export default App;
