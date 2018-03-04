import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchQuicklookSearchVideos } from '../actions/index';
import QlSearchResultsSelector from '../selectors/current-ql-search-results';

class QuicklookFeedHeader extends Component {
  render() {
    return (
      <FeedHeader
        category="Quicklook"
        placeholder="Search for Quick Look videos..."
        fetchVideos={this.props.fetchQuicklookSearchVideos}
        currentResults={this.props.currentQlSearchResults}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
QuicklookFeedHeader.propTypes = {
  fetchQuicklookSearchVideos: PropTypes.func.isRequired,
  currentQlSearchResults: PropTypes.array.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  currentQlSearchResults: QlSearchResultsSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchQuicklookSearchVideos,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(QuicklookFeedHeader);
