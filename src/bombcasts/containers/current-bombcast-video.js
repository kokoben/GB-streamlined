import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import CurrentVideo from '../../components/current-video';
import { setBombcastVideo } from '../actions';
import { connect } from 'react-redux';

class CurrentBombcastVideo extends Component {
  componentDidMount() {
    this.props.setBombcastVideo();
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
    )
  }
}

const mapStateToProps = state => {
  return {
    bombcastVideo: state.bombcastVideo
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setBombcastVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBombcastVideo);
