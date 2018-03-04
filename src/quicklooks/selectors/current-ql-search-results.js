import { createSelector } from 'reselect';

const resultsSelector = state => state.quicklooks.quicklookSearchResults;
const currentPageSelector = state => state.shared.currentSearchPage;

const getResults = (results, page) => {
  // create list of eight results per page according to page num
  const startIndex = (page - 1) * 8;
  const currentList = results.slice(startIndex, startIndex + 8);
  return currentList;
};

export default createSelector(resultsSelector, currentPageSelector, getResults);
