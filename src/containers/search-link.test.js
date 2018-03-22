import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchLink } from './search-link';

it('renders correctly', () => {
  const mockSetSearchPage = jest.fn();
  const mockSetSearchMarker = jest.fn();

  const wrapper = shallow(<SearchLink
      setSearchPage={mockSetSearchPage}
      setSearchMarker={mockSetSearchMarker}
      currentSearchPage={1}
      searchResultMarker={1}
      navDirection="prev"
  />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
