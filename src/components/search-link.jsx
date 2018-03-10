import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SearchLink = props => (
  props.navDirection === 'previous' ? (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        props.navLink(props.currentSearchPage - 1);
        e.stopPropagation();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          props.navLink(props.currentSearchPage - 1);
          e.stopPropagation();
        }
      }}
    >
      <Icon type="up-square-o" />
      See previous results
    </div>
  ) : (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        props.navLink(props.currentSearchPage + 1);
        e.stopPropagation();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          props.navLink(props.currentSearchPage + 1);
          e.stopPropagation();
        }
      }}
    >
      See more results
      <Icon type="down-square-o" />
    </div>
  )
);

SearchLink.propTypes = {
  currentSearchPage: PropTypes.number.isRequired,
  navDirection: PropTypes.string.isRequired,
  navLink: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentSearchPage: state.shared.currentSearchPage,
});

export default connect(mapStateToProps, null)(SearchLink);
