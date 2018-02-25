import apiKey from './api-keys';

// get a specific video by id
/* eslint-disable quotes, import/prefer-default-export */
export const requestVideo = id => ([
  `https://www.giantbomb.com/api/video/`,
  `${id}/?api_key=${apiKey}`,
  `&format=jsonp&json_callback=callback&field_list=name,`,
  `id,deck,embed_player,publish_date,image,video_type,hd_url,user`,
].join(''));
/* eslint-enable */
