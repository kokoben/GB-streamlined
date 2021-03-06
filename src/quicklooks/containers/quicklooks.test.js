import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Quicklooks } from './quicklooks';

it('renders correctly', () => {
  const mockSetSearchPage = jest.fn();
  const mockSetSearchMarker = jest.fn();

  const wrapper = shallow(<Quicklooks
    setSearchPage={mockSetSearchPage}
    setSearchMarker={mockSetSearchMarker}
  />);

  const tree=toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
