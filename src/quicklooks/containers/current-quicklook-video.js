import React, { Component } from 'react';
import CurrentVideo from '../../components/current-video';
import { setQuicklookVideo } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { apiKey } from '../../api-keys';

class CurrentQuicklookVideo extends Component {
  componentDidMount() {
    this.props.setQuicklookVideo();
  }

  render() {
    if (this.props.quicklookVideo === null) return null;
    return (
      <CurrentVideo  
        name={this.props.quicklookVideo.name}
        poster={this.props.quicklookVideo.image.screen_large_url}
        user={this.props.quicklookVideo.user}
        pub_date={this.props.quicklookVideo.user}
        description={this.props.quicklookVideo.deck}
        source={this.props.quicklookVideo.hd_url + '?api_key=' + apiKey}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    quicklookVideo: state.quicklookVideo
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setQuicklookVideo: setQuicklookVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuicklookVideo);
