import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentVideo from '../../containers/current-video';
import { setLatestFeatureVideo } from '../actions';

export class CurrentFeatureVideo extends Component {
  componentDidMount() {
    this.props.setLatestFeatureVideo();
  }

  render() {
    if (this.props.featureVideo === null) return null;

    return (
      <CurrentVideo
        name={this.props.featureVideo.name}
        user={this.props.featureVideo.user}
        deck={this.props.featureVideo.deck}
        pub_date={this.props.featureVideo.publish_date}
        embed_player={this.props.featureVideo.embed_player}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
CurrentFeatureVideo.propTypes = {
  setLatestFeatureVideo: PropTypes.func.isRequired,
  featureVideo: PropTypes.object,
};
/* eslint-enable */

const mapStateToProps = state => ({
  featureVideo: state.features.featureVideo,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLatestFeatureVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFeatureVideo);
