import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CurrentBombcastVideo from '../containers/current-bombcast-video';
import BombcastVideos from '../containers/bombcast-videos';
import BombcastFeedHeader from '../components/bombcast-feedheader';
import { setSearchPage } from '../../actions/index';

export class Bombcasts extends Component {
  componentDidMount() {
    this.props.setSearchPage(null);
  }

  render() {
    return (
      <div>
        <CurrentBombcastVideo />
        <BombcastFeedHeader />
        <BombcastVideos />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchPage,
  }, dispatch)
);

Bombcasts.propTypes = {
  setSearchPage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Bombcasts);
