import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Videos from '../../components/videos';
import { setHomeVideo, setHomeVideos } from '../actions';

export class HomeVideos extends Component {
  constructor(props) {
    super(props);

    this.onClickActions = this.onClickActions.bind(this);
  }

  componentDidMount() {
    this.props.setHomeVideos(1, 24);
  }

  onClickActions(page, pageSize) {
    this.props.setHomeVideos(page, pageSize);
    this.props.onClickPageScroll();
  }

  render() {
    if (this.props.homeVideos === null) return null;

    return (
      <Videos
        results={this.props.homeVideos.results}
        num_results={this.props.homeVideos.number_of_total_results}
        onCardClick={this.props.setHomeVideo}
        onClickPageNum={this.onClickActions}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
HomeVideos.propTypes = {
  setHomeVideo: PropTypes.func.isRequired,
  setHomeVideos: PropTypes.func.isRequired,
  homeVideos: PropTypes.object,
  onClickPageScroll: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  homeVideos: state.home.homeVideos,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setHomeVideo,
    setHomeVideos,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeVideos);
