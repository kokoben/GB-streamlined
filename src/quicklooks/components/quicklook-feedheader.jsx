import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchQuicklookSearchVideos, setQuicklookVideo } from '../actions/index';
import QlSearchResultsSelector from '../selectors/current-ql-search-results';

export const QuicklookFeedHeader = props => (
  <FeedHeader
    category="Quicklook"
    placeholder="Search for Quick Look videos..."
    fetchVideos={props.fetchQuicklookSearchVideos}
    results={props.quicklookSearchResults}
    currentResults={props.currentQlSearchResults}
    setVideo={props.setQuicklookVideo}
  />
);

/* eslint-disable react/forbid-prop-types */
QuicklookFeedHeader.propTypes = {
  fetchQuicklookSearchVideos: PropTypes.func.isRequired,
  quicklookSearchResults: PropTypes.array.isRequired,
  currentQlSearchResults: PropTypes.array.isRequired,
  setQuicklookVideo: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  quicklookSearchResults: state.quicklooks.quicklookSearchResults,
  currentQlSearchResults: QlSearchResultsSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchQuicklookSearchVideos,
    setQuicklookVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(QuicklookFeedHeader);
