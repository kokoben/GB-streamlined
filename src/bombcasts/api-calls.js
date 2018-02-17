import { apiKey } from '../api-keys';

// get latest video
export const requestBombcastVideo = (id) => (
  "https://www.giantbomb.com/api/video/" +
  id + "/?api_key=" + apiKey +
  "&format=jsonp&json_callback=callback&field_list=name," +
  "id,deck,embed_player,publish_date,image,video_type,hd_url,user"
)

export const requestBombcastVideos = page => (
  "https://www.giantbomb.com/api/videos/" +
  "?api_key=" + apiKey +
  "&format=jsonp&json_callback=callback&limit=24&offset=" +
  (page-1) * 24 +
  "&field_list=hd_url,name,id,deck,embed_player,publish_date,image,video_type," +
  "user&filter=video_type:23&sort=publish_date:desc"
)
