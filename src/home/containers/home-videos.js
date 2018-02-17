import React, { Component } from 'react';
import Videos from '../../components/videos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setHomeVideo, setHomeVideos } from '../actions';

class HomeVideos extends Component {
  componentDidMount() {
    this.props.setHomeVideos(1, 24);
  }

  render () {
    if (this.props.homeVideos === null) return null;
    const num_rows = Math.ceil(this.props.homeVideos.number_of_page_results / 4);

    return (
      <Videos 
        results={this.props.homeVideos.results}
        num_results={this.props.homeVideos.number_of_total_results}
        num_page_results={this.props.homeVideos.number_of_page_results}
        num_rows={num_rows}
        onCardClick={this.props.setHomeVideo}
        onClickPageNum={this.props.setHomeVideos}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    homeVideos: state.homeVideos
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setHomeVideo,
    setHomeVideos
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeVideos);
