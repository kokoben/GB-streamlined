import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CurrentFeatureVideo from '../containers/current-feature-video';
import FeatureVideos from '../containers/feature-videos';
import FeatureFeedHeader from '../components/feature-feedheader';
import { setSearchPage } from '../../actions/index';

class Features extends Component {
  componentDidMount() {
    this.props.setSearchPage(null);
  }

  render() {
    return (
      <div>
        <CurrentFeatureVideo />
        <FeatureFeedHeader />
        <FeatureVideos />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchPage,
  }, dispatch)
);

Features.propTypes = {
  setSearchPage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Features);

