import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import QuicklookVideosConnected from '../containers/quicklook-videos';
import CurrentQuicklookVideoConnected from '../containers/current-quicklook-video';
import QuicklookFeedHeaderConnected from '../components/quicklook-feedheader';
import { setSearchPage, setSearchMarker } from '../../actions/index';

export class Quicklooks extends Component {
  componentDidMount() {
    this.props.setSearchPage(null);
    this.props.setSearchMarker(null);
  }

  render() {
    return (
      <div>
        <CurrentQuicklookVideoConnected />
        <QuicklookFeedHeaderConnected />
        <QuicklookVideosConnected />
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

Quicklooks.propTypes = {
  setSearchPage: PropTypes.func.isRequired,
  setSearchMarker: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Quicklooks);
