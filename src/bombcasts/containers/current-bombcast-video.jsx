import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CurrentVideo from '../../components/current-video';
import { setLatestBombcastVideo } from '../actions';

class CurrentBombcastVideo extends Component {
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

const mapStateToProps = state => ({
  bombcastVideo: state.bombcastVideo,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLatestBombcastVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBombcastVideo);
