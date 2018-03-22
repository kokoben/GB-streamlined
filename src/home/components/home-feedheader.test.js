import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HomeFeedHeader } from './home-feedheader';

describe('home-feedheader tests', () => {
  it('renders correctly', () => {
    const mockFetchHomeSearchVideos = jest.fn();
    const mockSetHomeVideo = jest.fn();

    const wrapper = shallow(<HomeFeedHeader
      homeSearchResults={[]}
      currentHomeSearchResults={[]}
      fetchHomeSearchVideos={mockFetchHomeSearchVideos}
      setHomeVideo={mockSetHomeVideo}
    />);

    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
