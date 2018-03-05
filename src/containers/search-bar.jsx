import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Select, Spin } from 'antd';
import _ from 'lodash';
import { setSearchSpinner } from '../actions/index';

const Option = Select.Option;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearch = _.debounce(this.handleSearch, 500);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(value) {
    this.setState({
      query: value,
    });
    this.props.setSearchSpinner(true);
  }

  handleSearch(value) {
    this.setState({ query: value });
    this.props.fetchVideos(value);
  }

  handleSelect(value) {
    this.props.setVideo(value);
  }

  render() {
    const results = this.props.currentResults.map(result => (
      <Option key={result.id} style={{ lineHeight: '22px' }}>
        <img
          src={result.image.icon_url}
          alt=""
          style={{
            display: 'inline-block',
            lineHeight: 'normal',
            verticalAlign: 'middle',
            height: '32px',
            width: '32px',
          }}
        />
        <div
          style={{
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
    ));

    return (
      <Select
        mode="combobox"
        value={this.state.query}
        style={{ width: '100%' }}
        placeholder={this.props.placeholder}
        defaultActiveFirstOption={false}
        filterOption={false}
        notFoundContent={this.props.searchSpinnerOn ? <Spin size="small" /> : null}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
        onSelect={this.handleSelect}
      >
        {results}
      </Select>
    );
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fetchVideos: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentResults: PropTypes.array.isRequired,
  setSearchSpinner: PropTypes.func.isRequired,
  searchSpinnerOn: PropTypes.bool.isRequired,
  setVideo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchSpinnerOn: state.searchSpinnerOn,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchSpinner,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
