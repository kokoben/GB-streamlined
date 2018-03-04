import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Videos from '../../components/videos';
import { setQuicklookVideo, setQuicklookVideos } from '../actions';

class QuicklookVideos extends Component {
  componentDidMount() {
    this.props.setQuicklookVideos(1, 24);
  }

  render() {
    if (this.props.quicklookVideos === null) return null;
    const numRows = Math.ceil(this.props.quicklookVideos.number_of_page_results / 4);

    return (
      <Videos
        results={this.props.quicklookVideos.results}
        num_results={this.props.quicklookVideos.number_of_total_results}
        num_page_results={this.props.quicklookVideos.number_of_page_results}
        num_rows={numRows}
        category="Quick Look"
        onCardClick={this.props.setQuicklookVideo}
        onClickPageNum={this.props.setQuicklookVideos}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
QuicklookVideos.propTypes = {
  setQuicklookVideo: PropTypes.func.isRequired,
  setQuicklookVideos: PropTypes.func.isRequired,
  quicklookVideos: PropTypes.object.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  quicklookVideos: state.quicklooks.quicklookVideos,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setQuicklookVideo,
    setQuicklookVideos,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(QuicklookVideos);
