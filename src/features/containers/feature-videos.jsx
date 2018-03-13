import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Videos from '../../components/videos';
import { setFeatureVideo, setFeatureVideos } from '../actions';

class FeatureVideos extends Component {
  componentDidMount() {
    this.props.setFeatureVideos(1, 24);
  }

  render() {
    if (this.props.featureVideos === null) return null;

    return (
      <Videos
        results={this.props.featureVideos.results}
        num_results={this.props.featureVideos.number_of_total_results}
        onCardClick={this.props.setFeatureVideo}
        onClickPageNum={this.props.setFeatureVideos}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
FeatureVideos.propTypes = {
  setFeatureVideo: PropTypes.func.isRequired,
  setFeatureVideos: PropTypes.func.isRequired,
  featureVideos: PropTypes.object.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  featureVideos: state.features.featureVideos,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setFeatureVideo,
    setFeatureVideos,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FeatureVideos);
