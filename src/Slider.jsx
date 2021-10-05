import React from 'react'
import subscriptions from "./Images/subscriptions.png";
import watch_later from "./Images/watch_later.jpg";
import your_videos from "./Images/your_videos.jpg";
import down_arrow from "./Images/down_arrow.jpg";
import explore from "./Images/explore.jpg";
import history from "./Images/history.jpg";
import home from "./Images/home.jpg";
import library from "./Images/library.png";
import like from "./Images/like.jpg";

export default function Slider({open}) {
    return (
        <section className={open ? '' : 'hidden'}>
          <div className="row-1"><img src={home} alt="" /><span>Home</span></div>
          <div className="row-2"><img src={explore} alt="" /><span>Explore</span></div>
          <div className="row-3"><img src={subscriptions} alt="" /><span>Subscriptions</span></div>
          <div className="row-4"><img src={library} alt="" /><span>Library</span></div>
          <div className="row-5"><img src={history} alt="" /><span>History</span></div>
          <div className="row-6"><img src={your_videos} alt="" /><span>Your videos</span></div>
          <div className="row-7"><img src={watch_later} alt="" /><span>Watch Later</span></div>
          <div className="row-7"><img src={like} alt="" /><span>Like</span></div>
          <div className="row-7"><img src={down_arrow} alt="" /><span>Show More</span></div>
          <div className="row-7"><img src={down_arrow} alt="" /><span>More</span></div>
        </section>
    )
}
