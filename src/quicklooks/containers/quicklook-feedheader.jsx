import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchQuicklookSearchVideos } from '../actions/index';

class QuicklookFeedHeader extends Component {
  render() {
    return (
      <FeedHeader
        category="Quicklook"
        placeholder="Search for Quick Look Videos..."
        fetchVideos={this.props.fetchQuicklookSearchVideos}
      />
    );
  }
}

QuicklookFeedHeader.propTypes = {
  fetchQuicklookSearchVideos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchQuicklookSearchVideos,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(QuicklookFeedHeader);
