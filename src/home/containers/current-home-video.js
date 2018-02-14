import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setHomeVideo } from '../actions';

class CurrentHomeVideo extends Component {
  componentDidMount() {
    this.props.setHomeVideo();
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

const mapStateToProps = state => {
  return {
    homeVideo: state.homeVideo
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setHomeVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentHomeVideo);

