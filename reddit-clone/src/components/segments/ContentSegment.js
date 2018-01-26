import React from 'react';

import VoteSegment from './VoteSegment';
import TagSegment from './TagSegment';
import ControlPanelSegment from './ControlPanelSegment';

import './ContentSegment.css';

export default class ContentSegment extends React.Component {

  render() {
    // todo rank should be returned from server
    return (
      <div className='content-segment'>
        <Rank rank={this.props.rank} />
        <VoteSegment />
        <Thumbnail />
        <Title title={this.props.title} linkDomain='example.com' />
        <TagSegment />
        <ControlPanelSegment />
      </div>
    )
  }
}

function Title(props) {
  return (
    <div className='content-segment-title'>
      {props.title} ({props.linkDomain})
    </div>
  )
}

function Thumbnail(props) {
  return (
    <div className='content-segment-thumbnail'>
      <a href={props.link}><img src='http://via.placeholder.com/80x80' /></a>
    </div>
  )
}

function Rank(props) {
  return (
    <div className='content-segment-rank'>
      {props.rank}
    </div>
  )
}