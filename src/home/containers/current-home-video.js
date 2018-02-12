import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setHomeVideo } from '../actions';
import { apiKey } from '../../api-keys';

class CurrentHomeVideo extends Component {
  componentDidMount() {
    this.props.setHomeVideo();
  }

  render() {
    if (this.props.homeVideo == null) return null;

    return (
        <CurrentVideo 
          name={this.props.homeVideo.name}
          poster={this.props.homeVideo.image.screen_large_url}
          user={this.props.homeVideo.user}
          pub_date={this.props.homeVideo.publish_date}
          description={this.props.homeVideo.deck}
          source={this.props.homeVideo.hd_url + '?api_key=' + apiKey }
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
    setHomeVideo: setHomeVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentHomeVideo);

