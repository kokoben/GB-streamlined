import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CurrentFeatureVideo } from './current-feature-video';

it('renders correctly', () => {
  const mockSetLatestFeatureVideo = jest.fn();
  const featureVideo = {
    name: "name",
    user: "user",
    embed_player: "embed_player",
    publish_date: "pub_date",
    deck: "deck",
  }

  const wrapper = shallow(<CurrentFeatureVideo
    featureVideo={featureVideo}
    setLatestFeatureVideo={mockSetLatestFeatureVideo}
  />);

  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
