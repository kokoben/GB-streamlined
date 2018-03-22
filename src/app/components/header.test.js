import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './header';

it('renders correctly', () => {
  const wrapper = shallow(<Header />);
  const  tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
