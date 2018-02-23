import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setLatestQuicklookVideo } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CurrentVideo from '../../components/current-video';

class CurrentQuicklookVideo extends Component {
  componentDidMount() {
    this.props.setLatestQuicklookVideo();
  }

  render() {
    if (this.props.quicklookVideo === null) return null;
    return (
      <CurrentVideo  
        name={this.props.quicklookVideo.name}
        user={this.props.quicklookVideo.user}
        embed_player={this.props.quicklookVideo.embed_player}
        pub_date={this.props.quicklookVideo.publish_date}
        deck={this.props.quicklookVideo.deck}
      />
    )
  }
}

CurrentQuicklookVideo.propTypes = {
  setLatestQuicklookVideo: PropTypes.func.isRequired,
  quicklookVideo: PropTypes.object.isrequired,
}

const mapStateToProps = state => ({
  quicklookVideo: state.quicklookVideo
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLatestQuicklookVideo
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuicklookVideo);
