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
    const num_rows = Math.ceil(this.props.featureVideos.number_of_page_results / 4);

    return (
      <Videos
        results={this.props.featureVideos.results}
        num_results={this.props.featureVideos.number_of_total_results}        
        num_page_results={this.props.featureVideos.number_of_page_results}
        num_rows={num_rows}
        onCardClick={this.props.setFeatureVideo}
        onClickPageNum={this.props.setFeatureVideos}
      />
    )
  }
}

FeatureVideos.propTypes = {
  setFeatureVideos: PropTypes.func.isRequired,
  featureVideos: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  featureVideos: state.featureVideos
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setFeatureVideo,
    setFeatureVideos
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FeatureVideos);
