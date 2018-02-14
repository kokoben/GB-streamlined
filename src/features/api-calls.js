// get latest feature video
export const callFeatureVideo = 
  "https://www.giantbomb.com/api/videos/" +
  "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
  "&format=jsonp&json_callback=callback&limit=1&field_list=name," +
  "deck,embed_player,image,publish_date,user&filter=video_type:8" +
  "&sort=publish_date:desc";
