import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HomeFeedHeader } from './home-feedheader';

describe('home-feedheader tests', () => {
  it('renders correctly', () => {
    const mockFetchHomeSearchVideos = jest.fn();
    const mockSetHomeVideo = jest.fn();
    const mockSetVideo = jest.fn();

    const wrapper = shallow(<HomeFeedHeader
      currentHomeSearchResults={[]}
      currentResults={[]}
      fetchHomeSearchVideos={mockFetchHomeSearchVideos}
      setHomeVideo={mockSetHomeVideo}
      setVideo={mockSetVideo}
    />);

    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
