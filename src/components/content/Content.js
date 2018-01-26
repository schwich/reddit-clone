import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import './Content.css';

export default class Content extends Component {

  static propTypes = {

  }

  handleVote = (type) => {
    console.log(`handleVoteCalled with: ${type}`);
  }

  /*
    testing code
    random filler generation
  */

  getRandomInt(maxNum) {
    return Math.floor(Math.random() * Math.floor(maxNum));
  }

  randomTitle() {
    return titles[this.getRandomInt(titles.length)];
  }

  randomNum() {
    return this.getRandomInt(10000);
  }

  randomUsername() {
    return usernames[this.getRandomInt(usernames.length)];
  }

  randomDomain() {
    return domains[this.getRandomInt(domains.length)]
  }

  randomSubmitTime() {
    return moment().subtract(this.getRandomInt(100), 'minutes').fromNow();
  }

  randomsubReddit() {
    return subreddits[this.getRandomInt(subreddits.length)]
  }

  randomColor() {
    return colors[this.getRandomInt(colors.length)]
  }

  randomThreeTags() {
    return [
      {
        name: tags[this.getRandomInt(tags.length)],
        link: '#',
        color: this.randomColor()
      },
      {
        name: tags[this.getRandomInt(tags.length)],
        link: '#',
        color: this.randomColor()
      },
      {
        name: tags[this.getRandomInt(tags.length)],
        link: '#',
        color: this.randomColor()
      }
    ]
  }

  render() {
    // todo <Title /> should get title;domain from state, api call

    // there HAS to be a better way
    if (this.props.isOdd === false) {
      var styles = {
        backgroundColor: 'lightgray'
      }
    }
    else {
      var styles = {};
    }

    return (
      <div className='content' style={styles}>
        <VotePanel handleVote={this.handleVote} />
        <div className='content-wrapper'>
          <Title title={this.randomTitle()} domain={this.randomDomain()} />
          <TagPanel tags={this.randomThreeTags()} />
          <MetaPanel
            numPoints={this.randomNum()}
            timestamp={this.randomSubmitTime()}
            owner={this.randomUsername()}
            subreddit={this.randomsubReddit()} />
          <ControlPanel numComments={this.randomNum()} />
        </div>
      </div>
    )
  }
}


function VotePanel(props) {
  return (
    <div className='content-vote-panel'>
      <button onClick={() => props.handleVote('up')}><i className='fa fa-arrow-circle-up' aria-hidden='true'></i></button>
      <button onClick={() => props.handleVote('down')}><i className='fa fa-arrow-circle-down' aria-hidden='true'></i></button>
    </div>
  )
}

function Title(props) {
  return (
    <div className='content-title'>
      <div className='content-title-main'>
        <a href='#'>{props.title}</a>
      </div>
      <div className='content-title-domain'>
        <a href='#' className='subtle-underline'>({props.domain})</a>
      </div>
    </div>
  )
}

function TagPanel(props) {
  return (
    <div className='content-tag-panel'>
      {
        props.tags.map((tag) => {
          const styles = {
            content: {
              backgroundColor: `${tag.color}`,
              color: 'white'
            }
          };
          return (
            <div
              className='content-tag'
              style={{ backgroundColor: `${tag.color}`, color: 'white' }}>
              <a href={tag.link}>
                <i className='fa fa-tag' aria-hidden='true'></i>
                {tag.name}
              </a>
            </div>
          )
        })
      }
    </div >
  )
}

function MetaPanel(props) {

  const {
    numPoints,
    timestamp,
    owner,
    subreddit
  } = props;

  return (
    <div className='content-meta-panel'>
      {numPoints} points | submitted {timestamp} by <span className='subtle-underline'>{owner}</span> to <span className='subtle-underline'>{subreddit}</span>
    </div>
  )
}

function ControlPanel(props) {
  return (
    <div className='content-control-panel'>
      <a href='#'>{props.numComments} comments</a> | <button href='#'>save</button> | <button href='#'>hide</button>
    </div>
  )
}













// TODO DELETE
const usernames = [
  'equuskyanite',
  'uponearth',
  'appearbutterfly',
  'astronomyclapper',
  'arrangejoy',
  'flashfussy',
  'stainfencer',
  'drivingcanapes',
  'fluffcancers',
  'lacunauranium',
  'faultyutter',
  'mapanemia',
  'pencilbitter',
  'bottlegrape',
  'tilerblurt',
  'burkittglance',
  'hartebeestwashing',
  'colossallearning',
  'craftif',
  'openhoopoe'
]

const subreddits = [
  'tech',
  'thoughts',
  'politics',
  'religion',
  'games',
  'random'
]

const titles = [
  'Why I Hate awesome',
  '9 Ways awesome Can Make You Invincible',
  'In 10 Minutes, I\'ll Give You The Truth About awesome',
  '11 Methods Of awesome Domination',
  'OMG! The Best awesome Ever!',
  'You Don\'t Have To Be A Big Corporation To Start awesome',
  'How To Find The Right awesome For Your Specific Product(Service).',
  'Proof That awesome Really Works',
  'Avoid The Top 10 awesome Mistakes',
  '14 Days To A Better awesome',
  'Get Rid of awesome For Good',
  'Lies And Damn Lies About awesome',
  'The Secret of awesome'
]

const domains = [
  'example.com',
  'reddit.com',
  'facebook.com',
  'google.com',
  'localhost.com'
]

const tags = [
  'business',
  'social media',
  'conservative',
  'liberal',
  'react',
  'redux',
  'python',
  'machine-learning',
  'deep-learning',
  'fitness',
  'weightlifting'
]

const colors = [
  'green',
  'purple',
  'blue',
  'lightblue',
  'yellow',
  'red',
  'orange'
]