import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Videos from '../../components/videos';
import { setFeatureVideo, setFeatureVideos } from '../actions';

export class FeatureVideos extends Component {
  constructor(props) {
    super(props);

    this.onClickActions = this.onClickActions.bind(this);
  }

  componentDidMount() {
    this.props.setFeatureVideos(1, 24);
  }

  onClickActions(page, pageSize) {
    this.props.setFeatureVideos(page, pageSize);
    this.props.onClickPageScroll();
  }

  render() {
    if (this.props.featureVideos === null) return null;

    return (
      <Videos
        results={this.props.featureVideos.results}
        num_results={this.props.featureVideos.number_of_total_results}
        onCardClick={this.props.setFeatureVideo}
        onClickPageNum={this.onClickActions}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
FeatureVideos.propTypes = {
  setFeatureVideo: PropTypes.func.isRequired,
  setFeatureVideos: PropTypes.func.isRequired,
  onClickPageScroll: PropTypes.func.isRequired,
  featureVideos: PropTypes.object,
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
