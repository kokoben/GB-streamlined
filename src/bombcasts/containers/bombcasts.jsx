import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CurrentBombcastVideoConnected from '../containers/current-bombcast-video';
import BombcastVideosConnected from '../containers/bombcast-videos';
import BombcastFeedHeaderConnected from '../components/bombcast-feedheader';
import { setSearchPage, setSearchMarker } from '../../actions/index';

export class Bombcasts extends Component {
  componentDidMount() {
    this.props.setSearchPage(null);
    this.props.setSearchMarker(null);
  }

  render() {
    return (
      <div>
        <CurrentBombcastVideoConnected />
        <BombcastFeedHeaderConnected />
        <BombcastVideosConnected />
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

Bombcasts.propTypes = {
  setSearchPage: PropTypes.func.isRequired,
  setSearchMarker: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Bombcasts);
