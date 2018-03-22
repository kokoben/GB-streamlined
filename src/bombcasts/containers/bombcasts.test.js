import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Bombcasts } from './bombcasts';

it('renders correctly', () => {
  const mockSetSearchPage = jest.fn();
  const mockSetSearchMarker = jest.fn();

  const wrapper = shallow(<Bombcasts
    setSearchPage={mockSetSearchPage}
    setSearchMarker={mockSetSearchMarker}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
