import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchHomeSearchVideos, setHomeVideo } from '../actions/index';
import HomeSearchResultsSelector from '../selectors/current-home-search-results';

class HomeFeedHeader extends Component {
  render() {
    return (
      <FeedHeader
        category=""
        placeholder="Search for videos..."
        fetchVideos={this.props.fetchHomeSearchVideos}
        currentResults={this.props.currentHomeSearchResults}
        setVideo={this.props.setHomeVideo}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
HomeFeedHeader.propTypes = {
  fetchHomeSearchVideos: PropTypes.func.isRequired,
  currentHomeSearchResults: PropTypes.array.isRequired,
  setHomeVideo: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  currentHomeSearchResults: HomeSearchResultsSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchHomeSearchVideos,
    setHomeVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedHeader);
