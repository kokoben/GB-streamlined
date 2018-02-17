// get latest feature video
export const requestFeatureVideo = 
  "https://www.giantbomb.com/api/videos/" +
  "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
  "&format=jsonp&json_callback=callback&limit=1&field_list=name," +
  "deck,embed_player,image,publish_date,user&filter=video_type:8" +
  "&sort=publish_date:desc";

export const requestFeatureVideos = page => {
  return "https://www.giantbomb.com/api/videos/" +
  "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
  "&format=jsonp&json_callback=callback&limit=24&offset=" +
  (page-1) * 24 +
  "&field_list=hd_url,name,deck,publish_date,image,video_type," +
  "user&filter=video_type:8&sort=publish_date:desc";
}
