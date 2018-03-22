import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { setSearchPage, setSearchMarker } from '../actions/index';

export const SearchLink = props => (
  props.navDirection === 'previous' ? (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        props.setSearchPage(props.currentSearchPage - 1);
        props.setSearchMarker(props.searchResultMarker - 8);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.stopPropagation();
          props.setSearchPage(props.currentSearchPage - 1);
          props.setSearchMarker(props.searchResultMarker - 8);
        }
      }}
    >
      <Icon type="up-square-o" />
      <span style={{ paddingLeft: '5px' }}>
        See previous results
      </span>
    </div>
  ) : (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        props.setSearchPage(props.currentSearchPage + 1);
        props.setSearchMarker(props.searchResultMarker + 8);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.stopPropagation();
          props.setSearchPage(props.currentSearchPage + 1);
          props.setSearchMarker(props.searchResultMarker + 8);
        }
      }}
    >
      <span style={{ paddingRight: '5px' }}>
        See more results
      </span>
      <Icon type="down-square-o" />
    </div>
  )
);

SearchLink.propTypes = {
  currentSearchPage: PropTypes.number.isRequired,
  searchResultMarker: PropTypes.number.isRequired,
  navDirection: PropTypes.string.isRequired,
  setSearchPage: PropTypes.func.isRequired,
  setSearchMarker: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentSearchPage: state.shared.currentSearchPage,
  searchResultMarker: state.shared.searchResultMarker,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSearchPage,
    setSearchMarker,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchLink);
