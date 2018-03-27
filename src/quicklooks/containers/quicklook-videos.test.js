import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { QuicklookVideos } from './quicklook-videos';

it('renders correctly', () => {
  const mockSetQuicklookVideo = jest.fn();
  const mockSetQuicklookVideos = jest.fn();
  const mockOnClickPageScroll = jest.fn();
  const quicklookVideos = {
    results: [],
    number_of_total_results: 24,
  }

  const wrapper=shallow(<QuicklookVideos
    quicklookVideos={quicklookVideos}
    setQuicklookVideo={mockSetQuicklookVideo}
    setQuicklookVideos={mockSetQuicklookVideos}
    onClickPageScroll={mockOnClickPageScroll}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});


