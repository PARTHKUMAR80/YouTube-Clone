import React from "react";
import thumbs_up from './Images/thumbs_up.jpg'
import share from './Images/share.png'
import subscribe from './Images/subscribe.png'
import thumbs_down from './Images/thumbs_down.png'
import Loading from "./Loading";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <Loading/>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div>
        <iframe
          src={videoSrc}
          title="video Player"
          className="w-100"
          style={{ height: "380px" }}
        ></iframe>
      </div>
      <div id="like-subscribe">
        <img src={thumbs_up} alt="" />
        <img src={thumbs_down} alt="" />
        <img src={share} alt="" />
        <img src={subscribe} alt="" />
      </div>
      <div className="title">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetails;