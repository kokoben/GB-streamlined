// get latest quicklook video
export const callQuicklookVideo = 
  "https://www.giantbomb.com/api/videos/" +
  "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
  "&format=jsonp&json_callback=callback" +
  "&limit=1&field_list=name,deck,embed_player,publish_date,image," +
  "user&filter=video_type:3&sort=publish_date:desc";
