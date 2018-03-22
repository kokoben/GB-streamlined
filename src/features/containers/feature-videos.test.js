import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FeatureVideos } from './feature-videos';

it('renders correctly', () => {
  const mockSetFeatureVideo = jest.fn();
  const mockSetFeatureVideos = jest.fn();
  const featureVideos = {
    results: [],
    number_of_total_results: 24,
  }

  const wrapper= shallow(<FeatureVideos
    featureVideos={featureVideos}
    setFeatureVideo={mockSetFeatureVideo}
    setFeatureVideos={mockSetFeatureVideos}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

