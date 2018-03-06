import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchBombcastSearchVideos, setBombcastVideo } from '../actions/index';
import BombcastSearchResultsSelector from '../selectors/current-bombcast-search-results';

class BombcastFeedHeader extends Component {
  render() {
    console.log('current feature search reuslts: ', this.props.currentBombcastSearchResults);
    return (
      <FeedHeader
        category="Bombcast"
        placeholder="Search for Bombcast videos..."
        fetchVideos={this.props.fetchBombcastSearchVideos}
        currentResults={this.props.currentBombcastSearchResults}
        setVideo={this.props.setBombcastVideo}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
BombcastFeedHeader.propTypes = {
  fetchBombcastSearchVideos: PropTypes.func.isRequired,
  currentBombcastSearchResults: PropTypes.array.isRequired,
  setBombcastVideo: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  currentBombcastSearchResults: BombcastSearchResultsSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchBombcastSearchVideos,
    setBombcastVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BombcastFeedHeader);
