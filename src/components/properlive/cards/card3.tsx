"use client";

import React from "react";
import ReactPlayer from "react-player";

const dummyVideo =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";

const Card3 = () => {
  return (
    <div className="overflow-hidden rounded-3xl bg-primary-900">
      <ReactPlayer
        className="rounded-3xl"
        controls={false}
        muted={true}
        playing={true}
        url={dummyVideo}
        loop
      />
    </div>
  );
};

export default Card3;
