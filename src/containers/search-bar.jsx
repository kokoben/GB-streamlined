import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Select, Spin } from 'antd';
import _ from 'lodash';
import uuid from 'uuid-v4';

const Option = Select.Option;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      fetching: false,
    };
    this.handleSearch = _.debounce(this.handleSearch, 500);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    console.log('currentResults: ', this.props.currentResults);
  }

  handleSearch(value) {
    console.log('fetching videos with keywords', value);
    this.setState({ data: [], fetching: true }); this.props.fetchVideos(value); }
  handleChange(value) {
    this.setState({
      query: value,
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
        {this.props.currentResults.map(result => (
          <Option style={{ lineHeight: '22px' }} key={result.name}>
            <img
              src={result.image.icon_url}
              alt=''
              style={{
                display: 'inline-block',
                lineHeight: 'normal',
                verticalAlign: 'middle',
                height: '32px',
                width: '32px',
              }}
            />
            <div style={{
              display: 'inline-block',
              lineheight: 'normal',
              verticalAlign: 'middle',
              marginLeft: '5px',
            }}
            >
              <div>{result.name}</div>
              <div>Video published {result.publish_date}</div>
            </div>
          </Option>
        ))}
      </Select>
    );
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fetchVideos: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentResults: PropTypes.array.isRequired,
};

export default SearchBar;

