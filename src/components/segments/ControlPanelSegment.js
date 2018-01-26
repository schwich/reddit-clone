import React, { Component } from 'react';

import './ControlPanelSegment.css';

export default class ControlPanelSegment extends Component {
  render() {
    return (
      <div className='content-segment-control-panel-segment'>
        <ul className='control-panel'>
          <li>
            <CommentsButton commentsLink={'#'} numComments={255} />
          </li>
          <li>

          </li>
        </ul>
      </div>
    )
  }
};

// todo high priority
function CommentsButton(props) {
  return (
    <a href={props.commentsLink}>{props.numComments} comments</a>
  )
}

// todo  medium priority
function SaveButton(props) {
  return (
    <a href='#'>save</a>
  )
}

// todo low priority
function HideButton(props) {
  return (
    <a href='#'>hide</a>
  )
}


// this will be very important if anyone ever uses the website, just stub for now
// it should be a class, as it will have to do the whole Twitter/Facebook, etc sharing logic
function ShareButton(props) {
  return (
    <a href='#'>share</a>
  )
}