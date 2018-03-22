import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FeatureFeedHeader } from './feature-feedheader';

describe('feature-feedheader tests', () => {
  it('renders correctly', () => {
    const mockFetchFeatureSearchVideos = jest.fn();
    const mockSetFeatureVideo = jest.fn();
    const mockSetVideo = jest.fn();

    const wrapper = shallow(<FeatureFeedHeader
      currentFeatureSearchResults={[]}
      currentResults={[]}
      fetchFeatureSearchVideos={mockFetchFeatureSearchVideos}
      setFeatureVideo={mockSetFeatureVideo}
      setVideo={mockSetVideo}
    />);

    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});

