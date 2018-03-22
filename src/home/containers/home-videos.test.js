import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HomeVideos } from './home-videos';

it('renders correctly', () => {
  const mockSetHomeVideo = jest.fn();
  const mockSetHomeVideos = jest.fn();
  const homeVideos = {
    results: [],
    number_of_total_results: 24,
  }

  const wrapper = shallow(<HomeVideos
    homeVideos={homeVideos}
    setHomeVideo={mockSetHomeVideo}
    setHomeVideos={mockSetHomeVideos}
  />)

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
