import { createSelector } from 'reselect';
import Moment from 'moment';

const resultsSelector = state => state.bombcasts.bombcastSearchResults;
const currentPageSelector = state => state.shared.currentSearchPage;

const getResults = (results, page) => {
  // create list of eight results per page according to page num
  const startIndex = (page - 1) * 8;
  const currentList = results.slice(startIndex, startIndex + 8);
  // format the publish date in each result for display purposes
  for (let i = 0; i < currentList.length; i += 1) {
    currentList[i].publish_date =
      Moment(currentList[i].publish_date).format('MMM D, YYYY');
  }

  return currentList;
};


export default createSelector(resultsSelector, currentPageSelector, getResults);
