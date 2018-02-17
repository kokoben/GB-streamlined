// get latest video
export const requestHomeVideo =
  "https://www.giantbomb.com/api/videos/" +
  "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
  "&format=jsonp&json_callback=callback" +
  "&limit=1&field_list=name,deck,embed_player," +
  "publish_date,image,user&filter=video_type:3|8|23" +
  "&sort=publish_date:desc";

export const requestHomeVideos = page => {
  return "https://www.giantbomb.com/api/videos/" +
  "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
  "&format=jsonp&json_callback=callback&limit=24&offset=" +
  (page-1) * 24 +
  "&field_list=hd_url,name,deck,publish_date,image,video_type," +
  "user&filter=video_type:3|8|23&sort=publish_date:desc";
}
