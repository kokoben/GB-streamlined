import React, { Component } from 'react';
import Videos from '../../components/videos';
import { connect } from 'react-redux';

class QuicklookVideos extends Component {
  render () {
    return (
      <Videos />
    )
  }
}

export default connect()(QuicklookVideos);
