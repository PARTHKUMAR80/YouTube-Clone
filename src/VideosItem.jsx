import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <>
      <div className="first-div" onClick={() => { onSelectVideo ( video ) }} >
        <div className="second-div">
          <div className="third-div-1">
            <img
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
            />
          </div>
          <div className="third-div-2">
            <p>{video.snippet.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;