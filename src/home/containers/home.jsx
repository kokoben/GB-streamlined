import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CurrentHomeVideoConnected from '../containers/current-home-video';
import HomeVideosConnected from '../containers/home-videos';
import HomeFeedHeaderConnected from '../components/home-feedheader';
import { setSearchPage, setSearchMarker } from '../../actions/index';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.onClickPageScroll = this.onClickPageScroll.bind(this);
  }

  componentDidMount() {
    this.props.setSearchPage(null);
    this.props.setSearchMarker(null);
  }

  onClickPageScroll() {
    this.feedHeaderNode.scrollIntoView();
  }

  render() {
    return (
      <div>
        <CurrentHomeVideoConnected />
        <div ref={node => this.feedHeaderNode = node}>
          <HomeFeedHeaderConnected />
        </div>
        <HomeVideosConnected onClickPageScroll={this.onClickPageScroll} />
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
