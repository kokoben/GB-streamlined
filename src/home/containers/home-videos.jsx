import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Videos from '../../components/videos';
import { setHomeVideo, setHomeVideos } from '../actions';

export class HomeVideos extends Component {
  componentDidMount() {
    this.props.setHomeVideos(1, 24);
  }

  render() {
    if (this.props.homeVideos === null) return null;

    return (
      <Videos
        results={this.props.homeVideos.results}
        num_results={this.props.homeVideos.number_of_total_results}
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
  homeVideos: PropTypes.object,
};
/* eslint-enable */

const mapStateToProps = state => ({
  homeVideos: state.home.homeVideos,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setHomeVideo,
    setHomeVideos,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeVideos);
