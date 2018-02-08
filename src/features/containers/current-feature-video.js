import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { connect } from 'react-redux';

class CurrentFeatureVideo extends Component {
  render() {
    return (
      <CurrentVideo />
    )
  }
}

export default connect()(CurrentFeatureVideo);
