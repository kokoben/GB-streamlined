import apiKey from '../api-keys';

// return list of all videos by publish date in descending order
/* eslint-disable quotes, import/prefer-default-export */
export const requestHomeVideos = page => ([
  `https://www.giantbomb.com/api/videos/?api_key=${apiKey}`,
  `&format=jsonp&json_callback=callback&limit=24&offset=${(page - 1) * 24}`,
  `&field_list=hd_url,name,id,deck,embed_player,publish_date,image,video_type,user`,
  `&filter=video_type:3|8|23&sort=publish_date:desc`,
].join(''));
/* eslint-enable */
