import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import QuicklookVideosConnected from '../containers/quicklook-videos';
import CurrentQuicklookVideoConnected from '../containers/current-quicklook-video';
import QuicklookFeedHeaderConnected from '../components/quicklook-feedheader';
import { setSearchPage, setSearchMarker } from '../../actions/index';

export class Quicklooks extends Component {
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
        <CurrentQuicklookVideoConnected />
        <div ref={node => this.feedHeaderNode = node}>
          <QuicklookFeedHeaderConnected />
        </div>
        <QuicklookVideosConnected onClickPageScroll={this.onClickPageScroll} />
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
