import React from "react";
import VideosItem from "./VideosItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const renderList = videos.map((video) => {
    return <VideosItem video={video} onSelectVideo={onSelectVideo} />;
  });

  return (
    <>
      <div>{renderList}</div>
    </>
  );
};

export default VideoList;