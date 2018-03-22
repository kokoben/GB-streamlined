import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BombcastFeedHeader } from './bombcast-feedheader';

describe('bombcast-feedheader tests', () => {
  it('renders correctly', () => {
    const mockFetchBombcastSearchVideos = jest.fn();
    const mockSetBombcastVideo = jest.fn();
    const mockSetVideo = jest.fn();

    const wrapper = shallow(<BombcastFeedHeader
      currentBombcastSearchResults={[]}
      currentResults={[]}
      fetchBombcastSearchVideos={mockFetchBombcastSearchVideos}
      setBombcastVideo={mockSetBombcastVideo}
      setVideo={mockSetVideo}
    />);

    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});

