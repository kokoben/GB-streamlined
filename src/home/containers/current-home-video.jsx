import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLatestHomeVideo } from '../actions';

class CurrentHomeVideo extends Component {
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
    )
  }
}

const mapStateToProps = state => ({
  homeVideo: state.homeVideo,
  latestHomeVideoId: state.latestHomeVideoId
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLatestHomeVideo,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentHomeVideo);

