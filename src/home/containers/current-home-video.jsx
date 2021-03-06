import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentVideo from '../../containers/current-video';
import { setLatestHomeVideo } from '../actions';

export class CurrentHomeVideo extends Component {
  componentDidMount() {
    this.props.setLatestHomeVideo();
  }

  render() {
    if (this.props.homeVideo === null) return null;

    return (
      <CurrentVideo
        name={this.props.homeVideo.name}
        user={this.props.homeVideo.user}
        embed_player={this.props.homeVideo.embed_player}
        pub_date={this.props.homeVideo.publish_date}
        deck={this.props.homeVideo.deck}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
CurrentHomeVideo.propTypes = {
  setLatestHomeVideo: PropTypes.func.isRequired,
  homeVideo: PropTypes.object,
};
/* eslint-enable */

const mapStateToProps = state => ({
  homeVideo: state.home.homeVideo,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLatestHomeVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentHomeVideo);

