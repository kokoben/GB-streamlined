import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CurrentBombcastVideo } from './current-bombcast-video';

it('renders correctly', () => {
  const mockSetLatestBombcastVideo = jest.fn();
  const bombcastVideo = {
    name: "name",
    user: "user",
    embed_player: "embed_player",
    publish_date: "pub_date",
    deck: "deck",
  }

  const wrapper = shallow(<CurrentBombcastVideo
    bombcastVideo={bombcastVideo}
    setLatestBombcastVideo={mockSetLatestBombcastVideo}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
