import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Videos from '../../components/videos';
import { setHomeVideo, setHomeVideos } from '../actions';

class HomeVideos extends Component {
  componentDidMount() {
    this.props.setHomeVideos(1, 24);
  }

  render() {
    if (this.props.homeVideos === null) return null;
    const numRows = Math.ceil(this.props.homeVideos.number_of_page_results / 4);

    return (
      <Videos
        results={this.props.homeVideos.results}
        num_results={this.props.homeVideos.number_of_total_results}
        num_page_results={this.props.homeVideos.number_of_page_results}
        num_rows={numRows}
        onCardClick={this.props.setHomeVideo}
        onClickPageNum={this.props.setHomeVideos}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
HomeVideos.propTypes = {
  setHomeVideo: PropTypes.func.isRequired,
  setHomeVideos: PropTypes.func.isRequired,
  homeVideos: PropTypes.object.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  homeVideos: state.homeVideos,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setHomeVideo,
    setHomeVideos,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeVideos);
