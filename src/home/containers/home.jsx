import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CurrentHomeVideoConnected from '../containers/current-home-video';
import HomeVideosConnected from '../containers/home-videos';
import HomeFeedHeaderConnected from '../components/home-feedheader';
import { setSearchPage, setSearchMarker } from '../../actions/index';

export class Home extends Component {
  componentDidMount() {
    this.props.setSearchPage(null);
    this.props.setSearchMarker(null);
  }

  render() {
    return (
      <div>
        <CurrentHomeVideoConnected />
        <HomeFeedHeaderConnected />
        <HomeVideosConnected />
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

Home.propTypes = {
  setSearchPage: PropTypes.func.isRequired,
  setSearchMarker: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
