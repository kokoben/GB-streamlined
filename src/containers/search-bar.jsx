import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Select, Spin } from 'antd';
import debounce from 'lodash.debounce';
import SearchLinkConnected from '../containers/search-link';
import { setSearchPage, setSearchSpinner } from '../actions/index';

// eslint-disable-next-line prefer-destructuring
const Option = Select.Option;

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearch = debounce(this.handleSearch, 450);
  }

  handleChange(value) {
    this.setState({
      value,
    });
    this.props.setSearchPage(null);
  }

  handleSearch(value) {
    this.props.setSearchSpinner(true);
    this.props.fetchVideos(value);
  }

  render() {
    let results = this.props.currentResults.map(result => (
      <Option
        key={result.name}
        style={{
          borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'gray', lineHeight: '22px',
        }}
        tabIndex="0"
      >
        <div
          role="button"
          tabIndex="0"
          onClick={(e) => {
            this.props.setVideo(result.id);
            e.stopPropagation();
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              this.props.setVideo(result.id);
              e.stopPropagation();
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
            <div><b>{result.name}</b></div>
            <div style={{ color: 'gray' }}>Video published {result.publish_date}</div>
          </div>
        </div>
      </Option>
    ));

    const prev = (
      <Option style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'gray' }} key="previous">
        <SearchLinkConnected
          currentSearchPage={this.props.currentSearchPage}
          navDirection="previous"
        />
      </Option>
    );

    const next = (
      <Option key="next">
        <SearchLinkConnected
          currentSearchPage={this.props.currentSearchPage}
          navDirection="next"
        />
      </Option>
    );

    // if not on the first page, have a "previous" link up top
    if (this.props.currentSearchPage !== null && this.props.searchResultMarker > 8) {
      results = [prev, ...results];
    }

    // display back the keyword being searched
    if (this.props.currentSearchPage !== null && this.state.value !== '') {
      const searchDisplay = (
        <Option
          style={{
            color: '#C1C3D7', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'gray',
          }}
          key="search-term"
        >
          <div onClick={e => e.stopPropagation()}>
            Search for &quot;{this.state.value}&quot;
          </div>
        </Option>
      );
      results = [searchDisplay, ...results];
    }

    // if there are more results, have a "next" link at the bottom
    if (this.props.currentSearchPage !== null &&
        this.props.searchResultMarker < this.props.results.length
    ) {
      results = [...results, next];
    }

    // if no results found
    if (this.props.currentSearchPage !== null && results.length === 1 && this.state.value !== '') {
      const noResultsDisplay = (
        <Option key="no-match">
          <div onClick={e => e.stopPropagation()}>
            We got nothin&apos; for you bruh
          </div>
        </Option>
      );
      results = [...results, noResultsDisplay];
    }

    return (
      <Select
        className="search-bar"
        mode="combobox"
        value={this.state.value}
        style={{ width: '100%', padding: '0 10px' }}
        placeholder={this.props.placeholder}
        defaultActiveFirstOption={false}
        filterOption={false}
        notFoundContent={
          this.props.searchSpinnerOn ?
            <div style={{ paddingTop: '10px', paddingbottom: '10px', textAlign: 'center' }}>
              <Spin />
            </div> : null
        }
        onChange={this.handleChange}
        onSearch={this.handleSearch}
      >
        {results}
      </Select>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
SearchBar.propTypes = {
  results: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  fetchVideos: PropTypes.func.isRequired,
  setVideo: PropTypes.func.isRequired,
  currentResults: PropTypes.array.isRequired,
  setSearchPage: PropTypes.func.isRequired,
  setSearchSpinner: PropTypes.func.isRequired,
  currentSearchPage: PropTypes.number,
  searchSpinnerOn: PropTypes.bool.isRequired,
  searchResultMarker: PropTypes.number.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  currentSearchPage: state.shared.currentSearchPage,
  searchResultMarker: state.shared.searchResultMarker,
  searchSpinnerOn: state.shared.searchSpinnerOn,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchPage,
    setSearchSpinner,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
