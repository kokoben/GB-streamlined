import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CurrentHomeVideo from '../containers/current-home-video';
import HomeVideos from '../containers/home-videos';
import HomeFeedHeader from '../components/home-feedheader';
import { setSearchPage } from '../../actions/index';

class Home extends Component {
  componentDidMount() {
    this.props.setSearchPage(null);
  }

  render() {
    return (
      <div>
        <CurrentHomeVideo />
        <HomeFeedHeader />
        <HomeVideos />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchPage,
  }, dispatch)
);

Home.propTypes = {
  setSearchPage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
