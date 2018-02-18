import { api_key } from '../api-keys';

// return list of all feature videos by publish date in descending order
export const requestFeatureVideos = page => (
  "https://www.giantbomb.com/api/videos/" +
  "?api_key=" + api_key +
  "&format=jsonp&json_callback=callback&limit=24&offset=" +
  (page-1) * 24 +
  "&field_list=hd_url,name,id,deck,embed_player,publish_date,image,video_type," +
  "user&filter=video_type:8&sort=publish_date:desc"
)
