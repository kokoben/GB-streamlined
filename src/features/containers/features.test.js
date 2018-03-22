import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Features } from './features';

it('renders correctly', () => {
  const mockSetSearchPage = jest.fn();
  const wrapper = shallow(<Features
    setSearchPage={mockSetSearchPage}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
