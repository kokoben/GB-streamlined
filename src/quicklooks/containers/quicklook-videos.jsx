import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Videos from '../../components/videos';
import { setQuicklookVideo, setQuicklookVideos } from '../actions';

export class QuicklookVideos extends Component {
  constructor(props) {
    super(props);

    this.onClickActions = this.onClickActions.bind(this);
  }

  componentDidMount() {
    this.props.setQuicklookVideos(1, 24);
  }

  onClickActions(page, pageSize) {
    this.props.setQuicklookVideos(page, pageSize);
    this.props.onClickPageScroll();
  }

  render() {
    if (this.props.quicklookVideos === null) return null;

    return (
      <Videos
        results={this.props.quicklookVideos.results}
        num_results={this.props.quicklookVideos.number_of_total_results}
        onCardClick={this.props.setQuicklookVideo}
        onClickPageNum={this.onClickActions}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
QuicklookVideos.propTypes = {
  setQuicklookVideo: PropTypes.func.isRequired,
  setQuicklookVideos: PropTypes.func.isRequired,
  onClickPageScroll: PropTypes.func.isRequired,
  quicklookVideos: PropTypes.object,
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
