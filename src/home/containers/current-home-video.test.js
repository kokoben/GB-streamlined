import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CurrentHomeVideo } from './current-home-video';

it('renders correctly', () => {
  const mockSetLatestHomeVideo = jest.fn();
  const homeVideo = {
    name: "name",
    user: "user",
    embed_player: "embed_player",
    publish_date: "pub_date",
    deck: "deck",
  }

  const wrapper = shallow(<CurrentHomeVideo
    homeVideo={homeVideo}
    setLatestHomeVideo={mockSetLatestHomeVideo}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
