import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CurrentVideo from '../../containers/current-video';
import { setLatestBombcastVideo } from '../actions';

export class CurrentBombcastVideo extends Component {
  componentDidMount() {
    this.props.setLatestBombcastVideo();
  }
  render() {
    if (this.props.bombcastVideo === null) return null;

    return (
      <CurrentVideo
        name={this.props.bombcastVideo.name}
        user={this.props.bombcastVideo.user}
        deck={this.props.bombcastVideo.deck}
        pub_date={this.props.bombcastVideo.publish_date}
        embed_player={this.props.bombcastVideo.embed_player}
      />
    );
  }
}

CurrentBombcastVideo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bombcastVideo: PropTypes.object,
  setLatestBombcastVideo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bombcastVideo: state.bombcasts.bombcastVideo,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLatestBombcastVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBombcastVideo);
