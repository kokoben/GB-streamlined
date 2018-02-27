import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Select } from 'antd';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  render() {
    return (
      <Select
        mode="combobox"
        value={this.state.query}
        style={{ width: '100%' }}
        placeholder={this.props.placeholder}
      >
      </Select>
    );
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;

