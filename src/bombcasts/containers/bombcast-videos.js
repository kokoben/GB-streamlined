import React, { Component } from 'react';
import Videos from '../../components/videos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBombcastVideos } from '../actions';

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
        onClickPageNum={this.props.setBombcastVideos}
        page_num={this.props.bombcastVideos.offset+1}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    bombcastVideos: state.bombcastVideos
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setBombcastVideos
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BombcastVideos);
