import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFeatureVideo } from '../actions';
import { apiKey } from '../../api-keys';

class CurrentFeatureVideo extends Component {
  componentDidMount() {
    this.props.setFeatureVideo();
  }

  render() {
    if (this.props.featureVideo === null) return null;
    return (
      <CurrentVideo
        name={this.props.featureVideo.name} 
        poster={this.props.featureVideo.image.screen_large_url}
        user={this.props.featureVideo.user}
        pub_date={this.props.featureVideo.publish_date}
        description={this.props.featureVideo.deck}
        source={this.props.featureVideo.hd_url + '?api_key=' + apiKey}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    featureVideo: state.featureVideo
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setFeatureVideo: setFeatureVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFeatureVideo);
