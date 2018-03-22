import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Content from './content';

it('renders correctly', () => {
  const wrapper = shallow(<Content />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
