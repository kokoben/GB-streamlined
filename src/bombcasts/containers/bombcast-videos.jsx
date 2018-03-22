import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Videos from '../../components/videos';
import { setBombcastVideo, setBombcastVideos } from '../actions';

export class BombcastVideos extends Component {
  componentDidMount() {
    this.props.setBombcastVideos(1, 24);
  }

  render() {
    if (this.props.bombcastVideos === null) return null;

    return (
      <Videos
        results={this.props.bombcastVideos.results}
        num_results={this.props.bombcastVideos.number_of_total_results}
        onCardClick={this.props.setBombcastVideo}
        onClickPageNum={this.props.setBombcastVideos}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
BombcastVideos.propTypes = {
  setBombcastVideo: PropTypes.func.isRequired,
  setBombcastVideos: PropTypes.func.isRequired,
  bombcastVideos: PropTypes.object.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  bombcastVideos: state.bombcasts.bombcastVideos,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setBombcastVideo,
    setBombcastVideos,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BombcastVideos);
