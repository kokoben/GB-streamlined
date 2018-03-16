import React from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';

export const XXL = props => (
  <Responsive minWidth={1600}>
    {props.children}
  </Responsive>
);

export const XL = props => (
  <Responsive minWidth={1200} maxWidth={1599}>
    {props.children}
  </Responsive>
);

export const LG = props => (
  <Responsive minWidth={992} maxWidth={1199}>
    {props.children}
  </Responsive>
);
export const MD = props => (
  <Responsive minWidth={768} maxWidth={991}>
    {props.children}
  </Responsive>
);

export const SM = props => (
  <Responsive minWidth={576} maxWidth={767}>
    {props.children}
  </Responsive>
);

export const XS = props => (
  <Responsive maxWidth={575}>
    {props.children}
  </Responsive>
);

XXL.propTypes = {
  children: PropTypes.func.isRequired,
};

XL.propTypes = {
  children: PropTypes.func.isRequired,
};

LG.propTypes = {
  children: PropTypes.func.isRequired,
};

MD.propTypes = {
  children: PropTypes.func.isRequired,
};

SM.propTypes = {
  children: PropTypes.func.isRequired,
};

XS.propTypes = {
  children: PropTypes.func.isRequired,
};
