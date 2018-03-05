import apiKey from './api-keys';

/* eslint-disable quotes, import/prefer-default-export */

// get a specific video by id
export const requestVideo = id => ([
  `https://www.giantbomb.com/api/video/`,
  `${id}/?api_key=${apiKey}`,
  `&format=jsonp&json_callback=callback&field_list=name,`,
  `id,deck,embed_player,publish_date,image,video_type,hd_url,user`,
].join(''));

// this call is for the search bar. returns a page of search results.
// need to ultimately return entire list, filter by video type, and
// then sort by publish date in descending order because the api does
// not offer a way to sort directly in the query.
export const requestSearchVideos = (keywords, page) => ([
  `https://www.giantbomb.com/api/search/?api_key=${apiKey}`,
  `&format=jsonp&json_callback=callback&query=${keywords}&resources=`,
  `video&limit=100&field_list=id,deck,name,publish_date,image,user,video_type`,
  `&page=${page}`,
].join(''));

/* eslint-enable */
