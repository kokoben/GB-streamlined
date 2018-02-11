import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setVideo } from '../actions';
import { apiKey } from '../../api-keys';

class CurrentHomeVideo extends Component {
  componentDidMount() {
    this.props.setVideo();
    console.log(this.props.latestVideo);
  }

  render() {
    if (this.props.latestVideo == null) return null;

    return (
        <CurrentVideo 
          name={this.props.latestVideo.name}
          poster={this.props.latestVideo.image.screen_large_url}
          user={this.props.latestVideo.user}
          pub_date={this.props.latestVideo.publish_date}
          description={this.props.latestVideo.deck}
          source={this.props.latestVideo.hd_url + '?api_key=' + apiKey }
          />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    latestVideo: state.latestVideo
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setVideo: setVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentHomeVideo);

