import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { connect } from 'react-redux';

class CurrentHomeVideo extends Component {
  render() {
    return (
        <CurrentVideo />
    )
  }
}

export default connect()(CurrentHomeVideo);

