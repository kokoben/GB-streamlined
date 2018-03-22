import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CurrentFeatureVideoConnected from '../containers/current-feature-video';
import FeatureVideosConnected from '../containers/feature-videos';
import FeatureFeedHeaderConnected from '../components/feature-feedheader';
import { setSearchPage, setSearchMarker } from '../../actions/index';

export class Features extends Component {
  componentDidMount() {
    this.props.setSearchPage(null);
    this.props.setSearchMarker(null);
  }

  render() {
    return (
      <div>
        <CurrentFeatureVideoConnected />
        <FeatureFeedHeaderConnected />
        <FeatureVideosConnected />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchPage,
    setSearchMarker,
  }, dispatch)
);

Features.propTypes = {
  setSearchPage: PropTypes.func.isRequired,
  setSearchMarker: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Features);

