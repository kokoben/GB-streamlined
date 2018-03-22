import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
