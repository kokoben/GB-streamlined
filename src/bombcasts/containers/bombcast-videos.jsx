import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Videos from '../../components/videos';
import { setBombcastVideo, setBombcastVideos } from '../actions';

class BombcastVideos extends Component {
  componentDidMount() {
    this.props.setBombcastVideos(1, 24);
  }

  render () {
    if (this.props.bombcastVideos === null) return null;
    const num_rows = Math.ceil(this.props.bombcastVideos.number_of_page_results / 4);

    return (
      <Videos
        results={this.props.bombcastVideos.results}
        num_results={this.props.bombcastVideos.number_of_total_results}
        num_page_results={this.props.bombcastVideos.number_of_page_results}
        num_rows={num_rows}
        onCardClick={this.props.setBombcastVideo}
        onClickPageNum={this.props.setBombcastVideos}
      />
    )
  }
}

BombcastVideos.propTypes = {
  bombcastVideo: PropTypes.object.isRequired,
  bombcastVideos: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  bombcastVideos: state.bombcastVideos,
  cardsLoading: state.cardsLoading,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setBombcastVideo,
    setBombcastVideos
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BombcastVideos);
