import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import QuicklookVideos from '../containers/quicklook-videos';
import CurrentQuicklookVideo from '../containers/current-quicklook-video';
import QuicklookFeedHeader from '../components/quicklook-feedheader';
import { setSearchPage } from '../../actions/index';

export class Quicklooks extends Component {
  componentDidMount() {
    this.props.setSearchPage(null);
  }

  render() {
    return (
      <div>
        <CurrentQuicklookVideo />
        <QuicklookFeedHeader />
        <QuicklookVideos />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchPage,
  }, dispatch)
);

Quicklooks.propTypes = {
  setSearchPage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Quicklooks);
