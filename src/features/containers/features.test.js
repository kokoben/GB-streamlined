import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Features } from './features';

it('renders correctly', () => {
  const mockSetSearchPage = jest.fn();
  const mockSetSearchMarker = jest.fn();

  const wrapper = shallow(<Features
    setSearchPage={mockSetSearchPage}
    setSearchMarker={mockSetSearchMarker}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
