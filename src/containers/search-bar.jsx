import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import _ from 'lodash';
import SearchLink from '../components/search-link';
import { setSearchSpinner, setSearchPage } from '../actions/index';

const Option = Select.Option;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearch = _.debounce(this.handleSearch, 450);
  }

  handleChange(value) {
    this.setState({
      value,
    });
    this.props.setSearchSpinner(true);
  }

  handleSearch(value) {
    this.setState({ query: value });
    this.props.fetchVideos(value);
  }

  render() {
    const results = this.props.currentResults.map(result => (
      <Option
        filler={this.state.query}
        key={result.name}
        style={{ lineHeight: '22px' }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => this.props.setVideo(result.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              this.props.setVideo(result.id);
            }
          }}
        >

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
        </div>
      </Option>
    ));

    const prev = (
      <Option filler={this.state.query} key="previous">
        <SearchLink
          currentSearchPage={this.props.currentSearchPage}
          navDirection="previous"
          navLink={this.props.setSearchPage}
        />
      </Option>
    );

    const next = (
      <Option filler={this.state.query} key="next">
        <SearchLink
          currentSearchPage={this.props.currentSearchPage}
          navDirection="next"
          navLink={this.props.setSearchPage}
        />
      </Option>
    );

    return (
      <Select
        mode="combobox"
        value={this.state.value}
        style={{ width: '100%' }}
        placeholder={this.props.placeholder}
        defaultActiveFirstOption={false}
        optionLabelProp="filler"
        filterOption={false}
        notFoundContent={
          this.state.value !== '' ? 'we got nothin\' for you bruh' : null
        }
        onChange={this.handleChange}
        onSearch={this.handleSearch}
      >
        {this.props.currentSearchPage === 1 || this.props.currentSearchPage === null ?
          null : prev
        }
        {results}
        {this.props.currentResults.length < 8 ?
          null : next
        }
      </Select>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fetchVideos: PropTypes.func.isRequired,
  setVideo: PropTypes.func.isRequired,
  currentResults: PropTypes.array.isRequired,
  setSearchSpinner: PropTypes.func.isRequired,
  currentSearchPage: PropTypes.number.isRequired,
  setSearchPage: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  currentSearchPage: state.shared.currentSearchPage,
  searchSpinnerOn: state.shared.searchSpinnerOn,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchSpinner,
    setSearchPage,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
