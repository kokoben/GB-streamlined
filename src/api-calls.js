import { api_key } from './api-keys';

// get a specific video by id
export const requestVideo = (id) => (
  "https://www.giantbomb.com/api/video/" +
  id + "/?api_key=" + api_key +
  "&format=jsonp&json_callback=callback&field_list=name," +
  "id,deck,embed_player,publish_date,image,video_type,hd_url,user"
);
