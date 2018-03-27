import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BombcastVideos } from './bombcast-videos';

it('renders correctly', () => {
  const mockSetBombcastVideo = jest.fn();
  const mockSetBombcastVideos = jest.fn();
  const mockOnPageClickScroll = jest.fn();
  const bombcastVideos = {
    results: [],
    number_of_total_results: 24,
  }

  const wrapper= shallow(<BombcastVideos
    bombcastVideos={bombcastVideos}
    setBombcastVideo={mockSetBombcastVideo}
    setBombcastVideos={mockSetBombcastVideos}
    onClickPageScroll={mockOnPageClickScroll}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

