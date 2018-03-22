import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Select } from 'antd';
import debounce from 'lodash.debounce';
import { SearchBar } from './search-bar';

jest.mock('lodash.debounce', () => jest.fn(fn => fn));

describe("search bar tests", () => {
  let wrapper;
  const mockFetchVideos = jest.fn();
  const mockSetVideo = jest.fn();
  const mockSetSearchSpinner = jest.fn();
  const mockSetSearchPage = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchBar
      fetchVideos={mockFetchVideos}
      setVideo={mockSetVideo}
      setSearchSpinner={mockSetSearchSpinner}
      setSearchPage={mockSetSearchPage}
      placeholder="placeholder"
      results={[]}
      currentResults={[]}
      searchSpinnerOn={false}
      searchResultMarker={8}
      currentSearchPage={1}
    />);
  });

  it("renders correctly", () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it("correctly calls fetchVideos with user's input", () => {
    const searchVal = 'mario';
    // simulate user typing 'mario' into search bar
    wrapper.find(Select).simulate('change', { value: searchVal });
    wrapper.prop('onSearch')({ value: searchVal });
    // test to see arguments used after search has been submitted
    expect(mockSetSearchSpinner).toHaveBeenCalledWith(true);
    expect(mockFetchVideos).toHaveBeenCalledWith({ value: searchVal });
  });
});
