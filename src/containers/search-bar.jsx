import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Select, Spin } from 'antd';
import _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      fetching: false,
    };
    this.handleSearch = _.debounce(this.handleSearch, 800);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(value) {
    console.log('fetching videos with keywords', value);
    this.setState({ data: [], fetching: true });
    this.props.fetchVideos(value);
  }

  handleChange(value) {
    this.setState({
      query: value,
      data: [],
    });
  }

  render() {
    return (
      <Select
        mode="combobox"
        value={this.state.query}
        style={{ width: '100%' }}
        placeholder={this.props.placeholder}
        notFoundContent={this.fetching ? <Spin size="small" /> : null}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
      >
      </Select>
    );
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fetchVideos: PropTypes.func.isRequired,
};

export default SearchBar;

