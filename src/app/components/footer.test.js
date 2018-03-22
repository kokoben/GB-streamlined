import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './footer';

it('renders correctly', () => {
  const wrapper = shallow(<Footer />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
