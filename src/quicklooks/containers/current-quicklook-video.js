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
        user={this.props.quicklookVideo.user}
        embed_player={this.props.quicklookVideo.embed_player}
        pub_date={this.props.quicklookVideo.user}
        deck={this.props.quicklookVideo.deck}
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
    setQuicklookVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuicklookVideo);
