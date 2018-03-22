import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { QuicklookFeedHeader } from './quicklook-feedheader';

describe('quicklook-feedheader tests', () => {
  it('renders correctly', () => {
    const mockFetchQuicklookSearchVideos = jest.fn();
    const mockSetQuicklookVideo = jest.fn();
    const mockSetVideo = jest.fn();

    const wrapper = shallow(<QuicklookFeedHeader
      quicklookSearchResults={[]}
      currentQlSearchResults={[]}
      fetchQuicklookSearchVideos={mockFetchQuicklookSearchVideos}
      setQuicklookVideo={mockSetQuicklookVideo}
      setVideo={mockSetVideo}
    />);

    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});

