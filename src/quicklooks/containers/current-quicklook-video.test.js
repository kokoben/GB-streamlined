import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CurrentQuicklookVideo } from './current-quicklook-video';

it('renders correctly', () => {
  const mockSetLatestQuicklookVideo = jest.fn();
  const quicklookVideo = {
    name: "name",
    user: "user",
    embed_player: "embed_player",
    publish_date: "pub_date",
    deck: "deck",
  }

  const wrapper= shallow(<CurrentQuicklookVideo
    quicklookVideo={quicklookVideo}
    setLatestQuicklookVideo={mockSetLatestQuicklookVideo}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
