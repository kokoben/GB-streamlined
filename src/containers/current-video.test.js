import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CurrentVideo from './current-video';

// Retrun a fixed timestasmp when moment().format() is aclled
jest.mock('moment', () => () => ({format: () => '2018-01-30'}));


it('renders without crashing', () => {
  const mockHomeVideo = {
    name: "name",
    user: "user",
    pub_date: "pub_date",
    deck: "deck",
    embed_player: "embed_player",
  }
  const mockSetLatestHomeVideo = jest.fn();

  const wrapper = shallow(<CurrentVideo
    homeVideo={mockHomeVideo}
    name={mockHomeVideo.name}
    user={mockHomeVideo.user}
    pub_date={mockHomeVideo.pub_date}
    deck={mockHomeVideo.deck}
    embed_player={mockHomeVideo.embed_player}
    setLatestHomeVideo={mockSetLatestHomeVideo}
  />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
