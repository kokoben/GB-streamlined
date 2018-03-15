import React from 'react';
import Responsive from 'react-responsive';

export const XXL = props => <Responsive {...props} minWidth={1200} />;
export const XL = props => <Responsive {...props} minWidth={992} maxWidth={1199} />;
export const LG = props => <Responsive {...props} minWidth={769} maxWidth={991} />;
export const MD = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
export const SM = props => <Responsive {...props} minWidth={576} maxWidth={767} />;
export const XS = props => <Responsive {...props} maxWidth={575} />;
