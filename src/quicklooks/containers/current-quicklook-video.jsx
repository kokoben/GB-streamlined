import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLatestQuicklookVideo } from '../actions';
import CurrentVideo from '../../containers/current-video';

export class CurrentQuicklookVideo extends Component {
  componentDidMount() {
    this.props.setLatestQuicklookVideo();
  }

  render() {
    if (this.props.quicklookVideo === null) return null;
    return (
      <CurrentVideo
        name={this.props.quicklookVideo.name}
        user={this.props.quicklookVideo.user}
        embed_player={this.props.quicklookVideo.embed_player}
        pub_date={this.props.quicklookVideo.publish_date}
        deck={this.props.quicklookVideo.deck}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
CurrentQuicklookVideo.propTypes = {
  setLatestQuicklookVideo: PropTypes.func.isRequired,
  quicklookVideo: PropTypes.object.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  quicklookVideo: state.quicklooks.quicklookVideo,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLatestQuicklookVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuicklookVideo);
