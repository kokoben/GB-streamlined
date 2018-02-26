import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Select } from 'antd';

class SearchBar extends Component {
  render() {
    return (
      <Select>
      </Select>
    )
  }
}

Search.propTypes = {
}

const mapStateToProps = state => ({
  
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
