import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { connect } from 'react-redux';

class CurrentQuicklookVideo extends Component {
  render() {
    return (
      <CurrentVideo />
    )
  }
}

export default connect()(CurrentQuicklookVideo);
