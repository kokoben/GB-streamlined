import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFeatureVideo } from '../actions';

class CurrentFeatureVideo extends Component {
  componentDidMount() {
    this.props.setFeatureVideo();
  }

  render() {
    if (this.props.featureVideo === null) return null;
    return (
      <CurrentVideo
        name={this.props.featureVideo.name} 
        user={this.props.featureVideo.user}
        embed_player={this.props.featureVideo.embed_player}
        pub_date={this.props.featureVideo.publish_date}
        deck={this.props.featureVideo.deck}
      />
    )
  }
}

const mapStateToProps = state => ({
  featureVideo: state.featureVideo
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setFeatureVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFeatureVideo);
