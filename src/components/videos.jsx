import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import VideoRow from './video_row';

const Videos = props => {
  let rows = [];
  let num_videos_left = props.num_page_results;
  let col_index = 0;

  // build each row of the video grid
  for (let i = 0; i < props.num_rows; i++) {
    // determine number of videos for current row
    if (num_videos_left > 4) {
      const row_videos = props.results.slice(col_index, col_index + 4);
      rows.push(row_videos);
      num_videos_left -= 4;
      col_index += 4;
    } else {
      // the last row
      const row_videos = props.results.slice(col_index, col_index + num_videos_left);
      rows.push(row_videos);
    }
  }

  console.log('rows array', rows);
  console.log(props.num_results);
  return (
    <div>
      {rows.map((row, i) => <VideoRow 
        videos={row} 
        key={i} 
        onCardClick={props.onCardClick} 
      />)}
      <Pagination 
        defaultCurrent={1} 
        defaultPageSize={24}
        total={props.num_results} 
        onChange={props.onClickPageNum}
      />
    </div>
  )
}

Videos.propTypes = {
  results: PropTypes.array.isRequired,
  num_results: PropTypes.number.isRequired,
  num_page_results: PropTypes.number.isRequired,
  num_rows: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onClickPageNum: PropTypes.func.isRequired,
}

export default Videos;
