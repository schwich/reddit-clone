import React, { Component } from 'react';

import './VoteSegment.css';

export default class VoteSegment extends Component {

  handleVote = (type) => {

    console.log(type);
  }

  render() {
    return (
      <div className='content-segment-vote-segment'>
        <button onClick={() => this.handleVote('up')}><i className='fa fa-arrow-circle-up' aria-hidden='true'></i></button>
        25
        <button onClick={() => this.handleVote('down')}><i className='fa fa-arrow-circle-down' aria-hidden='true'></i></button>
      </div>
    )
  }
}