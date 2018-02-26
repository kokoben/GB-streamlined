import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import uuid from 'uuid-v4';
import VideoRow from './video_row';

const Videos = (props) => {
  const rows = [];
  const videoIds = [];
  let numVideosLeft = props.num_page_results;
  let colIndex = 0;

  // build each row of the video grid
  for (let i = 0; i < props.num_rows; i += 1) {
    // determine number of videos for current row
    if (numVideosLeft > 4) {
      const rowVideos = props.results.slice(colIndex, colIndex + 4);
      rows.push(rowVideos);
      numVideosLeft -= 4;
      colIndex += 4;
    } else {
      // the last row
      const rowVideos = props.results.slice(colIndex, colIndex + numVideosLeft);
      rows.push(rowVideos);
    }
  }

  // assign a unique id to each video
  for (let i = 0; i < rows.length; i += 1) {
    const videoId = uuid();
    videoIds.push(videoId);
  }

  console.log('rows array', rows);
  console.log(props.num_results);
  return (
    <div style={{ marginTop: '50px' }}>
      {rows.map((row, i) => (
        <VideoRow
          videos={row}
          key={videoIds[i]}
          onCardClick={props.onCardClick}
        />))}
      <Pagination
        defaultCurrent={1}
        defaultPageSize={24}
        total={props.num_results}
        onChange={props.onClickPageNum}
      />
    </div>
  );
};

/* eslint-disable react/forbid-prop-types */
Videos.propTypes = {
  results: PropTypes.array.isRequired,
  num_results: PropTypes.number.isRequired,
  num_page_results: PropTypes.number.isRequired,
  num_rows: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onClickPageNum: PropTypes.func.isRequired,
};
/* eslint-enable */

export default Videos;
